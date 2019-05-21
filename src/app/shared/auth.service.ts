import { Injectable } from '@angular/core'
import { Response } from '@angular/http'

import { Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';

import { Usuario } from './usuario.model';

@Injectable()

export class AuthService {
    public constructor(private tokenService: Angular2TokenService){}

    public signUp(usuario: Usuario){}

    public signIn(uid: string, senha: string){}

    public signOut(){}

    public userSignedIn(){}

    private handleErrors(error: Response) {
        console.log("Salvando o erro num arquivo de log. Detalhe: ", error)
        return Observable.throw(error)
    }
}