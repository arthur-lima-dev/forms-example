import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PessoaModel, SimpleFormBuilderService} from "./simple-form-builder-service";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  providers: [SimpleFormBuilderService]
})
export class SimpleFormComponent implements OnInit {

  simpleForm: FormGroup = new FormGroup({
                                           firstName: new FormControl(''),
  lastName: new FormControl(''),
});

  constructor(
    private simpleFormBuilderService: SimpleFormBuilderService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
   this.simpleForm = this.simpleFormBuilderService.buildForm(new PessoaModel());
  }

  onSubmit(){
    console.log(this.simpleFormBuilderService.formReferenceControls);
  }

  modificarComportamentoForm() {
    if(this.simpleFormBuilderService.formReferenceControls.nome?.value){
      this.simpleFormBuilderService.formReferenceControls.dataNascimento.disable()
    }else {
      this.simpleFormBuilderService.formReferenceControls.dataNascimento.enable()
    }
  }
}
