import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-singleproject',
  standalone: true,
  imports: [],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {

  projects = inject(ProjectService);



}
