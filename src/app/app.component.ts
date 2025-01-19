import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ContactComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
