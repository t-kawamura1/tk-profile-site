import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'tk-site-logo',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  template: `
    <h1 class="logo">
      <a routerLink="/" class="logo-link">T.K</a>
    </h1>
  `,
  styleUrls: ['./site-logo.component.scss']
})
export class SiteLogoComponent {

}
