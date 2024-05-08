import {Component} from '@angular/core'
import {ChildComponent} from './child/child.component'

export interface Address {
  city: string,
  street: string,
  house: number
}

@Component({
  selector: 'proj-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name = 'Sam'
  surname = 'Black'
  address: Address = {
    city: 'Town',
    street: 'High',
    house: 30
  }
}
