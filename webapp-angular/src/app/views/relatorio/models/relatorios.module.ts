import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RelatorioRoutingModule } from '../route/relatorio-routing.module';
import { RelatoriosComponent } from '../relatorios.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    RelatorioRoutingModule
  ],
  declarations: [ RelatoriosComponent ]
})
export class RelatoriosModule { }
