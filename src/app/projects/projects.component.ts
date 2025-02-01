import { Component, inject } from '@angular/core';
import { SingleprojectComponent } from "../shared/components/singleproject/singleproject.component";
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleprojectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = inject(ProjectService)
}
