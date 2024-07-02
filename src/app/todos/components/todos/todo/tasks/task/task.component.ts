import {Component, EventEmitter, Input, Output} from '@angular/core'
import {DeleteTask, Task, TaskModel, UpdateTaskModel} from '../../../../../models/task.models'
import {TaskStatus} from '../../../../../../core/enums/taskStatus.enum'

@Component({
  selector: 'tl-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input() task!: Task
  @Output() deleteTaskEvent = new EventEmitter<DeleteTask>()
  @Output() updateTaskEvent = new EventEmitter<UpdateTaskModel>()

  taskStatus = TaskStatus


  deleteTaskHandler() {
    this.deleteTaskEvent.emit({todoId: this.task.todoListId, taskId: this.task.id})
  }


  changeTaskStatusHandler(event: MouseEvent) {
    const newStatus = (event.currentTarget as HTMLInputElement).checked

    const model: TaskModel = {
      status: newStatus ? TaskStatus.completed : TaskStatus.active,
      title: this.task.title,
      completed: this.task.completed,
      deadline: this.task.deadline,
      startDate: this.task.startDate,
      priority: this.task.priority,
      description: this.task.description
    }

    this.updateTaskEvent.emit({todoId: this.task.todoListId, taskId: this.task.id, model})
  }
}
