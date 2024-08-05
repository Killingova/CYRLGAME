// Import von React-Bibliothek, die für das Erstellen von Komponenten verwendet wird
import React from 'react'

// Import von ReactDOM-Bibliothek, die für das Rendern von React-Komponenten im DOM verwendet wird
import ReactDOM from 'react-dom/client'

// Import der Haupt-App-Komponente aus der Datei 'App.jsx'
import App from './App.jsx'

// Import der globalen CSS-Datei für das Styling der Anwendung
import './index.css'

// Erstellen eines Root-Elements im DOM, in das die React-Anwendung gerendert wird
const rootElement = document.getElementById('root')

// Initialisieren des Root-Elements mit ReactDOM.createRoot, was die neue Root-API von React verwendet
const root = ReactDOM.createRoot(rootElement)

// Rendern der App-Komponente innerhalb von React.StrictMode
// React.StrictMode ist ein Wrapper, der zusätzliche Überprüfungen und Warnungen während der Entwicklung aktiviert
root.render(
  <React.StrictMode>
    {/* App-Komponente wird hier gerendert */}
    <App />
  </React.StrictMode>,
)
