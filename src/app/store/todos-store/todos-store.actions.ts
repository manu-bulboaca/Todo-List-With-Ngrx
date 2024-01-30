import { createAction, props } from "@ngrx/store";
import { ToDo } from "./todos-store.state";

// Define the actions to be dispatched by the app
// https://ngrx.io/guide/store/actions

// Task No. 2
export const addNewToDo = createAction('[ToDo] Add New ToDo', props<{ todoSummary: string }>());

export const markAsDone = createAction('[ToDo] Mark as Done', props<{id: number}>());
export const markAsUndone = createAction('[ToDo] Mark as Undone', props<{id: number}>());

export const loadToDos = createAction('[ToDo] Load ToDos');
export const addToDosInState = createAction('[ToDo] Add retrieved ToDos in State', props<{payload: ToDo[]}>());
