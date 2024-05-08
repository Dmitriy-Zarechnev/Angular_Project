import {Component} from '@angular/core'
import {ChildComponent} from './child/child.component'
import {JsonPipe} from '@angular/common'

// export interface Address {
//   city: string,
//   street: string,
//   house: number
// }

@Component({
  selector: 'proj-parent',
  standalone: true,
  imports: [ChildComponent, JsonPipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  grades: string[] = ['math: 5', 'english: 3']

  getGrade(grade: string) {
    this.grades.push(grade)
  }
}

// export class ParentComponent {
//   name = 'Sam'
//   surname = 'Black'
//   address: Address = {
//     city: 'Town',
//     street: 'High',
//     house: 30
//   }
// }
