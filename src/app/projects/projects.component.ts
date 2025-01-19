import { Component } from '@angular/core';
import { SingleprojectComponent } from "../shared/components/singleproject/singleproject.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleprojectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
