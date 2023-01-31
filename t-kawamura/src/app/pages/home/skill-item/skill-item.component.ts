import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  constructor() {
  }
}
