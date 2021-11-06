import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FundamentalPlanoAulaComponent } from "../cadastrar/fundamental.component";
import { IniciaisPlanoAulaComponent } from "../cadastrar/iniciais.component";
import { MedioPlanoAulaComponent } from "../cadastrar/medio.component";
import { ListarPlanosComponent } from "../listar/listar.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Planos de aula'
    },
    children: [
      {
        path: '',
        redirectTo: 'plano-aula'
      },
      {
        path: 'listar',
        component: ListarPlanosComponent,
        data: {
          title: 'Listar'
        }
      },
      {
        path: 'fundamental',
        component: FundamentalPlanoAulaComponent,
        data: {
          title: 'Fundamental'
        }
      },
      {
        path: 'medio',
        component: MedioPlanoAulaComponent,
        data: {
          title: 'Médio'
        }
      },
      {
        path: 'iniciais',
        component: IniciaisPlanoAulaComponent,
        data: {
          title: 'Séries iniciais'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlanoAulaRoutingModule { }