import type { CampsiteConfig } from "../types";

/**
 * Campingplatz Forstgarten — Gstatterboden, Nationalpark Gesäuse (Steiermark).
 * Quelle: leads/landesforste/raw/digest. Alle Inhalte source-belegt, Du-Anrede.
 */
const IMG = "/campsites/landesforste";

const landesforste: CampsiteConfig = {
  name: "Campingplatz Forstgarten",
  shortName: "Forstgarten",
  slug: "landesforste",
  ort: "Gstatterboden",
  region: "Steiermark",
  brandKind: "Campingplatz",
  regionLong: "Nationalpark Gesäuse · Ennstal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping am Ennsufer im Herzen des Gesäuse",
  claimEmphasis: "im Herzen des Gesäuse",
  emailDetail: "eure Lage am Ennsufer am Fuße der Planspitze",
  intro:
    "Geschotterte Stellplätze mit Strom, eine große Grünfläche und ein Badeplatz direkt an der Enns: Der Campingplatz Forstgarten liegt mitten im Nationalpark Gesäuse, am Fuße der Planspitze — fünf Gehminuten von Gstatterboden.",

  logo: { src: `${IMG}/logo.png`, alt: "Campingplatz Forstgarten Logo" },

  statement: {
    text: "Hier beginnt der Nationalpark Gesäuse gleich hinter deinem Vorzelt.",
    emphasis: "hinter deinem Vorzelt",
  },

  pillars: [
    {
      title: "Am Fuße der Planspitze",
      text: "Der Platz liegt am Ennsufer im Herzen des Nationalpark Gesäuse — umgeben von Wäldern, Wiesen und einer traumhaften Bergkulisse.",
      image: { src: `${IMG}/pillar-lage.webp`, alt: "Rezeptionshaus des Campingplatz Forstgarten vor der Bergkulisse des Gesäuse" },
    },
    {
      title: "Stellplätze mitten im Grünen",
      text: "Rund 10.000 m² Wiese bieten Platz für etwa 100 Gäste — geschottert, mit Strom und viel Raum zwischen Zelt, Wohnwagen und Wald.",
      image: { src: `${IMG}/pillar-stellplatz.webp`, alt: "Zelte auf der Campingwiese am Forstgarten mit Blick auf die Berge" },
    },
    {
      title: "Abende am Lagerfeuer",
      text: "Eine Lagerfeuerstelle mit Grill, der Sternenhimmel über der Planspitze und die Enns gleich nebenan — so klingt ein Campingtag im Gseis aus.",
      image: { src: `${IMG}/pillar-lagerfeuer.webp`, alt: "Gäste am Lagerfeuer unter dem Sternenhimmel über der Planspitze" },
    },
  ],

  usps: [
    "Am Ennsufer im Gesäuse",
    "Stellplätze mit Strom",
    "Lagerfeuer & Grillplatz",
    "Beachvolleyball & Spielplatz",
    "Hunde willkommen",
    "Ferienwohnung & Lager",
  ],

  trust: {
    heading: "Warum Camper ins Gesäuse kommen",
    headingEmphasis: "ins Gesäuse",
    intro:
      "Rund 10.000 m² Wiese und Wald für etwa 100 Gäste, Stellplätze mit Strom, eine Ferienwohnung und Matratzenlager — und ringsum Wandern, Klettern, Mountainbiken und Rafting auf der Enns.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-camp.webp`, alt: "Campingplatz Forstgarten: Zelte auf der Wiese vor den Wäldern und Bergen des Gesäuse" },
  },

  breather: {
    image: { src: `${IMG}/breather-gesaeuse.webp`, alt: "Bergkulisse des Nationalpark Gesäuse über Latschenkiefern" },
    line: "Mitten im Nationalpark Gesäuse — Berge, so weit du schaust.",
  },

  camping: {
    heading: "Camping am Forstgarten",
    intro:
      "Vom Stellplatz zur Enns, vom Zelt ins Matratzenlager: viel Wiese, kurze Wege und alles, was ein entspannter Campingtag im Gesäuse braucht.",
    features: [
      {
        title: "Spielplatz & Beachvolleyball",
        text: "Die große Grünfläche, ein Beachvolleyballplatz und der Kinderspielplatz sorgen dafür, dass auch den Kleinen nicht langweilig wird.",
        image: { src: `${IMG}/feature-spielplatz.webp`, alt: "Spielplatz und Zelte auf der Grünfläche am Campingplatz Forstgarten vor der Bergkulisse des Gesäuse" },
      },
      {
        title: "Geschotterte Stellplätze mit Strom",
        text: "Eigens geschotterte und mit Strom versorgte Stellplätze bieten auch für Wohnwägen und Wohnmobile die optimalen Voraussetzungen.",
        image: { src: `${IMG}/feature-stellplatz-strom.webp`, alt: "Wohnwagen-Stellplatz mit Hinweisschild am Campingplatz Forstgarten" },
      },
      {
        title: "Lagerfeuer mit Grillmöglichkeit",
        text: "Eine Lagerfeuerstelle mit Grillmöglichkeit gehört dazu — Brennholz gibt es gegen Gebühr direkt am Platz (1 Karton € 5).",
        image: { src: `${IMG}/feature-lagerfeuer.webp`, alt: "Lagerfeuerstelle mit Sitzbänken und Spielplatz am Forstgarten" },
      },
      {
        title: "Platz für Wohnmobil & Wohnwagen",
        text: "Großzügige Plätze unter hohen Bäumen, gut erreichbar mit dem Wohnmobil oder Wohnwagen — Übernachtung im Fahrzeug ab € 13 pro Nacht.",
        image: { src: `${IMG}/feature-wohnmobil.webp`, alt: "Wohnmobil unter Bäumen am Campingplatz Forstgarten" },
      },
      {
        title: "Zeltwiese unter Bäumen",
        text: "Wer lieber im Zelt schläft, findet schattige Wiesenplätze zwischen den Bäumen — vom kleinen Zelt bis zum großen Familienzelt.",
        image: { src: `${IMG}/feature-zeltwiese.webp`, alt: "Zelte zwischen Bäumen auf der Campingwiese am Forstgarten" },
      },
      {
        title: "Empfang mit Gesäuseblick",
        text: "An der Rezeption bist du täglich von 8–10 und 16–18 Uhr willkommen — mitten im Nationalpark, fünf Gehminuten von Gstatterboden.",
        image: { src: `${IMG}/feature-rezeption.webp`, alt: "Rezeptionshaus mit Fahnen und Sitzplätzen am Forstgarten" },
      },
    ],
  },

  mobilheime: {
    heading: "Ferienwohnung & Matratzenlager",
    intro:
      "Kein Zelt dabei? Am Forstgarten schläfst du auch mit festem Dach über dem Kopf — in der Ferienwohnung oder im Matratzenlager für Gruppen.",
    items: [
      {
        name: "Ferienwohnung",
        kind: "Wohnung im 1. Stock",
        text: "Gemütliche Ferienwohnung mit Wohnküche und Schlafzimmer: ein Doppelbett, zwei Einzelbetten plus Zusatzbett, für bis zu 5 Personen. Die Sanitäranlagen befinden sich im Nebengebäude.",
        priceFrom: 80,
        features: ["bis 5 Personen", "Wohnküche", "Doppel- & Einzelbetten", "keine Hunde"],
        image: { src: `${IMG}/fewo-essecke.webp`, alt: "Essecke der Ferienwohnung am Campingplatz Forstgarten" },
      },
      {
        name: "Matratzenlager",
        kind: "Für Schüler- & Jugendgruppen",
        text: "In drei Holzhäusern warten zwei Matratzenlager mit je 12 und eines mit 16 Schlafplätzen, ein Begleiterzimmer sowie ein Aufenthaltsraum mit kleiner Küche — ideal für Gruppen bis 40 Personen.",
        priceFrom: 21,
        features: ["bis 40 Personen", "Aufenthaltsraum mit Küche", "Begleiterzimmer"],
        image: { src: `${IMG}/lager-schlafraum.webp`, alt: "Schlafraum im Matratzenlager des Campingplatz Forstgarten" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Gseis",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Pyhrn Autobahn (A9), Abfahrt Ardning/Admont, weiter auf der B146 durchs Ennstal ins Gesäuse bis Gstatterboden.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Gstatterboden liegt nur wenige Gehminuten vom Platz entfernt — die Bahn durchs Gesäuse hält direkt im Ort.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Gseis",
    headingEmphasis: "Gseis",
    intro:
      "Vom hellen Sommertag bis zur sternenklaren Nacht über der Planspitze — ein paar Eindrücke vom Campingplatz Forstgarten.",
    tag: "Mai bis Oktober",
    moreCount: 12,
    images: [
      { src: `${IMG}/galerie-abend.webp`, alt: "Sommerabend mit Gästen vor dem Holzhaus am Forstgarten" },
      { src: `${IMG}/galerie-daemmerung.webp`, alt: "Wohnmobil in der Abenddämmerung am Campingplatz Forstgarten" },
      { src: `${IMG}/galerie-nacht.webp`, alt: "Zelt unter sternenklarem Nachthimmel im Gesäuse" },
      { src: `${IMG}/galerie-holzhaus.webp`, alt: "Holzhaus mit Matratzenlager am Campingplatz Forstgarten" },
    ],
  },

  booking: {
    heading: "Frag deinen Platz im Gesäuse an",
    headingEmphasis: "im Gesäuse",
    intro:
      "Sag uns Zeitraum und Personen — wir melden uns mit deiner Verfügbarkeit am Campingplatz Forstgarten.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht inkl. 2 Erwachsene (Stellplatz bzw. Grundpreis + € 11 je Erwachsenem, Kind 6–16 € 8) — zzgl. Nächtigungsabgabe € 2,00–2,50 p. P. Barzahlung, Kartenzahlung möglich. Änderungen vorbehalten.",
    highlight: {
      title: "Mitten im Nationalpark",
      text: "Am Ennsufer am Fuße der Planspitze — fünf Gehminuten von Gstatterboden.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz", perNight: 28.5, perExtraGuest: 11 },
      { id: "wohnmobil", label: "Wohnwagen & Wohnmobil", perNight: 35, perExtraGuest: 11 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 102, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    tel: "+43 3613 2403-0",
    telHref: "tel:+43361324030",
    mail: "campingplatz@landesforste.at",
    adresse: "Gstatterboden 105 · 8913 Admont · Steiermark",
    coords: { lat: 47.5894, lng: 14.6275 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Lagerfeuer & Grill", href: "#camping" },
      ],
    },
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default landesforste;
