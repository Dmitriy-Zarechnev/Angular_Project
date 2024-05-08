import {Component} from '@angular/core'
import {ChildComponent} from './child/child.component'
import {JsonPipe, NgForOf} from '@angular/common'

// export interface Address {
//   city: string,
//   street: string,
//   house: number
// }

interface Lesson {
  id: number,
  title: string,
  weekGrades: WeekGrade[]
}

interface WeekGrade {
  id: number,
  gradeItem: number
}

@Component({
  selector: 'proj-parent',
  standalone: true,
  imports: [ChildComponent, JsonPipe, NgForOf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {id: 0, gradeItem: 5},
        {id: 1, gradeItem: 4},
        {id: 2, gradeItem: 5}
      ]
    },
    {
      id: 1,
      title: 'Chemistry',
      weekGrades: [
        {id: 0, gradeItem: 3},
        {id: 1, gradeItem: 5},
        {id: 2, gradeItem: 4}
      ]
    }
  ]

  getGrade(grade: string) {
    //this.grades.push(grade)
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
