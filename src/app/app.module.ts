// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// Components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';
import { signUpFormComponent } from './sign-up-form/sign-up-form.component';

// Services imports 
import { TaskService } from './tasks/shared/task.service';

// modules imports
import { AppRoutingModule } from './app-routing.module'
import { Angular2TokenService } from 'angular2-token'
import { AuthService } from './shared/auth.service';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 

import * as $ from 'jquery'
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker'
import { signInFormComponent } from './sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent,
    DashboardComponent,
    TaskSearchComponent,
    signUpFormComponent,
    signInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    // InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService,
    Angular2TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
