import { Component, Input } from '@angular/core';

import { TTask } from '../../types';

import { PopupComponent } from '../../UI/popup/popup.component';
import { TaskCardDetailComponent } from '../task-card-detail/task-card-detail.component';
import { UpdateTaskComponent } from "../update-task/update-task.component";
import { DeleteTaskComponent } from "../delete-task/delete-task.component";


@Component({
  selector: 'app-task-card',
  imports: [
    PopupComponent,
    TaskCardDetailComponent,
    UpdateTaskComponent, 
    DeleteTaskComponent
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})

export class TaskCardComponent {
  showModal: boolean = false;
  showUpdate: boolean = false;
  showDelete: boolean = false;

  @Input() task!: TTask;

  constructor(){}
  
  show(){
    this.showModal = true;
  }

  showModalUpdate(){
    this.showUpdate = true;
  }

  showModalDelete(){
    this.showDelete = true
  }

  public updateShow(showModalState: boolean) {
    this.showModal = showModalState;
  }

  public updateShowUpdate(showModalState: boolean){
    this.showUpdate = showModalState;
  }

  public updateShowDelete(showModalState: boolean)
  {
    this.showDelete = showModalState;
  }
}
