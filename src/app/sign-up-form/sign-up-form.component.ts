import { FormUtils } from './../shared/form.utils';
import { Component } from "@angular/core";

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'sign-up-form',
    templateUrl: './sign-up-form.component.html'
})

export class signUpFormComponent {
    public form: FormGroup;

    public taskStatusOptions: Array<any>
    public formUtils: FormUtils

    public constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
             nome: [null, Validators.required],
             email: [null, [Validators.required, Validators.email]],
             senha: [null, [Validators.required, Validators.minLength(6)]],
             confirmacaoSenha: [null, [Validators.required, Validators.minLength(6)]]
        }, { validador: this.passwordConfirmationValidator })

        this.formUtils = new FormUtils(this.form)
    }

    public signUpUser(){
        console.log("Form de SignUp enviado!")
        console.log(this.form.value)
    }

    public passwordConfirmationValidator(form: FormGroup){
        if(form.get('senha').dirty && form.get('senha').value === form.get('confirmacaoSenha').value)
            form.get('confirmacaoSenha').setErrors(null)
        else
            form.get('confirmacaoSenha').setErrors({'mismatch': true})
    }
}