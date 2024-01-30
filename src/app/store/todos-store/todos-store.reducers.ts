import {createReducer, on} from "@ngrx/store";
import * as TodosActions from "./todos-store.actions";
import {initialState, TodosState} from "./todos-store.state";

let counter = 0;

// Define the reducers to be used by the store
// https://ngrx.io/guide/store/reducers
export const todosReducers = createReducer(
  initialState,

  // Task No. 2
  on(TodosActions.addNewToDo, (state: TodosState, {todoSummary}): TodosState => {
    return {
      ...state,
      todos: [...state.todos, {
        id: ++counter,
        summary: todoSummary,
        done: false,
      }]
    }
  }),
  on(TodosActions.markAsDone, (state: TodosState, {id}): TodosState => {
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === id ? {...todo, done: true} : todo)
    }
  }),
  on(TodosActions.markAsUndone, (state: TodosState, {id}): TodosState => {
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === id ? {...todo, done: false} : todo)
    }
  }),
  on(TodosActions.loadToDos, (state: TodosState): TodosState => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(TodosActions.addToDosInState, (state: TodosState, {payload}): TodosState => {
    return {
      todos: payload,
      loading: false,
    }
  })
);
