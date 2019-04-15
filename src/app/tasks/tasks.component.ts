import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
    public tasks: Array<Task>
    public newTask: Task

    public constructor(private taskService: TaskService) {
        this.newTask = new Task(null, '')
    }

    public ngOnInit() {
        this.taskService.getTasks()
            .subscribe(
                tasks => {
                    this.tasks = tasks
                    // console.log(tasks)
                },
                () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
            )
    }

    public createTask(){
        this.newTask.titulo = this.newTask.titulo.trim()

        if(!this.newTask.titulo){
            alert('A tarefa deve ter um título.')
        } else {
            this.taskService.createTask(this.newTask)
                .subscribe(
                    (task) => {
                        this.tasks.push(task)
                        this.newTask = new Task(null, '')
                    },
                    () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
                )
        }
    }

    public deleteTask(task: Task){
        if(confirm(`Deseja excluir a tarefa ${task.titulo}?`)){
            this.taskService.deleteTask(task.id)
                .subscribe(
                    () => this.tasks = this.tasks.filter(t => t !== task),
                    () => alert('Ocorreu um erro no servidor, Tente mais tarde!')
                )
        }
    }
}