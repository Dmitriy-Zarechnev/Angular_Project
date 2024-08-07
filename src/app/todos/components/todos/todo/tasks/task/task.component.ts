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

  // ---- Присвоили значение enum ----
  taskStatus = TaskStatus

  // ---- Новый title для task ----
  newTaskTitle = ''
  // ---- Mode для изменения title ----
  editMode = false

  // ---- Отправили удаление task родителю ----
  deleteTaskHandler() {
    this.deleteTaskEvent.emit({todoId: this.task.todoListId, taskId: this.task.id})
  }

  // ---- Отправили новый status родителю ----
  changeTaskStatusHandler(event: MouseEvent) {
    const newStatus = (event.currentTarget as HTMLInputElement).checked

    this.changeTask({status: newStatus ? TaskStatus.completed : TaskStatus.active})
  }

  // ---- Включаем Mode и записываем значение в input ----
  activateEditModeHandler() {
    this.editMode = true
    this.newTaskTitle = this.task.title
  }

  // ---- Отправили новый task title родителю ----
  editTaskTitleHandler() {
    this.changeTask({title: this.newTaskTitle})

    this.newTaskTitle = ''
    this.editMode = false
  }

  // ---- Общая функция для изменения task ----
  changeTask(patch: Partial<TaskModel>) {
    const model: TaskModel = {
      status: this.task.status,
      title: this.task.title,
      completed: this.task.completed,
      deadline: this.task.deadline,
      startDate: this.task.startDate,
      priority: this.task.priority,
      description: this.task.description,
      ...patch
    }

    this.updateTaskEvent.emit({todoId: this.task.todoListId, taskId: this.task.id, model})
  }
}
