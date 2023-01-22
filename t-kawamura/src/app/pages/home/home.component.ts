import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {HeroItemComponent} from './hero-item/hero-item.component';
import {HeaderComponent} from '../components/header/header.component';
import {ScrollDownComponent} from '../components/scroll-down/scroll-down.component';
import {MyContentsComponent} from '../components/my-contents/my-contents.component';
import {ToTopButtonComponent} from '../components/to-top-button/to-top-button.component';

type ElementName =
  | 'HOME'
  | 'CAREER'
  | 'SKILL'
  | 'PROFILE'

@Component({
  selector: 'tk-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroItemComponent,
    ScrollDownComponent,
    MyContentsComponent,
    ToTopButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('home') home!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    return
  }

  @HostListener('window:scroll')
  // onScroll(): void {
  //   console.log(this.scrollY)
  // }

  isOverScroll(n: number): boolean {
    return window.scrollY > n
  }

  scrollToAnchorPoint(elName: ElementName): void {
    switch (elName) {
      case 'HOME':
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth'});
        break
      case 'CAREER':
        break
      case 'SKILL':
        break
      case 'PROFILE':
        break
    }
  }
}
