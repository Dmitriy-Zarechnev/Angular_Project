import {Component, EventEmitter, Input, Output} from '@angular/core'
import {DeleteTask, Task} from '../../../../../models/task.models'

@Component({
  selector: 'tl-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input() task!: Task
  @Output() deleteTaskEvent = new EventEmitter<DeleteTask>()

  deleteTaskHandler() {
    this.deleteTaskEvent.emit({todoId: this.task.todoListId, taskId: this.task.id})
  }
}
