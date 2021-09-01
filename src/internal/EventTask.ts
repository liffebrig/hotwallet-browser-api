/**
 * An event task which resolves or rejects a {@link Promise}.
 */
export class EventTask {
    public readonly id: string
    public readonly name: string
    private readonly resolve: (params?: unknown) => void
    private readonly reject: (params?: unknown) => void
    private readonly timer: any

    constructor(id: string, name: string, resolve: any, reject: any, timer: any) {
        this.id = id
        this.name = name
        this.resolve = resolve
        this.reject = reject
        this.timer = timer
    }

    /**
     * Resolves the promise with the given result
     * @param result the result of the promise
     */
    public send(result: unknown): void {
        clearTimeout(this.timer)
        this.resolve(result)
    }

    /**
     * Rejects the promise withe the given error.
     * @param error the error
     */
    public sendError(error: string): void {
        clearTimeout(this.timer)
        this.reject({message: error})
    }
}