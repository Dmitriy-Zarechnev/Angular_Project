import {Component} from '@angular/core'
import {NgClass, NgForOf, NgIf} from '@angular/common'

interface Fruit {
  id: string,
  name: string,
  price: number
}


@Component({
  selector: 'proj-fruits',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})

export class FruitsComponent {

  fruits: Fruit[] = [
    {id: '1', name: 'apple', price: 10},
    {id: '2', name: 'orange', price: 20},
    {id: '3', name: 'watermelon', price: 30},
    {id: '4', name: 'banana', price: 5},
    {id: '5', name: 'pears', price: 12},
    {id: '6', name: 'avocados', price: 18},
    {id: '7', name: 'mangoes', price: 14},
    {id: '8', name: 'kiwi', price: 3},
    {id: '9', name: 'lemon', price: 7}

  ]

  priceLessThenSeven() {
    this.fruits = this.fruits.filter(el => el.price > 7)
  }
}
