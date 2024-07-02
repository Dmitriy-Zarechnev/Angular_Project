import {Component, Input} from '@angular/core'
import {TasksService} from '../../../../services/tasks.service'
import {map, Observable} from 'rxjs'
import {DeleteTask, Task, UpdateTaskModel} from '../../../../models/task.models'

@Component({
  selector: 'tl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() todoId!: string

  // ---- Достали tasks из state ----
  tasks$?: Observable<Task[]>

  // ---- Task title при создании ----
  taskTitle = ''

  // ---- Подключили service для работы с tasks ----
  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    // subscribe
    this.tasks$ = this.tasksService.tasks$
      .pipe(map(tasks => {
        return tasks[this.todoId]
      }))

    // Получили tasks с сервера
    this.tasksService.getTasks(this.todoId)
  }

  // ---- Отправили новую task на сервер ----
  addTaskHandler() {
    this.tasksService.addTask({todoId: this.todoId, title: this.taskTitle})
    this.taskTitle = ''
  }

  // ---- Удалили task на сервере ----
  deleteTask(data: DeleteTask) {
    this.tasksService.deleteTask(data)
  }

  // ---- Изменили task на сервере ----
  updateTask(data: UpdateTaskModel) {
    this.tasksService.updateTask(data)
  }
}
