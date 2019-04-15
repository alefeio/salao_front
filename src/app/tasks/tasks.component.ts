import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
    public tasks: Array<Task>
    public selectedTask: Task

    public constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.taskService.getTasks()
            .subscribe(
                tasks => {
                    this.tasks = tasks
                    // console.log(tasks)
                },
                error => alert('Ocorreu um erro no servidor. Tente mais tarde!')
            )
    }

    public onSelect(task: Task): void {
        this.selectedTask = task
    }
}