import { createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos-store.actions';
import { initialState, TodosState } from './todos-store.state';

let counter = 0;

// Define the reducers to be used by the store
// https://ngrx.io/guide/store/reducers
export const todosReducers = createReducer(
  initialState,

  // Task No. 2
  // on(TodosActions.addNewToDo, /* new reducer*/ ),
);
