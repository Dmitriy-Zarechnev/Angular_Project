import {Component, Input} from '@angular/core'
import {Address} from '../parent.component'

@Component({
  selector: 'proj-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  name = 'Bob'


  @Input() surname?: string
  @Input() address?: Address
}
