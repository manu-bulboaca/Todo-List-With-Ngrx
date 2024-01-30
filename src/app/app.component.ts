import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {
  addNewToDo, loadToDos,
  markAsDone,
  markAsUndone,
  selectAllToDoItemsPerformant,
  selectAllUndoneToDoItems, selectLoadingIndicator,
  ToDo
} from './store/todos-store';
import {Observable, of} from 'rxjs';
import {AppState} from './store';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule, MatSelectionListChange} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CreateToDoDialog} from './create-to-do-dialog/create-to-do-dialog.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  loading: Observable<boolean> = this.store.select(selectLoadingIndicator);

  // Task No. 1
  todos: Observable<ToDo[]> = this.store.select(selectAllToDoItemsPerformant);

  filterActive: boolean = false;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // Task No. 5
    this.store.dispatch(loadToDos());
  }

  onSelectionChanged($event: MatSelectionListChange): void {
    const todoItemId: number = $event.options[0].value;
    const isToDoItemSelected: boolean = $event.options[0].selected;

    // Task No. 3
    if (isToDoItemSelected) {
      this.store.dispatch(markAsDone({id: todoItemId}));
    } else {
      this.store.dispatch(markAsUndone({id: todoItemId}));
    }
  }

  addNewToDo(): void {
    const dialogRef = this.dialog.open(CreateToDoDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`New To-Do Summary: ${result}`)

        // Task No. 2
        this.store.dispatch( addNewToDo( {todoSummary: result}) )
      }
    });
  }

  filterToDos(): void {
    this.filterActive = !this.filterActive;

    // Task No. 4
    if (this.filterActive) {
      this.todos = this.store.select(selectAllUndoneToDoItems);
    } else {
      this.todos = this.store.select(selectAllToDoItemsPerformant);
    }
  }
}
