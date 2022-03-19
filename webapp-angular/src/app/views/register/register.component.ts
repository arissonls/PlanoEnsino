import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { CustomValidators } from "ngx-custom-validators";
import { fromEvent, merge, Observable } from "rxjs";

import {
  DisplayMessage,
  GenericFromValidation,
  ValidationMessages,
} from "../../utils/generic-form-validation";
import { Usuario } from "./models/usuarios";
import { RegistraService } from "./services/registra.service";
@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  errors: any[] = [];
  form: FormGroup;
  usuario: Usuario;
  validationMessages: ValidationMessages;
  genericValidator: GenericFromValidation;
  displayMessage: DisplayMessage = {};

  constructor(
    private fb: FormBuilder,
    private RegistraService: RegistraService
  ) {
    this.validationMessages = {
      nome: { required: "Informe o nome", nome: "Nome inválido" },
      email: { required: "Informe o email", email: "Email inválido" },
      password: {
        required: "Informe a senha",
        rangeLength: "A senha deve conter de 6 a 15 caracteres",
      },
      password_confirmation: {
        required: "Informe a senha novamente",
        equalTo: "As senhas não conferem",
        rangeLength: "A senha deve conter de 6 a 15 caracteres",
      },
      telefone: {
        required: "Informe o telefone",
        rangeLength: "O telefone deve conter 10 à 11 digitos",
      },
      cpf: { required: "Informe o CPF", cpf: "CPF Inválido" },
    };

    this.genericValidator = new GenericFromValidation(this.validationMessages);
  }

  ngOnInit(): void {
    let senha = new FormControl("", [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(6),
    ]);
    let senhaConfirm = new FormControl("", [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(6),
    ]);
    this.form = this.fb.group(
      {
        nome: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: senha,
        password_confirmation: senhaConfirm,
        device_name: ["web"],
        telefone: [
          "",
          [Validators.required, CustomValidators.rangeLength([10, 11])],
        ],
        cpf: ["", [Validators.required, CustomValidators.range([11])]],
      },
      {
        validator: this.passwordValidation("password", "password_confirmation"),
      }
    );
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (FormControl: ElementRef) => fromEvent(FormControl.nativeElement, "blur")
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.form);
    });
  }

  adicionarUsuario() {
    if (this.form.dirty && this.form.valid) {
      this.usuario = Object.assign({}, this.usuario, this.form.value);

      this.RegistraService.registraUsuario(this.usuario).subscribe(
        (sucesso) => {
          this.processarSucesso(sucesso);
        },
        (falha) => {
          this.processarFalha(falha);
        }
      );
    } else {
      alert("Ops!! Alguma coisa deu errado!!");
    }
  }

  processarSucesso(response: any) {}

  processarFalha(fail: any) {}

  passwordValidation(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;
        // set equal value error on dirty controls
        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({ equalValue: targetKey });
          const message = targetKey + " != " + toMatchKey;
          return { equalValue: message };
        }
        if (isMatch && toMatch.hasError("equalValue")) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }
}
