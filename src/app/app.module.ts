import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AuthModule} from './auth/auth.module'
import {TodosModule} from './todos/todos.module'
import {CoreModule} from './core/core.module'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, AuthModule, TodosModule, CoreModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
