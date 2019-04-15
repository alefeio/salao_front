import { Headers, Http } from '@angular/http'
import { Injectable } from '@angular/core'

import { Task } from './task.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class TaskService {

    public tasksUrl = 'api/tasks'

    public constructor(private http: Http) { }

    public getTasks(): Observable<Task[]> {
        try {
            return this.http.get(this.tasksUrl)
                .pipe(
                    map(response => {
                        // console.log('getTastks => ', response.json())
                        return response.json() as Task[]
                    })

                )
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public getImportantTasks(): Observable<Task[]> {
        try {
            return this.getTasks()
                .pipe(map(tasks => tasks.slice(0, 3)))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public getTask(id: number): Observable<Task> {
        try {
            let url = `${this.tasksUrl}/${id}`

            return this.http.get(url)
                .pipe(map(response => response.json() as Task))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public updateTask(task: Task): Observable<Task> {
        let url = `${this.tasksUrl}/${task.id}`
        let body = JSON.stringify(task)
        let headers = new Headers({ 'Content-type': 'application/json' })
        try {
            return this.http.put(url, body, { headers: headers })
                .pipe(map(() => task))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    private handleErrors(error: Response) {
        console.log("Salvando o erro num arquivo de log. Detalhe: ", error)
        return Observable.throw(error)
    }

}