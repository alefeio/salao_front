import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { signUpFormComponent } from './sign-up-form/sign-up-form.component';
import { signInFormComponent } from './sign-in-form/sign-in-form.component';

const ROUTES = RouterModule.forRoot([
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'sign-up', component: signUpFormComponent },
  { path: 'sign-in', component: signInFormComponent }
])

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
