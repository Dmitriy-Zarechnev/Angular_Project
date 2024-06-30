import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable()
export class CredentialsInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    req = req.clone({
      headers: new HttpHeaders().append('api-key', environment['api-key']),
      withCredentials: true
    })

    return next.handle(req)
  }
}

