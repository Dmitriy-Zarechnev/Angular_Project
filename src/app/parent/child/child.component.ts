import {Component, EventEmitter, Output} from '@angular/core'
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'proj-child',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {


  @Output() sendGradeEvent = new EventEmitter<string>()

  inputGrade = ''

  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputGrade)
  }
}

// export class ChildComponent {
//   name = 'Bob'
//
//
//   @Input() surname?: string
//   @Input() address?: Address
// }
