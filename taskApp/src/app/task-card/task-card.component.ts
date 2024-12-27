import { Component, Input } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { TaskCardDetailComponent } from '../task-card-detail/task-card-detail.component';

@Component({
  selector: 'app-task-card',
  imports: [PopupComponent,
            TaskCardDetailComponent,
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  showModal: boolean = false;

  @Input() task!: { id: number; name: string; description: string; done: boolean; };

  constructor(){}
  
  show()
  {
    this.showModal = true
  }

  public updateShow(showModalState: boolean) {
    this.showModal = showModalState
  }
}
