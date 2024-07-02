import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ToDosRoutingModule} from './todos-routing.module'
import {TodosComponent} from './components/todos/todos.component'
import {TodoComponent} from './components/todos/todo/todo.component'
import {FormsModule} from '@angular/forms'
import {TasksComponent} from './components/todos/todo/tasks/tasks.component'
import {TaskComponent} from './components/todos/todo/tasks/task/task.component'
import {TodoFilterComponent} from './components/todos/todo/todo-filter/todo-filter.component'
import {TodoFooterComponent} from './components/todos/todo/todo-footer/todo-footer.component'


@NgModule({
  declarations: [TodosComponent, TodoComponent, TasksComponent, TaskComponent, TodoFilterComponent, TodoFooterComponent],
  imports: [
    CommonModule, FormsModule, ToDosRoutingModule
  ]
})
export class TodosModule {
}
