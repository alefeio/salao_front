import { Injectable } from '@angular/core'

import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {
    public createDb() {
        let tasks = [
            { id: 1, titulo: 'Fazer tarefa 1' },
            { id: 2, titulo: 'Fazer tarefa 2' },
            { id: 3, titulo: 'Fazer tarefa 3' },
            { id: 4, titulo: 'Fazer tarefa 4' },
            { id: 5, titulo: 'Fazer tarefa 5' }
        ]

        return { tasks }
    }
}