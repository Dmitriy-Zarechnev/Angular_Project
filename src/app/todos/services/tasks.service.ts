import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../enviroments/environment'
import {BehaviorSubject, map} from 'rxjs'
import {AddTask, DeleteTask, DomainTask, GetTasksResponse, Task, UpdateTaskModel} from '../models/task.models'
import {CommonResponse} from '../../core/models/core.models'


@Injectable({
  providedIn: 'root'
})

export class TasksService {
  // ---- Добавили tasks в state ----
  tasks$ = new BehaviorSubject<DomainTask>({}
  )

  constructor(private http: HttpClient) {
  }

  // ---- Получили tasks с сервера ----
  getTasks(todoId: string) {
    return this.http
      .get<GetTasksResponse>(`${environment.baseUrl}/todo-lists/${todoId}/tasks`)
      .pipe(map(res => res.items))
      .subscribe((tasks) => {
        const stateTasks = this.tasks$.getValue()
        stateTasks[todoId] = tasks

        this.tasks$.next(stateTasks)
      })
  }

  // ---- Добавили новую task на сервер ----
  addTask(data: AddTask) {
    return this.http
      .post<CommonResponse<{ item: Task }>>(`${environment.baseUrl}/todo-lists/${data.todoId}/tasks`,
        {title: data.title})
      .pipe(map(res => {
        const stateTasks = this.tasks$.getValue()
        const newTask = res.data.item
        stateTasks[data.todoId] = [newTask, ...stateTasks[data.todoId]]

        return stateTasks
      }))
      .subscribe((tasks) => this.tasks$.next(tasks))
  }

  // ---- Удалили task на сервере ----
  deleteTask(data: DeleteTask) {
    return this.http
      .delete<CommonResponse>(`${environment.baseUrl}/todo-lists/${data.todoId}/tasks/${data.taskId}`)
      .pipe(map(() => {
        const stateTasks = this.tasks$.getValue()
        stateTasks[data.todoId] = stateTasks[data.todoId].filter(task => task.id !== data.taskId)

        return stateTasks
      }))
      .subscribe((tasks) => this.tasks$.next(tasks))
  }

  // ---- Заменили task на сервере ----
  updateTask(data: UpdateTaskModel) {
    return this.http
      .put<CommonResponse>(`${environment.baseUrl}/todo-lists/${data.todoId}/tasks/${data.taskId}`, data.model)
      .pipe(map(() => {
        const stateTasks = this.tasks$.getValue()
        stateTasks[data.todoId] = stateTasks[data.todoId].map(task => task.id === data.taskId ? {
          ...task,
          ...data.model
        } : task)

        return stateTasks
      }))
      .subscribe((task) => this.tasks$.next(task))
  }

}
