/**
 * A communication channel built on top of window.postMessage(...).
 */
export class Channel {
    private readonly name
    private readonly targetChannel
    private readonly targetChannelOrigin
    private readonly targetChannelWindow

    /**
     * Function to be implemented to receive data from the target channel.
     * It is called automatically when data is received from the target channel.
     */
    public onData?: (data: Record<string, any>) => void

    /**
     * Constructs an instance of a communication channel built on top of window.postMessage(...).
     * @param name the name of the channel
     * @param targetChannel the name of channel to exchange messages with
     * @param targetChannelOrigin the target origin of the channel to exchange messages with
     * @param targetChannelWindow the window object of the target channel. It defaults to `window`.
     */
    constructor(name: string,
                targetChannel: string,
                targetChannelOrigin: string,
                targetChannelWindow: Window = window) {
        this.name = name
        this.targetChannel = targetChannel
        this.targetChannelOrigin = targetChannelOrigin
        this.targetChannelWindow = targetChannelWindow

        window.addEventListener('message', (event: any) => this.onMessage(event), false);
    }

    /**
     * Handles the data received from the target channel.
     * @param event the event message of window
     */
    private onMessage(event: EventMessage): void {
        const message = event.data

        if (
            event.origin !== this.targetChannelOrigin ||
            event.source !== this.targetChannelWindow ||
            typeof message !== 'object' ||
            message.target !== this.name ||
            !message.data
        ) {
            return
        }

        if (this.onData) {
            this.onData(message.data as Record<string, any>)
        }
    }

    /**
     * Sends a message to the target channel.
     * @param data the data to send
     */
    public sendMessage(data?: Record<string, any>): void {
        this.targetChannelWindow.postMessage(
            {
                target: this.targetChannel,
                data,
            },
            this.targetChannelOrigin,
        )
    }
}

export interface EventMessage {
    data?: Record<string, any>;
    origin: string;
    source: typeof window;
}
