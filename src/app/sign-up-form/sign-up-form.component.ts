import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'sign-up-form',
    templateUrl: './sign-up-form.component.html'
})

export class signUpFormComponent {
    public userForm: FormGroup

    public constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
             nome: [null, Validators.required],
             email: [null, [Validators.required, Validators.email]],
             senha: [null, [Validators.required, Validators.minLength(6)]],
             confirmacaoSenha: [null, Validators.required]
        })
    }

    public signUpUser(){
        console.log("Form de SignUp enviado!")
        console.log(this.userForm.value)
    }
}