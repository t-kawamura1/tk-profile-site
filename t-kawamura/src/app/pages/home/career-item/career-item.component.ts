import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {careers} from './career';

@Component({
  selector: 'tk-career-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.scss']
})
export class CareerItemComponent {

  readonly careers = careers
}
