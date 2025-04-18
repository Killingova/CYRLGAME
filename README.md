
# UX/UI Projektplan — Pfad des Paradoxons

## 1. Projektübersicht

### Vision
Digitale Reise durch symbolische Welten & Karten – Reflexion, Wissen, Selbsterkenntnis. Spielerisch, intuitiv, inspirierend.

### Zielgruppe
- Menschen, die spielerische Reflexion & moderne Spiritualität suchen
- Nutzer*innen von Selfcare-Apps, Kreativ-Coaching, Tarot/Numerologie
- Offene Zielgruppe für Themen wie Technologie, Werte, Zukunft

## 2. Bestandteile & Features der App

| Feature / Modul             | Beschreibung                                    | Ziel                                     |
|-----------------------------|-------------------------------------------------|------------------------------------------|
| **HeroBereich**             | Zufällige Begrüßungswelt                        | Inspiration beim Einstieg                |
| **LegungCarousel**          | Auswahl verschiedener Legungen (Welten)         | Spielerische Navigation                  |
| **Einzelne Legung-Ansicht** | Interaktives Kartenlegen                        | Tiefer Einstieg in Themen                |
| **FiftyCards**              | Symbolische Wissensdatenbank (New World Cards)    | Bildung, Reflexion, Symbolik             |
| **CardBox**                 | Auswahl Kartensets (Tarot, Lenormand etc.)        | Flexibilität & Vielfalt                  |
| **CardDisplay**             | Ansicht einer gezogenen Karte                   | Information, Meditation, Tipps           |
| **Summary**                 | Auswertung gezogener Karten                       | Persönliche Erkenntnisse                 |
| **PythagoreanNumerology**   | Zahlensymbolik                                  | Numerologie-Analyse                      |
| **Rechner**                 | Tools, Mini-Games, Zusatzinfos                  | Unterhaltung, Wissen                     |
| **Navigation / Header**     | Schnellzugriff & Responsive Design              | Usability                                |
| **Footer**                  | Impressum, Datenschutz etc.                     | Rechtliche Infos                         |

## 3. Struktur & Seitenarchitektur
App.jsx │ ├── Header (Navigation) │ ├── Routes: │ ├── Home (Landingpage + alle Legungen) │ ├── FiftyCards (New World Karten-Wiki) │ ├── Kontakt │ ├── Impressum │ ├── Datenschutz │ └── Footer

## 4. Optimierter User Flow

- **Startflow:**  
  Einstieg im Hero-Bereich mit inspirierender Welt

- **Call to Action:**  
  „Wähle deine Welt“ → LegungCarousel

- **Legung starten:**  
  Übergang zur Legung-Detailansicht

- **Karten ziehen:**  
  Darstellung in CardDisplay & Summary

- **Optionen:**  
  - Wissensbereich / FiftyCards öffnen  
  - Numerologie nutzen oder Rechner ausprobieren

- **Footer:**  
  Kontakt / Impressum / Datenschutz

## 5. Erweiterbare Zukunfts-Features

| Modul                     | Funktion                          | Nutzen                                  |
|---------------------------|-----------------------------------|-----------------------------------------|
| **User Account / Login**  | Eigene Karten-Sammlung speichern  | Personalisierung                        |
| **Journal / Tagebuch**    | Eigene Notizen zu Legungen        | Reflexion stärken                       |
| **Sharing / Export**      | Karten-Bilder teilen              | Soziale Interaktion                     |
| **Fortschrittssystem**    | Badges / Levels freischalten      | Motivation, Gamification                |
| **Dark / Light Mode Toggle** | Theme Switch                    | Accessibility, Ästhetik                   |
| **Global Search**         | Suche in allen Karten & Inhalten  | Bessere Orientierung                    |
| **API Integration**       | z.B. KI-generierte Texte          | Technische Erweiterung                  |

## 6. Visuelles Konzept

### Farbschema
- **Hintergrund:** `#260101`
- **Akzente:** `#DCDEF2`, `#D9A384`, `#F2CA50`, `#1F4C73`, `#8C5A67`
- **Text:** Weiß / Dunkelrot
- **Bilder:** Illustrativ, mystisch, modern

### Typografie
- **Logo:** Dancing Script
- **Fließtext:** Sans-Serif, gut lesbar
- **Headings:** Extrabold / Akzentfarbe

### Layout-System
- **Grid-Layout:** 4 / 8 / 12 Spalten
- **Design-Richtlinien:**  
  Figma-Grids & Spacing-8pt-Regel  
  Mobile First, dann Tablet & Desktop

### Animationen
- **Framework:** Framer Motion
- **Effekte:** Fade-In, Slide-In, Hover-Effekte  
  Sanfte Übergänge zwischen den Welten

## 7. UX Prinzipien
- Spielerisches Erkunden
- Symbolik klar kommuniziert
- Sanfte Führung ohne Zwang
- Intuitive Interaktion
- Responsive & Barrierearm
- Starke emotionale Ansprache

## 8. Nächste Schritte (Empfehlung)

| ToDo                          | Nutzen                                      |
|-------------------------------|---------------------------------------------|
| **UX Flowchart zeichnen**     | Visualisierung des Nutzerflusses            |
| **Styleguide finalisieren**   | Festlegung von Farben, Typo, Komponentenstandard |
| **Komponentensystem aufräumen** | Verbesserung der Wartbarkeit              |
| **Figma-Prototyp erweitern**  | Rapid Prototyping und Vorbereitung von Testing |
| **User Tests planen**         | Sammlung von Feedback                       |



# 🌌 CYRLGAME – Reise durch Paradoxe

Willkommen zur offiziellen Dokumentation unserer interaktiven Kartenreise-App. Dieses Projekt kombiniert moderne Webtechnologien mit einem tiefgründigen, symbolischen Kartensystem. Die App lädt dazu ein, durch verschiedene „Welten“ zu reisen – jede repräsentiert durch eine Legung oder eine Karte mit Bedeutung.

---

## 🔧 Technologien & Setup

| Bereich         | Technologien / Tools                    |
|----------------|------------------------------------------|
| **Framework**   | React 18, Vite                          |
| **Styling**     | Tailwind CSS                            |
| **Animationen** | Framer Motion                           |
| **Icons**       | Lucide Icons                            |
| **Build-Tool**  | Vite                                     |
| **Deployment**  | GitHub Pages via `peaceiris/actions-gh-pages` |
| **Auth**        | GitHub CLI (`gh`), Personal Access Token mit `repo`, `workflow`, `read:org` |

---

## ✅ Was wir am 04.04.2025 umgesetzt haben

### 1. ⚙️ Projekt-Setup & Build

- Vite-Projekt vollständig eingerichtet.
- `vite.config.js` angepasst:

```js
export default defineConfig({
  base: '/CYRLGAME/', // wichtig für GitHub Pages
  plugins: [react()],
});
```

- Erfolgreicher Produktions-Build:
  ```bash
  npm run build
  ```

---

### 2. 🚀 GitHub Pages Deployment

- Deployment-Workflow `.github/workflows/deploy.yml` erstellt mit:
  - `actions/checkout@v3`
  - `actions/setup-node@v3`
  - `npm ci`
  - `vite build`
  - `peaceiris/actions-gh-pages@v3`

- Probleme gelöst:
  - GitHub Actions hatten keinen Schreibzugriff → „Workflow Permissions“ in den **Repository-Einstellungen** auf `Read and Write` gestellt.
  - GitHub CLI (`gh`) neu authentifiziert mit Token (`repo`, `workflow`, `read:org`).
  - Deployment über `gh run list` erfolgreich überprüft.

---

### 3. 🖼️ Bildpfade gefixt

- **Problem**: Bilder wie `/kristin-avatar.jpg` wurden lokal korrekt geladen, aber online nicht gefunden (404).
- **Ursache**: GitHub Pages verwendet ein Subverzeichnis (`/CYRLGAME/`), daher funktioniert `/bild.jpg` nicht.
- **Fix**: Alle Bildpfade umgestellt auf:

```jsx
<img src={`${import.meta.env.BASE_URL}kristin-avatar.jpg`} alt="Avatar" />
```

- Umgesetzt in:
  - `HeroBereich.jsx`
  - `Header.jsx`
  - `cardArticles` (HTML-Artikel in JS)

---

### 4. ✨ Komponenten überarbeitet

#### 🧠 `HeroBereich.jsx`
- Zeigt per Zufall eine „Welt“ aus einer Liste an, z. B.:
  - *Willkommen in der Welt der kosmischen Weisheit*
- Avatar-Bild mit abgerundeter Umrandung
- Responsive Layout

#### 🧭 `Header.jsx`
- Zwei Logos links und rechts
- Titel in der Mitte
- Responsives Burger-Menü für Mobilgeräte
- Glatte Navigation zu Anker-Abschnitten

---

### 5. 🧠 Datenstruktur `newworldData.js`

- 50 symbolische Karten in 5 Gruppen:
  1. Gesellschaft & Status
  2. Technologie & digitale Musen
  3. Wissenschaft & globale Herausforderungen
  4. Tugenden & Prinzipien
  5. Spirituelle Vollendung & neue Weltordnung

- Enthält auch:
  - Zahlensymbolik pro Karte
  - Ausführliche Texte (z. B. Karte 1: Der Flüchtling) im Objekt `cardArticles`

---

## 🧪 Nützliche Befehle

```bash
# Build erstellen
npm run build

# Vorschau lokal starten
npm run preview

# Änderungen committen & pushen
git add .
git commit -m "🚀 build and deploy"
git push origin main

# Aktuelle GitHub Actions anzeigen
gh run list

# Workflow manuell starten
gh workflow run deploy.yml
```

---

## 🌐 Live-Demo

👉 [https://killingova.github.io/CYRLGAME/](https://killingova.github.io/CYRLGAME/)

---

## 🙌 Fazit

Heute wurde das Fundament für ein öffentlich sichtbares, interaktives Karten-Erlebnis geschaffen. Trotz GitHub-Permissions-Hürden konnten wir das Projekt erfolgreich deployen, Bildpfade anpassen und zentrale Komponenten stabilisieren. Die App ist bereit für kreative Inhalte und Erweiterungen!

🌟 Ziel des Tages:

Strukturierung und Erweiterung der React-basierten Web-App „Reise durch Paradoxe“ mit Routing, Komponentenarchitektur, dynamischem Kartenmodul und Einbindung des Impressums.

✅ Umgesetzte Schritte:

1. Komponentenstruktur & Routing

App.jsx umgestellt auf Routing mit react-router-dom.

Neue Pages eingeführt: Home.jsx und Impressum.jsx.

Routing mit <Routes> und <Route> implementiert.

Header und Footer als globale Komponenten beibehalten.

2. Legungsauswahl & Komponentenarchitektur

Legungsdaten aktuell direkt in Home.jsx definiert (nicht ausgelagert).

Alle Legungskomponenten (z. B. KeltischesKreuz, ChakraLegung, etc.) werden in Home.jsx importiert und direkt verwendet.

Kein separates legungen.js-Datenfile verwendet – aktuell ist Home.jsx die zentrale Steuerung.

Die gewählte Legung wird über einen State selectedLegung geladen und angezeigt.

3. Neue Welt – 50 Karten

FiftyCards.jsx integriert:

Zeigt alle Karten in gruppierten Tabellen.

Klick auf eine Karte öffnet CardDetail.jsx mit ausführlichem Artikel.

Die Artikel befinden sich im Objekt cardArticles in newworldData.js.

Layout mit Tailwind + Framer Motion animiert.

4. Fehlerbehebungen & Debugging

❌ Fehlermeldung: „No routes matched location '/CYRLGAME/'“
→ gelöst durch Nutzung von <BrowserRouter basename="/CYRLGAME"> (wird noch umzusetzen sein bei GitHub Pages).

❌ Fehler: legungen.js nicht vorhanden → behoben, indem Legungen direkt in Home.jsx belassen wurden.

❌ JS-Parsing-Fehler durch versehentliche HTML-Datei als JS geladen → über Pfadbereinigung gelöst.

5. Footer-Komponente & Impressum

Footer eingebunden mit Links zu Impressum, Datenschutz, Kontakt und Socials.

Impressum in pages/Impressum.jsx erstellt und rechtlich korrekt gefüllt.

📝 Stand: 05.04.2025, 21:35 Uhr
🔧 Entwicklerin: Kristin Zhivkova

```markdown
# 🌌 CYRLGAME – Reise durch Paradoxe

Willkommen zur offiziellen Dokumentation des Projekts **"CYRLGAME – Reise durch Paradoxe"**.  
Dieses Projekt kombiniert moderne Webtechnologien mit einer interaktiven, symbolisch-spirituellen Kartenreise. Die App lädt dazu ein, durch verschiedene "Welten" zu reisen und mithilfe von Karten, Symbolen und Zahlen tief in die eigene Selbstreflexion einzutauchen.

---

## 🔧 Technologien & Setup

- **Framework:** React 18, Vite  
- **Styling:** Tailwind CSS  
- **Animationen:** Framer Motion  
- **Icons:** Lucide Icons  
- **Routing:** React Router (mit `basename` für GitHub Pages)  
- **Deployment:** GitHub Pages via `peaceiris/actions-gh-pages`  
- **Build-Tool:** Vite  

---

## ✅ Fortschritte & Lösungen vom 06.04.2025

### 1. Legungen zustandsbasiert starten

**Herausforderung:**  
Die interaktiven Karten (Legungen) sollten auf der Startseite auswählbar sein und den zugehörigen Detailinhalt anzeigen – ohne dass ein komplettes Routing (mit URL-Änderung) nötig ist.

**Lösung:**  
- In der `Home.jsx` wurde ein Zustand (`selectedLegung`) eingeführt, der die aktuell ausgewählte Legung speichert.
- Beim Klick auf eine Legung im `LegungCarousel` wird die Funktion `handleLegungClick` aufgerufen, die die jeweilige Legungskomponente (z. B. `ChakraLegung`, `KeltischesKreuz` etc.) per `React.createElement` rendert.
- Dadurch wird der Detailinhalt dynamisch innerhalb derselben Seite angezeigt, ohne dass sich die URL ändert.

**Code-Ausschnitt (Home.jsx):**

```jsx
function Home() {
  const [selectedLegung, setSelectedLegung] = useState(null);

  const handleLegungClick = (LegungComponent) => {
    console.log('Ausgewählte Legung:', LegungComponent);
    setSelectedLegung(() => LegungComponent);
  };

  const handleBackClick = () => {
    setSelectedLegung(null);
  };

  return (
    <div className="bg-[#1F4C73] min-h-screen">
      <HeroBereich />
      <FiftyCards />

      {selectedLegung ? (
        <section className="container mx-auto px-4">
          <button onClick={handleBackClick} className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Zurück zur Übersicht
          </button>
          <div className="bg-white p-4">
            {React.createElement(selectedLegung)}
          </div>
        </section>
      ) : (
        <>
          <h1 className="my-8 text-[#F2CA50] text-center text-5xl font-bold">
            Herzlich Willkommen ...
          </h1>
          <h3 className="text-center text-stone-200 text-3xl mb-4">
            Bitte wähle eine Tafel
          </h3>

          <LegungCarousel
            legungen={legungenArray.map((item) => ({
              title: item.title,
              image: item.image,
              info: item.info,
              onClick: () => handleLegungClick(item.Component)
            }))}
            onLegungClick={handleLegungClick}
          />
        </>
      )}

      <div className="text-center my-8">
        <button onClick={() => window.location.reload()} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Neues Spiel starten
        </button>
      </div>

      <PythagoreanNumerology />
      <Rechner />
    </div>
  );
}
```

---

### 2. Interne Navigation: Impressum und weitere Seiten

**Herausforderung:**  
Da unsere App über GitHub Pages unter dem Subverzeichnis `/CYRLGAME/` läuft und wir `BrowserRouter` mit `basename="/CYRLGAME"` verwenden, mussten wir sicherstellen, dass interne Links (z. B. Impressum, Datenschutz, Kontakt) korrekt funktionieren.

**Lösung:**  
- In der `Footer.jsx` wurden klassische `<a>`-Tags für interne Links durch `<Link>`-Komponenten von `react-router-dom` ersetzt.  
- Dadurch werden die Routen relativ zum Basispfad (z. B. `/CYRLGAME/impressum`) korrekt aufgelöst.

**Code-Ausschnitt (Footer.jsx):**

```jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F2921D] text-stone-900 py-10 px-6">
      {/* ... */}
      <div className="flex space-x-4">
        <Link to="/impressum" className="hover:text-white transition">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
        <Link to="/kontakt" className="hover:text-white transition">Kontakt</Link>
      </div>
      {/* ... */}
    </footer>
  );
};

export default Footer;
```

*Hinweis:*  
Der `BrowserRouter` in `main.jsx` nutzt `basename="/CYRLGAME"`, sodass alle internen Links automatisch als `/CYRLGAME/impressum` usw. aufgelöst werden.

---

### 3. Probleme & Debugging

- **Fehler "onLegungClick is not a function":**  
  Dieser Fehler wurde behoben, indem sichergestellt wurde, dass `handleLegungClick` sowohl als Prop an `LegungCarousel` übergeben wird als auch innerhalb des Legungs-Arrays als `onClick: () => handleLegungClick(item.Component)` definiert ist.

- **Bildpfade:**  
  Alle Bilder werden über den Basispfad referenziert (z. B. `/CYRLGAME/images/chakralegung.jpg`), sodass sie sowohl lokal als auch auf GitHub Pages korrekt geladen werden.

---

## 🧪 Nützliche Befehle

```bash
# Produktions-Build erstellen
npm run build

# Änderungen committen und pushen
git add .
git commit -m "🚀 Update: Legungen und Impressum Navigation gelöst (06.04.2025)"
git push origin main

# Aktuelle GitHub Actions anzeigen
gh run list

# Workflow manuell starten (falls nötig)
gh workflow run deploy.yml
```

---

## 🌐 Live-Demo

Die App wird über GitHub Pages bereitgestellt und ist erreichbar unter:  
**[https://killingova.github.io/CYRLGAME/](https://killingova.github.io/CYRLGAME/)**  
Interne Seiten (z. B. Impressum) sind erreichbar unter:  
**https://killingova.github.io/CYRLGAME/impressum**

---

## 🙌 Fazit

Am 06.04.2025 haben wir folgende Verbesserungen umgesetzt:

- **Legungen zustandsbasiert starten:**  
  Die interaktiven Karten werden dynamisch innerhalb der Home-Seite angezeigt, ohne dass sich die URL ändert.

- **Interne Navigation:**  
  Durch den Einsatz von React Router `<Link>`-Komponenten werden interne Seiten wie Impressum, Datenschutz und Kontakt korrekt relativ zum Basispfad geladen.

- **Fehlerbehebung:**  
  Probleme wie der "onLegungClick is not a function"-Fehler und falsche Bildpfade wurden erfolgreich behoben.

Diese Maßnahmen legen den Grundstein für die interaktive und benutzerfreundliche App **"Path of Paradox"** – bereit für weitere kreative Erweiterungen und Verbesserungen.

