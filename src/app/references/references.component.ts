import { Component } from '@angular/core';


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

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
      name: 'M.Marrocu',
      position: 'Frontend Entwickler',
      zitat: 'Florian ist äußerst kreativ und findet immer Lösungsvorschläge, die das Team voranbringen. Seine Hilfsbereitschaft zeichnet ihn aus – er unterstützt andere jederzeit mit Rat und Tat. Durch sein starkes Engagement sorgt er dafür, dass Projekte erfolgreich umgesetzt werden.'
    },
  ]
}
