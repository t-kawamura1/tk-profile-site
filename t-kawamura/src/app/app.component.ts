import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'tk-root',
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [
    RouterOutlet,
  ]
})
export class AppComponent {
  title = 't-kawamura';
}
