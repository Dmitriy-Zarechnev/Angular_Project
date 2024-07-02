import {Component, Input, OnInit} from '@angular/core'
import {TasksService} from '../../../../services/tasks.service'
import {combineLatest, map, Observable} from 'rxjs'
import {DeleteTask, Task, UpdateTaskModel} from '../../../../models/task.models'
import {TodosService} from '../../../../services/todos.service'
import {TaskStatus} from '../../../../../core/enums/taskStatus.enum'

@Component({
  selector: 'tl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() todoId!: string

  // ---- Достали tasks из state ----
  tasks$?: Observable<Task[]>

  // ---- Task title при создании ----
  taskTitle = ''


  // ---- Подключили service для работы с tasks ----
  constructor(private tasksService: TasksService, private todosService: TodosService) {
  }

  ngOnInit(): void {

    // Объединили потоки tasks и todos и subscribe
    this.tasks$ = combineLatest([this.tasksService.tasks$, this.todosService.todos$])
      .pipe(map(res => {
        // Получили все tasks
        const tasks = res[0]
        // Нашли нужные по todoId
        let tasksForTodo = tasks[this.todoId]

        // Получили все todos
        const todos = res[1]
        // Нашли нужный по todoId
        const activeTodo = todos.find(todo => todo.id === this.todoId)

        // Отфильтровали tasks
        switch (activeTodo?.filter) {
          case 'completed':
            return tasksForTodo = tasksForTodo.filter(task => task.status === TaskStatus.completed)
          case 'active':
            return tasksForTodo = tasksForTodo.filter(task => task.status === TaskStatus.active)
          default:
            return tasksForTodo
        }
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
