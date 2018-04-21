import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { TaskRepository } from './../../data/repositories/taskrepository/taskRepository'


@Injectable()
export class TaskResolver implements Resolve<any> {
    constructor(
        private _taskRepository: TaskRepository
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this._taskRepository.getTasks();
    }
}
