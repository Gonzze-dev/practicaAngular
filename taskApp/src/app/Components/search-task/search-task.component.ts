import { Component } from '@angular/core';
import { TasksService } from '../../Service/tasks.service';
import { InputUI } from '../../UI/input/inputUI.component';
import { InputSearch } from '../../UI/input-search/input-search.component';

@Component({
  selector: 'app-search-task',
  imports: [InputSearch],
  templateUrl: './search-task.component.html',
  styleUrl: './search-task.component.css'
})

export class SearchTaskComponent {
  searchQuery = TasksService.searchQuery

  setSearchQuery(e: any){
    this.searchQuery.set(e.target.value ?? "")
  }
}
