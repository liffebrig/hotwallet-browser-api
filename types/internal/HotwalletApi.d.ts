import { Transaction } from "./models/transaction/Transaction";
import { TransactionResult } from "./models/transaction/TransactionResult";
import { Channel } from "./Channel";
import { Account } from "./models/Account";
import { Network } from "./models/Network";
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
    /**
     * Event that notifies when the user connected to Hotwallet.
     * @param callback the callback that will get invoked when the event happens.
     *                  The callback will get invoked with the account connected
     */
    onConnected(callback: (account: Account) => void): void;
    /**
     * Event that notifies when the network has changed.
     * @param callback the callback that will get invoked when the event happens.
     *                  The callback will get invoked with the new network
     */
    onNetworkChanged(callback: (network: Network) => void): void;
    /**
     * Event that notifies when the user connected to a different account.
     * @param callback the callback that will get invoked when the event happens.
     *                  The callback will get invoked with the new account connected
     */
    onAccountChanged(callback: (account: Account) => void): void;
}
/**
 * Checks if the Hotwallet extension is available.
 * @return Promise<boolean> a promise that resolves to true if the extension is available, false otherwise
 */
export declare const isExtensionAvailable: () => Promise<boolean>;
