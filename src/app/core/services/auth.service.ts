import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'
import {CommonResponse} from '../models/core.models'
import {ResultCode} from '../enums/resultCode.enum'
import {Router} from '@angular/router'
import {LogInRequestData, MeResponse} from '../models/auth.models'
import {catchError, EMPTY} from 'rxjs'
import {NotificationService} from './notification.service'


@Injectable()

export class AuthService {
  // ---- Проверка на logIn ----
  isAuth = false

  // ---- Функции для работы AuthGuard ----
  resolveAuthRequest: Function = () => {
  }
  authRequest = new Promise((resolve) => {
    this.resolveAuthRequest = resolve
  })


  constructor(private http: HttpClient, private router: Router, private notificationService: NotificationService) {
  }

  // ---- LogIn на сервере ----
  logIn(data: Partial<LogInRequestData>) {
    this.http
      .post<CommonResponse<{ userId: number }>>(`${environment.baseUrl}/auth/login`, data)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe((res) => {
        if (res.resultCode === ResultCode.success) {
          this.router.navigate(['/'])
        } else {
          this.notificationService.errorHandler(res.messages[0])
        }
      })
  }

  // ---- LogOut c сервера ----
  logOut() {
    this.http
      .delete<CommonResponse>(`${environment.baseUrl}/auth/login`)
      .pipe(catchError(this.errorHandler.bind(this)))
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
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe((res) => {
        if (res.resultCode === ResultCode.success) {
          this.isAuth = true
        } else {
          this.notificationService.errorHandler(res.messages[0])
        }
        this.resolveAuthRequest()
      })
  }

  // ---- Обработка ошибок ----
  private errorHandler(err: HttpErrorResponse) {
    this.notificationService.errorHandler(err.message)
    return EMPTY
  }
}
