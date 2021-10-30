import {Transaction} from "./models/transaction/Transaction";
import {TransactionResult} from "./models/transaction/TransactionResult";
import { v4 as uuidv4 } from 'uuid';
import {Channel} from "./Channel";
import {EventsHandler} from "./EventsHandler";
import {Account} from "./models/Account";

export class HotwalletApi {
    /**
     * The default timeout of the promise rejection.
     */
    private readonly DEFAULT_PROMISE_TIMEOUT = 30000

    /**
     * The timeout of the promise rejection of a transaction.
     */
    private readonly TRANSACTION_PROMISE_TIMEOUT = 120000

    /**
     * The handler of the events.
     */
    private readonly eventsHandler = new EventsHandler()

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
        this.channel.onData = (data: Record<string, any>) => this.eventsHandler.handleResult(data)
    }

    /**
     * Dispatches custom events to Hotwallet browser extension.
     * @param eventName the event name
     * @param timeout the optional timeout of the rejection timer. It defaults to 30 seconds
     * @param eventParams the optional event parameters
     * @return Promise<T> a promise
     */
    private sendEvent<T>(eventName: string, timeout = this.DEFAULT_PROMISE_TIMEOUT, eventParams?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const taskId = uuidv4()
            this.eventsHandler.addTask(eventName, taskId, resolve, reject, timeout)

            this.channel.sendMessage({
                eventName: eventName,
                taskId: taskId,
                ...eventParams
            })
        })
    }

    /**
     * It connects to Hotwallet.
     * @return Promise<Connection> a promise that resolves to a {@link Account} object
     */
    public connect(): Promise<Account> {
        return this.sendEvent('HotwalletConnect')
    }

    /**
     * Sends a transaction to Hotwallet.
     * @param transaction the transaction
     * @return Promise<TransactionResult> a promise that resolves to the result of the transaction
     */
    public sendTransaction(transaction: Transaction): Promise<TransactionResult> {
        return this.sendEvent('HotwalletTransaction', this.TRANSACTION_PROMISE_TIMEOUT, {transaction: transaction})
    }

    /**
     * Event that notifies when the user disconnected from Hotwallet.
     * @param callback the callback that will get invoked when the event happens.
     */
    public onDisconnected(callback: () => void): void {
       this.eventsHandler.addEvent('onDisconnected', callback)
    }
}

const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Checks if the Hotwallet extension is available.
 * @return Promise<boolean> a promise that resolves to true if the extension is available, false otherwise
 */
export const isExtensionAvailable = async (): Promise<boolean> => {
    while (document.readyState !== 'complete') {
        await wait(1000)
    }

    let hotwalletExtension = false
    let counter = 3;
    while(counter-- !== 0) {
        if ((window as any).hotwalletApi) {
            hotwalletExtension = true
            break
        }
        await wait(1000)
    }

    return hotwalletExtension
}