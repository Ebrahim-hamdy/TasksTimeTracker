import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { EndPoints } from './../../endpoints';
import { Context } from './../../contexts';

@Component({
    providers: [EndPoints, Context]
})
@Injectable()
export class TaskRepository {

    constructor(
        private _context: Context,
        private _endpoints: EndPoints
    ) { }

    getTasks(): Observable<Response> {
        return this._context.get(this._endpoints.endpoints().Task.GetTasks)
    }

    addTask(task) {
        return this._context.post(this._endpoints.endpoints().Task.CreateTask, task);
    }

    updateTask(task, action) {
        if (action === 'new') return this._context.post(this._endpoints.endpoints().Task.CreateTask, task);
        return this._context.put(this._endpoints.endpoints().Task.Updatetask+ '/' + task._id, task);
    }

    deleteTask(taskId) {
        return this._context.delete(this._endpoints.endpoints().Task.Deletetask + '/' + taskId);
    }
}
