import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

interface IUser {
  age: number,
  name: string
}

@Component({
  selector: 'proj-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appTitle = 'Angular_Project'

  user: IUser = {
    age: 25,
    name: 'Bob'
  }
}
