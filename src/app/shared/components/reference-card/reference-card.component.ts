import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-card',
  standalone: true,
  imports: [],
  templateUrl: './reference-card.component.html',
  styleUrl: './reference-card.component.scss'
})
export class ReferenceCardComponent {

  referenceDatas = [
    {
      name: 'A.Albrecht',
      position: 'Team Partner',
      zitat: 'Die Zusammenarbeit mit Florian war stets kommunikativ und lösungsorientiert. Ich konnte mich auf ihn verlassen und habe seine offene und freundliche Art geschätzt. Ich freue mich auf zukünftige Projekte mit ihm.'
    },
    {
      name: 'J.Natzschka ',
      position: 'Team Partner',
      zitat: 'Florian hat während unserer Projektarbeit hervorragende Arbeit geleistet. Seine Fähigkeit, komplexe Logik in verlässlichen Code zu übertragen, hat unser Projekt maßgeblich vorangebracht. Des weiteren schätze ich besonders seine Zuverlässigkeit und die angenehme Zusammenarbeit mit ihm.'
    },
    {
      name: 'A.Albrecht',
      position: 'Team Partner',
      zitat: 'Die Zusammenarbeit mit Florian war stets kommunikativ und lösungsorientiert. Ich konnte mich auf ihn verlassen und habe seine offene und freundliche Art geschätzt. Ich freue mich auf zukünftige Projekte mit ihm.'
    },
  ]
}
