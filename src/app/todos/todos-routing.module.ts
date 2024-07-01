import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {TodosComponent} from './components/todos/todos.component'

export const routes: Routes = [{path: '', component: TodosComponent, pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ToDosRoutingModule {
}
