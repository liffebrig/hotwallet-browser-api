export declare class EventTask {
    readonly id: string;
    readonly name: string;
    private readonly resolve;
    private readonly reject;
    private readonly timer;
    constructor(id: string, name: string, resolve: any, reject: any, timer: any);
    send(result: unknown): void;
    sendError(error: string): void;
}
