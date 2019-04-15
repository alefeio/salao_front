import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

import { Task } from './task.model' 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const TASKS: Array<Task> = [
    { id: 1, titulo: 'Fazer tarefa 1' },
    { id: 2, titulo: 'Fazer tarefa 2' },
    { id: 3, titulo: 'Fazer tarefa 3' },
    { id: 4, titulo: 'Fazer tarefa 4' },
    { id: 5, titulo: 'Fazer tarefa 5' }
]

@Injectable()

export class TaskService {  

    public tasksUrl = 'api/tasks'

    public constructor(private http: Http) {}

    public getTasks(): Observable<Task[]>{
        return this.http.get(this.tasksUrl) 
            .pipe(map(response => {
                // console.log('getTastks => ', response.json())
                return response.json() as Task[]
            }))
    }

    public getImportantTasks(): Observable<Task[]>{
        return this.getTasks()
            .pipe(map(tasks => tasks.slice(0,3)))
    }

    public getTask(id: number): Observable<Task>{
        let url = `${this.tasksUrl}/${id}`

        return this.http.get(url)
            .pipe(map(response => response.json() as Task))
    }

}