import { Component, InjectionToken, Input, output } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-card-detail',
  imports: [],
  templateUrl: './task-card-detail.component.html',
  styleUrl: './task-card-detail.component.css'
})
export class TaskCardDetailComponent {
  @Input() task!: { id: number; name: string; description: string; done: boolean; };

  public onHiddenModal = output<boolean>();
  
  isDoneClick()
  {
    this.task.done = !this.task.done
  }

  public hiddenModal(){
      this.onHiddenModal.emit(false)
  }
  
}
