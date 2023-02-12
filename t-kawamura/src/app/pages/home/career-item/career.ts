export type Career = {
  year: string,
  summary: string,
}

const current = new Date()

export const careers: Career[] = [
  {
    year: '1991年',
    summary: '京都で爆誕'
  },
  {
    year: '2010年',
    summary: '大学生活スタート！'
  },
  {
    year: '2016年3月',
    summary: '大学院を卒業'
  },
  {
    year: '2016年4月',
    summary: '公務員生活スタート！'
  },
  {
    year: '2021年3月',
    summary: '公務員を円満退職'
  },
  {
    year: '2021年11月',
    summary: '株式会社Sales Navi 入社！'
  },
  {
    year: `${current.getFullYear()}年${current.getMonth() + 1}月現在`,
    summary: '同社にて研鑽中'
  },
]
