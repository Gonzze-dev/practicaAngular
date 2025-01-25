import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  category = input<string>("Electronics")
}
