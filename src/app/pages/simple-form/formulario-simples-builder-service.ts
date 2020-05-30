import {Injectable} from "@angular/core";
import {AbstractFormBuilder} from "src/app/shared/form-builer/abstract-form-builer";
import {Validators} from '@angular/forms';

/**
 * Model, DTO, VM... Tanto faz!
 * Independente da sigla que for usar a idea é ter um objeto que pode ser usado como coringa.
 * Vamos entender melhor no artigo
 */
export class PessoaVM {
  constructor(
    public nome?: any,
    public apelido?: any,
    public altura?: any
  ) { }
}

/**
 * A ideia é armazenar nesse serviço todas as regras de validação do formulário
 */
@Injectable()
export class FormularioSimplesBuilderService extends AbstractFormBuilder<PessoaVM> {

  /** Podem ser um validator ou vários como para o campo default */
  private alturaValidatorDefault = Validators.required;

  /**
   * Regra de negócio 1: os campos nome e altura são de preenchimento obrigatório
   */
  inicializarValidacoesDefault() {
    this.atualizarValidadores(this.formControls.nome, Validators.required);
    this.atualizarValidadores(this.formControls.altura, this.alturaValidatorDefault);
  }

  /**
   * Regra de negócio 2: Quando o apelido for preenchido então a altura passa a ter uma validação mínima de 1.20 a 2.20.
   * Caso contrário então passa o validator default
   */
  atualizarComportamentoControlAltura() {
    const alturaValidators = this.formControls.apelido?.value ? [
      this.alturaValidatorDefault,
      Validators.min(1.20),
      Validators.max(2.20)
    ] : this.alturaValidatorDefault;

    this.atualizarValidadores(this.formControls.altura, alturaValidators);
  }
}
