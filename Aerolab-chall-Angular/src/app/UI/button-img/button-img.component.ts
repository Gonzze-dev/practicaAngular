import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, input, output, Output } from '@angular/core';

@Component({
  selector: 'button[app-button-img]',
  imports: [],
  template: `
    @if(imageAttributes())
    {
        <ng-container>
        <img
          [src]="imageAttributes().src"
          [alt]="imageAttributes().alt"
          [width]="imageAttributes().width"
          [height]="imageAttributes().height"
          [class]="imageAttributes().className"
          (click)="onImageClick($event)"
        />
        </ng-container>
    }
    <ng-content></ng-content>
  `,
  styleUrl: './button-img.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonImgComponent {

  active = input<boolean>(true)
  type =  input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean | null>(true);
  
  attributes = input<Partial<HTMLButtonElement>>({});
  imageAttributes = input<Partial<HTMLImageElement>>({});
  imageClick = output<MouseEvent>();

  @HostBinding('class.active') get isActive(): boolean {
    return this.active();
  }

  onImageClick(event: MouseEvent): void {
    event.stopPropagation(); // Evita que el evento se propague al botón
    this.imageClick.emit(event); // Emite el evento personalizado
  }

  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled() ? true : null;
  }

  @HostBinding('attr.type')
  get buttonType(): string {
    return this.type();
  }

  @HostBinding('attr')
  get mergedAttributes(): Partial<HTMLButtonElement> {
    return {...this.attributes(), ...this.imageAttributes()};
  }

  
}
