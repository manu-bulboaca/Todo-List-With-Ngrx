import {MemoizedSelector, createFeatureSelector, createSelector} from "@ngrx/store";
import {ToDo, TodosState} from "./todos-store.state";
import {AppState} from "..";

export const selectToDosState: MemoizedSelector<AppState, TodosState> =
  createFeatureSelector<TodosState>('todosState');

// Define the selectors to retrieve data from the state
// https://ngrx.io/guide/store/selectors

// Task No. 1
export const selectAllToDoItems: MemoizedSelector<AppState, ToDo[]> = createSelector(selectToDosState, (state: TodosState) => {
  return state.todos;
});

