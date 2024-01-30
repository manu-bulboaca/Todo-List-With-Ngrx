import { createAction, props } from "@ngrx/store";
import { ToDo } from "./todos-store.state";

// Define the actions to be dispatched by the app
// https://ngrx.io/guide/store/actions

// Task No. 2
export const addNewToDo = createAction('[ToDo] Add New ToDo', props<{ todoSummary: string }>());
