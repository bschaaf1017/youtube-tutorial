import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    contentType: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private httpUrl: string = 'http://localhost:5001/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.httpUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `http://localhost:5001/tasks/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }

  toggleTask(task: Task): Observable<Task> {
    console.log('service task: ', task);
    const updateUrl = `${this.httpUrl}/${task.id}`;
    return this.http.put<Task>(updateUrl, task, httpOptions);
  }
}
