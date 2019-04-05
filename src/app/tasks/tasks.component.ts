import { Component, OnInit } from '@angular/core'

const TASKS: Array<any> = [
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

    public constructor(){
    }

    ngOnInit(){
        this.tasks = TASKS
    }
}