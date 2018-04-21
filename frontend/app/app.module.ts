import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routing';
import { TaskFilterPipe } from './shared/pipes/taskFilter.pipe';

import { EndPoints } from './data/endpoints';
import { Context } from './data/contexts';
import { TaskRepository } from './data/repositories/taskrepository/taskRepository';
import { TaskResolver } from './shared/resolvers/taskResolver';

import { TaskComponent } from './route/task/task.component';
import { TaskAddEditComponent } from './route/task/tasksAddEdit/taskAddEdit.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
		APP_ROUTING,
		ModalModule.forRoot()
	],
	declarations: [
		AppComponent,
		TaskComponent,
		TaskAddEditComponent,
		TaskFilterPipe
	],
	providers: [
		EndPoints,
		Context,
		TaskRepository,
		TaskResolver
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
