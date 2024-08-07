export interface Task {
  description: string,
  title: string,
  completed: boolean,
  status: number,
  priority: number,
  startDate: string,
  deadline: string,
  id: string,
  todoListId: string,
  order: number,
  addedDate: string,
}

export interface GetTasksResponse {
  items: Task[],
  totalCount: number,
  error: string,
}


export interface DomainTask {
  [key: string]: Task[]
}

interface UpdateTask {
  todoId: string,
  taskId: string,
  title: string
}

export interface TaskModel extends Omit<Task, 'id' | 'todoListId' | 'order' | 'addedDate'> {

}

export interface DeleteTask extends Omit<UpdateTask, 'title'> {
}

export interface AddTask extends Omit<UpdateTask, 'taskId'> {
}

export interface UpdateTaskModel extends Omit<UpdateTask, 'title'> {
  model: TaskModel
}
