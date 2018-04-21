import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { TaskRepository } from './../../../data/repositories/taskrepository/taskRepository';

@Component({
	selector: 'modal-content',
	templateUrl: './tasksAddEdit.component.html',
	styleUrls: [ "../sass/modal.scss" ]
})
export class TaskAddEditComponent {

	@ViewChild('childModal') public childModal: ModalDirective;
	@ViewChild('fm') form;

	task = { 
		taskName: '',
		minutes: 0,
		seconds: 0 
	};

	titleModal: string;
	onClose: any;
	isClosed = false;
	taskStatus= '';
	modalOpened = false;

	constructor (
		private _taskRepository: TaskRepository
		){}

	openAddEditModal(task) {
		this.modalOpened = true;
		this.task = task;

		if (!task._id) {
			setTimeout(() => this.form.resetForm());
			this.titleModal = 'Add New Task';
			this.taskStatus = 'new';
		} else {
			this.titleModal = 'Edit Task';
		}

		this.childModal.show();
	}

	closeModal() {
		this.childModal.hide();
	}

	saveTask(form, task) {
		this.taskStatus = task._id ? '' : 'new';

		if (form.valid) {
			this._taskRepository.updateTask(task, this.taskStatus).subscribe(result => {},
				error => console.log("Error: ", error),
				() => {
					if(this.modalOpened){
						this.onClose(this.task);
						this.modalOpened = false;
						this.closeModal();
					}
				});
		}
	}
}
