import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomFormsModule } from "ngx-custom-validators";
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "../register.component";
import { RegistraService } from "../services/registra.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    RouterModule
  ],
  declarations: [RegisterComponent],
  providers: [RegistraService],
})
export class RregisterModule {}
