import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-profile-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-item">
      <div class="profile-inner">
        <div class="profile-image-item">
          <img src="/assets/my-image.jpg" alt="作成者のイメージ" class="my-image">
        </div>
        <div class="profile-item">
          <div class="my-name">河村 智之</div>
          <p>{{ currentYear }}現在、とある営業SaaSの自社開発企業に勤務。</p>
          <p>京都府出身、大阪在住</p>
          <p>趣味はJリーグ観戦。ガンバ大阪サポーター。</p>
          <p>「世の中を効率的に、おもしろく」が座右の銘。</p>
          <p>良いコードとは？良い設計とは？探求する日々を過ごしています。</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent {
  readonly currentYear = new Date().getFullYear()
}
