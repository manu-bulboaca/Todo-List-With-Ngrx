import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { ToDo } from "../store/todos-store";

@Injectable({
    providedIn: 'root'
})
export class ToDosApiService {
    /**
     * Retrieve the initial To-Do List
     * @returns list of To-Do's mocking a real BE Service
     */
    public retrieveToDos(): Observable<ToDo[]> {
        return of([
          { id: 234, summary: 'Pay your bills', done: false },
          {
            id: 431,
            summary: 'Set up a new appointment for later',
            done: false,
          },
          { id: 542, summary: 'Learn about NgRx', done: false },
        ]).pipe(delay(1500));
    }
}
