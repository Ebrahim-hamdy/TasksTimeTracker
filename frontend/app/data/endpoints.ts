export class EndPoints {

	devUrl = 'http://localhost:3600/'
	baseUrl = 'https://api-timer.herokuapp.com/';
	urlTask = this.baseUrl + 'tasks/';

	endpoints() {
		return {
			Task: {
				GetTasks: this.urlTask + 'getTasks',
				CreateTask: this.urlTask + 'createTask',
				Updatetask: this.urlTask + 'updateTask',
				Deletetask: this.urlTask + 'deletetask',
			}
		}
	}
}
