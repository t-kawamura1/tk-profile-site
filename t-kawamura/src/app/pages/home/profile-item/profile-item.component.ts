import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-profile-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-item">
      <div class="profile-inner">
        <div class="profile-image">
          <img src="/assets/my-image.jpg" alt="作成者のイメージ" class="my-image">
        </div>
        <div class="profile-text">
          <div class="my-name">T.Kawamura</div>
          <p>
            {{ currentYear }}年現在、
            <a href="https://www.salesnavi.co.jp/" target="_blank" rel="noopenr">
              株式会社Sales Navi
            </a>
            にて営業SaaS開発に従事。
          </p>
          <p>京都出身、大阪在住。</p>
          <p>趣味はJリーグ観戦。ガンバ大阪サポーター。</p>
          <p>「世の中を効率的に、おもしろく」が座右の銘。</p>
          <p>良いコードとは？良い設計とは？探求の日々を過ごしています。</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent {
  readonly currentYear = new Date().getFullYear()
}
