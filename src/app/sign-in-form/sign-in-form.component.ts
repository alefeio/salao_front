import { FormUtils } from './../shared/form.utils';
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'sign-in-form',
    templateUrl: './sign-in-form.component.html'
})

export class signInFormComponent {
    public form: FormGroup
    public formUtils: FormUtils

    public constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            senha: [null, Validators.required]
        })

        this.formUtils = new FormUtils(this.form)
    }

    public signInUser(){
        console.log('Form de SignIn enviado!')
        console.log(this.form.value)
    }
}