import { Component, OnInit } from '@angular/core';
import { Task } from '../../../interfaces'
import { TaskService } from '../../../services'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
  tasks: Task[]
  task: Task = {
    id: null,
    name: "",
    isDone: ""
  }

  public editTask = false

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  deleteTask(task: Task) {
    var dlt = confirm(`Tem certeza que deseja excluir o lembrete: ${task.name}?`)

    if(dlt) {
      this.taskService.delete(task.id).subscribe(() => {
        alert("Lembrete excluído!")
        window.location.reload()
      })
    }
  }

  readById(task: Task) {
    this.taskService.readById(task.id).subscribe((task) => {
      this.task = task
    })
  }

  updateTask(task: Task) {
    this.taskService.update(task).subscribe(() => window.location.reload())
  }

}
