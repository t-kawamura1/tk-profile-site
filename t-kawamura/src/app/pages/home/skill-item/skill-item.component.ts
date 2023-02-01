import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {experiences, monthsInProgramming, ProgrammingExperiences} from './skill-data';

type Style = {[klass: string]: string}

@Component({
  selector: 'tk-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  experiences: ProgrammingExperiences = []

  readonly rootWidth: number = 720
  unitWidth: number = 0
  readonly barHight: number = 24

  constructor( ) {
    this.rootWidth = 720
    this.barHight = 24
  }

  ngOnInit(): void {
    this.unitWidth = this.rootWidth / monthsInProgramming
    this.experiences = experiences
  }

  getBarStyles(
    data: ProgrammingExperiences[number]
  ): Style[] {
    const styles = data.map(item => this._getBarStyleOfExperienceType(item))
    if (styles.length === 2) {
      styles[1]['position'] = 'absolute'
      styles[1]['top'] = '0'
      styles[1]['left'] = `${styles[0]['width']}px`
    }
    return styles
  }

  private _getBarStyleOfExperienceType(
    item: ProgrammingExperiences[number][number]
  ): Style {
    const type = item.type
    switch (type) {
      case 'SELF':
        return {
          position: 'relative',
          width: `${item.months * this.unitWidth}px`,
          height: `${this.barHight}px`,
          backGroundColor: `green`
        }
      case 'BUSINESS':
        return {
          position: 'relative',
          width: `${item.months * this.unitWidth}px`,
          height: `${this.barHight}px`,
          backGroundColor: `blue`
        }
      default:
        const unexpected: never = type
        throw Error('独学・業務以外にタイプが増えてまんがな。')
    }
  }
}
