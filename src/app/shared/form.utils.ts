import { FormGroup } from "@angular/forms";

export class FormUtils {
    public constructor(private form: FormGroup) { }

    public fieldClassForErrorOrSuccess(fieldName: string) {
        return {
            "text-danger": this.showFieldError(fieldName),
            "text-success": this.getField(fieldName).valid
        }
    }

    public iconClassForErrorOrSuccess(fieldName: string) {
        return {
            "fa fa-times": this.showFieldError(fieldName),
            "fa fa-check": this.getField(fieldName).valid
        }
    }

    public showFieldError(field): boolean {
        return field.invalid && (field.touched || field.dirty)
    }

    public getField(fieldName: string) {
        return this.form.get(fieldName)
    }
}