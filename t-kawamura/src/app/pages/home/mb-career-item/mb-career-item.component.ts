import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {careers} from '../career-item/career';

@Component({
  selector: 'tk-mb-career-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mb-career-item.component.html',
  styleUrls: ['./mb-career-item.component.scss']
})
export class MbCareerItemComponent {

  readonly careers = careers
}
