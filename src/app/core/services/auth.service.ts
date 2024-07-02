import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }


  // ---- LogIn на сервере ----
  logIn(data: any) {
    this.http
      .post(`${environment.baseUrl}/auth/login`, data)
      .subscribe((res) => {

      })
  }

  // ---- LogOut c сервера ----
  logOut() {
    this.http
      .delete(`${environment.baseUrl}/auth/login`)
      .subscribe((res) => {

      })
  }

  // ---- Me запрос c сервера ----
  me() {
    this.http
      .get(`${environment.baseUrl}/auth/me`)
      .subscribe((res) => {

      })
  }
}
