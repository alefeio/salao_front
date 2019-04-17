import { Injectable } from '@angular/core'

import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {
    public createDb() {
        let tasks = [
            { id: 1, titulo: 'Comprar um celular novo' },
            { id: 2, titulo: 'Pagar faculdade' },
            { id: 3, titulo: 'Pagar aditamento do Fies' },
            { id: 4, titulo: 'Fazer aditamento do Fies' },
            { id: 5, titulo: 'Assistir aulas online' }
        ]

        return { tasks }
    }
}