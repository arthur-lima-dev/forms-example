import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable()
export abstract class AbstractFormBuilder<T> {
  formReferenceControls: T;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildForm(objectFormReference: T): FormGroup{
    const form = this.formBuilder.group(objectFormReference);
    this.updateFormReferences(form, objectFormReference);

    return form;
  }

  updateFormReferences(form: FormGroup, objectFormReference: T){
    Object.entries(objectFormReference).forEach(field => {
      const label = field[0];
      objectFormReference[label] = form.controls[label];
    });
    this.formReferenceControls = objectFormReference;
  }
}
