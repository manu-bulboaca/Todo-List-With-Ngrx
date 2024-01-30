import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {ToDosApiService} from "../../services/todos-api.service";
import * as TodosActions from "./todos-store.actions";

// https://ngrx.io/guide/effects
@Injectable({providedIn: 'root'})
export class ToDosStoreEffects {

  // Task No. 5
  // TODO: loadToDos$ = createEffect(() => this.actions$.pipe();

  constructor(private actions$: Actions, private todosApi: ToDosApiService) {
  }
}
