import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {HeroItemComponent} from './hero-item/hero-item.component';
import {HeaderComponent} from '../components/header/header.component';
import {ScrollDownComponent} from '../components/scroll-down/scroll-down.component';

@Component({
  selector: 'tk-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroItemComponent,
    ScrollDownComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
}
