import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Task } from '../../../interfaces'
import { TaskService } from '../../../services'
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
  @ViewChild("deleteModal", { static: true })
  private deleteConfirmation!: TemplateRef<HTMLDivElement>

  tasks: Task[]
  task: Task = {
    id: null,
    name: "",
    isDone: ""
  }

  public editTask = false

  constructor(
    private taskService: TaskService,
    // private nzModalRef: NzModalRef,
    private nzModal: NzModalService
  ) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks => {
      this.tasks = tasks
    })
  }

  deleteTask(task: Task) {
    this.nzModal.create({
      nzTitle: "Tem certeza disso?",
      nzContent: this.deleteConfirmation,
      nzComponentParams: {
        task: { name: task.name }
      },
      nzOnOk: () => this.taskService.delete(task.id).subscribe(() => window.location.reload())
    })
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
