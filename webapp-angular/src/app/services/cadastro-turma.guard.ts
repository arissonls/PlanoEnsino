import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastrarTurmaComponent } from "../views/turma/cadastrar/cadastrar.component";


@Injectable()

export class CadastroTurmaGuard implements CanDeactivate<CadastrarTurmaComponent> {

    canDeactivate(component: CadastrarTurmaComponent){

      if(component.mudancasNaoSalvas){
        return window.confirm('Necessário o preenchimento de tudo!!!')
      }
      return true;
    }

}