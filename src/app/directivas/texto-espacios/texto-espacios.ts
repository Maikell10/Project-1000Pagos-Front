import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCampoTexto]',
})
export class TextoEspaciosDirective {
  constructor(public model: NgControl) {}

  @Output() limpiarTexto: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('ngModelChange', ['$event'])
  onInputChange(event: any) {
    let valor = event.replace(/[^A-Za-z0-9 ]/g, '');

    var end = valor.length;

    if (valor.substring(0, 1) == ' ') {
      valor = valor.slice(0, -1);

      this.model.valueAccessor!.writeValue(valor);
      this.limpiarTexto.emit(valor);
    } else if (
      valor.substring(end - 2, end - 1) == ' ' &&
      valor.substring(end - 1, end) == ' '
    ) {
      valor = valor.slice(0, -1);

      this.model.valueAccessor!.writeValue(valor);
      this.limpiarTexto.emit(valor);
    } else {
      this.model.valueAccessor!.writeValue(valor);
      this.limpiarTexto.emit(valor);
    }
  }
}
