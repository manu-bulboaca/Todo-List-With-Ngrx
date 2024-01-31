import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToDo } from './store/todos-store';
import { Observable, of } from 'rxjs';
import { AppState } from './store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CreateToDoDialog } from './create-to-do-dialog/create-to-do-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  loading: Observable<boolean> = of(false);
  // TODO: loading: Observable<boolean> = this.store.select(/* newSelector */);

  // Task No. 1
  todos: Observable<ToDo[]> = of([]);
  // todos: Observable<ToDo[]> = this.store.select(/* newSelector */);

  filterActive: boolean = false;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    // Task No. 5
    // TODO: Initial Load of the to-do items
    // this.store.dispatch();
  }

  onSelectionChanged($event: MatSelectionListChange): void {
    const todoItemId: number = $event.options[0].value;
    const isToDoItemSelected: boolean = $event.options[0].selected;

    // Task No. 3
    if (isToDoItemSelected) {
      // TODO: mark item as done
      // this.store.dispatch();
    } else {
      // TODO: mark item as undone
      // this.store.dispatch();
    }
  }

  addNewToDo(): void {
    const dialogRef = this.dialog.open(CreateToDoDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`New To-Do Summary: ${result}`);

        // Task No. 2
        // TODO: dispatch the new action
        // this.store.dispatch( theNewAction( {summary: result}) )
      }
    });
  }

  filterToDos(): void {
    this.filterActive = !this.filterActive;

    // Task No. 4
    if (this.filterActive) {
      // TODO: new selector should be used
      // this.todos = this.store.select(/* desired selector */);
    } else {
      // TODO: old selector (from task no. 1) should be used
      // this.todos = this.store.select(/* desired selector */);
    }
  }
}
