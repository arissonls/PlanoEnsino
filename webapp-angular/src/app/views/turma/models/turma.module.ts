import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TurmaComponent } from '../listar/turma.component';
import { TurmaRoutingModule } from '../route/turma-routing.module';
import { CadastrarTurmaComponent } from '../cadastrar/cadastrar.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    TurmaRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ TurmaComponent, CadastrarTurmaComponent ]
})
export class TurmaModule { }
