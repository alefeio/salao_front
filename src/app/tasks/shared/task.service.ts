import { Injectable } from '@angular/core'

import { Task } from './task.model' 
import { HttpModule } from '@angular/http'

const TASKS: Array<Task> = [
    { id: 1, titulo: 'Fazer tarefa 1' },
    { id: 2, titulo: 'Fazer tarefa 2' },
    { id: 3, titulo: 'Fazer tarefa 3' },
    { id: 4, titulo: 'Fazer tarefa 4' },
    { id: 5, titulo: 'Fazer tarefa 5' }
]

@Injectable()

export class TaskService {  

    public getTasks(): Promise<Task[]>{
        return new Promise((resolve, reject)=>{
            if(TASKS.length > 0){
                resolve(TASKS)
            } else{
                let erro = "Não há tarefas"
                reject(erro)
            }
        })
    }

}