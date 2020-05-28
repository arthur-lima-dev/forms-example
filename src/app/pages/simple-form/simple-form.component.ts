import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PessoaModel, SimpleFormBuilderService} from "./simple-form-builder-service";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  providers: [SimpleFormBuilderService]
})
export class SimpleFormComponent implements OnInit {

  simpleForm: FormGroup;

  constructor(
    private simpleFormBuilderService: SimpleFormBuilderService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
   this.simpleForm = this.simpleFormBuilderService.buildForm(new PessoaModel());
  }

  submeterFormulario(){
    console.log(this.simpleForm.value);
  }

  modificarComportamentoForm() {
    if(this.simpleFormBuilderService.formReferenceControls.nome?.value){
      this.simpleFormBuilderService.formReferenceControls.apelido.disable()
    }else {
      this.simpleFormBuilderService.formReferenceControls.apelido.enable()
    }
  }
}
