import {Component, Input} from '@angular/core'
import {TasksService} from '../../../../services/tasks.service'
import {map, Observable} from 'rxjs'
import {Task} from '../../../../models/task.models'

@Component({
  selector: 'tl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() todoId!: string

  tasks$?: Observable<Task[]>
  taskTitle = ''

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    // subscribe
    this.tasks$ = this.tasksService.tasks$
      .pipe(map(tasks => {
        return tasks[this.todoId]
      }))

    this.tasksService.getTasks(this.todoId)
  }

  addTaskHandler() {
    this.tasksService.addTask({todoId: this.todoId, title: this.taskTitle})
    this.taskTitle = ''
  }
}
