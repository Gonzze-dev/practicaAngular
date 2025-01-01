import { Component, signal } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TTask } from '../../types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
    tasks = TasksService.tasks;

    
}
