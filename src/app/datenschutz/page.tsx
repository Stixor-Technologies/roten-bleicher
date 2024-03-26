import Link from "next/link";
import React from "react";
import HeaderLogo from "../../../public/images/header-logo.svg";
import Image from "next/image";

const Datenschutz = () => {
  return (
    <>
      <header
        className={`fixed max-h-[4.5rem] md:max-h-[7.063rem] h-full w-full ease-in-out bg-white`}
      >
        <div className="container flex items-center justify-end py-2 h-full md:py-7">
          <Link href={"/"}>
            <Image
              src={HeaderLogo}
              width={201}
              height={56}
              alt="roten-bleicher"
              className="w-32 lg:w-auto max-w-[201px]"
            />
          </Link>
        </div>
      </header>

      <section className="container py-[4.5rem] md:py-[7.063rem]">
        <h2 className=" text-light-purple font-area-bold text-[clamp(2.5rem,5vw,5rem)]">
          Datenschutz
        </h2>

        <ol className="counter-list list-decimal md:pl-3">
          <li>
            INFORMATIONEN ÜBER DIE ERHEBUNG PERSONENBEOGENER DATEN UND
            KONTAKTDATEN DES VERANTWORTLICHEN
            <ol className="counter-list pl-2">
              <li>
                Wir freuen uns, dass Sie unsere Website besuchen und bedanken
                uns für Ihr Interesse. Im Folgenden informieren wir Sie über den
                Umgang mit Ihren personenbezogenen Daten bei Nutzung unserer
                Website. Personenbezogene Daten sind hierbei alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </li>
              <li className="my-4">
                Verantwortlicher für die Datenverarbeitung auf dieser Website im
                Sinne der Datenschutz-Grundverordnung (DSGVO) ist DAGSR
                Vermögensverwaltungs GmbH & Co. KG, Schätzendorfer Straße 15,
                21272 Egestorf, Telefon +49 4175 – 80 21 0, Fax +49 4175 – 80 21
                21, E-Mail: post@graubner-immobilien.de. Der für die
                Verarbeitung von personenbezogenen Daten Verantwortliche ist
                diejenige natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten entscheidet.
              </li>
              <li>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung personenbezogene Daten und anderer vertraulicher
                Inhalte (z.B. Bestellungen oder Anfragen an den
                Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können
                eine verschlüsselte Verbindung an der Zeichenfolge „https://“
                und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
              </li>
            </ol>
          </li>

          <li className="mt-8">
            DATENERFASSUNG BEIM BESUCH UNSERER WEBSITE
            <p>
              Bei der bloß informatorischen Nutzung unserer Website, also wenn
              Sie sich nicht registrieren oder uns anderweitig Informationen
              übermitteln, erheben wir nur solche Daten, die Ihr Browser an
              unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie
              unsere Website aufrufen, erheben wir die folgenden Daten, die für
              uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
            </p>
            <p>- Unsere besuchte Website</p>
            <p>- Unsere besuchte Website</p>
            <p>- Menge der gesendeten Daten in Byte</p>
            <p>- Quelle/Verweis, von welchem Sie auf die Seite gelangten</p>
            <p>- Verwendeter Browser</p>
            <p>- Verwendetes Betriebssystem</p>
            <p>- Verwendete IP-Adresse (ggf.: in anonymisierter Form)</p>
            <p className="mt-3">
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
              Basis unseres berechtigten Interesses an der Verbesserung der
              Stabilität und Funktionalität unserer Website. Eine Weitergabe
              oder anderweitige Verwendung der Daten findet nicht statt. Wir
              behalten uns allerdings vor, die Server-Logfiles nachträglich zu
              überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige
              Nutzung hinweisen.
            </p>
          </li>

          <li className="mt-8">
            COOKIES
            <p>
              Um den Besuch unserer Website attraktiv zu gestalten und die
              Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf
              verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich
              um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden.
              Einige der von uns verwendeten Cookies werden nach dem Ende der
              Browser-Sitzung, also nach Schließen Ihres Browsers, wieder
              gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf
              Ihrem Endgerät und ermöglichen uns oder unseren Partnerunternehmen
              (Cookies von Drittanbietern), Ihren Browser beim nächsten Besuch
              wiederzuerkennen (persistente Cookies). Werden Cookies gesetzt,
              erheben und verarbeiten diese im individuellen Umfang bestimmte
              Nutzerinformationen wie Browser- und Standortdaten sowie
              IP-Adresswerte. Persistente Cookies werden automatisiert nach
              einer vorgegebenen Dauer gelöscht, die sich je nach Cookie
              unterscheiden kann.
            </p>
            <p className="my-4">
              Sofern durch einzelne von uns implementierte Cookies auch
              personenbezogene Daten verarbeitet werden, erfolgt die
              Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer
              berechtigten Interessen an der bestmöglichen Funktionalität der
              Website sowie einer kundenfreundlichen und effektiven
              Ausgestaltung des Seitenbesuchs.
            </p>
            <p className="my-4">
              Wir arbeiten unter Umständen mit Werbepartnern zusammen, die uns
              helfen, unser Internetangebot für Sie interessanter zu gestalten.
              Zu diesem Zweck werden für diesen Fall bei Ihrem Besuch unserer
              Website auch Cookies von Partnerunternehmen auf Ihrer Festplatte
              gespeichert (Cookies von Drittanbietern). Wenn wir mit
              vorbenannten Werbepartnern zusammenarbeiten, werden Sie über den
              Einsatz derartiger Cookies und den Umfang der jeweils erhobenen
              Informationen innerhalb der nachstehenden Absätze individuell und
              gesondert informiert.
            </p>
            <p className="my-4">
              Bitte beachten Sie, dass Sie Ihren Browser so einstellen können,
              dass Sie über das Setzen von Cookies informiert werden und einzeln
              über deren Annahme entscheiden oder die Annahme von Cookies für
              bestimmte Fälle oder generell ausschließen können. Jeder Browser
              unterscheidet sich in der Art, wie er die Cookie-Einstellungen
              verwaltet. Diese ist in dem Hilfemenü jedes Browsers beschrieben,
              welches Ihnen erläutert, wie Sie Ihre Cookie-Einstellungen ändern
              können. Diese finden Sie für die jeweiligen Browser unter den
              folgenden Links:
            </p>
            <div>
              <div>
                <span>Internet Explorer: </span>
                <Link
                  href="http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies"
                  className=" underline hover:text-dark-purple"
                >
                  http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies
                </Link>
              </div>

              <div>
                <span>Firefox: </span>
                <Link
                  href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                  className=" underline hover:text-dark-purple"
                >
                  https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
                </Link>
              </div>

              <div>
                <span>Chrome: </span>
                <Link
                  href="http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647"
                  className=" underline hover:text-dark-purple"
                >
                  http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647
                </Link>
              </div>

              <div>
                <span>Safari: </span>
                <Link
                  href="https://support.apple.com/kb/ph21411?locale=de_DE"
                  className=" underline hover:text-dark-purple"
                >
                  https://support.apple.com/kb/ph21411?locale=de_DE
                </Link>
              </div>

              <div>
                <span>Opera: </span>
                <Link
                  href="http://help.opera.com/Windows/10.20/de/cookies.html"
                  className=" underline hover:text-dark-purple"
                >
                  http://help.opera.com/Windows/10.20/de/cookies.html
                </Link>
              </div>
            </div>
            <p className="my-4">
              Bitte beachten Sie, dass bei Nichtannahme von Cookies die
              Funktionalität unserer Website eingeschränkt sein kann.
            </p>
          </li>

          <li className="mt-8">
            KONTAKTAUFNAHME
            <p>
              Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular
              oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten
              im Falle eines Kontaktformulars erhoben werden, ist aus dem
              jeweiligen Kontaktformular ersichtlich. Diese Daten werden
              ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für
              die Kontaktaufnahme und die damit verbundene technische
              Administration gespeichert und verwendet. Rechtsgrundlage für die
              Verarbeitung der Daten ist unser berechtigtes Interesse an der
              Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO.
              Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so
              ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1
              lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung
              Ihrer Anfrage gelöscht, dies ist der Fall, wenn sich aus den
              Umständen entnehmen lässt, dass der betroffene Sachverhalt
              abschließend geklärt ist und sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </li>

          <li className="mt-8">
            RECHTE DES BETROFFENEN
            <ol className="counter-list pl-2">
              <li>
                Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem
                Verantwortlichen hinsichtlich der Verarbeitung Ihrer
                personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts-
                und Interventionsrechte), über die wir Sie nachstehend
                informieren:
                <p className="my-3">
                  - Auskunftsrecht gemäß Art. 15 DSGVO: Sie haben insbesondere
                  ein Recht auf Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten, die Verarbeitungszwecke, die
                  Kategorien der verarbeiteten personenbezogenen Daten, die
                  Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre
                  Daten offengelegt wurden oder werden, die geplante
                  Speicherdauer bzw. die Kriterien für die Festlegung der
                  Speicherdauer, das Bestehen eines Rechts auf Berichtigung,
                  Löschung, Einschränkung der Verarbeitung, Widerspruch gegen
                  die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die
                  Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen
                  erhoben wurden, das Bestehen einer automatisierten
                  Entscheidungsfindung einschließlich Profiling und ggf.
                  aussagekräftige Informationen über die involvierte Logik und
                  die Sie betreffende Tragweite und die angestrebten
                  Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf
                  Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei
                  Weiterleitung Ihrer Daten in Drittländer bestehen
                </p>
                <p className="my-3">
                  - Recht auf Berichtigung gemäß Art. 16 DSGVO: Sie haben ein
                  Recht auf unverzügliche Berichtigung Sie betreffender
                  unrichtiger Daten und/oder Vervollständigung Ihrer bei uns
                  gespeicherten unvollständigen Daten;
                </p>
                <p className="my-3">
                  - Recht auf Löschung gemäß Art. 17 DSGVO: Sie haben das Recht,
                  die Löschung Ihrer personenbezogenen Daten bei Vorliegen der
                  Voraussetzungen des Art. 17 Abs. 1 DSGVO zu verlangen. Dieses
                  Recht besteht jedoch insbesondere dann nicht, wenn die
                  Verarbeitung zur Ausübung des Rechts auf freie
                  Meinungsäußerung und Information, zur Erfüllung einer
                  rechtlichen Verpflichtung, aus Gründen des öffentlichen
                  Interesses oder zur Geltendmachung, Ausübung oder Verteidigung
                  von Rechtsansprüchen erforderlich ist;
                </p>
                <p className="my-3">
                  - Recht auf Einschränkung der Verarbeitung gemäß Art. 18
                  DSGVO: Sie haben das Recht, die Einschränkung der Verarbeitung
                  Ihrer personenbezogenen Daten zu verlangen, solange die von
                  Ihnen bestrittene Richtigkeit Ihrer Daten überprüft wird, wenn
                  Sie eine Löschung Ihrer Daten wegen unzulässiger
                  Datenverarbeitung ablehnen und stattdessen die Einschränkung
                  der Verarbeitung Ihrer Daten verlangen, wenn Sie Ihre Daten
                  zur Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen benötigen, nachdem wir diese Daten nach
                  Zweckerreichung nicht mehr benötigen oder wenn Sie Widerspruch
                  aus Gründen Ihrer besonderen Situation eingelegt haben,
                  solange noch nicht feststeht, ob unsere berechtigten Gründe
                  überwiegen
                </p>
                <p className="my-3">
                  - Recht auf Unterrichtung gemäß Art. 19 DSGVO: Haben Sie das
                  Recht auf Berichtigung, Löschung oder Einschränkung der
                  Verarbeitung gegenüber dem Verantwortlichen geltend gemacht,
                  ist dieser verpflichtet, allen Empfängern, denen die Sie
                  betreffenden personenbezogenen Daten offengelegt wurden, diese
                  Berichtigung oder Löschung der Daten oder Einschränkung der
                  Verarbeitung mitzuteilen, es sei denn, dies erweist sich als
                  unmöglich oder ist mit einem unverhältnismäßigen Aufwand
                  verbunden. Ihnen steht das Recht zu, über diese Empfänger
                  unterrichtet zu werden.
                </p>
                <p className="my-3">
                  - Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO: Sie
                  haben das Recht, Ihre personenbezogenen Daten, die Sie uns
                  bereitgestellt haben, in einem strukturierten, gängigen und
                  maschinenlesebaren Format zu erhalten oder die Übermittlung an
                  einen anderen Verantwortlichen zu verlangen, soweit dies
                  technisch machbar ist
                </p>
                <p className="my-3">
                  - Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7
                  Abs. 3 DSGVO: Sie haben das Recht, eine einmal erteilte
                  Einwilligung in die Verarbeitung von Daten jederzeit mit
                  Wirkung für die Zukunft zu widerrufen. Im Falle des Widerrufs
                  werden wir die betroffenen Daten unverzüglich löschen, sofern
                  eine weitere Verarbeitung nicht auf eine Rechtsgrundlage zur
                  einwilligungslosen Verarbeitung gestützt werden kann. Durch
                  den Widerruf der Einwilligung wird die Rechtmäßigkeit der
                  aufgrund der Einwilligung bis zum Widerruf erfolgten
                  Verarbeitung nicht berührt
                </p>
                <p className="my-3">
                  - Recht auf Beschwerde gemäß Art. 77 DSGVO: Wenn Sie der
                  Ansicht sind, dass die Verarbeitung der Sie betreffenden
                  personenbezogenen Daten gegen die DSGVO verstößt, haben Sie -
                  unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                  gerichtlichen Rechtsbehelfs - das Recht auf Beschwerde bei
                  einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                  Ihres Aufenthaltsortes, Ihres Arbeitsplatzes oder des Ortes
                  des mutmaßlichen Verstoßes.
                </p>
              </li>

              <li>
                WIDERSPRUCHSRECHT
                <p className="my-3 uppercase">
                  WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE
                  PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN
                  BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS
                  JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                  SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT
                  WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
                </p>
                <p className="my-3 uppercase">
                  MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR
                  DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE
                  WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE
                  SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN KÖNNEN,
                  DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN
                  ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG,
                  AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
                </p>
                <p className="my-3 uppercase">
                  WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
                  DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT
                  WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                  PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                  EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN
                  AUSÜBEN.
                </p>
                <p className="my-3 uppercase">
                  MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR
                  DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
                </p>
              </li>
            </ol>
          </li>

          <li className="mt-8">
            DAUER DER SPEICHERUNG PERSONENBEZOGENER DATEN
            <p>
              Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
              anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B.
              handels- und steuerrechtliche Aufbewahrungsfristen). Nach Ablauf
              der Frist werden die entsprechenden Daten routinemäßig gelöscht,
              sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung
              erforderlich sind und/oder unsererseits kein berechtigtes
              Interesse an der Weiterspeicherung fortbesteht.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
};

export default Datenschutz;
