import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {HeroItemComponent} from './hero-item/hero-item.component';
import {HeaderComponent} from '../components/header/header.component';
import {ScrollDownComponent} from '../components/scroll-down/scroll-down.component';
import {MyContentsComponent} from '../components/my-contents/my-contents.component';
import {ToTopButtonComponent} from '../components/to-top-button/to-top-button.component';
import {ProfileItemComponent} from './profile-item/profile-item.component';
import {CareerItemComponent} from './career-item/career-item.component';
import {SkillItemComponent} from './skill-item/skill-item.component';
import {MbCareerItemComponent} from './mb-career-item/mb-career-item.component';

export type ElementName =
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
    CareerItemComponent,
    MbCareerItemComponent,
    ProfileItemComponent,
    SkillItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('home') home!: ElementRef
  @ViewChild('career') career!: ElementRef
  @ViewChild('careerItemWrp') careerItemWrp!: ElementRef
  @ViewChild('skill') skill!: ElementRef
  @ViewChild('profile') profile!: ElementRef

  get isPc() {
    return window.matchMedia('(min-width: 769px)').matches
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
  }

  ngOnInit(): void {
    return
  }

  @HostListener('window:scroll')
  showSection(): void {
    const sections = this.document.querySelectorAll('.sec-fadein')
    if (sections == null) return

    sections.forEach(el => {
      const elY = window.scrollY + el.getBoundingClientRect().top
      if (window.scrollY + window.innerHeight > elY) {
        el.classList.add('scrollin')
      }
    })
  }

  isOverScroll(n: number): boolean {
    return window.scrollY > n
  }

  isOnCareerItemWrp(): boolean {
    if (this.careerItemWrp === undefined) return false
    return window.innerHeight > this.careerItemWrp.nativeElement.getBoundingClientRect().top
  }

  isOnProfile(): boolean {
    if (this.profile === undefined) return false
    return window.innerHeight > this.profile.nativeElement.getBoundingClientRect().top
  }

  scrollToAnchorPoint(elName: ElementName): void {
    switch (elName) {
      case 'HOME':
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth'})
        break
      case 'CAREER':
        this.career.nativeElement.scrollIntoView({ behavior: 'smooth'})
        break
      case 'SKILL':
        this.skill.nativeElement.scrollIntoView({ behavior: 'smooth'})
        break
      case 'PROFILE':
        this.profile.nativeElement.scrollIntoView({ behavior: 'smooth'})
        break
    }
  }
}
