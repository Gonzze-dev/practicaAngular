import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})

export class PopupComponent {
  @Input() showModal!:boolean;
  
  public onHiddenModal = output<boolean>();

  public hiddenModal(){
    this.showModal = false
    this.onHiddenModal.emit(this.showModal)
  }

  
}
