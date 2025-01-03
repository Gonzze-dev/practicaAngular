import { Component, computed, input, signal } from '@angular/core';

import { TaskCardComponent } from '../task-card/task-card.component';

import { TasksService } from '../../Service/tasks.service';
import { TTask } from '../../types';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
    tasks = TasksService.tasks;
    searchQuery = TasksService.searchQuery;
    
    result = computed<TTask[]>(() => {
      const regex = new RegExp(this.searchQuery(), "i");
      return this.tasks().filter(item => regex.test(item.name))
    })

}
