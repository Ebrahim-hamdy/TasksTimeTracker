import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TaskResolver } from './shared/resolvers/taskResolver';
import { TaskComponent } from './route/task/task.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: TaskComponent,
        resolve: {
          tasks: TaskResolver
        }
    }
]);
