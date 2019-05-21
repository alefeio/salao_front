import { Angular2TokenService } from 'angular2-token';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Teste'

  public constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiBase: 'http://misslaura.herokuapp.com'
    })
  }
}