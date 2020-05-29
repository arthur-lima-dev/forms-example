import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormularioSimplesBuilderService, PessoaVM} from "./formulario-simples-builder-service";

@Component({
  selector: 'app-formulario-simples',
  templateUrl: './formulario-simples.component.html',
  styleUrls: ['./formulario-simples.component.css'],
  providers: [FormularioSimplesBuilderService]
})
export class FormularioSimplesComponent implements OnInit {

  pessoaFormGroup: FormGroup;
  exibeTextoSubmissao: boolean = false;

  constructor(
    private formularioSimplesBuilderService: FormularioSimplesBuilderService
  ) {
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.pessoaFormGroup = this.formularioSimplesBuilderService.construirFormGroup(new PessoaVM());
  }

  verificarValoresFormulario() {
    return JSON.stringify(this.pessoaFormGroup?.value, null, 2);
  }

  modificarComportamentoFormulario() {
    this.formularioSimplesBuilderService.atualizarComportamentoControlAltura();
    this.pessoaFormGroup.updateValueAndValidity();
  }

  /**
   * Nesse método poderiamos chamar métodos que irão tratar a informação adquirida na tela e
   * em seguinda utilizar um serviço para enviar para o back-end
   */
  submeterFormulario() {
    this.exibeTextoSubmissao = true;
  }
}
