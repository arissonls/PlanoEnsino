import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { EscolaComponent } from '../listar/escola.component';
import { EscolaRoutingModule } from '../route/escola-routing.module';
import { CadastrarEscolaComponent } from '../cadastrar/cadastrar.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    EscolaRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ EscolaComponent, CadastrarEscolaComponent ]
})
export class EscolaModule { }
