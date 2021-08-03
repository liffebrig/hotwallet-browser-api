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

    public send(result: unknown): void {
        clearTimeout(this.timer)
        this.resolve(result)
    }

    public sendError(error: string): void {
        clearTimeout(this.timer)
        this.reject({message: error})
    }
}