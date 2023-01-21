import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-hero-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="title">T.KAWAMURA</h1>
    <p class="sub-title">Make the world efficient and fun.</p>
  `,
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {

}
