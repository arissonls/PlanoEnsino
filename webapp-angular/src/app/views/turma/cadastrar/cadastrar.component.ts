import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Turma } from "../models/turma";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
})
export class CadastrarTurmaComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  cadastroTurmaForm!: FormGroup;
  turmaClass!: Turma;

  ngOnInit() {
    this.cadastroTurmaForm = this.fb.group({
      turma: [null, Validators.required, Validators.minLength(2)],
      instituicao_ensino: [""],
      ano: ["", Validators.required],
    });
  }

  adicionarTurma() {
    this.turmaClass = Object.assign(
      {},
      this.turmaClass,
      this.cadastroTurmaForm.value
    );
  }
}
