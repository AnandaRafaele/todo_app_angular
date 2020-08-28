import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces'
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ) { }

  baseUrl = "http://localhost:3001/tasks"

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl)
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task)
  }

  delete(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Task>(url)
  }

  readById(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Task>(url)
  }

  update(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Task>(url, task)
  }

  createNotification(type: string, title: string, msg: string): void {
    this.notification.create(
      type,
      title,
      msg
    );
  }

}
