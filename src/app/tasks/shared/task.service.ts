import { Headers, Http } from '@angular/http'
import { Injectable } from '@angular/core'

import { Task } from './task.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class TaskService {

    // public tasksUrl = 'api/tasks'
    public tasksUrl = 'http://misslaura.herokuapp.com/tasks'
    public headers = new Headers({ 'Content-type': 'application/json' })

    public constructor(private http: Http) { }

    public getAll(): Observable<Task[]> {
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

    public getImportant(): Observable<Task[]> {
        try {
            return this.getAll()
                .pipe(map(tasks => tasks.slice(0, 3)))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public getById(id: number): Observable<Task> {
        try {
            let url = `${this.tasksUrl}/${id}`
            return this.http.get(url)
                .pipe(map(response => response.json() as Task))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public create(task: Task): Observable<Task> {
        try {
            let url = this.tasksUrl
            let body = JSON.stringify(task)
            return this.http.post(url, body, { headers: this.headers })
                .pipe(map(response => response.json() as Task))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public update(task: Task): Observable<Task> {
        try {
            let url = `${this.tasksUrl}/${task.id}`
            let body = JSON.stringify(task)
            return this.http.put(url, body, { headers: this.headers })
                .pipe(map(() => task))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public delete(id: number): Observable<null> {
        try {
            let url = `${this.tasksUrl}/${id}`
            return this.http.delete(url, { headers: this.headers })
                .pipe(map(() => null))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    public searchByTitle(termo: string): Observable<Task[]> {
        try {
            let url = `${this.tasksUrl}?titulo=${termo}`
    
            return this.http.get(url)
                .pipe(map((response) => response.json() as Task[]))
        } catch (error) {
            this.handleErrors(error)
        }
    }

    private handleErrors(error: Response) {
        console.log("Salvando o erro num arquivo de log. Detalhe: ", error)
        return Observable.throw(error)
    }

}