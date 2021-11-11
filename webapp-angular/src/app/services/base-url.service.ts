import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class BaseUrlService {
  constructor() {}

  protected UrlServiceV1: string =
    "https://trilha-competencia.herokuapp.com/api/";

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        "Content-type": "application/json",
      }),
    };
  }

  protected extractData(response:any){
    return response.data || {};
  }

  protected serviceError(response: any | Response){
    let customError: string[] = [];

    if(response instanceof HttpErrorResponse){
      if(response.statusText === 'Unknown Error'){
        customError.push("Ocorreu um erro desconhecido!");
        response.error.errors = customError;
      }
    }
    console.error(response);
    return throwError( response);
  }
}
