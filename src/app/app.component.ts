import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {ParentComponent} from './parent/parent.component'

// interface IUser {
//   age: number,
//   name: string
// }

@Component({
  selector: 'proj-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}

// export class AppComponent {
//   appTitle = 'Angular'
//   text = 'start'
// }

// export class AppComponent {
//   appTitle = 'Angular'
//   text = 'start'
//
//   changeTextHandler(event: Event) {
//     this.text = (event.currentTarget as HTMLInputElement).value
//   }
//
//   changeTitleHandler() {
//     this.appTitle = 'Hello'
//   }
// }

// export class AppComponent {
//   appTitle = 'Angular_Project'
//
//   user: IUser = {
//     age: 25,
//     name: 'Bob'
//   }
// }

// export class AppComponent {
//   isAppLoading = true
//
//   constructor() {
//     setTimeout(() => {
//       this.isAppLoading = false
//     }, 3000)
//   }
//
// }
