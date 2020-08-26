import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services';
import { Task } from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.less']
})
export class TaskCreateComponent implements OnInit {

  task: Task = {
    name: "",
    isDone: "Fazer",
    description: ""
  }

  toAddDescription = false

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.taskService.create(this.task).subscribe(() => window.location.reload())
  }

  addDescription(): void {
    console.log(this.toAddDescription)
    this.toAddDescription = this.toAddDescription === false ? true : false

  }
}
