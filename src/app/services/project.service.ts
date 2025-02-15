import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects = [
    {
      projectName: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skills: 'Javascript | Firebase | HTML | CSS',
      imgSrc: 'assets/icons/join_black-white.png',
      link: '',
    },
    {
      projectName: 'Sharkie',
      description: 'A simple Jump-and-Run game based on object-oriented approach. Help Sharkie to find coins and poision bottles to fight against the killer whale.',
      skills: 'Javascript | HTML | CSS',
      imgSrc: 'assets/icons/join_black-white.png',
      link: '',
    },
    {
      projectName: 'Pokedex',
      description: 'Based on the PokeAPI a simple libary that provides and catalogues pokemon informations.',
      skills: 'Javascript | Api | HTML | CSS',
      imgSrc: 'assets/icons/join_black-white.png',
      link: '',
    }
  ]
}
