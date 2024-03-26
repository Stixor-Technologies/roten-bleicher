import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeaderLogo from "../../../public/images/header-logo.svg";

const Impressum = () => {
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
          Impressum
        </h2>
        <address className="not-italic my-6">
          DGR Projekt III GmbH & Co. KG <br />
          Schätzendorfer Str. 15 <br />
          21272 Egestorf <br />
        </address>

        <div className=" my-6">
          <div>
            <span>Telefon</span>{" "}
            <Link href={`tel:+49 4175 - 80 21 0`}>+49 4175 - 80 21 0</Link>
          </div>

          <div>
            <span>Fax</span>
            <Link href={`tel:+49 4175 - 80 21 0`}>+49 4175 - 80 21 0</Link>
          </div>
          <div>
            <span>E-Mail: </span>
            <Link href={`mailto:post@graubner-immobilien.de`}>
              post@graubner-immobilien.de
            </Link>
          </div>
        </div>

        <div className="my-6">
          <p>
            Geschäftsführer: Dorothea Graubner, Georg-Hinrich Graubner und
            Robert Graubner Sitz der Gesellschaft: Egestorf
          </p>
          <p>Handelsregister: Amtsgericht Lüneburg, HRA 203503</p>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE343212162
          </p>
          <p>Pers. haftende Gesellschafterin: DGR Verwaltungs GmbH</p>
          <p>Inhaltlich Verantwortlicher gemäß § 55 RStV: Robert Graubner</p>
        </div>

        <div className="my-6">
          <p>
            Konzept, Gestaltung und Visualisierungen:Marius Fahrner
            Kommunikationsdesign
          </p>
          <p>
            <span>Realisierung:</span>
            <span>we-site GmbH</span>
          </p>
          <p>HAFTUNGSAUSSCHLUSS</p>
        </div>

        {/* numbered list */}
        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            1. INHALT DES ONLINEANGEBOTES
          </h2>
          <p className="mt-2">
            Der Autor übernimmt keinerlei Gewähr für die Aktualität,
            Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
            Informationen. Haftungsansprüche gegen den Autor, welche sich auf
            Schäden materieller oder ideeller Art beziehen, die durch die
            Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
            die Nutzung fehlerhafter und unvollständiger Informationen
            verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens
            des Autors kein nachweislich vorsätzliches oder grob fahrlässiges
            Verschulden vorliegt. Angebote sind freibleibend und unverbindlich.
            Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das
            gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
            ergänzen, zu löschen oder die Veröffentlichung zeitweise oder
            endgültig einzustellen.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            2. VERWEISE UND LINKS
          </h2>
          <p className="mt-2">
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            (Hyperlinks), die außerhalb des Verantwortungsbereiches des Autors
            liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall
            in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und
            es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
            rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit
            ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen
            Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die
            aktuelle und zukünftige Gestaltung, die Inhalte oder die
            Urheberschaft der verlinkten/verknüpften Seiten hat der Autor
            keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich
            von allen Inhalten aller verlinkten /verknüpften Seiten, die nach
            der Linksetzung verändert wurden. Diese Feststellung gilt für alle
            innerhalb des eigenen Internetangebotes gesetzten Links und Verweise
            sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern,
            Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen
            anderen Formen von Datenbanken, auf deren Inhalt externe
            Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder
            unvollständige Inhalte und insbesondere für Schäden, die aus der
            Nutzung oder Nichtnutzung solcherart dargebotener Informationen
            entstehen, haftet allein der Anbieter der Seite, auf welche
            verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
            Veröffentlichung lediglich verweist.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            3. URHEBER- UND KENNZEICHENRECHT
          </h2>
          <p className="mt-2">
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu
            beachten, von ihm selbst erstellte Grafiken, Tondokumente,
            Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
            Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle
            innerhalb des Internetangebotes genannten und ggf. durch Dritte
            geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass
            Markenzeichen nicht durch Rechte Dritter geschützt sind! Das
            Copyright für veröffentlichte, vom Autor selbst erstellte Objekte
            bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
            Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte
            in anderen elektronischen oder gedruckten Publikationen ist ohne
            ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            4. DATENSCHUTZ
          </h2>
          <p className="mt-2">
            Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
            persönlicher oder geschäftlicher Daten (Emailadressen, Namen,
            Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens
            des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme
            und Bezahlung aller angebotenen Dienste ist – soweit technisch
            möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter
            Angabe anonymisierter Daten oder eines Pseudonyms gestattet. Die
            Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben
            veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und
            Faxnummern sowie Emailadressen durch Dritte zur Übersendung von
            nicht ausdrücklich angeforderten Informationen ist nicht gestattet.
            Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails
            bei Verstößen gegen dieses Verbot sind ausdrücklich vorbehalten.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            5. RECHTSWIRKSAMKEIT DIESES HAFTUNGSAUSSCHLUSSES
          </h2>
          <p className="mt-2">
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
            betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern
            Teile oder einzelne Formulierungen dieses Textes der geltenden
            Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
            sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt
            und ihrer Gültigkeit davon unberührt.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            6. SPEICHERUNG VON ZUGRIFFSDATEN / EINSATZ VON GOOGLE ANALYTICS
          </h2>
          <p className="mt-2">
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
            Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Website durch Sie ermöglicht. Die durch
            Cookies erzeugten Informationen über Ihre Benutzung dieser Website
            (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in
            den USA übertragen und dort gespeichert. Google wird diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten für die Websitebetreiber
            zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
            Google diese Informationen gegebenenfalls an Dritte übertragen,
            sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten
            im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
            IP-Adresse mit anderen Daten, die von Google gespeichert werden, in
            Verbindung bringen. Sie können die Installation der Cookies durch
            eine entsprechende Einstellung Ihrer Browser Software verhindern;
            wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
            gegebenenfalls nicht sämtliche Funktionen dieser Website voll
            umfänglich nutzen können. Durch die Nutzung dieser Website erklären
            Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch
            Google in der zuvor beschriebenen Art und Weise und zu dem zuvor
            benannten Zweck einverstanden. www.google.com/analytics.
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-light-purple font-area-bold text-[clamp(1.2rem,3vw,1.8rem)]">
            7. ABMAHNUNGSKLAUSEL
          </h2>
          <p className="mt-2">
            (§ 8 ABS. 4 UWG) Sollten Inhalte einzelner Seiten oder Teile dieses
            Internetauftritts die Rechte Dritter oder auch gesetzliche
            Bestimmungen verletzen, bitten wir um eine angemessene, ausführlich
            belegte Nachricht ohne Kostennote. Wir garantieren nach rechtlicher
            Prüfung die zu Recht beanstandeten Passagen in Teilen oder komplett
            von dem Internetauftritt zu entfernen bzw. angemessene Änderungen
            daran vorzunehmen.
          </p>
        </div>
      </section>
    </>
  );
};

export default Impressum;
