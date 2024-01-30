import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ToDosApiService} from "../../services/todos-api.service";
import * as TodosActions from "./todos-store.actions";
import {catchError, EMPTY, exhaustMap, map} from "rxjs";

// https://ngrx.io/guide/effects
@Injectable({providedIn: 'root'})
export class ToDosStoreEffects {

  // Task No. 5
  loadToDos$ = createEffect(() => this.actions$.pipe(
    ofType(TodosActions.loadToDos),
    exhaustMap(() => this.todosApi.retrieveToDos()))
      .pipe(
        map(payload => ({type: TodosActions.addToDosInState.type, payload })),
        catchError(() => EMPTY)
      )
  );

  constructor(private actions$: Actions, private todosApi: ToDosApiService) {
  }
}
