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

    public taskStatusOptions: Array<any> = [
        { value: false, text: 'Pendente' },
        { value: true, text: 'Concluído' }
    ]

    public constructor(
        private route: ActivatedRoute,
        private taskService: TaskService,
        private location: Location
    ){ }

    public ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.taskService.getById(+params['id'])))
                .subscribe(
                    task => this.task = task,
                    () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
                )
    }

    public goBack() {
        this.location.back()
    }

    public updateTask(){
        if(!this.task.titulo){
            alert('A tarefa deve ter um título.')
        } else {
            this.taskService.update(this.task)
                .subscribe(
                    () => alert('Tafera atualizada com sucesso!'),
                    () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
                )
        }
    }

}