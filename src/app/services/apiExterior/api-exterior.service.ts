import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiExteriorService {
  constructor(private http: HttpClient) {}

  public validarPago() {
    return this.http.get(
      `${environment.urlApiExterior}/api/[env]/v2/validar-pago-recibido`
    );
  }
}
