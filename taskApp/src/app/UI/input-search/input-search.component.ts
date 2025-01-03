import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-search',
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearch {
  type = input<'text' | 'number' | 'password' | 'email'>('text')
  placeholder = input<string>('text')
  value = input<string>('')
  input = input<Event>()

  
}
