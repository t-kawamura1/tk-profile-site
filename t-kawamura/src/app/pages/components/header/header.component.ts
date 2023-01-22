import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteLogoComponent} from '../site-logo/site-logo.component';
import {ElementName} from '../../home/home.component';

@Component({
  selector: 'tk-header',
  standalone: true,
  imports: [
    CommonModule,
    SiteLogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  readonly selectMenu = new EventEmitter<ElementName>();

  constructor(
  ) {}

  readonly homeMenuList: Exclude<ElementName, 'HOME'>[] = [
    'CAREER',
    'SKILL',
    'PROFILE',
  ]

  readonly isMobile = window.matchMedia('(max-width: 768px)').matches

  isActive = false

  toggleDropdown(): void {
    const hambergerMenu = document.querySelector('.hamberger-menu')
    this.isActive = !this.isActive
    if (this.isActive) {
      hambergerMenu!.classList.add('active')
    } else {
      hambergerMenu!.classList.remove('active')
    }
  }
}
