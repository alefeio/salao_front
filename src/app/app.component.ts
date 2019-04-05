import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salao-angular 2';

  task: Task = new Task(123, 'Teste')
}

class Task {
  public id: number
  public titulo: string

  constructor(id: number, titulo: string){
    this.id = id
    this.titulo = titulo
  }
}