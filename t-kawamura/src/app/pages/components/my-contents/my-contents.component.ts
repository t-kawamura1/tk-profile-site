import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {simpleZenn} from '@ng-icons/simple-icons';

@Component({
  selector: 'tk-my-contents',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgIconComponent,
  ],
  providers: [
    provideIcons({ simpleZenn })
  ],
  templateUrl: './my-contents.component.html',
  styleUrls: ['./my-contents.component.scss']
})
export class MyContentsComponent {
  readonly github = faGithub
  readonly twitter = faTwitterSquare
}
