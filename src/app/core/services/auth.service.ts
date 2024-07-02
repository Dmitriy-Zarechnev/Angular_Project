import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'
import {CommonResponse} from '../models/core.models'
import {ResultCode} from '../enums/resultCode.enum'
import {Router} from '@angular/router'

@Injectable()

export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }


  // ---- LogIn на сервере ----
  logIn(data: any) {
    this.http
      .post<CommonResponse<{ userId: number }>>(`${environment.baseUrl}/auth/login`, data)
      .subscribe((res) => {
        if (res.resultCode === ResultCode.success) {
          this.router.navigate(['/'])
        }
      })
  }

  // ---- LogOut c сервера ----
  logOut() {
    this.http
      .delete<CommonResponse>(`${environment.baseUrl}/auth/login`)
      .subscribe((res) => {
        if (res.resultCode === ResultCode.success) {
          this.router.navigate(['/login'])
        }
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
