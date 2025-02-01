import { Component } from '@angular/core';
import { LandingpageComponent } from "../landingpage/landingpage.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ReferencesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
