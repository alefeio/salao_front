import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import { switchMap } from 'rxjs/operators';

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html', 
})

export class TaskDetailComponent implements OnInit {
    public task: Task

    public constructor(
        private route: ActivatedRoute,
        private taskService: TaskService,
        private location: Location
    ){ }

    public ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.taskService.getTask(+params['id'])))
            .subscribe(task => {
                this.task = task
                console.log(this.task)
            })
    }

    public goBack() {
        this.location.back()
    }

}