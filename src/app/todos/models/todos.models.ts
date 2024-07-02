import {AddTask} from './task.models'

export interface Todo {
  id: string,
  title: string,
  addedDate: string,
  order: number
}

export interface EditTodoTitle extends AddTask {
}

export interface DomainTodo extends Todo {
  filter: FilterType
}

export type FilterType = 'all' | 'active' | 'completed'
