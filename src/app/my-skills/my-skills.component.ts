import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private translate: TranslateService) {}

  skills = [
    {
      imgSrc: 'assets/icons/Angular.png',
      skillName: 'Angular'
    },
    {
      imgSrc: 'assets/icons/Typescript.png',
      skillName: 'TypeScript'
    }, 
    {
      imgSrc: 'assets/icons/Javascript.png',
      skillName: 'JavaScript'
    }, 
    {
      imgSrc: 'assets/icons/html.png',
      skillName: 'HTML'
    }, 
    {
      imgSrc: 'assets/icons/css.png',
      skillName: 'CSS'
    }, 
    {
      imgSrc: 'assets/icons/Firebase.png',
      skillName: 'Firebase'
    }, 
    {
      imgSrc: 'assets/icons/git.png',
      skillName: 'Git'
    }, 
    {
      imgSrc: 'assets/icons/scrum.png',
      skillName: 'Scrum'
    }, 
    {
      imgSrc: 'assets/icons/Api.png',
      skillName: 'RestApi'
    },
    {
      imgSrc: 'assets/icons/Material_Design.png',
      skillName: 'Material Design'
    },
  ]
}

