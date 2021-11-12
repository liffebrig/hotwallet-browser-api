/**
 * The handler of the event promise task.
 */
export declare class EventsHandler {
    /**
     * The queue of the event tasks.
     */
    private readonly queue;
    /**
     * The map of the events callbacks.
     */
    private readonly events;
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
     * It sets an event to the map of the events.
     * @param eventName the event name
     * @param callbackHandler the callback handler of the event
     */
    addEvent(eventName: string, callbackHandler: (params?: any) => void): void;
    /**
     * It handles the result of an event.
     * If the event is a task then the task gets consumed and removed from the queue.
     * If the event is an event callback then the callback will be invoked.
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
