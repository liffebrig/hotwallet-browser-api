import { Transaction } from "./models/transaction/Transaction";
import { TransactionResult } from "./models/transaction/TransactionResult";
import { Channel } from "./Channel";
import { Account } from "./models/Account";
export declare class HotwalletApi {
    /**
     * The default timeout of the promise rejection.
     */
    private readonly DEFAULT_PROMISE_TIMEOUT;
    /**
     * The timeout of the promise rejection of a transaction.
     */
    private readonly TRANSACTION_PROMISE_TIMEOUT;
    /**
     * The handler of the events.
     */
    private readonly eventsHandler;
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
     * @param timeout the optional timeout of the rejection timer. It defaults to 30 seconds
     * @param eventParams the optional event parameters
     * @return Promise<T> a promise
     */
    private sendEvent;
    /**
     * It connects to Hotwallet.
     * @return Promise<Connection> a promise that resolves to a {@link Account} object
     */
    connect(): Promise<Account>;
    /**
     * Sends a transaction to Hotwallet.
     * @param transaction the transaction
     * @return Promise<TransactionResult> a promise that resolves to the result of the transaction
     */
    sendTransaction(transaction: Transaction): Promise<TransactionResult>;
    /**
     * Event that notifies when the user disconnected from Hotwallet.
     * @param callback the callback that will get invoked when the event happens.
     */
    onDisconnected(callback: () => void): void;
}
/**
 * Checks if the Hotwallet extension is available.
 * @return Promise<boolean> a promise that resolves to true if the extension is available, false otherwise
 */
export declare const isExtensionAvailable: () => Promise<boolean>;
