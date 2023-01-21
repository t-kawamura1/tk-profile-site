import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-scroll-down',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="scrolldown">
      <span>Scroll</span>
    </div>
  `,
  styleUrls: ['./scroll-down.component.scss']
})
export class ScrollDownComponent {

}
