import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PessoaModel, FormularioSimplesBuilderService} from "./formulario-simples-builder-service";

@Component({
  selector: 'app-formulario-simples',
  templateUrl: './formulario-simples.component.html',
  styleUrls: ['./formulario-simples.component.css'],
  providers: [FormularioSimplesBuilderService]
})
export class FormularioSimplesComponent implements OnInit {

  simpleForm: FormGroup;

  constructor(
    private formularioSimplesBuilderService: FormularioSimplesBuilderService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
   this.simpleForm = this.formularioSimplesBuilderService.buildForm(new PessoaModel());
  }

  submeterFormulario(){
    console.log(this.simpleForm.value);
  }

  modificarComportamentoFormulario() {
    if(this.formularioSimplesBuilderService.formReferenceControls.nome?.value){
      this.formularioSimplesBuilderService.formReferenceControls.apelido.disable()
    }else {
      this.formularioSimplesBuilderService.formReferenceControls.apelido.enable()
    }
  }
}
