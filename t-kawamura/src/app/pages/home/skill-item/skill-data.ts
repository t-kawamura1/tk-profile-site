import {DateTime} from 'luxon';

export type Langs =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'Angular'
  | 'Vue.js'
  | 'Ruby on Rails'
  | 'Java'
  | 'Docker'

export type ProgrammingExperiences = {
  name: Langs,
  type: 'SELF' | 'BUSINESS',
  months: number,
}[][]

const startSelf = DateTime.local(2020, 7, 1)
const startInBusiness = DateTime.local(2021, 11, 1)

const calculateSelfSpan = (start: DateTime): number => {
  return Math.floor(Math.abs(
    startInBusiness.diff(start, 'months').months
  ))
}
const calculateToNowFrom = (start: DateTime): number => {
  return Math.floor(Math.abs(
    start.diffNow('months').months
  ))
}

export const monthsInProgramming = calculateToNowFrom(startSelf)

export const experiences: ProgrammingExperiences = [
  [
    {
      name: 'HTML',
      type: 'SELF',
      months: calculateSelfSpan(startSelf)
    },
    {
      name: 'HTML',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'CSS',
      type: 'SELF',
      months: calculateSelfSpan(startSelf)
    },
    {
      name: 'CSS',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'Angular',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'Docker',
      type: 'SELF',
      months: calculateSelfSpan(DateTime.local(2020, 10, 19))
    },
    {
      name: 'Docker',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'Java',
      type: 'SELF',
      months: 1
    },
    {
      name: 'Java',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'JavaScript',
      type: 'SELF',
      months: calculateSelfSpan(startSelf)
    },
    {
      name: 'JavaScript',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'Ruby on Rails',
      type: 'SELF',
      months: calculateSelfSpan(startSelf)
    },
  ],
  [
    {
      name: 'TypeScript',
      type: 'BUSINESS',
      months: calculateToNowFrom(startInBusiness)
    },
  ],
  [
    {
      name: 'Vue.js',
      type: 'SELF',
      months: calculateSelfSpan(startSelf) + 2 // 少し独自に触ってきた期間
    },
  ],
]
