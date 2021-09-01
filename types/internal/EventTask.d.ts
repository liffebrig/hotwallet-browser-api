/**
 * An event task which resolves or rejects a {@link Promise}.
 */
export declare class EventTask {
    readonly id: string;
    readonly name: string;
    private readonly resolve;
    private readonly reject;
    private readonly timer;
    constructor(id: string, name: string, resolve: any, reject: any, timer: any);
    /**
     * Resolves the promise with the given result
     * @param result the result of the promise
     */
    send(result: unknown): void;
    /**
     * Rejects the promise withe the given error.
     * @param error the error
     */
    sendError(error: string): void;
}
