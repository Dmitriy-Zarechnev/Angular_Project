import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {CoreModule} from './core/core.module'
import {HttpClientModule} from '@angular/common/http'
import {SharedModule} from './shared/shared.module'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
