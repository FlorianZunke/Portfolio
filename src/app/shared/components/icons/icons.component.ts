import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  
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
