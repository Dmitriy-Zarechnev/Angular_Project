import {Component, EventEmitter, Input, Output} from '@angular/core'
import {EditTodoTitle, Todo} from '../../../models/todos.models'

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo
  @Output() deleteTodoEvent = new EventEmitter<string>()
  @Output() editTodoEvent = new EventEmitter<EditTodoTitle>()

  // ---- Mode для изменения todo ----
  isEditMode = false

  // ---- Новый title для todo ----
  newTitle = ''

  // ---- Отправили удаление todo родителю ----
  deleteTodoHandler() {
    this.deleteTodoEvent.emit(this.todo.id)
  }

  // ---- Включаем Mode и записываем значение в input ----
  activateEditModeHandler() {
    this.isEditMode = true

    this.newTitle = this.todo.title
  }

  // ---- Отправили новый todo title родителю ----
  editTitleHandler() {
    this.editTodoEvent.emit({todoId: this.todo.id, title: this.newTitle})

    this.isEditMode = false
  }
}
