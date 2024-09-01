const moonOracleCards = [
    // Neumond in den Sternzeichen (12 Karten)
    {
        name: "1. Neumond im Widder",
        image: "/images/new_moon_aries.jpg",
        meaning: "Steht für Neuanfänge und das Setzen von mutigen, neuen Zielen.",
        meditation: "Welche neuen Ziele möchte ich mutig verfolgen?",
        tips: "Nutzen Sie die Energie des Neumonds im Widder, um neue Projekte zu starten."
    },
    {
        name: "2. Neumond im Stier",
        image: "/images/new_moon_taurus.jpg",
        meaning: "Steht für Stabilität und das Manifestieren von materiellen Wünschen.",
        meditation: "Wie kann ich mehr Sicherheit und Wohlstand in mein Leben ziehen?",
        tips: "Konzentrieren Sie sich auf langfristige Ziele, die Ihnen materielle Sicherheit bieten."
    },
    {
        name: "3. Neumond im Zwillinge",
        image: "/images/new_moon_gemini.jpg",
        meaning: "Steht für Kommunikation und das Teilen neuer Ideen.",
        meditation: "Wie kann ich meine Ideen effektiv kommunizieren?",
        tips: "Nutzen Sie diesen Neumond, um neue Kommunikationswege zu erkunden."
    },
    {
        name: "4. Neumond im Krebs",
        image: "/images/new_moon_cancer.jpg",
        meaning: "Steht für emotionale Neuanfänge und das Fokussieren auf Familie und Zuhause.",
        meditation: "Wie kann ich emotionale Heilung in mein Leben bringen?",
        tips: "Konzentrieren Sie sich auf Ihre inneren Bedürfnisse und stärken Sie familiäre Bindungen."
    },
    {
        name: "5. Neumond im Löwen",
        image: "/images/new_moon_leo.jpg",
        meaning: "Steht für kreative Neuanfänge und Selbstausdruck.",
        meditation: "Wie kann ich meine Kreativität voll entfalten?",
        tips: "Setzen Sie sich mutig für Ihre kreativen Projekte ein."
    },
    {
        name: "6. Neumond in der Jungfrau",
        image: "/images/new_moon_virgo.jpg",
        meaning: "Steht für Neuanfänge in Bezug auf Gesundheit und Ordnung.",
        meditation: "Wie kann ich meinen Alltag strukturieren, um gesünder zu leben?",
        tips: "Nutzen Sie diesen Neumond, um Ihre Routinen zu optimieren."
    },
    {
        name: "7. Neumond in der Waage",
        image: "/images/new_moon_libra.jpg",
        meaning: "Steht für Balance und harmonische Beziehungen.",
        meditation: "Wie kann ich mehr Ausgeglichenheit in meine Beziehungen bringen?",
        tips: "Fokussieren Sie sich auf das Schaffen von Harmonie in Ihrem sozialen Umfeld."
    },
    {
        name: "8. Neumond im Skorpion",
        image: "/images/new_moon_scorpio.jpg",
        meaning: "Steht für Transformation und emotionale Erneuerung.",
        meditation: "Welche tiefen Veränderungen muss ich annehmen?",
        tips: "Nutzen Sie diesen Neumond, um Altes loszulassen und Raum für Neues zu schaffen."
    },
    {
        name: "9. Neumond im Schützen",
        image: "/images/new_moon_sagittarius.jpg",
        meaning: "Steht für neue Abenteuer und spirituelles Wachstum.",
        meditation: "Welche neuen Horizonte möchte ich erkunden?",
        tips: "Planen Sie Reisen oder beginnen Sie ein neues Studium."
    },
    {
        name: "10. Neumond im Steinbock",
        image: "/images/new_moon_capricorn.jpg",
        meaning: "Steht für berufliche Neuanfänge und Verantwortung.",
        meditation: "Wie kann ich meine Karriereziele erreichen?",
        tips: "Setzen Sie klare, realistische Ziele und arbeiten Sie strukturiert darauf hin."
    },
    {
        name: "11. Neumond im Wassermann",
        image: "/images/new_moon_aquarius.jpg",
        meaning: "Steht für Innovation und das Erreichen von Gemeinschaftszielen.",
        meditation: "Wie kann ich meine sozialen Ideale umsetzen?",
        tips: "Engagieren Sie sich in sozialen Projekten und fördern Sie Innovation."
    },
    {
        name: "12. Neumond in den Fischen",
        image: "/images/new_moon_pisces.jpg",
        meaning: "Steht für spirituelle Neuanfänge und das Anzapfen der Intuition.",
        meditation: "Wie kann ich meine spirituelle Seite vertiefen?",
        tips: "Nutzen Sie diese Zeit für Meditation und spirituelle Praktiken."
    },

    // Vollmond in den Sternzeichen (12 Karten)
    {
        name: "13. Vollmond im Widder",
        image: "/images/full_moon_aries.jpg",
        meaning: "Steht für die Vollendung von mutigen Projekten und das Ernten von Ergebnissen.",
        meditation: "Welche meiner mutigen Entscheidungen trägt jetzt Früchte?",
        tips: "Feiern Sie Ihre Erfolge und reflektieren Sie über Ihre Fortschritte."
    },
    {
        name: "14. Vollmond im Stier",
        image: "/images/full_moon_taurus.jpg",
        meaning: "Steht für die Manifestation von Wohlstand und Sinnlichkeit.",
        meditation: "Wie genieße ich die Fülle, die ich erschaffen habe?",
        tips: "Erden Sie sich in sinnlichen Freuden und materieller Sicherheit."
    },
    {
        name: "15. Vollmond im Zwillinge",
        image: "/images/full_moon_gemini.jpg",
        meaning: "Steht für Klarheit in der Kommunikation und den Austausch von Ideen.",
        meditation: "Welche Botschaften möchte ich jetzt mit anderen teilen?",
        tips: "Verbreiten Sie Ihre Ideen und nutzen Sie die Energie für klare Kommunikation."
    },
    {
        name: "16. Vollmond im Krebs",
        image: "/images/full_moon_cancer.jpg",
        meaning: "Steht für emotionale Erfüllung und den Schutz der Familie.",
        meditation: "Wie kann ich emotionale Sicherheit für mich und meine Lieben schaffen?",
        tips: "Verbringen Sie Zeit mit Ihrer Familie und schaffen Sie einen sicheren Raum."
    },
    {
        name: "17. Vollmond im Löwen",
        image: "/images/full_moon_leo.jpg",
        meaning: "Steht für das Feiern von Kreativität und Selbstausdruck.",
        meditation: "Wie kann ich meine kreativen Werke mit der Welt teilen?",
        tips: "Zeigen Sie stolz Ihre kreativen Projekte und feiern Sie Ihre Individualität."
    },
    {
        name: "18. Vollmond in der Jungfrau",
        image: "/images/full_moon_virgo.jpg",
        meaning: "Steht für die Ernte harter Arbeit und das Erreichen von Perfektion.",
        meditation: "Welche meiner Bemühungen tragen jetzt Früchte?",
        tips: "Reflektieren Sie über Ihre Errungenschaften und planen Sie die nächsten Schritte."
    },
    {
        name: "19. Vollmond in der Waage",
        image: "/images/full_moon_libra.jpg",
        meaning: "Steht für die Harmonie in Beziehungen und das Erreichen von Ausgeglichenheit.",
        meditation: "Wie kann ich mehr Balance in meinen Beziehungen schaffen?",
        tips: "Fokussieren Sie sich auf das Pflegen Ihrer Beziehungen und das Schaffen von Harmonie."
    },
    {
        name: "20. Vollmond im Skorpion",
        image: "/images/full_moon_scorpio.jpg",
        meaning: "Steht für die tiefgehende Transformation und das Freisetzen von innerer Kraft.",
        meditation: "Welche tiefen Emotionen muss ich loslassen, um zu wachsen?",
        tips: "Nutzen Sie diese Zeit, um sich von toxischen Einflüssen zu befreien."
    },
    {
        name: "21. Vollmond im Schützen",
        image: "/images/full_moon_sagittarius.jpg",
        meaning: "Steht für das Erreichen von Weisheit und die Erfüllung von Abenteuern.",
        meditation: "Was habe ich auf meiner Reise des Lebens gelernt?",
        tips: "Reflektieren Sie über Ihre spirituellen und intellektuellen Errungenschaften."
    },
    {
        name: "22. Vollmond im Steinbock",
        image: "/images/full_moon_capricorn.jpg",
        meaning: "Steht für das Erreichen von Karriereziele und die Anerkennung harter Arbeit.",
        meditation: "Welche beruflichen Erfolge kann ich jetzt feiern?",
        tips: "Genießen Sie die Früchte Ihrer Arbeit und planen Sie langfristig."
    },
    {
        name: "23. Vollmond im Wassermann",
        image: "/images/full_moon_aquarius.jpg",
        meaning: "Steht für das Feiern von Gemeinschaft und Innovation.",
        meditation: "Wie kann ich meine Ideen mit der Gemeinschaft teilen?",
        tips: "Nutzen Sie diese Zeit, um Ihre innovativen Ideen mit anderen zu teilen."
    },
    {
        name: "24. Vollmond in den Fischen",
        image: "/images/full_moon_pisces.jpg",
        meaning: "Steht für spirituelle Erfüllung und das Erreichen von innerem Frieden.",
        meditation: "Wie kann ich tiefen inneren Frieden in meinem Leben finden?",
        tips: "Nehmen Sie sich Zeit für Meditation und spirituelle Praktiken."
    },

    // Grundlegende Mondphasen (8 Karten)
    {
        name: "25. Neumond",
        image: "/images/new_moon.jpg",
        meaning: "Symbolisiert Neuanfänge und frische Möglichkeiten.",
        meditation: "Welche neuen Ziele möchte ich setzen?",
        tips: "Nutzen Sie diese Phase, um neue Projekte zu beginnen und Absichten zu setzen."
    },
    {
        name: "26. Zunehmende Mondsichel",
        image: "/images/waxing_crescent_moon.jpg",
        meaning: "Steht für das Wachstum und die Entfaltung von Ideen oder Projekten.",
        meditation: "Wie kann ich meine Ideen weiterentwickeln?",
        tips: "Verfolgen Sie Ihre Ziele mit Entschlossenheit und Energie."
    },
    {
        name: "27. Erstes Viertel",
        image: "/images/first_quarter_moon.jpg",
        meaning: "Repräsentiert Entscheidungen und die Notwendigkeit, aktiv zu werden.",
        meditation: "Welche Entscheidungen muss ich jetzt treffen?",
        tips: "Seien Sie entschlossen und überwinden Sie Hindernisse."
    },
    {
        name: "28. Zunehmender Mond",
        image: "/images/waxing_gibbous_moon.jpg",
        meaning: "Fokussiert auf den Fortschritt und die Entwicklung.",
        meditation: "Wie kann ich weiterhin Fortschritte machen?",
        tips: "Verfeinern Sie Ihre Pläne und bleiben Sie auf Kurs."
    },
    {
        name: "29. Vollmond",
        image: "/images/full_moon.jpg",
        meaning: "Steht für Erfüllung, Vollendung und das Erreichen von Zielen.",
        meditation: "Welche meiner Ziele haben sich manifestiert?",
        tips: "Feiern Sie Ihre Erfolge und seien Sie dankbar für das Erreichte."
    },
    {
        name: "30. Abnehmender Mond",
        image: "/images/waning_gibbous_moon.jpg",
        meaning: "Symbolisiert das Loslassen und die Reflexion.",
        meditation: "Was muss ich loslassen, um weiter zu wachsen?",
        tips: "Lassen Sie los, was Ihnen nicht mehr dient, und bereiten Sie sich auf Neues vor."
    },
    {
        name: "31. Letztes Viertel",
        image: "/images/last_quarter_moon.jpg",
        meaning: "Repräsentiert das Ende eines Zyklus und die Vorbereitung auf neue Anfänge.",
        meditation: "Welche Lektionen habe ich gelernt?",
        tips: "Reflektieren Sie über Ihre Erfahrungen und bereiten Sie sich auf den nächsten Zyklus vor."
    },
    {
        name: "32. Abnehmende Mondsichel",
        image: "/images/waning_crescent_moon.jpg",
        meaning: "Fokussiert auf das Loslassen und die Klärung von Gedanken und Emotionen.",
        meditation: "Was kann ich jetzt loslassen?",
        tips: "Reinigen Sie Ihren Geist und Ihr Herz, um sich auf den nächsten Neumond vorzubereiten."
    },

    // Spezielle Mondkarten (16 Karten)
    {
        name: "33. Supermond",
        image: "/images/super_moon.jpg",
        meaning: "Ein Supermond tritt auf, wenn der Vollmond nahe dem erdnächsten Punkt seiner Umlaufbahn (Perigäum) steht.",
        meditation: "Welche meiner Wünsche kann ich jetzt verstärken?",
        tips: "Nutzen Sie die verstärkte Energie, um Ihre Manifestationen zu beschleunigen."
    },
    {
        name: "34. Blue Moon",
        image: "/images/blue_moon.jpg",
        meaning: "Als Blue Moon bezeichnet man den zweiten Vollmond innerhalb eines Kalendermonats.",
        meditation: "Welche seltenen Gelegenheiten möchte ich nutzen?",
        tips: "Ergreifen Sie diese seltene Chance, um etwas Besonderes zu erreichen."
    },
    {
        name: "35. Blutmond",
        image: "/images/blood_moon.jpg",
        meaning: "Ein Blutmond entsteht während einer totalen Mondfinsternis, bei der sich der Mond rötlich färbt.",
        meditation: "Welche tiefen Veränderungen stehen mir bevor?",
        tips: "Nutzen Sie die transformative Energie, um tiefgreifende Veränderungen vorzunehmen."
    },
    {
        name: "36. Schwarzmond",
        image: "/images/black_moon.jpg",
        meaning: "Als Schwarzmond wird der zweite Neumond in einem Kalendermonat bezeichnet.",
        meditation: "Welche inneren Prozesse möchte ich starten?",
        tips: "Nutzen Sie diese Zeit für innere Arbeit und Reflexion."
    },
    {
        name: "37. Erdbeermond",
        image: "/images/strawberry_moon.jpg",
        meaning: "Der Erdbeermond ist der Vollmond im Juni und symbolisiert die Erdbeererntezeit.",
        meditation: "Welche Früchte meiner Arbeit kann ich jetzt genießen?",
        tips: "Genießen Sie die Fülle, die Sie geschaffen haben."
    },
    {
        name: "38. Mond im Erdlicht",
        image: "/images/moon_in_earthshine.jpg",
        meaning: "Dieses Phänomen tritt auf, wenn der Mond im Erdlicht schwach leuchtet, kurz vor oder nach Neumond.",
        meditation: "Was spiegelt mein Inneres wider?",
        tips: "Nutzen Sie die Stille dieser Zeit, um sich mit Ihrem Inneren zu verbinden."
    },
    {
        name: "39. Jägermond",
        image: "/images/hunter_moon.jpg",
        meaning: "Der Jägermond ist der Vollmond im Oktober, der traditionell die Jagdzeit markiert.",
        meditation: "Welche Ressourcen kann ich jetzt sammeln?",
        tips: "Bereiten Sie sich auf die kommende Zeit vor, indem Sie Ihre Ressourcen sichern."
    },
    {
        name: "40. Erntemond",
        image: "/images/harvest_moon.jpg",
        meaning: "Der Erntemond ist der Vollmond, der dem Herbstanfang am nächsten ist.",
        meditation: "Wofür bin ich in meinem Leben dankbar?",
        tips: "Feiern Sie die Fülle und seien Sie dankbar für alles, was Sie erreicht haben."
    },
    {
        name: "41. Wolfsmond",
        image: "/images/wolf_moon.jpg",
        meaning: "Der Wolfsmond ist der erste Vollmond im Januar und symbolisiert Schutz und Überleben.",
        meditation: "Wie kann ich mich in schwierigen Zeiten schützen?",
        tips: "Stärken Sie Ihre innere Widerstandskraft und bereiten Sie sich auf Herausforderungen vor."
    },
    {
        name: "42. Schneemond",
        image: "/images/snow_moon.jpg",
        meaning: "Der Schneemond ist der Vollmond im Februar und symbolisiert Reinigung und Vorbereitung.",
        meditation: "Wie kann ich mich auf kommende Veränderungen vorbereiten?",
        tips: "Nutzen Sie diese Zeit für innere Reinigung und Klarheit."
    },
    {
        name: "43. Rosenmond",
        image: "/images/rose_moon.jpg",
        meaning: "Der Rosenmond ist der Vollmond im Juni und steht für Liebe und Romantik.",
        meditation: "Wie kann ich Liebe und Harmonie in mein Leben ziehen?",
        tips: "Pflegen Sie Ihre Beziehungen und öffnen Sie Ihr Herz für neue Liebe."
    },
    {
        name: "44. Erzengel-Mond",
        image: "/images/archangel_moon.jpg",
        meaning: "Dieser seltene Vollmond tritt auf, wenn drei aufeinanderfolgende Vollmonde im gleichen Zeichen stehen.",
        meditation: "Welche spirituelle Führung brauche ich jetzt?",
        tips: "Verbinden Sie sich mit höheren Kräften und bitten Sie um Führung und Schutz."
    },
    {
        name: "45. Super-Blutmond",
        image: "/images/super_blood_moon.jpg",
        meaning: "Ein Super-Blutmond tritt auf, wenn ein Supermond mit einer totalen Mondfinsternis zusammenfällt.",
        meditation: "Welche tiefen Transformationen erlebe ich gerade?",
        tips: "Nutzen Sie diese intensive Energie, um bedeutende Veränderungen vorzunehmen."
    },
    {
        name: "46. Roter Mond",
        image: "/images/red_moon.jpg",
        meaning: "Ein Roter Mond kann durch atmosphärische Bedingungen entstehen, die den Mond rötlich erscheinen lassen.",
        meditation: "Welche intensiven Emotionen muss ich annehmen?",
        tips: "Erlauben Sie sich, Ihre tiefen Gefühle zu erforschen und auszudrücken."
    },
    {
        name: "47. Eisheilig-Mond",
        image: "/images/ice_saint_moon.jpg",
        meaning: "Der Eisheilig-Mond ist der letzte Vollmond vor den Eisheiligen im Mai.",
        meditation: "Wie kann ich mich auf unvorhergesehene Herausforderungen vorbereiten?",
        tips: "Schützen Sie sich und planen Sie für schwierige Zeiten voraus."
    },
    {
        name: "48. Kornmond",
        image: "/images/corn_moon.jpg",
        meaning: "Der Kornmond ist der Vollmond im August und symbolisiert die Zeit der Getreideernte.",
        meditation: "Welche Früchte meiner Arbeit kann ich jetzt ernten?",
        tips: "Genießen Sie den Erfolg Ihrer harten Arbeit und feiern Sie die Ernte."
    },

    // Mond- und Sonnenfinsternis (4 Karten)
    {
        name: "49. Neumondfinsternis",
        image: "/images/solar_eclipse.jpg",
        meaning: "Eine Neumondfinsternis symbolisiert intensive Neuanfänge und Neubewertungen.",
        meditation: "Welche neuen Wege eröffnen sich für mich?",
        tips: "Nutzen Sie die Energie der Finsternis, um sich auf kraftvolle Neuanfänge einzustellen."
    },
    {
        name: "50. Vollmondfinsternis",
        image: "/images/lunar_eclipse.jpg",
        meaning: "Eine Vollmondfinsternis steht für den Abschluss und tiefe Transformation.",
        meditation: "Welche Kapitel in meinem Leben kann ich abschließen?",
        tips: "Lassen Sie das Alte los und machen Sie sich bereit für neue Erfahrungen."
    },
    {
        name: "51. Sonnenfinsternis",
        image: "/images/total_solar_eclipse.jpg",
        meaning: "Eine Sonnenfinsternis symbolisiert kraftvolle Neuanfänge und bedeutende Veränderungen.",
        meditation: "Welche tiefgreifenden Veränderungen sind für mich notwendig?",
        tips: "Nutzen Sie diese Zeit, um große Veränderungen in Ihrem Leben vorzunehmen."
    },
    {
        name: "52. Mondfinsternis",
        image: "/images/total_lunar_eclipse.jpg",
        meaning: "Eine Mondfinsternis steht für plötzliche Einsichten und das Loslassen von alten Mustern.",
        meditation: "Welche Muster in meinem Leben muss ich durchbrechen?",
        tips: "Lassen Sie alte Verhaltensweisen hinter sich und öffnen Sie sich für neue Perspektiven."
    },

    // Weitere spezielle Mondkarten (8 Karten)
    {
        name: "53. Wolfsmond",
        image: "/images/wolf_moon.jpg",
        meaning: "Der Wolfsmond ist der erste Vollmond im Januar und symbolisiert Schutz und Überleben.",
        meditation: "Wie kann ich mich in schwierigen Zeiten schützen?",
        tips: "Stärken Sie Ihre innere Widerstandskraft und bereiten Sie sich auf Herausforderungen vor."
    },
    {
        name: "54. Schneemond",
        image: "/images/snow_moon.jpg",
        meaning: "Der Schneemond ist der Vollmond im Februar und symbolisiert Reinigung und Vorbereitung.",
        meditation: "Wie kann ich mich auf kommende Veränderungen vorbereiten?",
        tips: "Nutzen Sie diese Zeit für innere Reinigung und Klarheit."
    },
    {
        name: "55. Wurmmond",
        image: "/images/worm_moon.jpg",
        meaning: "Der Wurmmond ist der Vollmond im März und markiert den Übergang vom Winter zum Frühling.",
        meditation: "Welche neuen Anfänge kann ich jetzt in Angriff nehmen?",
        tips: "Nutzen Sie diese Zeit, um sich auf den Frühling vorzubereiten und neue Projekte zu starten."
    },
    {
        name: "56. Pink Moon",
        image: "/images/pink_moon.jpg",
        meaning: "Der Pink Moon ist der Vollmond im April und symbolisiert Wachstum und Erneuerung.",
        meditation: "Wie kann ich mein persönliches Wachstum fördern?",
        tips: "Nutzen Sie die Energie dieses Mondes, um sich auf persönliches Wachstum zu konzentrieren."
    },
    {
        name: "57. Blumenmond",
        image: "/images/flower_moon.jpg",
        meaning: "Der Blumenmond ist der Vollmond im Mai und steht für Blüte und Fruchtbarkeit.",
        meditation: "Wie kann ich meine kreativen Projekte zum Blühen bringen?",
        tips: "Nutzen Sie diese Zeit, um kreative Projekte zu fördern und wachsen zu lassen."
    },
    {
        name: "58. Erdbeermond",
        image: "/images/strawberry_moon.jpg",
        meaning: "Der Erdbeermond ist der Vollmond im Juni und symbolisiert die Erdbeererntezeit.",
        meditation: "Welche Früchte meiner Arbeit kann ich jetzt genießen?",
        tips: "Genießen Sie die Fülle, die Sie geschaffen haben."
    },
    {
        name: "59. Donner-Mond",
        image: "/images/thunder_moon.jpg",
        meaning: "Der Donner-Mond ist der Vollmond im Juli und symbolisiert Stärke und Energie.",
        meditation: "Wie kann ich meine innere Stärke nutzen?",
        tips: "Nutzen Sie die Energie dieses Mondes, um Ihre innere Kraft zu aktivieren."
    },
    {
        name: "60. Erntemond",
        image: "/images/harvest_moon.jpg",
        meaning: "Der Erntemond ist der Vollmond, der dem Herbstanfang am nächsten ist.",
        meditation: "Wofür bin ich in meinem Leben dankbar?",
        tips: "Feiern Sie die Fülle und seien Sie dankbar für alles, was Sie erreicht haben."
    },
    {
        name: "61. Jägermond",
        image: "/images/hunter_moon.jpg",
        meaning: "Der Jägermond ist der Vollmond im Oktober, der traditionell die Jagdzeit markiert.",
        meditation: "Welche Ressourcen kann ich jetzt sammeln?",
        tips: "Bereiten Sie sich auf die kommende Zeit vor, indem Sie Ihre Ressourcen sichern."
    },
    {
        name: "62. Frostmond",
        image: "/images/frost_moon.jpg",
        meaning: "Der Frostmond ist der Vollmond im November und symbolisiert Abschluss und Reflektion.",
        meditation: "Welche letzten Schritte muss ich vor Jahresende unternehmen?",
        tips: "Nutzen Sie diese Zeit, um Projekte abzuschließen und das Jahr zu reflektieren."
    },
    {
        name: "63. Kalter Mond",
        image: "/images/cold_moon.jpg",
        meaning: "Der Kalte Mond ist der Vollmond im Dezember und markiert den Beginn des Winters.",
        meditation: "Wie kann ich mich auf die Wintermonate vorbereiten?",
        tips: "Bereiten Sie sich auf die kalten Monate vor, indem Sie Ihre Energien sammeln und schützen."
    },
    {
        name: "64. Lichter-Mond",
        image: "/images/light_moon.jpg",
        meaning: "Der Lichter-Mond symbolisiert die Rückkehr des Lichts nach der Wintersonnenwende.",
        meditation: "Wie kann ich das Licht in meinem Leben zurückbringen?",
        tips: "Nutzen Sie die Energie dieses Mondes, um Hoffnung und Licht in Ihr Leben zu bringen."
    }
];

export default moonOracleCards;
