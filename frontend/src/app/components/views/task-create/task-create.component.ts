import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services';
import { Task } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd';

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
  ) { }

  ngOnInit(): void {
  }

  addTask(): void {
    if(this.task.name === "") return this.taskService.createNotification("error", "Error", "Please, insert the name of the ToDo")
    this.taskService.create(this.task).subscribe(() => window.location.reload())
  }

  addDescription(): void {
    this.toAddDescription = this.toAddDescription === false ? true : false

  }
}
