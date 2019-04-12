import { Component } from '@angular/core';
import { LearningObservable } from './learning-observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LearningObservable ]
})
export class AppComponent {
  public constructor(private learningObservable: LearningObservable) {}

  title = 'salao-angular 2'
}