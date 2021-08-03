import {EventTask} from "./EventTask";
import {Extension} from "./models/Extension";
import {Connection} from "./models/Connection";
import {Transaction} from "./models/transaction/Transaction";
import {TransactionResult} from "./models/transaction/TransactionResult";
import { v4 as uuidv4 } from 'uuid';

export class HotwalletApi {
    /**
     * The timeout of the promise rejection.
     */
    private readonly PROMISE_TIMEOUT = 30000

    /**
     * The queue of the event tasks.
     */
    private readonly queue: Map<string, EventTask> = new Map<string, EventTask>()

    constructor() {
        if (typeof window === "undefined" || typeof window.document === "undefined") {
           throw new Error("Not running in browser")
        }

        // hotwallet event result
        document.addEventListener('hotwalletResult', (evt: any) => {
            if (evt && evt instanceof CustomEvent && evt.detail) {
                this.eventQueueHandler(evt)
            }
        })
    }

    /**
     * It handles the task of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param evt the event
     */
    private eventQueueHandler(evt: CustomEvent): void {
        const eventName = evt.detail.eventName
        const taskId = evt.detail.taskId
        const result = evt.detail.result
        const error = result.error

        const task = this.queue.get(eventName + ':' + taskId)
        if (task) {
            if (error) {
                task.sendError(error)
            } else {
                task.send(result)
            }
            this.queue.delete(eventName + ':' + taskId)
        }
    }

    /**
     * It handles the task timeout rejection of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param eventNameResult
     * @param taskId
     * @private
     */
    private eventQueueTimeoutRejectionHandler(eventNameResult: string, taskId: string): void {
        const task = this.queue.get(eventNameResult + ':' + taskId)
        if (task) {
            task.sendError('rejected for timeout')
            this.queue.delete(eventNameResult + ':' + taskId)
        }
    }

    /**
     * Builds a new {@link Promise} with a timeout rejection timer.
     * The promise will be rejected after the timeout. This method dispatches custom events
     * to Hotwallet and accumulates event tasks in the queue.
     * @param eventName the event name
     * @param eventNameResult the event name result
     * @param timeout the optional timeout of the rejection timer. It defaults to 30seconds
     * @param eventParams the optional event parameters
     * @return Promise<T> a custom promise
     */
    private newPromise<T>(eventName: string, eventNameResult: string, timeout: number = this.PROMISE_TIMEOUT, eventParams?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const taskId = uuidv4()
            const timeoutRejectionTimer = setTimeout(() => this.eventQueueTimeoutRejectionHandler(eventNameResult, taskId), timeout)
            this.queue.set(eventNameResult + ':' + taskId, new EventTask(taskId, eventNameResult, resolve, reject, timeoutRejectionTimer))

            // send event
            document.dispatchEvent(new CustomEvent('hotwallet', {
                detail: {
                    eventName: eventName,
                    taskId: taskId,
                    ...eventParams
                }
            }))
        })
    }

    private async wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    /**
     * Checks if Hotwallet browser extension is installed.
     * @return Promise<boolean> the promise result
     */
    public async isExtensionInstalled(): Promise<boolean> {
        while (document.readyState !== 'complete') {
            await this.wait(1000)
        }

        try {
            const result = await this.newPromise<Extension>('onHotwalletExtension', 'onHotwalletExtensionResult', 10000)
            return Promise.resolve(result && result.running ? result.running : false)
        } catch (e) {
            return Promise.resolve(false)
        }
    }

    /**
     * It connects to Hotwallet.
     * @return Promise<Connection> the promise result with the wallet details
     */
    public async connect(): Promise<Connection> {
        return this.newPromise('onHotwalletConnect', 'onHotwalletConnected')
    }

    /**
     * Sends a transaction to Hotwallet.
     * @param transaction the transaction
     * @return Promise<TransactionResult> the promise result of the transaction result
     */
    public async sendTransaction(transaction: Transaction): Promise<TransactionResult> {
        return this.newPromise('onHotwalletTransaction', 'onHotwalletTransactionResult', this.PROMISE_TIMEOUT, {transaction: transaction})
    }
}