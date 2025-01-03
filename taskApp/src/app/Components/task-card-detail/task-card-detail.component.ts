import { Component, Input, output } from '@angular/core';

import { TTask } from '../../types';

import { TasksService } from '../../Service/tasks.service';

@Component({
  selector: 'app-task-card-detail',
  imports: [],
  templateUrl: './task-card-detail.component.html',
  styleUrl: './task-card-detail.component.css'
})

export class TaskCardDetailComponent {
  @Input() task!: TTask;
  
  public onHiddenModal = output<boolean>();

  constructor()
  {
    console.log(this.task)
  }
  isDoneClick(){
    const done: boolean = !this.task.done
    TasksService.updateDone(this.task.id, done)
    this.task.done = done
  }

  public hiddenModal(){
      this.onHiddenModal.emit(false)
  }
  
  
}
