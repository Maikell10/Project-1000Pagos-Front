import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  carga: any = false;

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username.trim() === '' ||
      this.loginData.username.trim() === null
    ) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() === '' ||
      this.loginData.password.trim() === null
    ) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    this.carga = true;

    this.loginService
      .login(this.loginData.username, this.loginData.password)
      .subscribe(
        (data: any) => {
          console.log(data);
          let user = {
            username: data.usuario,
            nombre_completo: data.nombre_completo,
            correo: data.correo,
          };

          this.loginService.setUser(user);
          this.loginService.loginStatusSubject.next(true);
          this.carga = false;
          this.router.navigate(['/inicio']);
        },
        (err) => {
          console.log(err);
          this.snack.open(err.error + '. Intente de nuevo', 'Aceptar', {
            duration: 3000,
          });
          this.carga = false;
        }
      );
  }
}
