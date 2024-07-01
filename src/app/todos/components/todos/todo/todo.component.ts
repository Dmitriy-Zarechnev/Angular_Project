import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Todo} from '../../../models/todos.models'
import {EditTodoTitle} from '../../../models/todos.models'

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo
  @Output() deleteTodoEvent = new EventEmitter<string>()
  @Output() editTodoEvent = new EventEmitter<EditTodoTitle>()

  isEditMode = false
  newTitle = ''

  deleteTodoHandler() {
    this.deleteTodoEvent.emit(this.todo.id)
  }

  activateEditModeHandler() {
    this.newTitle = this.todo.title

    this.isEditMode = true
  }

  editTitleHandler() {
    this.isEditMode = false
    this.editTodoEvent.emit({todoId: this.todo.id, title: this.newTitle})
  }
}
