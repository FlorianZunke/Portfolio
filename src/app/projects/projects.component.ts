import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  translate = inject(TranslateService);

  projects = signal([
    {
      projectName: 'DaBubble',
      descriptionKey: 'projects.da-bubble',
      description: '',
      skills: 'Typescript | Angular | HTML | SCSS',
      imgSrc: 'assets/img/da-bubble.jpg',
      link: '//dabubble.florian-zunke.de/',
    },
    {
      projectName: 'Join',
      descriptionKey: 'projects.join',
      description: '',
      skills: 'Javascript | Firebase | HTML | CSS',
      imgSrc: 'assets/icons/join_black-white.png',
      link: '//join.florian-zunke.de/',
    },
    {
      projectName: 'Sharkie',
      descriptionKey: 'projects.sharkie',
      description: '',
      skills: 'Javascript | HTML | CSS',
      imgSrc: 'assets/img/sharkie.png',
      link: '//sharkie.florian-zunke.de/',
    },
    {
      projectName: 'Pokedex',
      descriptionKey: 'projects.pokedex',
      description: '',
      skills: 'Javascript | Api | HTML | CSS',
      imgSrc: 'assets/img/pokedex.png',
      link: '//pokedex.florian-zunke.de/',
    }
  ]);

  projectsLength = computed(() => this.projects().length); // Signal für die Länge des Arrays

  constructor() {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations()
    });
  }

  private loadTranslations() {
    const updatedProjects = this.projects().map(project => ({
      ...project,
      description: this.translate.instant(project.descriptionKey)
    }));
    this.projects.set(updatedProjects);
  }
}