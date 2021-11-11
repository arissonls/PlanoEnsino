import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuarios";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BaseUrlService } from "../../../services/base-url.service";

@Injectable()
export class RegistraService extends BaseUrlService {
  constructor(private http: HttpClient) {
    super();
  }

  registraUsuario(usuario: Usuario): Observable<Usuario> {
    let response = this.http
      .post(this.UrlServiceV1 + "register", usuario, this.ObterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
    return response;
  }
}
