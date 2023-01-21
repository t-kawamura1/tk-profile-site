import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteLogoComponent} from '../site-logo/site-logo.component';
import {Router} from '@angular/router';

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

  constructor(
    private readonly router: Router
  ) {}

  readonly homeMenuList = [
    'PORTFOLIO',
    'SKILLS',
    'STANCES',
    'PROFILE',
  ]
  readonly pfDetailMenuList = [
    'Lemon Sour DB',
    'T.KAWAMURA',
  ]

  isMobile = window.matchMedia('(max-width: 768px)').matches

  readonly homeUrl = new RegExp('\/home\/')
  readonly pfDetailUrl = new RegExp('\/portfolio-detail\/')

  get isHome(): boolean {
    return this.homeUrl.test(this.router.url)
  }
  get isPfDetail(): boolean {
    return this.pfDetailUrl.test(this.router.url)
  }

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
