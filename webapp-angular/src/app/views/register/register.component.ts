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
    let senha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);
    let senhaConfirm = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(senha),
    ]);
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      password_confirmation: senhaConfirm,
      device_name: ["web"],
      telefone: ['', [Validators.required, CustomValidators.rangeLength([10,11])]],
      cpf: ['', [Validators.required, CustomValidators.range([11])]],
    });
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

      this.RegistraService.registraUsuario(this.usuario)
        .subscribe(
          sucesso => {this.processarSucesso(sucesso)},
          falha => {this.processarFalha(falha)}
        );
    }else{
      alert('asdasd');
      console.error(this.form.valid);
      
    }
  }

  processarSucesso(response: any){

  }

  processarFalha(fail: any){
    
  }

}
