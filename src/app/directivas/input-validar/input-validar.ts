import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[input-validar]',
  host: {
    '(keyup)': '$event.target.value =this.limpiarCampos($event.target.value)',
  },
})
export class InputValidarDirective {
  @Input('input-validar') inputType: Number;
  @Output() ngModelChange = new EventEmitter();

  constructor() {}

  limpiarCampos(value: any) {
    if (this.inputType == 0) {
      //Validar letras,números y espacio
      let valor = value.replace(/[^A-Za-z0-9 ]/g, '');
      return valor;
    } else if (this.inputType == 1) {
      //validar campo de correo

      let valor = value.replace(/[^A-Za-z0-9,._@*-]/g, '');
      return valor;
    } else if (this.inputType == 2) {
      //validar numérico

      let valor = value.replace(/[^0-9]/g, '');
      return valor;
    } else if (this.inputType == 3) {
      //validar letras y números

      let valor = value.replace(/[^A-Za-z0-9]/g, '');
      return valor;
    } else if (this.inputType == 4) {
      //validar filtros
      let valor = value.replace(/[^A-Za-z0-9 ,.:;_/!@#$~&-]/g, '');
      return valor;
    }
  }
}
