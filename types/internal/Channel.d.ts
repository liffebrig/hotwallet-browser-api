/**
 * A communication channel built on top of window.postMessage(...).
 */
export declare class Channel {
    private readonly name;
    private readonly targetChannel;
    private readonly targetChannelOrigin;
    private readonly targetChannelWindow;
    /**
     * Function to be implemented to receive data from the target channel.
     * It is called automatically when data is received from the target channel.
     */
    onData?: (data: Record<string, any>) => void;
    /**
     * Constructs an instance of a communication channel built on top of window.postMessage(...).
     * @param name the name of the channel
     * @param targetChannel the name of channel to exchange messages with
     * @param targetChannelOrigin the target origin of the channel to exchange messages with
     * @param targetChannelWindow the window object of the target channel. It defaults to `window`.
     */
    constructor(name: string, targetChannel: string, targetChannelOrigin: string, targetChannelWindow?: Window);
    /**
     * Handles the data received from the target channel.
     * @param event the event message of window
     */
    private onMessage;
    /**
     * Sends a message to the target channel.
     * @param data the data to send
     */
    sendMessage(data?: Record<string, any>): void;
}
export interface EventMessage {
    data?: Record<string, any>;
    origin: string;
    source: typeof window;
}
