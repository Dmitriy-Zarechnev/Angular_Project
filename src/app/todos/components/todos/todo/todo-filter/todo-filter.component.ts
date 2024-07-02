import {Component, EventEmitter, Input, Output} from '@angular/core'
import {FilterType} from '../../../../models/todos.models'

@Component({
  selector: 'tl-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})

export class TodoFilterComponent {
  @Input() filter!: FilterType
  @Output() changeFilterEvent = new EventEmitter<FilterType>()


  // ---- Меняем filter при нажатии на button и отправляем родителю ----
  changeFilterHandler(filter: FilterType) {
    this.changeFilterEvent.emit(filter)
  }
}
