import { Component, OnInit } from '@angular/core'

import { Task } from '../../tasks/shared/task.model'
import { TaskService } from '../../tasks/shared/task.service'
import { Subject, Observable, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
    selector: 'task-search',
    templateUrl: './task-search.component.html',
    styleUrls: ['./task-search.component.css']
})

export class TaskSearchComponent implements OnInit {

    public searchTerms: Subject<string> = new Subject()
    public tasks: Task[] = []

    public constructor(private taskService: TaskService, private router: Router){}

    ngOnInit(){
        this.searchTerms
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(termo => termo ? this.taskService.searchByTitle(termo) : of<Task[]>([]))
            )
            .subscribe(tasks => this.tasks = tasks)
    }

    public search(termo: string) {
        // console.log(termo)
        this.searchTerms.next(termo)
    }

    public gotoTask(task: Task){
        this.tasks = []
        this.router.navigate(['/tasks', task.id])
    }
}