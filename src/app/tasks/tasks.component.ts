import { Component, OnInit } from '@angular/core'
import { Task } from './shared/task.model'

const TASKS: Array<Task> = [
    { id: 1, titulo: 'Fazer tarefa 1' },
    { id: 2, titulo: 'Fazer tarefa 2' },
    { id: 3, titulo: 'Fazer tarefa 3' },
    { id: 4, titulo: 'Fazer tarefa 4' },
    { id: 5, titulo: 'Fazer tarefa 5' }
]

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
    public tasks
    public selectedTask: Task

    public constructor(){
    }

    ngOnInit(){
        this.tasks = TASKS
    }

    public onSelect(task: Task): void {
         this.selectedTask = task
         console.log('SelectedTask: ', this.selectedTask)
    }
}