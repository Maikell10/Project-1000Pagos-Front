import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root',
})
export class EntornoService {
  constructor() {}

  /***************************************************************************/
  /********************************Limpieza final de campos*******************/
  public limpiarCampo(valor: any, origen: any) {
    if (origen == 'texto-espacio') {
      let campo = valor.replace(/[^A-Za-z0-9 ]/g, '');
      var end = campo.length;

      if (campo.substring(0, 1) == ' ') {
        campo = campo.slice(0, -1);
        return campo;
      } else if (
        campo.substring(end - 2, end - 1) == ' ' &&
        campo.substring(end - 1, end) == ' '
      ) {
        campo = campo.slice(0, -1);
        return campo;
      } else {
        return campo;
      }
    } else if (origen == 'texto') {
      return valor.replace(/[^A-Za-z0-9]/g, '');
    } else if (origen == 'contrasena') {
      return valor.replace(/[^A-Za-z0-9._!?@#$%&*-]*/g, '');
    } else if (origen == 'numeros') {
      return valor.replace(/[^0-9]*/g, '');
    } else if (origen == 'solo-texto') {
      return valor.replace(/[^A-Za-z]*/g, '');
    } else if (origen == 'solo-texto-espacio') {
      let campo = valor.replace(/[^A-Za-z ]*/g, '');
      var end = campo.length;

      if (campo.substring(0, 1) == ' ') {
        campo = campo.slice(0, -1);
        return campo;
      } else if (
        campo.substring(end - 2, end - 1) == ' ' &&
        campo.substring(end - 1, end) == ' '
      ) {
        campo = campo.slice(0, -1);
        return campo;
      } else {
        return campo;
      }
    } else if (origen == 'correo') {
      return valor.replace(/[^A-Za-z0-9,._@*-]*/g, '');
    }
  }

  public limpiarMonto(montoDecimal: any) {
    let monto = new BigNumber(montoDecimal.replace(/[^0-9]/g, ''))
      .div(100)
      .toString();

    return monto;
  }
}
