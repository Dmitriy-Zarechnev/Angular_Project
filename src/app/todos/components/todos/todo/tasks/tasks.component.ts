import {Component, Input} from '@angular/core'
import {TasksService} from '../../../../services/tasks.service'
import {Observable} from 'rxjs'
import {Task} from '../../../../models/task.models'

@Component({
  selector: 'tl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() todoId!: string

  tasks$?: Observable<Task[]>

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getTasks(this.todoId)
  }
}
