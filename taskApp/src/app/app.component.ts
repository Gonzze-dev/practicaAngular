import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskListComponent } from './Components/task-list/task-list.component';
import { SearchTaskComponent } from './Components/search-task/search-task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    TaskListComponent,
    SearchTaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskApp';
}
