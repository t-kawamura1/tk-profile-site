import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {experiences, Langs, monthsInProgramming, ProgrammingExperiences} from './skill-data';

type Style = {[klass: string]: string}

@Component({
  selector: 'tk-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  get isPc() {
    return window.matchMedia('(min-width: 769px)').matches
  }

  readonly experiences = experiences
  readonly yearsInProgramming = Math.floor(monthsInProgramming / 12)
  readonly arrOfYears = new Array(this.yearsInProgramming).fill('').map((_, i) => `${i + 1}年`)

  readonly xAxisHeadlineWidth = this.isPc ? 80 : 80 / 2
  readonly graphWidth = this.isPc ? 720 : 720 / 2
  readonly graphBodyWidth = this.graphWidth - this.xAxisHeadlineWidth
  readonly unitWidth = this.graphBodyWidth / monthsInProgramming
  readonly barHight = this.isPc ? 20 : 20 / 2

  getGraphWidth(): Style {
    return {
      width: `${this.graphWidth}px`
    }
  }

  getGraphBodyWidth(): Style {
    return {
      width: `${this.graphBodyWidth}px`
    }
  }

  getYearScaleWidth(): Style {
    return {
      width: `${this.unitWidth * 12}px`,
    }
  }

  getYAxisScaleLineHeight(): Style {
    return this.isPc
    ? {
        height: `${84 * this.experiences.length}px`,
      }
    : {
        height: `${84 / 2 * this.experiences.length}px`,
      }
  }

  getBarStyleOfExperienceType(item: ProgrammingExperiences[number][number]): Style {
    const baseStyle = {
      width: `${item.months * this.unitWidth}px`,
      height: `${this.barHight}px`,
      borderRadius: this.isPc ? `0 2px 2px 0` : `0 1px 1px 0`,
    }
    const type = item.type
    switch (type) {
      case 'SELF':
        return {
          ...baseStyle,
          backgroundColor: `#FECE54`
        }
      case 'BUSINESS':
        return {
          ...baseStyle,
          backgroundColor: `#6EDDF1`
        }
      default:
        const unexpected: never = type
        throw Error('独学・業務以外にタイプが増えてまんがな。')
    }
  }

  getIconPath(data: ProgrammingExperiences[number]): string {
    const name: Langs = data[0].name
    let fileName: string
    switch (name) {
      case 'HTML':
        fileName = 'html5.svg'
        break
      case 'CSS':
        fileName = 'css3.svg'
        break
      case 'Angular':
        fileName = 'angular.svg'
        break
      case 'Docker':
        fileName = 'docker.svg'
        break
      case 'Java':
        fileName = 'java-14.svg'
        break
      case 'JavaScript':
        fileName = 'js.png'
        break
      case 'Ruby on Rails':
        fileName = 'rails.svg'
        break
      case 'TypeScript':
        fileName = 'ts.svg'
        break
      case 'Vue.js':
        fileName = 'vue.svg'
        break
      default:
        const unexpected: never = name
        throw Error('扱える言語が増えたんかい？')
    }
    return `/assets/${fileName}`
  }

  formatYMFromMonths(months: number): string {
    const y = Math.floor(months / 12)
    const m = months % 12
    return `${y}年${m}か月`
  }
}
