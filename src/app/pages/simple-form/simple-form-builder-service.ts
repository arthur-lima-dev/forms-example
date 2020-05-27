import {Injectable} from "@angular/core";
import {AbstractFormBuilder} from "src/app/shared/form-builer/abstract-form-builer";

export class PessoaModel {
  public nome?: any;
  public dataNascimento?: any;

  constructor() {
    this.nome = undefined;
    this.dataNascimento = undefined;
  }
}

@Injectable()
export class SimpleFormBuilderService extends AbstractFormBuilder<PessoaModel>{

}
