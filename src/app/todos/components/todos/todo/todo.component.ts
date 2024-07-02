import {Component, EventEmitter, Input, Output} from '@angular/core'
import {DomainTodo, EditTodoTitle, FilterType} from '../../../models/todos.models'
import {TodosService} from '../../../services/todos.service'

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: DomainTodo
  @Output() deleteTodoEvent = new EventEmitter<string>()
  @Output() editTodoEvent = new EventEmitter<EditTodoTitle>()


  // ---- Mode для изменения todos ----
  isEditMode = false

  // ---- Новый title для todos ----
  newTitle = ''

  constructor(private todosService: TodosService) {
  }


  // ---- Отправили удаление todos родителю ----
  deleteTodoHandler() {
    this.deleteTodoEvent.emit(this.todo.id)
  }

  // ---- Включаем Mode и записываем значение в input ----
  activateEditModeHandler() {
    this.isEditMode = true

    this.newTitle = this.todo.title
  }

  // ---- Отправили новый todos title родителю ----
  editTitleHandler() {
    this.editTodoEvent.emit({todoId: this.todo.id, title: this.newTitle})

    this.isEditMode = false
  }

  // ---- Получили filter и отправили в service ----
  changeFilter(filter: FilterType) {
    this.todosService.changeFilter({filter, todoId: this.todo.id})
  }
}
