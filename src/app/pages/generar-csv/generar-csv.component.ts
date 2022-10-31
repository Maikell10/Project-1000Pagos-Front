import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';

@Component({
  selector: 'app-generar-csv',
  templateUrl: './generar-csv.component.html',
  styleUrls: ['./generar-csv.component.css'],
})
export class GenerarCsvComponent implements OnInit {
  formData = {
    fecha: '',
  };

  carga: boolean = false;
  moment = _moment;

  constructor() {}

  ngOnInit(): void {}

  generarCsv() {
    console.log(this.formData);
    let fecha = this.formData.fecha;
    let fechaF = this.moment(fecha).format('DD/MM/YYYY');

    console.log(fechaF);
  }
}
