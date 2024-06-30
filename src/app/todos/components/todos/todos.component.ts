import {Component} from '@angular/core'
import {TodosService} from '../../services/todos.service'
import {Observable} from 'rxjs'
import {Todo} from '../../models/todos.models'

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  todos$?: Observable<Todo[]>

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.todosService.getTodos()
  }
}
