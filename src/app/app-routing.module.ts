import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./todos/todos.module').then(n => n.TodosModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(n => n.AuthModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
