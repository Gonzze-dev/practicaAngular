import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-area-ui',
  imports: [],
  templateUrl: './text-area-ui.component.html',
  styleUrl: './text-area-ui.component.css'
})
export class TextAreaUI {
  name = input('')
  id = input('')
  placeholder = input<string>('text')
  value = input<string>('')
  input = input<Event>()
}
