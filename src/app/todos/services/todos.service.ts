import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'
import {BehaviorSubject, map} from 'rxjs'
import {EditTodoTitle, Todo} from '../models/todos.models'
import {CommonResponse} from '../../core/models/core.models'

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  // ---- Добавили todos в state ----
  todos$ = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient) {
  }

  // ---- Получили todos с сервера ----
  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`)
      .subscribe((todos) => this.todos$.next(todos))
  }

  // ---- Добавили новый todos на сервер ----
  addTodo(title: string) {
    this.http
      .post<CommonResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`, {title})
      .pipe(map(res => {
        const stateTodos = this.todos$.getValue()
        const newTodo = res.data.item

        return [newTodo, ...stateTodos]
      }))
      .subscribe((todos) => {
        this.todos$.next(todos)
      })
  }

  // ---- Удалили todos на сервере ----
  deleteTodo(todoId: string) {
    this.http
      .delete<CommonResponse>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(map(() => {
        const stateTodos = this.todos$.getValue()

        return stateTodos.filter(todo => todo.id !== todoId)
      }))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  // ---- Заменили todos на сервере ----
  editTodoTitle(data: EditTodoTitle) {
    this.http
      .put<CommonResponse>(`${environment.baseUrl}/todo-lists${data.todoId}`, {title: data.title})
      .pipe(map(() => {
        const stateTodos = this.todos$.getValue()

        return stateTodos.map(todo => todo.id === data.todoId ? {...todo, title: data.title} : todo)
      }))
      .subscribe(todo => {
        this.todos$.next(todo)
      })
  }
}
