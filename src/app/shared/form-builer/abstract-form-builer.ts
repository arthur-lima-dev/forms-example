import {Injectable} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Injectable()
export abstract class AbstractFormBuilder<T> {

  formControls: T;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  /**
   * Quem implementar será obrigado a informar se tem alguma validação a ser feita no form
   */
  abstract inicializarValidacoesDefault();

  /**
   * Aqui Passamos um objeto com os atributos que queremos para o nosso formulário,
   * neste método será criado um FromGroup
   *
   * @param objetoReferencia Objeto que dará inicio a magia
   * @return: FormGroup
   */
  construirFormGroup(objetoReferencia: T): FormGroup{
    const form = this.formBuilder.group(objetoReferencia);
    this.atualizarReferenciaFormulario(form, objetoReferencia);
    this.inicializarValidacoesDefault();

    return form;
  }

  /**
   * Captura os controls criados e passam para um objeto como tipo T,
   * desta forma evita-se o comum uso de "this.formGroup.get('nomeAtributo')"
   * e passa-se a usar um obejeto com os atributos necessários
   *
   * @param form
   * @param objetoReferencia
   */
  atualizarReferenciaFormulario(form: FormGroup, objetoReferencia: T){
    Object.entries(objetoReferencia).forEach(field => {
      const label = field[0];
      objetoReferencia[label] = form.controls[label];
    });
    this.formControls = objetoReferencia;
  }

  /**
   * Ao receber um Control seus validators serão substituidos pelos informados
   *
   * @param control
   * @param novoValidador
   */
  atualizarValidadores(control: AbstractControl, novoValidador: any | any[]){
    control.setValidators(novoValidador);
    control.updateValueAndValidity();
  }
}
