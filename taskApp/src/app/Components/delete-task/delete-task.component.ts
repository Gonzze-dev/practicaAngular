import { Component, input, output } from '@angular/core';
import { TasksService } from '../../Service/tasks.service';

@Component({
  selector: 'app-delete-task',
  imports: [],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css'
})
export class DeleteTaskComponent {
  onHiddenModal = output<boolean>()
  id = input.required<number>()
  
  hidden(){
    this.onHiddenModal.emit(false)
  }

  deleteTask(){
    TasksService.deleteTask(this.id())
    this.hidden()
  }
}
