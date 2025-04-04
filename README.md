
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
