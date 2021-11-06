import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarTurmaComponent } from '../cadastrar/cadastrar.component';
import { TurmaComponent } from '../listar/turma.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Turmas'
    },
    children: [
      {
        path: '',
        redirectTo: 'turmas'
      },
      {
        path: 'listar',
        component: TurmaComponent,
        data: {
          title: 'Listar'
        }
      },
      {
        path: 'cadastrar',
        component: CadastrarTurmaComponent,
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
export class TurmaRoutingModule {}
