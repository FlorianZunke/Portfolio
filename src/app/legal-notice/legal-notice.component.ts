import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule ,HeaderComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {


  deTemplate: string = `<div class='impressum padding'>
    <h1>Impressum</h1>
    <p>Angaben gemäß § 5 DDG</p>
    <p>Florian Zunke <br>
        Albert-Schweitzer-Straße 25A<br>
        14929 Treuenbrietzen <br>
    </p>
    <p> <strong>Vertreten durch: </strong><br>
        Florian Zunke<br>
    </p>
    <p><strong>Kontakt:</strong> <br>
        Telefon: 0160-8102910<br>
        E-Mail: <a href='mailto:florianzunke@gmx.de'>florianzunke&#64;gmx.de</a><br></p>
    <p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Links</strong><br><br>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
        Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
        dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
        Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
        Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies,
        soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
        Dritte weitergegeben. <br>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich. <br>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
        Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.<br>
    </p><br>
    Website-Impressum von <a href="https://websitewissen.com" rel="dofollow">WebsiteWissen.com</a>, dem Ratgeber für
    Website-Erstellung, Homepage-Baukästen und Shopsysteme. Rechtstext von der <a
        href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
</div>`;

enTemplate: string = ``;

currentTemplate: string = this.deTemplate;

  constructor(private translate: TranslateService, public translationService: TranslationService) {}

  
  ngOnInit(): void {
    this.loadTemplateBasedOnLanguage();
    this.translate.onLangChange.subscribe(() => {
      this.loadTemplateBasedOnLanguage();
    });
  }


  loadTemplateBasedOnLanguage() {
    const currentLang = this.translationService.getCurrentLanguage();
    if (currentLang === 'de') {
      this.currentTemplate = this.deTemplate;
    } else if (currentLang === 'en') {
      this.currentTemplate = this.enTemplate;
    }
  }


  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.loadTemplateBasedOnLanguage();
  }
}
