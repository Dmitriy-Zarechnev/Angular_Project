import {AddTask} from './task.models'

export interface Todo {
  id: string,
  title: string,
  addedDate: string,
  order: number
}

export interface EditTodoTitle extends AddTask {
}
