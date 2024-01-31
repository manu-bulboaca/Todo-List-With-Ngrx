// Define the interface for the NgRx state
export interface TodosState {
  todos: ToDo[];
  loading: boolean;
}

// Define the interface for the ToDo object
export interface ToDo {
  id: number;
  summary: string;
  done: boolean;
}

// Define the initial state for the global store
export const initialState: TodosState = {
  todos: [
    { id: 234, summary: 'Pay your bills', done: false },
    { id: 431, summary: 'Set up a new appointment for later', done: false },
    { id: 542, summary: 'Learn about NgRx', done: false },
  ],
  loading: false,
};
