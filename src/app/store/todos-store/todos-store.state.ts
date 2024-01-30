// Define the interface for the NgRx state
export interface TodosState{
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
    todos: [],
    loading: false,
  };
