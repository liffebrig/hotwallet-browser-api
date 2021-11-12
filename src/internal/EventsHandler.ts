import {EventTask} from "./EventTask";

/**
 * The handler of the event promise task.
 */
export class EventsHandler {
    /**
     * The queue of the event tasks.
     */
    private readonly queue: Map<string, EventTask> = new Map<string, EventTask>()

    /**
     * The map of the events callbacks.
     */
    private readonly events = new Map<string, (params?: unknown) => void>()

    /**
     * Adds a new task to the queue of the tasks.
     * The task will be rejected after the given timeout.
     * @param eventName the event name
     * @param taskId the id of the current task
     * @param resolve the resolve function of the promise task
     * @param reject the reject function of the promise task
     * @param timeout the optional timeout of the rejection timer. It defaults to 30 seconds
     */
    public addTask(eventName: string, taskId: string, resolve: any, reject: any, timeout: number): void {
        const eventNameResult = eventName + '#result'
        const timeoutRejectionTimer = setTimeout(() => this.handleTimeoutRejection(eventNameResult, taskId), timeout)
        this.queue.set(eventNameResult + ':' + taskId, new EventTask(taskId, eventNameResult, resolve, reject, timeoutRejectionTimer))
    }

    /**
     * It sets an event to the map of the events.
     * @param eventName the event name
     * @param callbackHandler the callback handler of the event
     */
    public addEvent(eventName: string, callbackHandler: (params?: any) => void): void {
        this.events.set(eventName, callbackHandler)
    }

    /**
     * It handles the result of an event.
     * If the event is a task then the task gets consumed and removed from the queue.
     * If the event is an event callback then the callback will be invoked.
     * @param data the data
     */
    public handleResult(data: Record<string, any>): void {
        const type = data.type

        if (type === 'event' && data.eventName) {
            if (this.events.has(data.eventName)) {
                const callback = this.events.get(data.eventName)
                if (callback) {
                    callback(data.result)
                }
            }
            return
        }

        const eventName = data.eventName + '#result'
        const taskId = data.taskId
        const result = data.result
        const error = result.error

        const task = this.queue.get(eventName + ':' + taskId)
        if (task) {
            if (error) {
                task.sendError(error)
            } else {
                task.send(result)
            }
            this.queue.delete(eventName + ':' + taskId)
        }
    }

    /**
     * It handles the task timeout rejection of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param eventNameResult
     * @param taskId
     * @private
     */
    private handleTimeoutRejection(eventNameResult: string, taskId: string): void {
        const task = this.queue.get(eventNameResult + ':' + taskId)
        if (task) {
            task.sendError('rejected for timeout')
            this.queue.delete(eventNameResult + ':' + taskId)
        }
    }
}