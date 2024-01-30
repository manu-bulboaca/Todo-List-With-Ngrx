# TodoListWithNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Initialize your local environment by running `npm install`

Run `ng serve` or `npm run start` for a dev server. 

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### For a better debugging experience, the REDUX DevTools Browser Extension can be used:
- For Chrome: https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

#### NgRx Documentation: https://ngrx.io/docs

---

## Task No. 1
Create a new selector to retrieve the to-do items from the state object.

## Task No. 2
Write new action and reducer to add the new ToDo Item introduced by the user into the State Object.

## Task No. 3
Write new actions and reducers to mark the todos as done / undone when the user checks an item.

## Task No. 4
Write a new selector to retrieve only the to-do items that are not marked as done, and use the selector when the filter button is pressed.

## Task No. 5
Use the ToDosApiService to retrieve the to-do items using a new NgRx Effect. 
Create necessary actions, reducers and selectors to update the state object with the 
incoming to-do items and show the loading indicator while the to-do items are loading

