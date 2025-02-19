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

enTemplate: string = `<div class='impressum padding'>
    <h1>Imprint</h1>
    <p>Information pursuant to § 5 DDG</p>
    <p>Florian Zunke <br>
        Albert-Schweitzer-Straße 25A<br>
        14929 Treuenbrietzen <br>
    </p>
    <p> <strong>Represented by: </strong><br>
        Florian Zunke<br>
    </p>
    <p><strong>Contact:</strong> <br>
        Phone: 0160-8102910<br>
        Email: <a href='mailto:florianzunke@gmx.de'>florianzunke&#64;gmx.de</a><br></p>
    <p><strong>Disclaimer: </strong><br><br><strong>Liability for Links</strong><br><br>
        Our website contains links to external third-party websites, over whose content we have no control. Therefore,
        we cannot assume any liability for these external contents. The respective provider or operator of the pages is
        always responsible for the content of the linked pages. The linked pages were checked for possible legal
        violations at the time of linking. No illegal content was recognizable at the time of linking. However, permanent
        content monitoring of the linked pages is not reasonable without concrete evidence of a violation of the law. If
        we become aware of any legal violations, we will remove such links immediately.<br><br><strong>Copyright</strong><br><br>
        The content and works created by the site operators on these pages are subject to German copyright law.
        The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require
        the written consent of the respective author or creator. Downloads and copies of this site are only permitted
        for private, non-commercial use. If the content on this site was not created by the operator, the copyrights of
        third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become
        aware of a copyright infringement, please inform us accordingly. If we become aware of any legal violations,
        we will remove such content immediately.<br><br><strong>Data Protection</strong><br><br>
        The use of our website is generally possible without providing personal data. As far as personal data (e.g.,
        name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis, as far as
        possible. This data will not be passed on to third parties without your explicit consent. <br>
        We point out that data transmission over the Internet (e.g., communication by email) may have security
        vulnerabilities. A complete protection of data against access by third parties is not possible. <br>
        The use of contact data published within the framework of the imprint obligation by third parties for sending
        unsolicited advertising and information materials is hereby expressly prohibited. The operators of the pages
        expressly reserve the right to take legal action in the event of unsolicited advertising information, such as
        spam emails.<br>
    </p><br>
    Website imprint by <a href="https://websitewissen.com" rel="dofollow">WebsiteWissen.com</a>, the guide for
    website creation, website builders, and shop systems. Legal text from <a
        href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
</div>`;


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
