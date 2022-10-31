import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import { EntornoService } from 'src/app/services/entorno.service';

@Component({
  selector: 'app-validar-pago',
  templateUrl: './validar-pago.component.html',
  styleUrls: ['./validar-pago.component.css'],
})
export class ValidarPagoComponent implements OnInit {
  tiposOperadoras = [
    {
      codigo: '0424',
    },
    {
      codigo: '0414',
    },
    {
      codigo: '0412',
    },
    {
      codigo: '0426',
    },
    {
      codigo: '0416',
    },
  ];

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

  //contactPrefix: any;

  formData = {
    nacionalidad: '',
    identificacion: '',
    contactPrefix: '',
    telefono: '',
    referencia: '',
    monto: '',
    fecha: '',
  };
  carga: boolean = false;
  moment = _moment;

  public fechaMax: string = this.fechaHoy();

  constructor(private entornoService: EntornoService) {}

  ngOnInit(): void {
    //this.formData.fecha = '15/10/2022';
  }

  validarPago() {
    console.log(this.formData);
    let fecha = this.formData.fecha;
    let fechaF = this.moment(fecha).format('DD/MM/YYYY');

    console.log(this.entornoService.limpiarMonto(this.formData.monto));

    console.log(fechaF);
  }

  fechaHoy(): string {
    var today: any = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  // this is for the start date
  startDate = new Date(1990, 0, 1);
}
