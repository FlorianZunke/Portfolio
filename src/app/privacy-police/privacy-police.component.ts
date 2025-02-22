import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'app-privacy-police',
    standalone: true,
    imports: [CommonModule, HeaderComponent, TranslateModule, FooterComponent],
    templateUrl: './privacy-police.component.html',
    styleUrl: './privacy-police.component.scss'
})
export class PrivacyPoliceComponent {

    deTemplate: string = `<section class="padding">
    <h1>Datenschutzerklärung</h1>
    <h2 id="m4158">Präambel</h2>
    <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten
        (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der
        Bereitstellung unserer Applikation verarbeiten.</p>
    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
    
    <p>Stand: 16. Februar 2025</p>
    <h2>Inhaltsübersicht</h2>
    <ul class="index">
        <li><a class="index-link" href="#m4158">Präambel</a></li>
        <li><a class="index-link" href="#m3">Verantwortlicher</a></li>
        <li><a class="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
        <li><a class="index-link" href="#m2427">Maßgebliche Rechtsgrundlagen</a></li>
        <li><a class="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
        <li><a class="index-link" href="#m25">Übermittlung von personenbezogenen Daten</a></li>
        <li><a class="index-link" href="#m12">Allgemeine Informationen zur Datenspeicherung und Löschung</a></li>
        <li><a class="index-link" href="#m10">Rechte der betroffenen Personen</a></li>
        <li><a class="index-link" href="#m225">Bereitstellung des Onlineangebots und Webhosting</a></li>
        <li><a class="index-link" href="#m134">Einsatz von Cookies</a></li>
        <li><a class="index-link" href="#m367">Registrierung, Anmeldung und Nutzerkonto</a></li>
        <li><a class="index-link" href="#m432">Community Funktionen</a></li>
        <li><a class="index-link" href="#m182">Kontakt- und Anfrageverwaltung</a></li>
        <li><a class="index-link" href="#m638">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</a></li>
        <li><a class="index-link" href="#m136">Präsenzen in sozialen Netzwerken (Social Media)</a></li>
        <li><a class="index-link" href="#m328">Plug-ins und eingebettete Funktionen sowie Inhalte</a></li>
        <li><a class="index-link" href="#m42">Begriffsdefinitionen</a></li>
    </ul>
    <h2 id="m3">Verantwortlicher</h2>
    <p>Zunke Florian,<br>Albert-Schweitzer-Straße 25a,<br>14929 Treuenbrietzen, Deutschland</p>
    <p>E-Mail-Adresse: <a href="mailto:florianzunk@gmx.de">florianzunk&#64;gmx.de</a></p>
    <p>Impressum: <a href="https://florian-zunke.de/legalNotice" target="_blank">https://florian-zunke.de/legalNotice</a>
    </p>
    
    <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
    <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und
        verweist auf die betroffenen Personen.</p>
    <h3>Arten der verarbeiteten Daten</h3>
    <ul>
        <li>Bestandsdaten.</li>
        <li>Kontaktdaten.</li>
        <li>Inhaltsdaten.</li>
        <li>Nutzungsdaten.</li>
        <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
        <li>Protokolldaten.</li>
    </ul>
    <h3>Kategorien betroffener Personen</h3>
    <ul>
        <li>Kommunikationspartner.</li>
        <li>Nutzer.</li>
    </ul>
    <h3>Zwecke der Verarbeitung</h3>
    <ul>
        <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.</li>
        <li>Kommunikation.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Direktmarketing.</li>
        <li>Organisations- und Verwaltungsverfahren.</li>
        <li>Feedback.</li>
        <li>Marketing.</li>
        <li>Profile mit nutzerbezogenen Informationen.</li>
        <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
        <li>Informationstechnische Infrastruktur.</li>
        <li>Öffentlichkeitsarbeit.</li>
        <li>Absatzförderung.</li>
    </ul>
    <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
    <p><strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im Folgenden erhalten Sie eine Übersicht der
        Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis,
        dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
        Datenschutzerklärung mit.</p>
    <ul>
        <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung
            in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere
            bestimmte Zwecke gegeben.</li>
        <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> - Die
            Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
        <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die Verarbeitung ist zur Wahrung
            der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die
            Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten
            verlangen, nicht überwiegen.</li>
    </ul>
    <p><strong>Nationale Datenschutzregelungen in Deutschland: </strong>Zusätzlich zu den Datenschutzregelungen der DSGVO
        gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor
        Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
        insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
        Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung
        sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können
        Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>
    <p><strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese Datenschutzhinweise dienen sowohl der
        Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund
        bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der
        DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung" von
        „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte Personendaten" werden die in der DSGVO
        verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere
        Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des
        Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.</p>
    
    <h2 id="m27">Sicherheitsmaßnahmen</h2>
    <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der
        Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
        unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
        Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
        gewährleisten.</p>
    <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
        Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der
        Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
        eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung
        der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung
        bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
        Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
    <p>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer, die
        über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die
        TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die
        Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die
        zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch
        die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL,
        gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch
        ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als
        ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.</p>
    
    <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
    <p>Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen,
        rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber
        offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister gehören
        oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In solchen Fällen beachten wir die
        gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer
        Daten dienen, mit den Empfängern Ihrer Daten ab.</p>
    
    <h2 id="m12">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
    <p>Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die
        zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung
        bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr
        benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine
        längere Aufbewahrung oder Archivierung der Daten erfordern.</p>
    <p>Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren
        Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer
        Personen, entsprechend archiviert werden.</p>
    <p>Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell
        für bestimmte Verarbeitungsprozesse gelten.</p>
    <p>Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die längste Frist
        maßgeblich.</p>
    <p>Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie
        automatisch am Ende des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall laufender
        Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das fristauslösende Ereignis der Zeitpunkt des
        Wirksamwerdens der Kündigung oder sonstige Beendigung des Rechtsverhältnisses.</p>
    <p>Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer
        Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.</p>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Aufbewahrung und Löschung von Daten: </strong>Die folgenden allgemeinen Fristen gelten für die
            Aufbewahrung und Archivierung nach deutschem Recht:<ul>
                <li>10 Jahre - Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte,
                    Eröffnungsbilanz sowie die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und sonstigen
                    Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1
                    i.V.m. Abs. 4 HGB).</li>
                <li>8 Jahre - Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3
                    Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).</li>
                <li>6 Jahre - Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe, Wiedergaben der
                    abgesandten Handels- oder Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung von
                    Bedeutung sind, z. B. Stundenlohnzettel, Betriebsabrechnungsbögen, Kalkulationsunterlagen,
                    Preisauszeichnungen, aber auch Lohnabrechnungsunterlagen, soweit sie nicht bereits Buchungsbelege sind
                    und Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4
                    HGB).</li>
                <li>3 Jahre - Daten, die erforderlich sind, um potenzielle Gewährleistungs- und Schadensersatzansprüche oder
                    ähnliche vertragliche Ansprüche und Rechte zu berücksichtigen sowie damit verbundene Anfragen zu
                    bearbeiten, basierend auf früheren Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die
                    Dauer der regulären gesetzlichen Verjährungsfrist von drei Jahren gespeichert (§§ 195, 199 BGB).</li>
            </ul>
        </li>
    </ul>
    <h2 id="m10">Rechte der betroffenen Personen</h2>
    <p>Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
        sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
    <ul>
        <li><strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs.
                1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
                betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
                es mit solcher Direktwerbung in Verbindung steht.</strong></li>
        <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu
            widerrufen.</li>
        <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende
            Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten
            entsprechend den gesetzlichen Vorgaben.</li>
        <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
            Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu
            verlangen.</li>
        <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen
            Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach
            Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
        <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns
            bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und
            maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.</li>
        <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen
            verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde,
            insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen
            Daten gegen die Vorgaben der DSGVO verstößt.</li>
    </ul>
    
    <h2 id="m225">Bereitstellung des Onlineangebots und Webhosting</h2>
    <p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck
        verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste
        an den Browser oder das Endgerät der Nutzer zu übermitteln.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
            Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und
            Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
            beteiligte Personen); Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder
            Zugriffszeiten.). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
            betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).</li>
        <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit;
            Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen
            Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung".</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz: </strong>Für die Bereitstellung unseres
            Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden
            Serveranbieter (auch "Webhoster" genannt) mieten oder anderweitig beziehen; <span
                class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                DSGVO).</span></li>
        <li><strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf unser Onlineangebot wird in Form von
            sogenannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und der Name der
            abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
            erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
            Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu
            Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall
            von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und
            ihre Stabilität sicherzustellen; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f) DSGVO). </span><strong>Löschung von Daten:</strong> Logfile-Informationen werden für
            die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere
            Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der
            Löschung ausgenommen.</li>
        <li><strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen
            ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen der
            Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z. B. die beteiligten
            Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken
            der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet grundsätzlich
            nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber
            (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den Servern, von
            denen sie abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der E-Mails zwischen dem
            Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen; <span
                class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                DSGVO).</span></li>
        <li><strong>ALL-INKL: </strong>Leistungen auf dem Gebiet der Bereitstellung von informationstechnischer
            Infrastruktur und verbundenen Dienstleistungen (z. B. Speicherplatz und/oder Rechenkapazitäten);
            <strong>Dienstanbieter:</strong> ALL-INKL.COM - Neue Medien Münnich, Inhaber: René Münnich, Hauptstraße 68,
            02742 Friedersdorf, Deutschland; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong> <a href="https://all-inkl.com/"
                target="_blank">https://all-inkl.com/</a>; <strong>Datenschutzerklärung:</strong> <a
                href="https://all-inkl.com/datenschutzinformationen/"
                target="_blank">https://all-inkl.com/datenschutzinformationen/</a>.
            <strong>Auftragsverarbeitungsvertrag:</strong> Wird vom Dienstanbieter bereitgestellt.</li>
    </ul>
    <h2 id="m134">Einsatz von Cookies</h2>
    <p>Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen
        auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken
        der Funktionsfähigkeit, der Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der
        Besucherströme. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab
        die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen.
        Dies gilt, wenn das Speichern und Auslesen von Informationen unerlässlich ist, um ausdrücklich angeforderte Inhalte
        und Funktionen bereitstellen zu können. Dazu zählen etwa die Speicherung von Einstellungen sowie die Sicherstellung
        der Funktionalität und Sicherheit unseres Onlineangebots. Die Einwilligung kann jederzeit widerrufen werden. Wir
        informieren klar über deren Umfang und welche Cookies genutzt werden.</p>
    <p><strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Ob wir personenbezogene Daten mithilfe von
        Cookies verarbeiten, hängt von einer Einwilligung ab. Liegt eine Einwilligung vor, dient sie als Rechtsgrundlage.
        Ohne Einwilligung stützen wir uns auf unsere berechtigten Interessen, die vorstehend in diesem Abschnitt und im
        Kontext der jeweiligen Dienste und Verfahren erläutert sind.</p>
    <p><strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies
        unterschieden:</p>
    <ul>
        <li><strong>Temporäre Cookies (auch: Session- oder Sitzungscookies):</strong> Temporäre Cookies werden spätestens
            gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und sein Endgerät (z. B. Browser oder mobile
            Applikation) geschlossen hat.</li>
        <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Endgeräts
            gespeichert. So können beispielsweise der Log-in-Status gespeichert und bevorzugte Inhalte direkt angezeigt
            werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mithilfe von Cookies erhobenen
            Nutzerdaten zur Reichweitenmessung Verwendung finden. Sofern wir Nutzern keine expliziten Angaben zur Art und
            Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten sie davon
            ausgehen, dass diese permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.</li>
    </ul>
    <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out): </strong>Nutzer können die von ihnen abgegebenen
        Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen
        Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres Browsers, erklären.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
            Zeitangaben, Identifikationsnummern, beteiligte Personen).</li>
        <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir setzen eine
            Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von Cookies oder zu den
            im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern eingeholt wird. Dieses Verfahren
            dient der Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen, insbesondere bezogen auf
            den Einsatz von Cookies und vergleichbaren Technologien, die zur Speicherung, zum Auslesen und zur Verarbeitung
            von Informationen auf den Endgeräten der Nutzer eingesetzt werden. Im Rahmen dieses Verfahrens werden die
            Einwilligungen der Nutzer für die Nutzung von Cookies und die damit verbundenen Verarbeitungen von
            Informationen, einschließlich der im Einwilligungs-Management-Verfahren genannten spezifischen Verarbeitungen
            und Anbieter, eingeholt. Die Nutzer haben zudem die Möglichkeit, ihre Einwilligungen zu verwalten und zu
            widerrufen. Die Einwilligungserklärungen werden gespeichert, um eine erneute Abfrage zu vermeiden und den
            Nachweis der Einwilligung gemäß der gesetzlichen Anforderungen führen zu können. Die Speicherung erfolgt
            serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie) oder mittels vergleichbarer Technologien, um
            die Einwilligung einem spezifischen Nutzer oder dessen Gerät zuordnen zu können. Sofern keine spezifischen
            Angaben zu den Anbietern von Einwilligungs-Management-Diensten vorliegen, gelten folgende allgemeine Hinweise:
            Die Dauer der Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer
            Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den Angaben zum Umfang der
            Einwilligung (z. B. betreffende Kategorien von Cookies und/oder Diensteanbieter) sowie Informationen über den
            Browser, das System und das verwendete Endgerät gespeichert wird; <span
                class=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</span></li>
    </ul>
    <h2 id="m367">Registrierung, Anmeldung und Nutzerkonto</h2>
    <p>Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die erforderlichen
        Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf Grundlage vertraglicher
        Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Nutzername,
        Passwort sowie eine E-Mail-Adresse).</p>
    <p>Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos
        speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage
        unserer berechtigten Interessen als auch jener der Nutzer an einem Schutz vor Missbrauch und sonstiger unbefugter
        Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur Verfolgung
        unserer Ansprüche erforderlich oder es besteht eine gesetzliche Verpflichtung hierzu.</p>
    <p>Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z. B. technische Änderungen, per E-Mail
        informiert werden.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
            Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern);
            Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen,
            wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und
            Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme,
            Interaktionen mit Inhalten und Funktionen). Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von
            Daten oder Zugriffszeiten.).</li>
        <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung vertraglicher
            Pflichten; Sicherheitsmaßnahmen; Organisations- und Verwaltungsverfahren. Bereitstellung unseres Onlineangebotes
            und Nutzerfreundlichkeit.</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung". Löschung nach Kündigung.</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Registrierung mit Pseudonymen: </strong>Nutzer dürfen statt Klarnamen Pseudonyme als Nutzernamen
            verwenden; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span></li>
        <li><strong>Profile der Nutzer sind öffentlich: </strong>Die Profile der Nutzer sind öffentlich sichtbar und
            zugänglich.</li>
        <li><strong>Löschung von Daten nach Kündigung: </strong>Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren
            Daten im Hinblick auf das Nutzerkonto, vorbehaltlich einer gesetzlichen Erlaubnis, Pflicht oder Einwilligung der
            Nutzer, gelöscht; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span></li>
        <li><strong>Keine Aufbewahrungspflicht für Daten: </strong>Es obliegt den Nutzern, ihre Daten bei erfolgter
            Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer gespeicherte
            Daten des Nutzers unwiederbringlich zu löschen; <span class=""><strong>Rechtsgrundlagen:</strong>
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span></li>
    </ul>
    <h2 id="m432">Community Funktionen</h2>
    <p>Die von uns bereitgestellten Community Funktionen erlauben es Nutzern miteinander in Konversationen oder sonst
        miteinander in einen Austausch zu treten. Hierbei bitten wir zu beachten, dass die Nutzung der Communityfunktionen
        nur unter Beachtung der geltenden Rechtslage, unserer Bedingungen und Richtlinien sowie der Rechte anderer Nutzer
        und Dritter gestattet ist.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
            Kontaktinformationen, Kundennummer, etc.). Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
            Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und
            Funktionen).</li>
        <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung vertraglicher
            Pflichten; Sicherheitsmaßnahmen. Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung".</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Beiträge der Nutzer sind öffentlich: </strong>Die von Nutzern erstellten Beiträge und Inhalte sind
            öffentlich sichtbar und zugänglich; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span></li>
        <li><strong>Recht zur Löschung von Inhalten und Informationen: </strong>Die Löschung von Beiträgen, Inhalten oder
            Angaben der Nutzer ist nach einer sachgerechten Abwägung im erforderlichen Umfang zulässig soweit konkrete
            Anhaltspunkte dafür bestehen, dass sie einen Verstoß gegen gesetzliche Regeln, unsere Vorgaben oder Rechte
            Dritter darstellen; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span></li>
        <li><strong>Schutz eigener Daten: </strong>Die Nutzer entscheiden selbst, welche Daten sie über sich innerhalb
            unseres Onlineangebotes preisgeben. Zum Beispiel, wenn Nutzer Angaben zur eigenen Person machen oder an
            Konversationen teilnehmen. Wir bitten die Nutzer ihre Daten zu schützen und persönliche Daten nur mit Bedacht
            und nur im erforderlichen Umfang zu veröffentlichen. Insbesondere bitten wir die Nutzer zu beachten, dass sie
            die Zugangsdaten ganz besonders schützen und sichere Passwörter verwenden müssen (d. h. vor allem möglichst
            lange und zufällige Zeichenkombinationen); <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung
                und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span></li>
    </ul>
    <h2 id="m182">Kontakt- und Anfrageverwaltung</h2>
    <p>Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im
        Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit
        dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
            Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern);
            Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen,
            wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und
            Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme,
            Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
            Zeitangaben, Identifikationsnummern, beteiligte Personen).</li>
        <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Kommunikation; Organisations- und Verwaltungsverfahren; Feedback
            (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und
            Nutzerfreundlichkeit.</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung".</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Kontaktformular: </strong>Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder anderen
            Kommunikationswegen, verarbeiten wir die uns übermittelten personenbezogenen Daten zur Beantwortung und
            Bearbeitung des jeweiligen Anliegens. Dies umfasst in der Regel Angaben wie Name, Kontaktinformationen und
            gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur angemessenen Bearbeitung erforderlich
            sind. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der Kontaktaufnahme und Kommunikation;
            <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1
                S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span></li>
    </ul>
    <h2 id="m638">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</h2>
    <p>Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über diverse Kanäle, wie z. B.
        E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.</p>
    <p>Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der werblichen Kommunikation
        jederzeit zu widersprechen.</p>
    <p>Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen Berechtigung erforderlichen Daten zur
        Kontaktaufnahme oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der
        Grundlage unserer berechtigten Interessen. Die Verarbeitung dieser Daten ist auf den Zweck einer möglichen Abwehr
        von Ansprüchen beschränkt. Auf der Grundlage des berechtigten Interesses, den Widerruf bzw. Widerspruch der Nutzer
        dauerhaft zu beachten, speichern wir ferner die zur Vermeidung einer erneuten Kontaktaufnahme erforderlichen Daten
        (z. B. je nach Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
            Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern).
            Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen,
            wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).</li>
        <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z. B. per E-Mail oder postalisch); Marketing.
            Absatzförderung.</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung".</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
    </ul>
    <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
    <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den
        dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.</p>
    <p>Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können.
        Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der Nutzerrechte
        erschwert werden könnte.</p>
    <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke
        verarbeitet. So können beispielsweise anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer
        Nutzungsprofile erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa Werbeanzeigen innerhalb
        und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Daher werden im
        Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der
        Nutzer gespeichert werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern
        verwendeten Geräten gespeichert werden (insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und dort
        eingeloggt sind).</p>
    <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-out)
        verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.</p>
    <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am
        effektivsten bei den Anbietern geltend gemacht werden können. Nur Letztere haben jeweils Zugriff auf die Nutzerdaten
        und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann
        können Sie sich an uns wenden.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern);
            Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen,
            wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung). Nutzungsdaten (z. B. Seitenaufrufe und
            Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme,
            Interaktionen mit Inhalten und Funktionen).</li>
        <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Kommunikation; Feedback (z. B. Sammeln von Feedback via
            Online-Formular). Öffentlichkeitsarbeit.</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung".</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>LinkedIn: </strong>Soziales Netzwerk - Wir sind gemeinsam mit LinkedIn Irland Unlimited Company für die
            Erhebung (jedoch nicht die weitere Verarbeitung) von Daten der Besucher verantwortlich, die zur Erstellung der
            „Page-Insights" (Statistiken) unserer LinkedIn-Profile genutzt werden. Zu diesen Daten gehören Informationen
            über die Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie interagieren, sowie die von ihnen
            vorgenommenen Handlungen. Außerdem werden Details über die genutzten Geräte erfasst, wie z. B. IP-Adressen,
            Betriebssystem, Browsertyp, Spracheinstellungen und Cookie-Daten, sowie Angaben aus den Nutzerprofilen, wie
            Berufsfunktion, Land, Branche, Hierarchieebene, Unternehmensgröße und Beschäftigungsstatus.
            Datenschutzinformationen zur Verarbeitung von Nutzerdaten durch LinkedIn können den Datenschutzhinweisen von
            LinkedIn entnommen werden: <a href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank">https://www.linkedin.com/legal/privacy-policy.</a><br>Wir haben mit LinkedIn Irland eine
            spezielle Vereinbarung geschlossen („Page Insights Joint Controller Addendum", <a
                href="https://legal.linkedin.com/pages-joint-controller-addendum"
                target="_blank">https://legal.linkedin.com/pages-joint-controller-addendum</a>), in der insbesondere
            geregelt wird, welche Sicherheitsmaßnahmen LinkedIn beachten muss und in der LinkedIn sich bereit erklärt hat,
            die Rechte der Betroffenen zu erfüllen (d. h. Nutzer können z. B. Auskunfts- oder Löschungsanfragen direkt an
            LinkedIn richten). Die Rechte der Nutzer (insbesondere das Recht auf Auskunft, Löschung, Widerspruch und
            Beschwerde bei der zuständigen Aufsichtsbehörde) werden durch die Vereinbarungen mit LinkedIn nicht
            eingeschränkt. Die gemeinsame Verantwortlichkeit beschränkt sich auf die Erhebung und Übermittlung der Daten an
            LinkedIn Irland Unlimited Company, ein Unternehmen mit Sitz in der EU. Die weitere Verarbeitung der Daten
            obliegt ausschließlich LinkedIn Irland Unlimited Company, insbesondere was die Übermittlung der Daten an die
            Muttergesellschaft LinkedIn Corporation in den USA betrifft; <strong>Dienstanbieter:</strong> LinkedIn Ireland
            Unlimited Company, Wilton Place, Dublin 2, Irland; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte
                Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong> <a
                href="https://www.linkedin.com" target="_blank">https://www.linkedin.com</a>;
            <strong>Datenschutzerklärung:</strong> <a href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank">https://www.linkedin.com/legal/privacy-policy</a>; <strong>Grundlage
                Drittlandtransfers:</strong> Data Privacy Framework (DPF). <strong>Widerspruchsmöglichkeit
                (Opt-Out):</strong> <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                target="_blank">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</li>
    </ul>
    <h2 id="m328">Plug-ins und eingebettete Funktionen sowie Inhalte</h2>
    <p>Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer jeweiligen Anbieter
        (nachfolgend als „Drittanbieter" bezeichnet) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos
        oder Stadtpläne handeln (nachfolgend einheitlich als „Inhalte" bezeichnet).</p>
    <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da
        sie ohne IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung
        dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige
        Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte anzuwenden. Drittanbieter können ferner sogenannte
        Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons" bezeichnet) für statistische oder Marketingzwecke
        einsetzen. Durch die „Pixel-Tags" können Informationen, wie etwa der Besucherverkehr auf den Seiten dieser Website,
        ausgewertet werden. Die pseudonymen Informationen können darüber hinaus in Cookies auf dem Gerät der Nutzer
        gespeichert werden und unter anderem technische Auskünfte zum Browser und zum Betriebssystem, zu verweisenden
        Websites, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebots enthalten, aber auch mit solchen
        Informationen aus anderen Quellen verbunden werden.</p>
    <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um ihre Einwilligung in den Einsatz der
        Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar. Ansonsten werden die
        Nutzerdaten auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und
        empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
        Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>
    <ul class="m-elements">
        <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
            Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und
            Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
            beteiligte Personen).</li>
        <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit;
            Marketing. Profile mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).</li>
        <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen
            zur Datenspeicherung und Löschung". Speicherung von Cookies von bis zu 2 Jahren (Sofern nicht anders angegeben,
            können Cookies und ähnliche Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer
            gespeichert werden.).</li>
        <li class=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
    </ul>
    <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
    <ul class="m-elements">
        <li><strong>Google Fonts (Bereitstellung auf eigenem Server): </strong>Bereitstellung von Schriftarten-Dateien
            zwecks einer nutzerfreundlichen Darstellung unseres Onlineangebotes; <strong>Dienstanbieter:</strong> Die Google
            Fonts werden auf unserem Server gehostet, es werden keine Daten an Google übermittelt; <span
                class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                DSGVO).</span></li>
        <li><strong>LinkedIn-Plugins und -Inhalte: </strong>LinkedIn-Plugins und -Inhalte- Hierzu können z. B. Inhalte wie
            Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb
            von LinkedIn teilen können; <strong>Dienstanbieter:</strong> LinkedIn Ireland Unlimited Company, Wilton Place,
            Dublin 2, Irland; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f) DSGVO); </span><strong>Website:</strong> <a href="https://www.linkedin.com"
                target="_blank">https://www.linkedin.com</a>; <strong>Datenschutzerklärung:</strong> <a
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank">https://www.linkedin.com/legal/privacy-policy</a>;
            <strong>Auftragsverarbeitungsvertrag:</strong> <a href="https://legal.linkedin.com/dpa"
                target="_blank">https://legal.linkedin.com/dpa</a>; <strong>Grundlage Drittlandtransfers:</strong> Data
            Privacy Framework (DPF). <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> <a
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                target="_blank">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</li>
    </ul>
    <h2 id="m42">Begriffsdefinitionen</h2>
    <p>In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten
        Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten deren gesetzliche Definitionen.
        Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen.</p>
    <ul class="glossary">
        <li><strong>Bestandsdaten:</strong> Bestandsdaten umfassen wesentliche Informationen, die für die Identifikation und
            Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und ähnlichen Zuordnungen notwendig sind. Diese Daten
            können u.a. persönliche und demografische Angaben wie Namen, Kontaktinformationen (Adressen, Telefonnummern,
            E-Mail-Adressen), Geburtsdaten und spezifische Identifikatoren (Benutzer-IDs) beinhalten. Bestandsdaten bilden
            die Grundlage für jegliche formelle Interaktion zwischen Personen und Diensten, Einrichtungen oder Systemen,
            indem sie eine eindeutige Zuordnung und Kommunikation ermöglichen. </li>
        <li><strong>Inhaltsdaten:</strong> Inhaltsdaten umfassen Informationen, die im Zuge der Erstellung, Bearbeitung und
            Veröffentlichung von Inhalten aller Art generiert werden. Diese Kategorie von Daten kann Texte, Bilder, Videos,
            Audiodateien und andere multimediale Inhalte einschließen, die auf verschiedenen Plattformen und Medien
            veröffentlicht werden. Inhaltsdaten sind nicht nur auf den eigentlichen Inhalt beschränkt, sondern beinhalten
            auch Metadaten, die Informationen über den Inhalt selbst liefern, wie Tags, Beschreibungen, Autoreninformationen
            und Veröffentlichungsdaten </li>
        <li><strong>Kontaktdaten:</strong> Kontaktdaten sind essentielle Informationen, die die Kommunikation mit Personen
            oder Organisationen ermöglichen. Sie umfassen u.a. Telefonnummern, postalische Adressen und E-Mail-Adressen,
            sowie Kommunikationsmittel wie soziale Medien-Handles und Instant-Messaging-Identifikatoren. </li>
        <li><strong>Meta-, Kommunikations- und Verfahrensdaten:</strong> Meta-, Kommunikations- und Verfahrensdaten sind
            Kategorien, die Informationen über die Art und Weise enthalten, wie Daten verarbeitet, übermittelt und verwaltet
            werden. Meta-Daten, auch bekannt als Daten über Daten, umfassen Informationen, die den Kontext, die Herkunft und
            die Struktur anderer Daten beschreiben. Sie können Angaben zur Dateigröße, dem Erstellungsdatum, dem Autor eines
            Dokuments und den Änderungshistorien beinhalten. Kommunikationsdaten erfassen den Austausch von Informationen
            zwischen Nutzern über verschiedene Kanäle, wie E-Mail-Verkehr, Anrufprotokolle, Nachrichten in sozialen
            Netzwerken und Chat-Verläufe, inklusive der beteiligten Personen, Zeitstempel und Übertragungswege.
            Verfahrensdaten beschreiben die Prozesse und Abläufe innerhalb von Systemen oder Organisationen, einschließlich
            Workflow-Dokumentationen, Protokolle von Transaktionen und Aktivitäten, sowie Audit-Logs, die zur Nachverfolgung
            und Überprüfung von Vorgängen verwendet werden. </li>
        <li><strong>Nutzungsdaten:</strong> Nutzungsdaten beziehen sich auf Informationen, die erfassen, wie Nutzer mit
            digitalen Produkten, Dienstleistungen oder Plattformen interagieren. Diese Daten umfassen eine breite Palette
            von Informationen, die aufzeigen, wie Nutzer Anwendungen nutzen, welche Funktionen sie bevorzugen, wie lange sie
            auf bestimmten Seiten verweilen und über welche Pfade sie durch eine Anwendung navigieren. Nutzungsdaten können
            auch die Häufigkeit der Nutzung, Zeitstempel von Aktivitäten, IP-Adressen, Geräteinformationen und Standortdaten
            einschließen. Sie sind besonders wertvoll für die Analyse des Nutzerverhaltens, die Optimierung von
            Benutzererfahrungen, das Personalisieren von Inhalten und das Verbessern von Produkten oder Dienstleistungen.
            Darüber hinaus spielen Nutzungsdaten eine entscheidende Rolle beim Erkennen von Trends, Vorlieben und möglichen
            Problembereichen innerhalb digitaler Angebote </li>
        <li><strong>Personenbezogene Daten:</strong> "Personenbezogene Daten" sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person") beziehen; als
            identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
            zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B. Cookie)
            oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
            physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
            natürlichen Person sind. </li>
        <li><strong>Profile mit nutzerbezogenen Informationen:</strong> Die Verarbeitung von "Profilen mit nutzerbezogenen
            Informationen", bzw. kurz "Profilen" umfasst jede Art der automatisierten Verarbeitung personenbezogener Daten,
            die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die
            sich auf eine natürliche Person beziehen (je nach Art der Profilbildung können dazu unterschiedliche
            Informationen betreffend die Demographie, Verhalten und Interessen, wie z. B. die Interaktion mit Webseiten und
            deren Inhalten, etc.) zu analysieren, zu bewerten oder, um sie vorherzusagen (z. B. die Interessen an bestimmten
            Inhalten oder Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des
            Profilings werden häufig Cookies und Web-Beacons eingesetzt. </li>
        <li><strong>Protokolldaten:</strong> Protokolldaten sind Informationen über Ereignisse oder Aktivitäten, die in
            einem System oder Netzwerk protokolliert wurden. Diese Daten enthalten typischerweise Informationen wie
            Zeitstempel, IP-Adressen, Benutzeraktionen, Fehlermeldungen und andere Details über die Nutzung oder den Betrieb
            eines Systems. Protokolldaten werden oft zur Analyse von Systemproblemen, zur Sicherheitsüberwachung oder zur
            Erstellung von Leistungsberichten verwendet. </li>
        <li><strong>Verantwortlicher:</strong> Als "Verantwortlicher" wird die natürliche oder juristische Person, Behörde,
            Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet. </li>
        <li><strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren
            ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
            reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das
            Übermitteln oder das Löschen. </li>
    </ul>
    <p class="seal"><a href="https://datenschutz-generator.de/"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank"
            rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a>
    </p>
</section>`;

    enTemplate: string = `<section class="padding">
    <h1>Privacy Policy</h1>
    <h2 id="m4158">Preamble</h2>
    <p>With the following privacy policy, we would like to inform you about which types of your personal data
        (hereinafter also referred to as "data") we process for which purposes and to what extent as part of providing our application.</p>
    <p>The terms used are not gender-specific.</p>
    
    <p>Last updated: February 16, 2025</p>
    <h2>Table of Contents</h2>
    <ul class="index">
        <li><a class="index-link" href="#m4158">Preamble</a></li>
        <li><a class="index-link" href="#m3">Controller</a></li>
        <li><a class="index-link" href="#mOverview">Overview of Processing</a></li>
        <li><a class="index-link" href="#m2427">Relevant Legal Bases</a></li>
        <li><a class="index-link" href="#m27">Security Measures</a></li>
        <li><a class="index-link" href="#m25">Transfer of Personal Data</a></li>
        <li><a class="index-link" href="#m12">General Information on Data Storage and Deletion</a></li>
        <li><a class="index-link" href="#m10">Rights of Data Subjects</a></li>
        <li><a class="index-link" href="#m225">Provision of the Online Offer and Web Hosting</a></li>
        <li><a class="index-link" href="#m134">Use of Cookies</a></li>
        <li><a class="index-link" href="#m367">Registration, Login, and User Account</a></li>
        <li><a class="index-link" href="#m432">Community Functions</a></li>
        <li><a class="index-link" href="#m182">Contact and Inquiry Management</a></li>
        <li><a class="index-link" href="#m638">Marketing Communication via Email, Mail, Fax, or Telephone</a></li>
        <li><a class="index-link" href="#m136">Social Media Presence</a></li>
        <li><a class="index-link" href="#m328">Plug-ins and Embedded Functions and Content</a></li>
        <li><a class="index-link" href="#m42">Definitions</a></li>
    </ul>
    <h2 id="m3">Controller</h2>
    <p>Zunke Florian,<br>Albert-Schweitzer-Straße 25a,<br>14929 Treuenbrietzen, Germany</p>
    <p>Email address: <a href="mailto:florianzunk@gmx.de">florianzunk&#64;gmx.de</a></p>
    <p>Legal notice: <a href="https://florian-zunke.de/legalNotice" target="_blank">https://florian-zunke.de/legalNotice</a>
    </p>
    
    <h2 id="mOverview">Overview of Processing</h2>
    <p>The following overview summarizes the types of data processed, the purposes of processing, and the data subjects involved.</p>
    <h3>Types of Processed Data</h3>
    <ul>
        <li>Master data.</li>
        <li>Contact data.</li>
        <li>Content data.</li>
        <li>Usage data.</li>
        <li>Meta, communication, and procedural data.</li>
        <li>Log data.</li>
    </ul>
    <h3>Categories of Data Subjects</h3>
    <ul>
        <li>Communication partners.</li>
        <li>Users.</li>
    </ul>
    <h3>Purposes of Processing</h3>
    <ul>
        <li>Provision of contractual services and fulfillment of contractual obligations.</li>
        <li>Communication.</li>
        <li>Security measures.</li>
        <li>Direct marketing.</li>
        <li>Organizational and administrative procedures.</li>
        <li>Feedback.</li>
        <li>Marketing.</li>
        <li>Profiles with user-related information.</li>
        <li>Provision of our online offer and user-friendliness.</li>
        <li>IT infrastructure.</li>
        <li>Public relations.</li>
        <li>Sales promotion.</li>
    </ul>
    <h2 id="m2427">Relevant Legal Bases</h2>
    <p><strong>Relevant legal bases under the GDPR:</strong> Below is an overview of the legal bases of the GDPR on which we process personal data. Please note that in addition to the provisions of the GDPR, national data protection regulations may apply in your or our country of residence. If more specific legal bases apply in individual cases, we will inform you about them in this privacy policy.</p>
    <ul>
        <li><strong>Consent (Art. 6 para. 1 sentence 1 lit. a GDPR)</strong> - The data subject has given their consent to the processing of their personal data for one or more specific purposes.</li>
        <li><strong>Contract performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR)</strong> - Processing is necessary for the performance of a contract to which the data subject is a party or to take steps at the data subject's request prior to entering into a contract.</li>
        <li><strong>Legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR)</strong> - Processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, provided that the interests or fundamental rights and freedoms of the data subject do not override these interests.</li>
    </ul>
    <p><strong>National Data Protection Regulations in Germany:</strong> In addition to the GDPR, national data protection regulations apply in Germany, including the Federal Data Protection Act (BDSG). The BDSG contains specific regulations regarding access rights, deletion rights, objection rights, processing of special categories of personal data, processing for other purposes, and automated decision-making including profiling. State data protection laws of individual federal states may also apply.</p>

    <h2 id="m27">Security Measures</h2>
    <p>We take appropriate technical and organizational measures to ensure a level of security appropriate to the risk in accordance with legal requirements.</p>
    <p>These measures include securing the confidentiality, integrity, and availability of data through physical and electronic access control, input control, transmission control, availability security, and separation of data. Additionally, we have procedures in place to exercise data subjects' rights, delete data, and respond to data threats. We consider the protection of personal data already during the development or selection of hardware, software, and procedures according to the principles of data protection by design and by default.</p>

    <h2 id="m25">Transfer of Personal Data</h2>
    <p>In the course of processing personal data, data may be transmitted to or disclosed to other entities, companies, legally independent organizational units, or individuals. The recipients of this data may include IT service providers or providers of services and content integrated into a website. In such cases, we comply with legal requirements and conclude appropriate contracts to protect your data.</p>
    <p><strong>Further Information on Processing Activities, Procedures, and Services:</strong></p>
<ul class="m-elements">
    <li><strong>Provision of Online Services on Rented Storage Space:</strong> To provide our online services, we use storage space, computing capacity, and software that we rent or otherwise obtain from a corresponding server provider (also known as a "web host"); <span class=""><strong>Legal Basis:</strong> Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li>
    <li><strong>Collection of Access Data and Log Files:</strong> Access to our online services is logged in the form of so-called "server log files." Server log files may include the address and name of the accessed web pages and files, date and time of access, transferred data volumes, messages about successful retrieval, browser type and version, the user’s operating system, referrer URL (the previously visited page), and, as a rule, IP addresses and the requesting provider. Server log files can be used for security purposes, e.g., to prevent server overloads (especially in cases of abusive attacks, such as DDoS attacks), and to ensure server performance and stability; <span class=""><strong>Legal Basis:</strong> Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). </span><strong>Data Deletion:</strong> Log file information is stored for a maximum of 30 days and then deleted or anonymized. Data required for evidentiary purposes is exempt from deletion until the respective incident is conclusively resolved.</li>
    <li><strong>Email Sending and Hosting:</strong> The web hosting services we use also include the sending, receiving, and storage of emails. For these purposes, recipient and sender addresses, as well as further information concerning email transmission (e.g., involved providers) and the contents of respective emails, are processed. The aforementioned data may also be processed for spam detection purposes. Please note that emails are generally not sent in an encrypted format on the internet. While emails are usually encrypted in transit, they are not encrypted on the servers from which they are sent and received unless an end-to-end encryption method is used. Therefore, we cannot assume responsibility for the transmission path of emails between the sender and reception on our server; <span class=""><strong>Legal Basis:</strong> Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li>
    <li><strong>ALL-INKL:</strong> Services related to the provision of IT infrastructure and associated services (e.g., storage space and/or computing capacity); <strong>Service Provider:</strong> ALL-INKL.COM - Neue Medien Münnich, Owner: René Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany; <span class=""><strong>Legal Basis:</strong> Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR); </span><strong>Website:</strong> <a href="https://all-inkl.com/" target="_blank">https://all-inkl.com/</a>; <strong>Privacy Policy:</strong> <a href="https://all-inkl.com/datenschutzinformationen/" target="_blank">https://all-inkl.com/datenschutzinformationen/</a>. <strong>Data Processing Agreement:</strong> Provided by the service provider.</li>
</ul>

<h2 id="m134">Use of Cookies</h2>
<p>The term "cookies" refers to functions that store and retrieve information on users' devices. Cookies may be used for different purposes, such as ensuring the functionality, security, and convenience of online services, as well as for analyzing visitor flows. We use cookies in accordance with legal regulations. Where required, we obtain users' prior consent. If consent is not necessary, we base our use of cookies on our legitimate interests. This applies when storing and retrieving information is essential to providing expressly requested content and functions. This includes storing settings and ensuring the functionality and security of our online services. Consent can be withdrawn at any time. We provide clear information about the scope of consent and which cookies are used.</p>

<p><strong>Legal Basis for Data Processing:</strong> Whether we process personal data using cookies depends on user consent. If consent is given, it serves as the legal basis. Without consent, we rely on our legitimate interests, as explained in this section and in the context of the respective services and processes.</p>

<p><strong>Storage Duration:</strong> The following types of cookies are distinguished in terms of storage duration:</p>
<ul>
    <li><strong>Temporary Cookies (also: Session Cookies):</strong> Temporary cookies are deleted at the latest after a user leaves an online service and closes their device (e.g., browser or mobile application).</li>
    <li><strong>Permanent Cookies:</strong> Permanent cookies remain stored even after the device is closed. For example, login status can be saved, and preferred content can be displayed directly when users revisit a website. Similarly, data collected via cookies may be used for reach measurement. If we do not specify the type and storage duration of cookies explicitly (e.g., when obtaining consent), users should assume that these are permanent and may be stored for up to two years.</li>
</ul>

<p><strong>General Information on Withdrawal and Objection (Opt-out):</strong> Users can withdraw their consent at any time and object to processing according to legal requirements, including via their browser’s privacy settings.</p>

<ul class="m-elements">
    <li><strong>Processed Data Types:</strong> Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, involved persons).</li>
    <li><strong>Affected Persons:</strong> Users (e.g., website visitors, online service users).</li>
    <li class=""><strong>Legal Basis:</strong> Legitimate Interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). Consent (Art. 6 para. 1 sentence 1 lit. a) GDPR).</li>
</ul>

<p><strong>Further Information on Processing Activities, Procedures, and Services:</strong></p>

<ul class="m-elements">
    <li><strong>Processing of Cookie Data Based on Consent:</strong> We use a consent management solution to obtain users' consent for the use of cookies or the procedures and providers specified in the consent management process. This process serves to obtain, record, manage, and withdraw consent, particularly concerning the use of cookies and similar technologies that store, retrieve, and process information on users' devices. The consent statements are stored to avoid repeated requests and to document consent in compliance with legal requirements. Storage occurs either server-side and/or in a cookie (so-called opt-in cookie) or using similar technologies to assign consent to a specific user or their device. Unless otherwise specified, consent storage duration is up to two years. A pseudonymous user identifier is created and stored along with the time of consent, the extent of consent (e.g., applicable cookie categories and/or service providers), as well as browser, system, and device information; <span class=""><strong>Legal Basis:</strong> Consent (Art. 6 para. 1 sentence 1 lit. a) GDPR).</span></li>
</ul>
<h2 id="m182">Contact and Inquiry Management</h2>
<p>When contacting us (e.g., by mail, contact form, email, phone, or via social media) and within the scope of existing user and business relationships, the details of the inquiring persons are processed to the extent necessary to respond to contact inquiries and any requested measures.</p>
<ul class="m-elements">
    <li><strong>Types of Data Processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Contact data (e.g., postal and email addresses or phone numbers); Content data (e.g., textual or visual messages and posts, as well as related information such as authorship details or creation timestamps); Usage data (e.g., page visits and duration, click paths, usage intensity and frequency, types of devices and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, involved persons).</li>
    <li><strong>Affected Persons:</strong> Communication partners.</li>
    <li><strong>Processing Purposes:</strong> Communication; organizational and administrative procedures; feedback (e.g., collecting feedback via online form). Providing our online offering and user-friendliness.</li>
    <li><strong>Retention and Deletion:</strong> Deletion in accordance with the section "General Information on Data Retention and Deletion."</li>
    <li class=""><strong>Legal Bases:</strong> Legitimate interests (Art. 6 Para. 1 Sentence 1 lit. f GDPR). Contract fulfillment and pre-contractual inquiries (Art. 6 Para. 1 Sentence 1 lit. b GDPR).</li>
</ul>
<p><strong>Further Notes on Processing Procedures, Methods, and Services:</strong></p>
<ul class="m-elements">
    <li><strong>Contact Form:</strong> When contacting us via our contact form, email, or other communication channels, we process the personal data provided to us to respond to and handle the respective request. This generally includes details such as name, contact information, and any additional information shared with us that is necessary for appropriate processing. We use this data exclusively for the stated purpose of communication and contact;
        <span class=""><strong>Legal Bases:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 Para. 1 Sentence 1 lit. b GDPR), Legitimate interests (Art. 6 Para. 1 Sentence 1 lit. f GDPR).</span></li>
</ul>
<h2 id="m638">Marketing Communication via Email, Mail, Fax, or Phone</h2>
<p>We process personal data for marketing communication purposes, which may take place through various channels such as email, telephone, mail, or fax, in accordance with legal requirements.</p>
<p>Recipients have the right to revoke their consent at any time or to object to marketing communication at any time.</p>
<p>After revocation or objection, we retain the data necessary to demonstrate prior authorization for contact or mailings for up to three years after the end of the year in which the revocation or objection was made, based on our legitimate interests. The processing of this data is restricted to the purpose of potential defense against claims. Based on the legitimate interest in permanently respecting the revocation or objection of users, we also store the data necessary to prevent renewed contact (e.g., depending on the communication channel, email address, phone number, name).</p>
<ul class="m-elements">
    <li><strong>Types of Data Processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Contact data (e.g., postal and email addresses or phone numbers). Content data (e.g., textual or visual messages and posts, as well as related information such as authorship details or creation timestamps).</li>
    <li><strong>Affected Persons:</strong> Communication partners.</li>
    <li><strong>Processing Purposes:</strong> Direct marketing (e.g., via email or mail); marketing. Sales promotion.</li>
    <li><strong>Retention and Deletion:</strong> Deletion in accordance with the section "General Information on Data Retention and Deletion."</li>
    <li class=""><strong>Legal Bases:</strong> Consent (Art. 6 Para. 1 Sentence 1 lit. a GDPR). Legitimate interests (Art. 6 Para. 1 Sentence 1 lit. f GDPR).</li>
</ul>
<h2 id="m136">Social Media Presences</h2>
<p>We maintain online presences within social networks and process user data in this context to communicate with active users or to offer information about us.</p>
<p>We point out that user data may be processed outside the European Union. This may result in risks for users, such as making it more difficult to enforce their rights.</p>
<p>Furthermore, user data is usually processed within social networks for market research and advertising purposes. For example, usage profiles can be created based on user behavior and the resulting interests. These profiles may be used, for instance, to display advertisements within and outside the networks that presumably correspond to users' interests. For this purpose, cookies are usually stored on users' devices, which store usage behavior and interests. Additionally, data may also be stored in usage profiles regardless of the devices used by users (especially if they are members of the respective platforms and logged in).</p>
<p>For a detailed presentation of the respective processing forms and opt-out options, we refer to the privacy policies and statements of the operators of the respective networks.</p>
<p>We also point out that inquiries for information and the exercise of data subject rights are most effectively addressed to the providers themselves. Only they have access to user data and can take direct measures and provide information. If you still need assistance, you can contact us.</p>
<ul class="m-elements">
    <li><strong>Types of Data Processed:</strong> Contact data (e.g., postal and email addresses or phone numbers); Content data (e.g., textual or visual messages and posts, as well as related information such as authorship details or creation timestamps). Usage data (e.g., page visits and duration, click paths, usage intensity and frequency, types of devices and operating systems used, interactions with content and features).</li>
    <li><strong>Affected Persons:</strong> Users (e.g., website visitors, online service users).</li>
    <li><strong>Processing Purposes:</strong> Communication; feedback (e.g., collecting feedback via online form). Public relations.</li>
    <li><strong>Retention and Deletion:</strong> Deletion in accordance with the section "General Information on Data Retention and Deletion."</li>
    <li class=""><strong>Legal Bases:</strong> Legitimate interests (Art. 6 Para. 1 Sentence 1 lit. f GDPR).</li>
</ul>
<h2 id="m328">Plugins and Embedded Features as well as Content</h2>
<p>We integrate functional and content elements into our online offering that are retrieved from the servers of their respective providers (hereinafter referred to as "third-party providers"). These elements may include graphics, videos, or maps (hereinafter uniformly referred to as "content").</p>
<p>The integration always requires that the third-party providers of these contents process the users' IP addresses, as they could not send the content to their browser without the IP address. The IP address is therefore required for displaying these contents or functions. We endeavor to use only those contents whose respective providers use the IP address solely for delivering the contents. Third-party providers may also use so-called pixel tags (invisible graphics, also called "web beacons") for statistical or marketing purposes. These "pixel tags" can be used to evaluate information such as visitor traffic on the pages of this website. The pseudonymous information may also be stored in cookies on users' devices and include, among other things, technical details about the browser and operating system, referring websites, visit times, and further information about the use of our online offering, and may also be combined with such information from other sources.</p>
<p><strong>Further information on processing procedures, methods, and services:</strong></p>
<ul class="m-elements">
    <li><strong>Google Fonts (self-hosted on our server): </strong>Provision of font files to ensure a user-friendly 
        presentation of our online offering; <strong>Service provider:</strong> The Google Fonts are hosted on our 
        server, and no data is transmitted to Google; <span class=""><strong>Legal basis:</strong> Legitimate interests 
        (Art. 6 para. 1 sentence 1 lit. f GDPR).</span></li>
    <li><strong>LinkedIn plugins and content: </strong>LinkedIn plugins and content – This may include, for example, 
        content such as images, videos, or text, as well as buttons that allow users to share content from this 
        online offering within LinkedIn; <strong>Service provider:</strong> LinkedIn Ireland Unlimited Company, Wilton 
        Place, Dublin 2, Ireland; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 
            sentence 1 lit. f GDPR); </span><strong>Website:</strong> <a href="https://www.linkedin.com" 
            target="_blank">https://www.linkedin.com</a>; <strong>Privacy policy:</strong> <a 
            href="https://www.linkedin.com/legal/privacy-policy" 
            target="_blank">https://www.linkedin.com/legal/privacy-policy</a>;
        <strong>Data processing agreement:</strong> <a href="https://legal.linkedin.com/dpa" 
            target="_blank">https://legal.linkedin.com/dpa</a>; <strong>Basis for third-country transfers:</strong> Data 
        Privacy Framework (DPF). <strong>Opt-out option:</strong> <a 
            href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" 
            target="_blank">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</li>
</ul>
<h2 id="m42">Definitions of Terms</h2>
<p>In this section, you will find an overview of the terminology used in this privacy policy. Where terms are 
    legally defined, their legal definitions apply. The following explanations are intended primarily to aid 
    understanding.</p>
<ul class="glossary">
    <li><strong>Inventory data:</strong> Inventory data includes essential information required for identifying and 
        managing contractual partners, user accounts, profiles, and similar assignments. This data may include 
        personal and demographic details such as names, contact information (addresses, phone numbers, email 
        addresses), birth dates, and specific identifiers (user IDs). Inventory data forms the basis for any formal 
        interaction between individuals and services, institutions, or systems, allowing for unique identification 
        and communication.</li>
    <li><strong>Content data:</strong> Content data includes information generated in the course of creating, 
        editing, and publishing all types of content. This category of data can include texts, images, videos, 
        audio files, and other multimedia content published on various platforms and media. Content data is not 
        limited to the actual content but also includes metadata providing information about the content itself, 
        such as tags, descriptions, author details, and publication dates.</li>
    <li><strong>Contact data:</strong> Contact data consists of essential information enabling communication with 
        individuals or organizations. This includes phone numbers, postal addresses, and email addresses, as well as 
        communication methods such as social media handles and instant messaging identifiers.</li>
    <li><strong>Metadata, communication, and procedural data:</strong> Metadata, communication, and procedural 
        data include information about how data is processed, transmitted, and managed. Metadata, also known as 
        data about data, contains information describing the context, origin, and structure of other data. This 
        can include file size, creation date, document author, and modification history. Communication data records 
        the exchange of information between users across different channels, such as email correspondence, call logs, 
        messages on social networks, and chat histories, including involved parties, timestamps, and transmission 
        paths. Procedural data describes the processes and workflows within systems or organizations, including 
        workflow documentation, transaction logs, and audit logs used for tracking and verifying operations.</li>
    <li><strong>Usage data:</strong> Usage data refers to information that captures how users interact with digital 
        products, services, or platforms. This data includes a wide range of details indicating how users utilize 
        applications, which features they prefer, how long they stay on specific pages, and how they navigate through 
        an application. Usage data can also include frequency of use, activity timestamps, IP addresses, device 
        information, and location data. It is particularly valuable for analyzing user behavior, optimizing user 
        experiences, personalizing content, and improving products or services. Additionally, usage data plays a 
        crucial role in identifying trends, preferences, and potential issues within digital offerings.</li>
    <li><strong>Personal data:</strong> "Personal data" refers to any information relating to an identified or 
        identifiable natural person (hereinafter referred to as the "data subject"); an identifiable natural person 
        is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a 
        name, an identification number, location data, an online identifier (e.g., cookie), or one or more specific 
        characteristics that express the physical, physiological, genetic, mental, economic, cultural, or social 
        identity of that natural person.</li>
    <li><strong>Profiles with user-related information:</strong> The processing of "profiles with user-related 
        information," or simply "profiles," involves any type of automated processing of personal data that uses 
        these personal data to analyze, evaluate, or predict certain personal aspects relating to a natural person 
        (depending on the type of profiling, this may include various demographic, behavioral, and interest-related 
        information, such as interactions with websites and their content, etc.). Profiling often involves the use 
        of cookies and web beacons.</li>
    <li><strong>Log data:</strong> Log data contains information about events or activities recorded in a system 
        or network. This data typically includes details such as timestamps, IP addresses, user actions, error 
        messages, and other information about the use or operation of a system. Log data is often used for analyzing 
        system issues, monitoring security, or generating performance reports.</li>
    <li><strong>Controller:</strong> The "controller" is the natural or legal person, public authority, agency, 
        or other body that alone or jointly with others determines the purposes and means of processing personal 
        data.</li>
    <li><strong>Processing:</strong> "Processing" refers to any operation or set of operations performed on 
        personal data, whether or not by automated means. The term is broad and covers practically any handling 
        of data, including collection, evaluation, storage, transmission, or deletion.</li>
</ul>
<p class="seal"><a href="https://datenschutz-generator.de/"
        title="Legal text by Dr. Schwenke - click for more information." target="_blank"
        rel="noopener noreferrer nofollow">Created with the free privacy policy generator from Dr. Thomas Schwenke</a>
</p>
</section>
`;

    currentTemplate: string = this.enTemplate;

    constructor(private translate: TranslateService, public translationService: TranslationService) { }


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