import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './inputUI.component.html',
  styleUrl: './inputUI.component.css'
})
export class InputUI{
  type = input<string>('text')
  placeholder = input<string>('text')
  value = input<string>('')
  input = input<Event>()

  constructor() { }
}
