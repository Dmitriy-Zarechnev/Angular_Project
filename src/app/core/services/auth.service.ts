import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'
import {CommonResponse} from '../models/core.models'
import {ResultCode} from '../enums/resultCode.enum'
import {Router} from '@angular/router'


export interface LogInRequestData {
  email: string,
  password: string,
  rememberMe: boolean,
}

export interface MeResponse {
  email: string,
  id: number,
  login: string
}

@Injectable()

export class AuthService {
  // ---- Проверка на logIn ----
  isAuth = false

  constructor(private http: HttpClient, private router: Router) {
  }

  // ---- LogIn на сервере ----
  logIn(data: Partial<LogInRequestData>) {
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
      .get<CommonResponse<MeResponse>>(`${environment.baseUrl}/auth/me`)
      .subscribe((res) => {
        if (res.resultCode === ResultCode.success) {
          this.isAuth = true
        }
      })
  }
}
