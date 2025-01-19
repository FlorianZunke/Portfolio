import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
