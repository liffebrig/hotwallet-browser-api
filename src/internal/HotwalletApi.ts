import {Connection} from "./models/Connection";
import {Transaction} from "./models/transaction/Transaction";
import {TransactionResult} from "./models/transaction/TransactionResult";
import { v4 as uuidv4 } from 'uuid';
import {Channel} from "./Channel";
import {EventTaskHandler} from "./EventTaskHandler";

export class HotwalletApi {
    /**
     * The timeout of the promise rejection.
     */
    private readonly PROMISE_TIMEOUT = 30000

    /**
     * The handler of the event task.
     */
    private readonly eventTaskHandler = new EventTaskHandler()

    /**
     * The communication channel of the API.
     */
    private readonly channel

    /**
     * Constructs an instance of the API with it's communication channel.
     * @param channel the communication channel.
     */
    constructor(channel: Channel) {

        if (typeof window === "undefined" || typeof window.document === "undefined") {
            throw new Error("Not running in browser")
        }

        this.channel = channel
        this.channel.onData = (data: Record<string, any>) => this.eventTaskHandler.handleResult(data)
    }

    /**
     * Dispatches custom events to Hotwallet browser extension.
     * @param eventName the event name
     * @param timeout the optional timeout of the rejection timer. It defaults to 30 seconds
     * @param eventParams the optional event parameters
     * @return Promise<T> a promise
     */
    private sendEvent<T>(eventName: string, timeout: number = this.PROMISE_TIMEOUT, eventParams?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const taskId = uuidv4()
            this.eventTaskHandler.addTask(eventName, taskId, resolve, reject, timeout)

            this.channel.sendMessage({
                eventName: eventName,
                taskId: taskId,
                ...eventParams
            })
        })
    }

    /**
     * It connects to Hotwallet.
     * @return Promise<Connection> the promise result with the wallet details
     */
    public async connect(): Promise<Connection> {
        return this.sendEvent('HotwalletConnect')
    }

    /**
     * Sends a transaction to Hotwallet.
     * @param transaction the transaction
     * @return Promise<TransactionResult> the promise result of the transaction result
     */
    public async sendTransaction(transaction: Transaction): Promise<TransactionResult> {
        return this.sendEvent('HotwalletTransaction', this.PROMISE_TIMEOUT, {transaction: transaction})
    }
}