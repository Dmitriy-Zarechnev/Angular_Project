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

  todos$?: Observable<Todo[]>
  todoTitle = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    // subscribe
    this.todos$ = this.todosService.todos$

    this.todosService.getTodos()
  }

  addTodoHandler() {
    this.todosService.addTodo(this.todoTitle)
    this.todoTitle = ''
  }

  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId)
  }

  editTitle(data: EditTodoTitle) {
    this.todosService.editTodoTitle(data)
  }
}
