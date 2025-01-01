import { Component, input, Input } from '@angular/core';
import { TTask } from '../../types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-update-task',
  imports: [],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})

export class UpdateTaskComponent {
  task = input.required<TTask>();

  name!: string;
  description!: string

  ngOnInit() {
    this.name = this.task().name;
    this.description = this.task().description;
  }

  setName(e: any){
    this.name = e.target.value
  }

  setDescription(e: any){
    this.description = e.target.value
  }
  
  save()
  {
    const id = this.task().id
    
    TasksService.updateName(id, this.name)
    TasksService.updateDescription(id, this.description)
  }
}
