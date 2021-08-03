import { Connection } from "./models/Connection";
import { Transaction } from "./models/transaction/Transaction";
import { TransactionResult } from "./models/transaction/TransactionResult";
export declare class HotwalletApi {
    /**
     * The timeout of the promise rejection.
     */
    private readonly PROMISE_TIMEOUT;
    /**
     * The queue of the event tasks.
     */
    private readonly queue;
    constructor();
    /**
     * It handles the task of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param evt the event
     */
    private eventQueueHandler;
    /**
     * It handles the task timeout rejection of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param eventNameResult
     * @param taskId
     * @private
     */
    private eventQueueTimeoutRejectionHandler;
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
    private newPromise;
    private wait;
    /**
     * Checks if Hotwallet browser extension is installed.
     * @return Promise<boolean> the promise result
     */
    isExtensionInstalled(): Promise<boolean>;
    /**
     * It connects to Hotwallet.
     * @return Promise<Connection> the promise result with the wallet details
     */
    connect(): Promise<Connection>;
    /**
     * Sends a transaction to Hotwallet.
     * @param transaction the transaction
     * @return Promise<TransactionResult> the promise result of the transaction result
     */
    sendTransaction(transaction: Transaction): Promise<TransactionResult>;
}
