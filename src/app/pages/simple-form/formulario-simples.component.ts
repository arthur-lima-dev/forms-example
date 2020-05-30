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

  /**
   * Este método esta sendo chamado pelo html toda vez que é digitado alguma iformação no campo apelido.
   * As regras de como os campos devem se comportar estão no FormulárioSimplesBuilderService
   */
  modificarComportamentoFormulario() {
    this.formularioSimplesBuilderService.atualizarComportamentoControlAltura();
  }

  /**
   * Retornar os valores do formulário no formato Json
   */
  verificarValoresFormulario() {
    return JSON.stringify(this.pessoaFormGroup?.value, null, 2);
  }

  /**
   * Dica: sempre bom separar bem os métodos e suas responsabilidades, alguns programadores costumam
   * criar métodos gigantes que fazem milhares de coisas ao mesmo tempo. Não seja essa pessoa!
   */
  private inicializarFormulario() {
    this.pessoaFormGroup = this.formularioSimplesBuilderService.construirFormGroup(new PessoaVM());
  }

  /**
   * Nesse método poderiamos chamar métodos que irão tratar as informações adquiridas no formulário
   * e em seguinda utilizar um serviço para enviar para o back-end (Quem sabe a gente não faz isso um dia)
   */
  submeterFormulario() {
    this.exibeTextoSubmissao = true;
  }

}
