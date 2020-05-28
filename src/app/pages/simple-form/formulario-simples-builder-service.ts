import {Injectable} from "@angular/core";
import {AbstractFormBuilder} from "src/app/shared/form-builer/abstract-form-builer";

export class PessoaModel {
  constructor(
    public nome?: any,
    public apelido?: any,
    public altura?: any
  ) {}
}

@Injectable()
export class FormularioSimplesBuilderService extends AbstractFormBuilder<PessoaModel>{

}
