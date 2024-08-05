//LenormandKarten
const lenormandkarten = [
    { 
      name: "1. Der Reiter", 
      image: "/images/lenormand_rider.jpg", 
      meaning: "Der Reiter steht für Nachrichten, Neuigkeiten und schnelle Ereignisse.", 
      meditation: "Welche Nachrichten könnten bald in mein Leben kommen?", 
      tips: "Seien Sie bereit für Neuigkeiten und Veränderungen."
    },
    { 
      name: "2. Der Klee", 
      image: "/images/lenormand_clover.jpg", 
      meaning: "Der Klee symbolisiert Glück, kleine Freuden und günstige Gelegenheiten.", 
      meditation: "Welche kleinen Freuden bereichern mein Leben?", 
      tips: "Genießen Sie die kleinen Glücksmomente und nutzen Sie günstige Gelegenheiten."
    },
    { 
      name: "3. Das Schiff", 
      image: "/images/lenormand_ship.jpg", 
      meaning: "Das Schiff steht für Reisen, Fernweh und neue Abenteuer.", 
      meditation: "Welche neuen Abenteuer möchte ich erleben?", 
      tips: "Seien Sie offen für neue Reisen und Abenteuer."
    },
    { 
      name: "4. Das Haus", 
      image: "/images/lenormand_house.jpg", 
      meaning: "Das Haus symbolisiert Heim, Familie und Stabilität.", 
      meditation: "Wie kann ich mein Zuhause harmonischer gestalten?", 
      tips: "Pflegen Sie Ihre familiären Beziehungen und sorgen Sie für ein stabiles Zuhause."
    },
    { 
      name: "5. Der Baum", 
      image: "/images/lenormand_tree.jpg", 
      meaning: "Der Baum steht für Gesundheit, Wachstum und Lebensenergie.", 
      meditation: "Wie kann ich meine Gesundheit und mein Wohlbefinden verbessern?", 
      tips: "Achten Sie auf Ihre Gesundheit und fördern Sie Ihr persönliches Wachstum."
    },
    { 
      name: "6. Die Wolken", 
      image: "/images/lenormand_clouds.jpg", 
      meaning: "Die Wolken symbolisieren Verwirrung, Unklarheit und Unsicherheit.", 
      meditation: "Welche Unsicherheiten belasten mich und wie kann ich Klarheit gewinnen?", 
      tips: "Bemühen Sie sich um Klarheit und lösen Sie Verwirrungen auf."
    },
    { 
      name: "7. Die Schlange", 
      image: "/images/lenormand_snake.jpg", 
      meaning: "Die Schlange steht für Täuschung, Komplikationen und Umwege.", 
      meditation: "Welche Umwege oder Komplikationen erlebe ich gerade?", 
      tips: "Seien Sie vorsichtig und vermeiden Sie Täuschungen."
    },
    { 
      name: "8. Der Sarg", 
      image: "/images/lenormand_coffin.jpg", 
      meaning: "Der Sarg symbolisiert Enden, Abschied und Transformation.", 
      meditation: "Was muss ich loslassen, um Platz für Neues zu schaffen?", 
      tips: "Akzeptieren Sie Enden und seien Sie bereit für Transformation."
    },
    { 
      name: "9. Die Blumen", 
      image: "/images/lenormand_bouquet.jpg", 
      meaning: "Die Blumen stehen für Freude, Geschenke und positive Überraschungen.", 
      meditation: "Welche Freuden und positiven Überraschungen erlebe ich?", 
      tips: "Freuen Sie sich über Geschenke und genießen Sie positive Überraschungen."
    },
    { 
      name: "10. Die Sense", 
      image: "/images/lenormand_scythe.jpg", 
      meaning: "Die Sense symbolisiert plötzliche Ereignisse, Entscheidungen und Ernte.", 
      meditation: "Welche schnellen Entscheidungen muss ich treffen?", 
      tips: "Seien Sie bereit für plötzliche Veränderungen und nutzen Sie sie zu Ihrem Vorteil."
    },
    { 
      name: "11. Die Ruten", 
      image: "/images/lenormand_whip.jpg", 
      meaning: "Die Ruten stehen für Konflikte, Diskussionen und Kommunikation.", 
      meditation: "Wie kann ich Konflikte in meinem Leben bewältigen?", 
      tips: "Führen Sie offene und ehrliche Diskussionen, um Konflikte zu lösen."
    },
    { 
      name: "12. Die Vögel", 
      image: "/images/lenormand_birds.jpg", 
      meaning: "Die Vögel symbolisieren Kommunikation, Nervosität und kurze Reisen.", 
      meditation: "Wie kann ich meine Kommunikationsfähigkeiten verbessern?", 
      tips: "Achten Sie auf klare Kommunikation und vermeiden Sie unnötige Nervosität."
    },
    { 
      name: "13. Das Kind", 
      image: "/images/lenormand_child.jpg", 
      meaning: "Das Kind steht für Neuanfänge, Unschuld und spielerische Freude.", 
      meditation: "Welche neuen Anfänge möchte ich erleben?", 
      tips: "Seien Sie offen für Neuanfänge und bewahren Sie Ihre kindliche Freude."
    },
    { 
      name: "14. Der Fuchs", 
      image: "/images/lenormand_fox.jpg", 
      meaning: "Der Fuchs symbolisiert List, Betrug und Vorsicht.", 
      meditation: "Wo muss ich vorsichtiger und misstrauischer sein?", 
      tips: "Seien Sie wachsam und vermeiden Sie Täuschungen."
    },
    { 
      name: "15. Der Bär", 
      image: "/images/lenormand_bear.jpg", 
      meaning: "Der Bär steht für Stärke, Macht und Schutz.", 
      meditation: "Wie kann ich meine innere Stärke und meinen Schutz verbessern?", 
      tips: "Nutzen Sie Ihre Stärke und schützen Sie sich und Ihre Lieben."
    },
    { 
      name: "16. Die Sterne", 
      image: "/images/lenormand_stars.jpg", 
      meaning: "Die Sterne symbolisieren Hoffnung, Inspiration und Klarheit.", 
      meditation: "Was gibt mir Hoffnung und Inspiration?", 
      tips: "Fokussieren Sie sich auf Ihre Träume und bleiben Sie hoffnungsvoll."
    },
    { 
      name: "17. Der Storch", 
      image: "/images/lenormand_stork.jpg", 
      meaning: "Der Storch steht für Veränderungen, Umzüge und Neuanfänge.", 
      meditation: "Welche Veränderungen stehen bevor?", 
      tips: "Seien Sie offen für Veränderungen und begrüßen Sie Neuanfänge."
    },
    { 
      name: "18. Der Hund", 
      image: "/images/lenormand_dog.jpg", 
      meaning: "Der Hund symbolisiert Treue, Freundschaft und Unterstützung.", 
      meditation: "Wie kann ich meine Freundschaften und Loyalität stärken?", 
      tips: "Pflegen Sie Ihre Freundschaften und seien Sie ein treuer Begleiter."
    },
    { 
      name: "19. Der Turm", 
      image: "/images/lenormand_tower.jpg", 
      meaning: "Der Turm steht für Isolation, Autorität und Struktur.", 
      meditation: "Wo brauche ich mehr Struktur und Autorität in meinem Leben?", 
      tips: "Arbeiten Sie an Ihrer Selbstdisziplin und bauen Sie starke Strukturen auf."
    },
    { 
      name: "20. Der Park", 
      image: "/images/lenormand_park.jpg", 
      meaning: "Der Park symbolisiert Öffentlichkeit, Gesellschaft und Treffen.", 
      meditation: "Wie kann ich meine sozialen Kontakte und Netzwerke verbessern?", 
      tips: "Pflegen Sie Ihre sozialen Kontakte und genießen Sie gesellschaftliche Ereignisse."
    },
    { 
      name: "21. Der Berg", 
      image: "/images/lenormand_mountain.jpg", 
      meaning: "Der Berg steht für Hindernisse, Herausforderungen und Blockaden.", 
      meditation: "Welche Hindernisse muss ich überwinden?", 
      tips: "Seien Sie geduldig und suchen Sie nach Wegen, Herausforderungen zu meistern."
    },
    { 
      name: "22. Die Wege", 
      image: "/images/lenormand_paths.jpg", 
      meaning: "Die Wege symbolisieren Entscheidungen, Wege und Möglichkeiten.", 
      meditation: "Welche wichtigen Entscheidungen muss ich treffen?", 
      tips: "Überlegen Sie sorgfältig Ihre Optionen und wählen Sie den besten Weg."
    },
    { 
      name: "23. Die Mäuse", 
      image: "/images/lenormand_mice.jpg", 
      meaning: "Die Mäuse stehen für Verlust, Sorgen und Kleinigkeiten.", 
      meditation: "Welche kleinen Sorgen und Verluste belasten mich?", 
      tips: "Erkennen Sie die kleinen Probleme und arbeiten Sie daran, sie zu lösen."
    },
    { 
      name: "24. Das Herz", 
      image: "/images/lenormand_heart.jpg", 
      meaning: "Das Herz symbolisiert Liebe, Romantik und Gefühle.", 
      meditation: "Wie kann ich mehr Liebe und Romantik in mein Leben bringen?", 
      tips: "Pflegen Sie Ihre Beziehungen und lassen Sie Liebe und Mitgefühl in Ihr Herz."
    },
    { 
      name: "25. Der Ring", 
      image: "/images/lenormand_ring.jpg", 
      meaning: "Der Ring steht für Verbindungen, Verträge und Verpflichtungen.", 
      meditation: "Welche Verpflichtungen und Verbindungen sind in meinem Leben wichtig?", 
      tips: "Ehren Sie Ihre Verpflichtungen und pflegen Sie wichtige Verbindungen."
    },
    { 
      name: "26. Das Buch", 
      image: "/images/lenormand_book.jpg", 
      meaning: "Das Buch symbolisiert Geheimnisse, Wissen und Lernen.", 
      meditation: "Welches Wissen oder welche Geheimnisse möchte ich entdecken?", 
      tips: "Suchen Sie nach neuem Wissen und seien Sie offen für das Lernen."
    },
    { 
      name: "27. Der Brief", 
      image: "/images/lenormand_letter.jpg", 
      meaning: "Der Brief steht für Nachrichten, Kommunikation und Dokumente.", 
      meditation: "Welche wichtigen Nachrichten oder Dokumente erwarte ich?", 
      tips: "Achten Sie auf wichtige Nachrichten und kommunizieren Sie klar."
    },
    { 
      name: "28. Der Herr", 
      image: "/images/lenormand_man.jpg", 
      meaning: "Der Herr symbolisiert einen wichtigen Mann oder männliche Energie in Ihrem Leben.", 
      meditation: "Welche männlichen Einflüsse spielen eine Rolle in meinem Leben?", 
      tips: "Achten Sie auf wichtige Männer und männliche Energien in Ihrem Leben."
    },
    { 
      name: "29. Die Dame", 
      image: "/images/lenormand_woman.jpg", 
      meaning: "Die Dame symbolisiert eine wichtige Frau oder weibliche Energie in Ihrem Leben.", 
      meditation: "Welche weiblichen Einflüsse spielen eine Rolle in meinem Leben?", 
      tips: "Achten Sie auf wichtige Frauen und weibliche Energien in Ihrem Leben."
    },
    { 
      name: "30. Die Lilien", 
      image: "/images/lenormand_lilies.jpg", 
      meaning: "Die Lilien stehen für Harmonie, Frieden und Familie.", 
      meditation: "Wie kann ich mehr Harmonie und Frieden in mein Leben bringen?", 
      tips: "Fördern Sie Frieden und Harmonie in Ihrem Umfeld und Ihrer Familie."
    },
    { 
      name: "31. Die Sonne", 
      image: "/images/lenormand_sun.jpg", 
      meaning: "Die Sonne symbolisiert Erfolg, Glück und Energie.", 
      meditation: "Was gibt mir Energie und Glück?", 
      tips: "Genießen Sie Ihre Erfolge und nutzen Sie Ihre positive Energie."
    },
    { 
      name: "32. Der Mond", 
      image: "/images/lenormand_moon.jpg", 
      meaning: "Der Mond steht für Intuition, Träume und Emotionen.", 
      meditation: "Welche Träume und Emotionen möchte ich erkunden?", 
      tips: "Hören Sie auf Ihre Intuition und erkunden Sie Ihre inneren Träume."
    },
    { 
      name: "33. Der Schlüssel", 
      image: "/images/lenormand_key.jpg", 
      meaning: "Der Schlüssel symbolisiert Lösungen, Erkenntnisse und Erfolg.", 
      meditation: "Welche Lösungen suche ich für meine aktuellen Herausforderungen?", 
      tips: "Suchen Sie nach Lösungen und bleiben Sie offen für neue Erkenntnisse."
    },
    { 
      name: "34. Die Fische", 
      image: "/images/lenormand_fish.jpg", 
      meaning: "Die Fische stehen für Wohlstand, Reichtum und materielle Werte.", 
      meditation: "Wie kann ich meinen Wohlstand und meine finanziellen Ressourcen verbessern?", 
      tips: "Achten Sie auf Ihre Finanzen und suchen Sie nach Möglichkeiten, Ihren Wohlstand zu mehren."
    },
    { 
      name: "35. Der Anker", 
      image: "/images/lenormand_anchor.jpg", 
      meaning: "Der Anker symbolisiert Stabilität, Sicherheit und Beständigkeit.", 
      meditation: "Wie kann ich mehr Stabilität und Sicherheit in meinem Leben schaffen?", 
      tips: "Suchen Sie nach Stabilität und sorgen Sie für Sicherheit in Ihrem Leben."
    },
    { 
      name: "36. Das Kreuz", 
      image: "/images/lenormand_cross.jpg", 
      meaning: "Das Kreuz steht für Schicksal, Karma und Prüfungen.", 
      meditation: "Welche Herausforderungen oder Prüfungen muss ich bestehen?", 
      tips: "Akzeptieren Sie Ihre Prüfungen und lernen Sie aus ihnen, um spirituell zu wachsen."
    }
  ];
  
  export default lenormandkarten;
  