import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FundamentalPlanoAulaComponent } from "../cadastrar/fundamental.component";
import { IniciaisPlanoAulaComponent } from "../cadastrar/iniciais.component";
import { MedioPlanoAulaComponent } from "../cadastrar/medio.component";
import { ListarPlanosComponent } from "../listar/listar.component";
import { PlanoAulaRoutingModule } from "../route/planos-routing.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    PlanoAulaRoutingModule
  ],
  declarations: [
    ListarPlanosComponent,
    FundamentalPlanoAulaComponent,
    IniciaisPlanoAulaComponent,
    MedioPlanoAulaComponent
  ],
})
export class PlanoAulaModule {}
