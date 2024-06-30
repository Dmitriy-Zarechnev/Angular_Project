import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AuthModule} from './auth/auth.module'
import {TodosModule} from './todos/todos.module'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, AppRoutingModule, AuthModule, TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
