import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {Notify} from '../models/notify.models'


@Injectable()

export class NotificationService {

  // ---- Переменная для хранения errors ----
  notify$ = new BehaviorSubject<Notify | null>(null)

  // ---- Функция для обработки severity - error ----
  errorHandler(message: string) {
    this.notify$.next({severity: 'error', message: message})
  }

  // ---- Функция для обработки severity - success ----
  successHandler(message: string) {
    this.notify$.next({severity: 'success', message: message})
  }

  // ---- Функция зачистки ----
  clear() {
    this.notify$.next(null)
  }
}
