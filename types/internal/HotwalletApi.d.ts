import { Connection } from "./models/Connection";
import { Transaction } from "./models/transaction/Transaction";
import { TransactionResult } from "./models/transaction/TransactionResult";
import { Channel } from "./Channel";
export declare class HotwalletApi {
    /**
     * The timeout of the promise rejection.
     */
    private readonly PROMISE_TIMEOUT;
    /**
     * The handler of the event task.
     */
    private readonly eventTaskHandler;
    /**
     * The communication channel of the API.
     */
    private readonly channel;
    /**
     * Constructs an instance of the API with it's communication channel.
     * @param channel the communication channel.
     */
    constructor(channel: Channel);
    /**
     * Dispatches custom events to Hotwallet browser extension.
     * @param eventName the event name
     * @param eventNameResult the event name result
     * @param timeout the optional timeout of the rejection timer. It defaults to 30 seconds
     * @param eventParams the optional event parameters
     * @return Promise<T> a promise
     */
    private sendEvent;
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
