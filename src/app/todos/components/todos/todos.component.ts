import {Component} from '@angular/core'
import {TodosService} from '../../services/todos.service'
import {Observable} from 'rxjs'
import {EditTodoTitle, Todo} from '../../models/todos.models'


@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  // ---- Добавили todos в state ----
  todos$?: Observable<Todo[]>

  // ---- Todo title при создании ----
  todoTitle = ''

  // ---- Подключили service для работы с todos ----
  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    // subscribe
    this.todos$ = this.todosService.todos$

    // Получили todos с сервера
    this.todosService.getTodos()
  }

  // ---- Отправили новый todo на сервер ----
  addTodoHandler() {
    this.todosService.addTodo(this.todoTitle)
    this.todoTitle = ''
  }

  // ---- Удалили todo на сервере ----
  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId)
  }

  // ---- Изменили todo на сервере ----
  editTitle(data: EditTodoTitle) {
    this.todosService.editTodoTitle(data)
  }
}
