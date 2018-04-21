import { Component, ViewChild, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { _ } from 'underscore';

import { TaskRepository } from './../../data/repositories/taskrepository/taskRepository';
import { TaskAddEditComponent } from "./tasksAddEdit/taskAddEdit.component";


@Component({
	selector: "tasks-list",
	templateUrl: './task.component.html',
	styleUrls: [ "./task.component.scss" ]
})
export class TaskComponent implements OnInit{

	@ViewChild('childModal') childModal: TaskAddEditComponent;

	task = {
		_id: null,
		taskName: '',
		taskDescription: '',
		minutes: 0,
		seconds: 0 
	};

	taskFilter = Object.assign({}, this.task);
	filteredTasks = [];
	page: number = 1;
	limit: number;
	sortOrder = 'desc';
	sortField = 'taskName';
	isRunning = false;
	showForm = false;
	timerTime = 0;
	minutes = 0;
	seconds = 0;
	interval;
	form;
	of;

	constructor (
		private _route: ActivatedRoute,
		private _taskRepository: TaskRepository
		){}


	ngOnInit () {
		this.filteredTasks = this._route.snapshot.data['tasks'];
		this.limit = this.filteredTasks.length > 3 ? 3 : this.filteredTasks.length;
	}

	startTask (form) {
		this.form = form;
		this.showForm = this.showForm ? false : true;

		if (!this.isRunning && form.valid) {
			this.isRunning = true;
			this.showForm = false;

			this.interval = setInterval(() => {
				this.timerTime = this.timerTime + 1;
				this.task.minutes = Math.floor(this.timerTime / 60);
				this.task.seconds = this.timerTime % 60;
			}, 1000);
		} 
	}

	stopTask () {
		this.isRunning = false;
		clearInterval(this.interval);
	}

	saveTask() { 
		this.childModal.saveTask(this.form, this.task);
		this.filteredTasks.push(this.task);
		this.stopTask();
		this.resetTimer();
	}

	deleteTask (task, index) {
		this._taskRepository.deleteTask(task._id).subscribe((result) => {
			this.filteredTasks.splice(index, 1);
		})
	}

	cancelTask () {
		this.stopTask();
		this.resetTimer();
		this.showForm = false;
	}

	sort (sortField) {
		this.filteredTasks = _.sortBy(this.filteredTasks, this.sortField);

		if (this.sortField === sortField) {
			this.sortOrder = (this.sortOrder === "asc") ? "desc" : "asc";
		} else {
			this.sortField = sortField;
			this.sortOrder = 'desc';
		}

		if (this.sortOrder === 'desc') {
			this.filteredTasks.reverse();
		}
	};

	openAddEditModal(task) {
		let copiedTask = Object.assign({}, task);
		this.childModal.openAddEditModal(copiedTask);

		this.childModal.onClose = (data) => {

			let tasksIds = this.filteredTasks.map((row) => { return row._id });
			let taskindex = tasksIds.indexOf(data._id);
			if (taskindex > -1) {
				this.filteredTasks[taskindex] = data;
			} else {
				this.filteredTasks.unshift(data);
			}
		}
	}

	resetTimer () {
		this.timerTime = 0;
		this.task = {
			_id: null,
			taskName: '',
			taskDescription: '',
			minutes: 0,
			seconds: 0 
		}
	}
}
