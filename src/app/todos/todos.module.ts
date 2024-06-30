import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ToDosRoutingModule} from './todos-routing.module'
import {TodosComponent} from './components/todos/todos.component'


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule, ToDosRoutingModule
  ]
})
export class TodosModule {
}
