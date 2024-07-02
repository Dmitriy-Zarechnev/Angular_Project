import {Component} from '@angular/core'
import {TodosService} from '../../services/todos.service'
import {Observable} from 'rxjs'
import {DomainTodo, EditTodoTitle} from '../../models/todos.models'
import {AuthService} from '../../../core/services/auth.service'


@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  // ---- Достали todos из state ----
  todos$?: Observable<DomainTodo[]>
  // ---- Todos title при создании ----
  todoTitle = ''

  // ---- Подключили service для работы с todos ----
  constructor(private todosService: TodosService, private authService: AuthService) {
  }

  ngOnInit(): void {
    // subscribe
    this.todos$ = this.todosService.todos$

    // Получили todos с сервера
    this.todosService.getTodos()
  }

  // ---- Отправили новый todos на сервер ----
  addTodoHandler() {
    this.todosService.addTodo(this.todoTitle)
    this.todoTitle = ''
  }

  // ---- Удалили todos на сервере ----
  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId)
  }

  // ---- Изменили todos на сервере ----
  editTitle(data: EditTodoTitle) {
    this.todosService.editTodoTitle(data)
  }

  // ---- Log Out из приложения ----
  logOutHandler() {
    this.authService.logOut()
  }
}
