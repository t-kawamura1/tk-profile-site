# スキルの表現の仕方・方針メモ

## 何を表すべき？
- 言語・FWをロゴ単位
    - TypeScript/JavaScript
    - Java
    - Ruby
    - Sass
    - HTML
    - Angular
    - Vue.js
    - Docker
- 使用年数
- その言語で何ができる？
- 設計・コーディング時の心掛け
    - ポリモーフィズム
    - OOP
    - 実装前・後のリファクタリング
    - コンポーネントの責務分離
    - インターフェースと実装の分離
    - 問題・課題を小さく切り分ける思考・解決能力
    - 副作用をなくす・イミュータブルな実装
    - DDDの実践
    - スクラム開発実践
    - フルリモートワークでの開発・コミュニケーション
    - 詳細度を意識したCSSコーディング
    - ユニットテストを書く習慣
    - 型の再利用
    - パフォーマンスを意識したコーディング・パフォーマンスチューニング（これから）
    - 設計・実装背景のドキュメント化

* 定性的な内容はある程度カテゴライズ・まとめた上で、アイコンと一緒にアイテム化
* 言語・FWは経験年数をパラメータ化・グラフ化（全長は独学＋業務の合計年数、棒グラフ？で内訳を同軸で色で区別）

## 言語・FWごとの具体内容
- プログラミング学習開始: 2021.7

- javascript
  独学10ヶ月　業務1年3ヶ月
- typescript / angular
  業務1年3ヶ月
- vue
  独学8ヶ月
- ruby / rails
  1年3ヶ月
- HTML / css
  2年7ヶ月
- Java
  簡単なコードが書ける、読めるレベル
- Docker
  2年3ヶ月

```ts
type Langs =
  | 'HTML/CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'Angular'
  | 'Vue.js'
  | 'Ruby on Rails'
  | 'Java'
  | 'Docker'

type ProgrammingExperience = {
  name: Langs,
  type: 'SELF' | 'BUSINESS',
  months: number,
}[]
```
