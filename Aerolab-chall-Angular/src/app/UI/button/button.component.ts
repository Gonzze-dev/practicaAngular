import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent
{
  type =  input<'button' | 'submit' | 'reset'>('button');
  active = input<boolean>(false)
  disabled = input<boolean | null>(false);
  attributes = input<Partial<HTMLButtonElement>>({});
  

  // Enlaza las clases dinámicas al botón
  @HostBinding('class.active') get isActive(): boolean {
    return this.active();
  }

  // Vincula el estado `disabled` al botón
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled() ? true : null;
  }

  // Vincula el atributo `type` al botón
  @HostBinding('attr.type')
  get buttonType(): string {
    return this.type();
  }

  // Vincula atributos personalizados
  @HostBinding('attr')
  get mergedAttributes(): Partial<HTMLButtonElement> {
    return this.attributes();
  }
}
