const storytime = [
  {
    name: "Gilgamesch (ca. 2800-2500 v. Chr.)",
    image: "/images/gilgamesch.jpg",
    meaning: "Gilgamesch war der König von Uruk und suchte nach Unsterblichkeit. Er symbolisiert das Streben nach Weisheit und ewigem Leben.",
    meditation: "Welche Weisheit suche ich in meinem Leben?",
    tips: "Reflektiere über deine Ziele und die Bedeutung des Lebens."
  },
  {
    name: "Enkidu (ca. 2600 v. Chr.)",
    image: "/images/enkidu.jpg",
    meaning: "Enkidu war ein wilder Mann, der durch die Zivilisation gezähmt wurde und Gilgameschs engster Freund wurde.",
    meditation: "Wo finde ich das Gleichgewicht zwischen Natur und Zivilisation in meinem Leben?",
    tips: "Verbringe Zeit in der Natur, um innere Ruhe zu finden."
  },
  {
    name: "Utnapischtim (ca. 2100 v. Chr.)",
    image: "/images/utnapischtim.jpg",
    meaning: "Utnapischtim war der einzige Mensch, der von den Göttern Unsterblichkeit erhalten hat, nachdem er die Sintflut überlebt hatte.",
    meditation: "Was ist der wahre Wert des Lebens für mich?",
    tips: "Schätze die Gegenwart und die vergänglichen Momente des Lebens."
  },
  {
    name: "Lugalbanda (ca. 2600 v. Chr.)",
    image: "/images/lugalbanda.jpg",
    meaning: "Lugalbanda, Gilgameschs Vater, war ein Held in mehreren sumerischen Mythen.",
    meditation: "Welche Qualitäten kann ich von meinen Vorfahren lernen?",
    tips: "Ehre deine Vergangenheit und lerne aus den Lektionen derer, die vor dir kamen."
  },
  {
    name: "Shamhat (ca. 2600 v. Chr.)",
    image: "/images/shamhat.jpg",
    meaning: "Shamhat war die Priesterin, die Enkidu zivilisierte und ihn in die menschliche Gesellschaft einführte.",
    meditation: "Wie kann ich in Harmonie mit der Welt um mich herum leben?",
    tips: "Sei offen für neue Perspektiven und baue Brücken zwischen Mensch und Natur."
  },
  {
    name: "Ninsun (ca. 2800 v. Chr.)",
    image: "/images/ninsun.jpg",
    meaning: "Ninsun, die göttliche Mutter von Gilgamesch, war eine Kuhgöttin und weise Beraterin.",
    meditation: "Wo brauche ich in meinem Leben mehr mütterliche Weisheit und Fürsorge?",
    tips: "Sorge für dich selbst und zeige Mitgefühl gegenüber anderen."
  },
  {
    name: "Ishtar (Inanna) (ca. 3000 v. Chr.)",
    image: "/images/ishtar.jpg",
    meaning: "Ishtar war die Göttin der Liebe, des Krieges und der Fruchtbarkeit. Sie war eine mächtige und widersprüchliche Figur.",
    meditation: "Wie finde ich Balance zwischen Leidenschaft und Zerstörung?",
    tips: "Setze deine Energie weise ein und finde einen Weg, um Ausgeglichenheit in deinem Leben zu schaffen."
  },
  {
    name: "Anu (ca. 3000 v. Chr.)",
    image: "/images/anu.jpg",
    meaning: "Anu war der Himmelsgott und der oberste Gott im mesopotamischen Pantheon.",
    meditation: "Was bedeutet für mich göttliche Autorität?",
    tips: "Erkenne die größeren Mächte in deinem Leben und akzeptiere deine Rolle darin."
  },
  {
    name: "Shamash (ca. 3000 v. Chr.)",
    image: "/images/shamash.jpg",
    meaning: "Shamash war der Sonnengott und der Gott der Gerechtigkeit.",
    meditation: "Wo benötige ich mehr Gerechtigkeit und Licht in meinem Leben?",
    tips: "Strebe danach, ehrlich und fair in deinen Handlungen zu sein."
  },
  {
    name: "Enlil (ca. 3000 v. Chr.)",
    image: "/images/enlil.jpg",
    meaning: "Enlil war der Gott der Stürme und der Erde. Er symbolisiert die Macht der Natur.",
    meditation: "Wie kann ich mich besser mit den natürlichen Kräften um mich herum verbinden?",
    tips: "Finde Wege, dich mit der Natur zu verbinden und ihre Kraft zu respektieren."
  },
  {
    name: "Ea (Enki) (ca. 3000 v. Chr.)",
    image: "/images/ea.jpg",
    meaning: "Ea war der Gott des Wassers und der Weisheit. Er half der Menschheit, sich zu entwickeln.",
    meditation: "Wie kann ich Weisheit in mein tägliches Leben integrieren?",
    tips: "Suche Wissen und wende es auf praktische Weise an, um dein Leben zu verbessern."
  },
  {
    name: "Aruru (ca. 3000 v. Chr.)",
    image: "/images/aruru.jpg",
    meaning: "Aruru war die Göttin der Schöpfung und erschuf Enkidu aus Lehm.",
    meditation: "Was möchte ich in meinem Leben erschaffen?",
    tips: "Nutze deine kreativen Fähigkeiten, um etwas Bedeutungsvolles zu erschaffen."
  },
  {
    name: "Tammuz (Dumuzi) (ca. 2600 v. Chr.)",
    image: "/images/tammuz.jpg",
    meaning: "Tammuz war der Gott der Vegetation und Fruchtbarkeit, der jährlich stirbt und wiedergeboren wird.",
    meditation: "Wie kann ich die Zyklen des Lebens besser akzeptieren?",
    tips: "Erkenne, dass das Leben in Zyklen verläuft und jeder Verlust auch eine neue Chance bringt."
  },
  {
    name: "Ninurta (ca. 3000 v. Chr.)",
    image: "/images/ninurta.jpg",
    meaning: "Ninurta war der Gott des Krieges und der Jagd, der gegen Chaos kämpfte.",
    meditation: "Wie kämpfe ich gegen das Chaos in meinem Leben?",
    tips: "Setze klare Prioritäten und kämpfe gegen Unordnung und Verwirrung in deinem Alltag."
  },
  {
    name: "Ereshkigal (ca. 3000 v. Chr.)",
    image: "/images/ereshkigal.jpg",
    meaning: "Ereshkigal war die Göttin der Unterwelt und herrschte über die Toten.",
    meditation: "Was bedeutet für mich der Tod und das Ende von Dingen?",
    tips: "Akzeptiere das Ende von Phasen in deinem Leben und bereite dich auf neue Anfänge vor."
  },
  {
    name: "Nergal (ca. 3000 v. Chr.)",
    image: "/images/nergal.jpg",
    meaning: "Nergal war der Gott des Krieges, der Pest und der Unterwelt.",
    meditation: "Wie gehe ich mit Zerstörung und Verlust in meinem Leben um?",
    tips: "Finde Wege, um nach Verlusten Heilung und Wiederaufbau zu ermöglichen."
  },
  {
    name: "Marduk (ca. 1800 v. Chr.)",
    image: "/images/marduk.jpg",
    meaning: "Marduk war der Schöpfergott und besiegte das Chaos, um Ordnung in die Welt zu bringen.",
    meditation: "Wie kann ich Ordnung in mein Leben bringen?",
    tips: "Schaffe Struktur in deinem Leben, um ein Gefühl von Kontrolle und Sicherheit zu erhalten."
  },
  {
    name: "Ashur (ca. 2000 v. Chr.)",
    image: "/images/ashur.jpg",
    meaning: "Ashur war der Kriegsgott des assyrischen Reiches und Symbol für militärische Macht.",
    meditation: "Was bedeutet für mich Macht und Verantwortung?",
    tips: "Nutze deine Macht weise und denke an die Verantwortung, die damit einhergeht."
  },
  {
    name: "Adad (Hadad) (ca. 2300 v. Chr.)",
    image: "/images/adad.jpg",
    meaning: "Adad war der Gott des Wetters, verantwortlich für Regen, Sturm und Fruchtbarkeit.",
    meditation: "Wie beeinflussen äußere Kräfte mein Leben?",
    tips: "Lerne, äußere Einflüsse anzunehmen und passe dich ihnen an."
  },
  {
    name: "Humbaba (ca. 2600 v. Chr.)",
    image: "/images/humbaba.jpg",
    meaning: "Humbaba war der Wächter des Zedernwaldes und wurde von Gilgamesch und Enkidu besiegt.",
    meditation: "Welche Herausforderungen bewache ich in meinem Leben?",
    tips: "Stelle dich den Hindernissen in deinem Leben mit Mut und Entschlossenheit."
  },
  {
    name: "Himmelsstier (ca. 3000 v. Chr.)",
    image: "/images/himmelsstier.jpg",
    meaning: "Der Himmelsstier war ein mächtiges Wesen, das von Ishtar gesandt wurde, um Gilgamesch zu bestrafen.",
    meditation: "Welche Kräfte in meinem Leben versuche ich zu kontrollieren?",
    tips: "Finde Wege, um übermächtige Situationen zu bewältigen."
  },
  {
    name: "Skorpionmenschen (ca. 3000 v. Chr.)",
    image: "/images/skorpionmenschen.jpg",
    meaning: "Die Skorpionmenschen bewachen den Berg Mashu und symbolisieren die Grenze zwischen den Welten.",
    meditation: "Wo sind die Grenzen in meinem Leben?",
    tips: "Respektiere die natürlichen Grenzen in deinem Leben und lerne, damit umzugehen."
  },
  {
    name: "Die Schlange (ca. 3000 v. Chr.)",
    image: "/images/schlange.jpg",
    meaning: "Die Schlange stahl die Pflanze der Unsterblichkeit von Gilgamesch.",
    meditation: "Was habe ich in meinem Leben verloren?",
    tips: "Lerne aus Verlusten und finde Wege, dich nach Rückschlägen zu erholen."
  }
];

export default storytime;