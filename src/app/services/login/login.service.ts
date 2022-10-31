import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //Login
  public login(username: string, clave: string) {
    return this.http.get(
      `${environment.urlApi}/api/login/${username}/${clave}`
    );
  }

  // set user en localStorage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public isLoggedIn() {
    let userStr = localStorage.getItem('user');
    if (userStr == undefined || userStr === null || userStr === '') {
      return false;
    } else {
      return true;
    }
  }

  // cerrar sesión y eliminar token del localStorage
  public logOut() {
    localStorage.removeItem('user');
    localStorage.clear();
    return true;
  }
}
