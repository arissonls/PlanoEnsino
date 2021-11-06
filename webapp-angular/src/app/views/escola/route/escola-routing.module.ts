import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarEscolaComponent } from '../cadastrar/cadastrar.component';
import { EscolaComponent } from '../listar/escola.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Escola'
    },
    children: [
      {
        path: '',
        redirectTo: 'escola'
      },
      {
        path: 'listar',
        component: EscolaComponent,
        data: {
          title: 'Listar'
        }
      },
      {
        path: 'cadastrar',
        component: CadastrarEscolaComponent,
        data: {
          title: 'Cadastrar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule {}
