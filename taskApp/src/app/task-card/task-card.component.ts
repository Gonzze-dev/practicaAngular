import { Component, Input } from '@angular/core';

import { TTask } from '../../types';

import { PopupComponent } from '../popup/popup.component';
import { TaskCardDetailComponent } from '../task-card-detail/task-card-detail.component';
import { UpdateTaskComponent } from "../update-task/update-task.component";


@Component({
  selector: 'app-task-card',
  imports: [PopupComponent,
    TaskCardDetailComponent, 
    UpdateTaskComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})

export class TaskCardComponent {
  showModal: boolean = false;
  showUpdate: boolean = false;

  @Input() task!: TTask;

  constructor(){}
  
  show(){
    this.showModal = true;
  }

  showModalUpdate(){
    this.showUpdate = true;
  }

  public updateShow(showModalState: boolean) {
    this.showModal = showModalState;
  }

  public updateShowUpdate(showModalState: boolean){
    this.showUpdate = showModalState;
  }
}
