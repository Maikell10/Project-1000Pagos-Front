import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';

@Component({
  selector: 'app-listar-movimientos',
  templateUrl: './listar-movimientos.component.html',
  styleUrls: ['./listar-movimientos.component.css'],
})
export class ListarMovimientosComponent implements OnInit {
  formData = {
    nacionalidad: '',
    identificacion: '',
    fecha: '',
  };

  tiposIdentificacion = [
    {
      codigo: 'J',
    },
    {
      codigo: 'V',
    },
    {
      codigo: 'E',
    },
    {
      codigo: 'G',
    },
  ];

  carga: boolean = false;
  moment = _moment;

  constructor() {}

  ngOnInit(): void {}

  listarMovimientos() {
    console.log(this.formData);
    let fecha = this.formData.fecha;
    let fechaF = this.moment(fecha).format('DD/MM/YYYY');

    console.log(fechaF);
  }
}
