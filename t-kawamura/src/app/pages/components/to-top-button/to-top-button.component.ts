import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-to-top-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="to-top-button">
      <span class="arrow"></span>
      <span class="top">TOP</span>
    </div>
  `,
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent {

}
