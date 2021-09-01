/**
 * The handler of the event promise task.
 */
export declare class EventTaskHandler {
    /**
     * The queue of the event tasks.
     */
    private readonly queue;
    /**
     * Adds a new task to the queue of the tasks.
     * The task will be rejected after the given timeout.
     * @param eventName the event name
     * @param taskId the id of the current task
     * @param resolve the resolve function of the promise task
     * @param reject the reject function of the promise task
     * @param timeout the optional timeout of the rejection timer. It defaults to 30 seconds
     */
    addTask(eventName: string, taskId: string, resolve: any, reject: any, timeout: number): void;
    /**
     * It handles the task of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param data the data
     */
    handleResult(data: Record<string, any>): void;
    /**
     * It handles the task timeout rejection of an event from the queue.
     * The task gets consumed and removed from the queue.
     * @param eventNameResult
     * @param taskId
     * @private
     */
    private handleTimeoutRejection;
}
