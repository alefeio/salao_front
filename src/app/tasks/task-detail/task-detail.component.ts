import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import { switchMap } from 'rxjs/operators';

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html', 
})

export class TaskDetailComponent implements OnInit {

    public taskForm: FormGroup;
    public task: Task

    public taskStatusOptions: Array<any>

    public constructor(
        private route: ActivatedRoute,
        private taskService: TaskService, 
        private location: Location,
        private fb: FormBuilder
    ){
        this.taskStatusOptions = [
            { value: false, text: 'Pendente' },
            { value: true, text: 'Concluído' }
        ]

        this.taskForm = this.fb.group({
            titulo: [null, Validators.required],
            data: [null, Validators.required],
            status: [null, Validators.required],
            descricao: [null]
        })
    }

    public ngOnInit() {
        this.task = new Task(null, null)

        this.route.params
            .pipe(switchMap((params: Params) => this.taskService.getById(+params['id'])))
                .subscribe(
                    task => this.setTask(task),
                    () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
                )
    }

    public setTask(task: Task): void {
        this.task = task
        this.taskForm.patchValue(task)
    }

    public ngAfterViewInit(){
        $('#data').datetimepicker({
            'sideBySide': true,
            'locale': 'pt-br'
        }).on('dp.change', ()=> this.taskForm.get('data').setValue($("#data").val()))
    }

    public goBack() {
        this.location.back()
    }

    public updateTask(){
        this.task.titulo = this.taskForm.get('titulo').value
        this.task.data = this.taskForm.get('data').value
        this.task.status = this.taskForm.get('status').value
        this.task.descricao = this.taskForm.get('descricao').value

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

    // tratamento de erros

    public fieldClassForErrorOrSuccess(fieldName: string){
        return {
            "text-danger": this.showFieldError(fieldName),
            "text-success": this.getField(fieldName).valid
        }
    }

    public iconClassForErrorOrSuccess(fieldName: string){
        return {
            "fa fa-times": this.showFieldError(fieldName),
            "fa fa-check": this.getField(fieldName).valid
        }
    }

    public showFieldError(field): boolean {
        return field.invalid && (field.touched || field.dirty)
    }

    public getField(fieldName: string){
        return this.taskForm.get(fieldName)
    }

}