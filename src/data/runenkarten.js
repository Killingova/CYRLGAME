const runenkarten = [
    // Älteres Futhark
    { 
      name: "Fehu", 
      image: "/images/fehu.jpg", 
      meaning: "Fehu steht für Wohlstand, Reichtum und Energie.", 
      meditation: "Wie kann ich Wohlstand und Erfolg in meinem Leben fördern?", 
      tips: "Nutzen Sie Ihre Ressourcen sinnvoll und seien Sie offen für neue Möglichkeiten."
    },
    { 
      name: "Uruz", 
      image: "/images/uruz.jpg", 
      meaning: "Uruz symbolisiert Stärke, Kraft und Gesundheit.", 
      meditation: "Wie kann ich meine physische und emotionale Stärke stärken?", 
      tips: "Achten Sie auf Ihre Gesundheit und nutzen Sie Ihre Energie positiv."
    },
    { 
      name: "Thurisaz", 
      image: "/images/thurisaz.jpg", 
      meaning: "Thurisaz steht für Schutz, Konflikt und Kraft.", 
      meditation: "Welche Konflikte oder Herausforderungen muss ich bewältigen?", 
      tips: "Nutzen Sie Ihre Stärke, um Konflikte zu überwinden, und suchen Sie nach Schutz."
    },
    { 
      name: "Ansuz", 
      image: "/images/ansuz.jpg", 
      meaning: "Ansuz symbolisiert Weisheit, Kommunikation und göttliche Inspiration.", 
      meditation: "Wie kann ich besser kommunizieren und göttliche Weisheit empfangen?", 
      tips: "Achten Sie auf die Zeichen und nutzen Sie Ihre Kommunikationsfähigkeiten."
    },
    { 
      name: "Raido", 
      image: "/images/raido.jpg", 
      meaning: "Raido steht für Reise, Bewegung und Fortschritt.", 
      meditation: "Welche neuen Wege oder Reisen stehen bevor?", 
      tips: "Seien Sie offen für Veränderungen und nutzen Sie die Gelegenheit zur Weiterentwicklung."
    },
    { 
      name: "Kenaz", 
      image: "/images/kenaz.jpg", 
      meaning: "Kenaz symbolisiert Wissen, Erkenntnis und Kreativität.", 
      meditation: "Wie kann ich meine kreativen Fähigkeiten und mein Wissen erweitern?", 
      tips: "Nutzen Sie Ihre Kreativität und bleiben Sie wissbegierig."
    },
    { 
      name: "Gebo", 
      image: "/images/gebo.jpg", 
      meaning: "Gebo steht für Geschenk, Partnerschaft und Balance.", 
      meditation: "Wie kann ich Balance in meinen Beziehungen und Partnerschaften finden?", 
      tips: "Pflegen Sie Ihre Partnerschaften und achten Sie auf Gleichgewicht in Ihren Beziehungen."
    },
    { 
      name: "Wunjo", 
      image: "/images/wunjo.jpg", 
      meaning: "Wunjo symbolisiert Freude, Glück und Harmonie.", 
      meditation: "Was bringt mir Freude und Glück in meinem Leben?", 
      tips: "Suchen Sie nach positiven Momenten und streben Sie nach Harmonie."
    },
    { 
      name: "Hagalaz", 
      image: "/images/hagalaz.jpg", 
      meaning: "Hagalaz steht für Zerstörung, Veränderung und Transformation.", 
      meditation: "Welche Veränderungen oder Transformationen sind nötig, um weiterzukommen?", 
      tips: "Akzeptieren Sie Veränderungen als Teil Ihres Wachstums und Ihrer Entwicklung."
    },
    { 
      name: "Naudhiz", 
      image: "/images/naudhiz.jpg", 
      meaning: "Naudhiz symbolisiert Not, Mangel und Notwendigkeit.", 
      meditation: "Welche Bedürfnisse oder Mängel müssen adressiert werden?", 
      tips: "Arbeiten Sie an den Bereichen, in denen Sie Unterstützung benötigen, und seien Sie geduldig."
    },
    { 
      name: "Isaz", 
      image: "/images/isaz.jpg", 
      meaning: "Isaz steht für Eis, Stillstand und Klarheit.", 
      meditation: "Wie kann ich Klarheit in einer Situation finden, in der es momentan Stillstand gibt?", 
      tips: "Nutzen Sie Zeiten des Stillstands zur Reflexion und Klarheitssuche."
    },
    { 
      name: "Jera", 
      image: "/images/jera.jpg", 
      meaning: "Jera symbolisiert Ernte, Jahreszeiten und Erfolg.", 
      meditation: "Welche Erfolge oder Erntezeit steht mir bevor?", 
      tips: "Seien Sie geduldig und nutzen Sie die Gelegenheit zur Ernte Ihrer Bemühungen."
    },
    { 
      name: "Eiwaz", 
      image: "/images/eiwaz.jpg", 
      meaning: "Eiwaz steht für Tod, Transformation und Schutz.", 
      meditation: "Was muss ich loslassen, um Raum für Neues zu schaffen?", 
      tips: "Akzeptieren Sie notwendige Veränderungen und suchen Sie nach Schutz in Übergangszeiten."
    },
    { 
      name: "Perthro", 
      image: "/images/perthro.jpg", 
      meaning: "Perthro symbolisiert Schicksal, Geheimnisse und Wahrsagung.", 
      meditation: "Welche Geheimnisse oder Schicksalswenden könnte ich entdecken?", 
      tips: "Seien Sie offen für unerwartete Entwicklungen und achten Sie auf das Schicksal."
    },
    { 
      name: "Elhaz", 
      image: "/images/elhaz.jpg", 
      meaning: "Elhaz steht für Schutz, Verteidigung und spirituelle Verbindung.", 
      meditation: "Wie kann ich mich besser schützen und meine spirituelle Verbindung stärken?", 
      tips: "Stellen Sie sicher, dass Sie sich sicher und geschützt fühlen und arbeiten Sie an Ihrer spirituellen Praxis."
    },
    { 
      name: "Sowilo", 
      image: "/images/sowilo.jpg", 
      meaning: "Sowilo symbolisiert Sonne, Erfolg und Energie.", 
      meditation: "Wie kann ich meine Energie und meinen Erfolg weiter steigern?", 
      tips: "Nutzen Sie Ihre positive Energie, um Ihre Ziele zu erreichen und Erfolg zu haben."
    },
    { 
      name: "Tiwaz", 
      image: "/images/tiwaz.jpg", 
      meaning: "Tiwaz steht für Gerechtigkeit, Opfer und Mut.", 
      meditation: "Wie kann ich Gerechtigkeit und Mut in meinem Leben fördern?", 
      tips: "Seien Sie gerecht und mutig in Ihren Entscheidungen und Handlungen."
    },
    { 
      name: "Berkanan", 
      image: "/images/berkanan.jpg", 
      meaning: "Berkanan symbolisiert Wachstum, Fruchtbarkeit und Neubeginn.", 
      meditation: "Welche neuen Möglichkeiten oder Wachstumschancen stehen mir bevor?", 
      tips: "Nutzen Sie die Gelegenheit für Neubeginn und persönliches Wachstum."
    },
    { 
      name: "Eoh", 
      image: "/images/eoh.jpg", 
      meaning: "Eoh steht für Einigkeit, Verbindung und starker Schutz.", 
      meditation: "Wie kann ich Einheit und starke Verbindungen in meinem Leben stärken?", 
      tips: "Stärken Sie Ihre Verbindungen und suchen Sie nach Möglichkeiten, Einheit und Schutz zu fördern."
    },
    { 
      name: "Long-Birth", 
      image: "/images/long_birth.jpg", 
      meaning: "Long-Birth steht für Weg, Richtung und Reise.", 
      meditation: "Welche Richtung soll ich einschlagen, um meine Ziele zu erreichen?", 
      tips: "Überlegen Sie sich Ihre Ziele und den besten Weg, um sie zu erreichen."
    },
    { 
      name: "Madr", 
      image: "/images/madr.jpg", 
      meaning: "Madr symbolisiert Menschlichkeit, Sinnlichkeit und Bewusstsein.", 
      meditation: "Wie kann ich meine Menschlichkeit und Sinnlichkeit in mein Leben integrieren?", 
      tips: "Seien Sie sich Ihrer menschlichen Bedürfnisse und Ihrer Sinnlichkeit bewusst."
    },
    { 
      name: "Yr", 
      image: "/images/yr.jpg", 
      meaning: "Yr steht für Bogenschießen, Ziel und Richtung.", 
      meditation: "Welche Ziele möchte ich erreichen, und welche Richtung soll ich einschlagen?", 
      tips: "Setzen Sie klare Ziele und bleiben Sie auf Kurs, um diese zu erreichen."
    },
    { 
      name: "Cweor", 
      image: "/images/cweor.jpg", 
      meaning: "Cweor steht für Weg, Reise und Orientierung.", 
      meditation: "Wie finde ich die beste Orientierung für meine aktuelle Lebensreise?", 
      tips: "Suchen Sie nach Klarheit und Orientierung auf Ihrem Lebensweg."
    },
  
    // Jüngeres Futhark
    { 
      name: "Fehu", 
      image: "/images/fehu.jpg", 
      meaning: "Fehu steht für Wohlstand, Reichtum.", 
      meditation: "Wie kann ich Wohlstand und Erfolg in meinem Leben fördern?", 
      tips: "Nutzen Sie Ihre Ressourcen sinnvoll und seien Sie offen für neue Möglichkeiten."
    },
    { 
      name: "Ur", 
      image: "/images/ur.jpg", 
      meaning: "Ur symbolisiert Kraft, Gesundheit.", 
      meditation: "Wie kann ich meine physische und emotionale Stärke stärken?", 
      tips: "Achten Sie auf Ihre Gesundheit und nutzen Sie Ihre Energie positiv."
    },
    { 
      name: "Thorn", 
      image: "/images/thorn.jpg", 
      meaning: "Thorn steht für Schutz, Widerstand und Kraft.", 
      meditation: "Welche Herausforderungen oder Schutzmaßnahmen sind notwendig?", 
      tips: "Nutzen Sie Ihre Stärke, um Herausforderungen zu begegnen, und suchen Sie nach Schutz."
    },
    { 
      name: "Ansuz", 
      image: "/images/ansuz.jpg", 
      meaning: "Ansuz symbolisiert Weisheit, Kommunikation und Inspiration.", 
      meditation: "Wie kann ich meine Kommunikationsfähigkeiten und Weisheit verbessern?", 
      tips: "Achten Sie auf Botschaften und nutzen Sie Ihre Kommunikationsfähigkeiten."
    },
    { 
      name: "Raido", 
      image: "/images/raido.jpg", 
      meaning: "Raido steht für Reise, Bewegung und Fortschritt.", 
      meditation: "Welche neuen Wege oder Reisen stehen bevor?", 
      tips: "Seien Sie offen für Veränderungen und nutzen Sie die Gelegenheit zur Weiterentwicklung."
    },
    { 
      name: "Kenaz", 
      image: "/images/kenaz.jpg", 
      meaning: "Kenaz symbolisiert Wissen, Erkenntnis und Kreativität.", 
      meditation: "Wie kann ich meine kreativen Fähigkeiten und mein Wissen erweitern?", 
      tips: "Nutzen Sie Ihre Kreativität und bleiben Sie wissbegierig."
    },
    { 
      name: "Gebo", 
      image: "/images/gebo.jpg", 
      meaning: "Gebo steht für Geschenk, Partnerschaft und Balance.", 
      meditation: "Wie kann ich Balance in meinen Beziehungen und Partnerschaften finden?", 
      tips: "Pflegen Sie Ihre Partnerschaften und achten Sie auf Gleichgewicht in Ihren Beziehungen."
    },
    { 
      name: "Wunjo", 
      image: "/images/wunjo.jpg", 
      meaning: "Wunjo symbolisiert Freude, Glück und Harmonie.", 
      meditation: "Was bringt mir Freude und Glück in meinem Leben?", 
      tips: "Suchen Sie nach positiven Momenten und streben Sie nach Harmonie."
    },
    { 
      name: "Hagalaz", 
      image: "/images/hagalaz.jpg", 
      meaning: "Hagalaz steht für Zerstörung, Veränderung und Transformation.", 
      meditation: "Welche Veränderungen oder Transformationen sind nötig, um weiterzukommen?", 
      tips: "Akzeptieren Sie Veränderungen als Teil Ihres Wachstums und Ihrer Entwicklung."
    },
    { 
      name: "Naudhiz", 
      image: "/images/naudhiz.jpg", 
      meaning: "Naudhiz symbolisiert Not, Mangel und Notwendigkeit.", 
      meditation: "Welche Bedürfnisse oder Mängel müssen adressiert werden?", 
      tips: "Arbeiten Sie an den Bereichen, in denen Sie Unterstützung benötigen, und seien Sie geduldig."
    },
    { 
      name: "Isaz", 
      image: "/images/isaz.jpg", 
      meaning: "Isaz steht für Eis, Stillstand und Klarheit.", 
      meditation: "Wie kann ich Klarheit in einer Situation finden, in der es momentan Stillstand gibt?", 
      tips: "Nutzen Sie Zeiten des Stillstands zur Reflexion und Klarheitssuche."
    },
    { 
      name: "Jera", 
      image: "/images/jera.jpg", 
      meaning: "Jera symbolisiert Ernte, Jahreszeiten und Erfolg.", 
      meditation: "Welche Erfolge oder Erntezeit steht mir bevor?", 
      tips: "Seien Sie geduldig und nutzen Sie die Gelegenheit zur Ernte Ihrer Bemühungen."
    },
    { 
      name: "Eiwaz", 
      image: "/images/eiwaz.jpg", 
      meaning: "Eiwaz steht für Tod, Transformation und Schutz.", 
      meditation: "Was muss ich loslassen, um Raum für Neues zu schaffen?", 
      tips: "Akzeptieren Sie notwendige Veränderungen und suchen Sie nach Schutz in Übergangszeiten."
    },
    { 
      name: "Perthro", 
      image: "/images/perthro.jpg", 
      meaning: "Perthro symbolisiert Schicksal, Geheimnisse und Wahrsagung.", 
      meditation: "Welche Geheimnisse oder Schicksalswenden könnte ich entdecken?", 
      tips: "Seien Sie offen für unerwartete Entwicklungen und achten Sie auf das Schicksal."
    },
    { 
      name: "Elhaz", 
      image: "/images/elhaz.jpg", 
      meaning: "Elhaz steht für Schutz, Verteidigung und spirituelle Verbindung.", 
      meditation: "Wie kann ich mich besser schützen und meine spirituelle Verbindung stärken?", 
      tips: "Stellen Sie sicher, dass Sie sich sicher und geschützt fühlen und arbeiten Sie an Ihrer spirituellen Praxis."
    },
    { 
      name: "Sowilo", 
      image: "/images/sowilo.jpg", 
      meaning: "Sowilo symbolisiert Sonne, Erfolg und Energie.", 
      meditation: "Wie kann ich meine Energie und meinen Erfolg weiter steigern?", 
      tips: "Nutzen Sie Ihre positive Energie, um Ihre Ziele zu erreichen und Erfolg zu haben."
    },
    { 
      name: "Tiwaz", 
      image: "/images/tiwaz.jpg", 
      meaning: "Tiwaz steht für Gerechtigkeit, Opfer und Mut.", 
      meditation: "Wie kann ich Gerechtigkeit und Mut in meinem Leben fördern?", 
      tips: "Seien Sie gerecht und mutig in Ihren Entscheidungen und Handlungen."
    },
    { 
      name: "Berkanan", 
      image: "/images/berkanan.jpg", 
      meaning: "Berkanan symbolisiert Wachstum, Fruchtbarkeit und Neubeginn.", 
      meditation: "Welche neuen Möglichkeiten oder Wachstumschancen stehen mir bevor?", 
      tips: "Nutzen Sie die Gelegenheit für Neubeginn und persönliches Wachstum."
    },
    { 
      name: "Eoh", 
      image: "/images/eoh.jpg", 
      meaning: "Eoh steht für Einigkeit, Verbindung und starker Schutz.", 
      meditation: "Wie kann ich Einheit und starke Verbindungen in meinem Leben stärken?", 
      tips: "Stärken Sie Ihre Verbindungen und suchen Sie nach Möglichkeiten, Einheit und Schutz zu fördern."
    },
    { 
      name: "Long-Birth", 
      image: "/images/long_birth.jpg", 
      meaning: "Long-Birth steht für Weg, Richtung und Reise.", 
      meditation: "Welche Richtung soll ich einschlagen, um meine Ziele zu erreichen?", 
      tips: "Überlegen Sie sich Ihre Ziele und den besten Weg, um sie zu erreichen."
    },
    { 
      name: "Madr", 
      image: "/images/madr.jpg", 
      meaning: "Madr symbolisiert Menschlichkeit, Sinnlichkeit und Bewusstsein.", 
      meditation: "Wie kann ich meine Menschlichkeit und Sinnlichkeit in mein Leben integrieren?", 
      tips: "Seien Sie sich Ihrer menschlichen Bedürfnisse und Ihrer Sinnlichkeit bewusst."
    },
    { 
      name: "Yr", 
      image: "/images/yr.jpg", 
      meaning: "Yr steht für Bogenschießen, Ziel und Richtung.", 
      meditation: "Welche Ziele möchte ich erreichen, und welche Richtung soll ich einschlagen?", 
      tips: "Setzen Sie klare Ziele und bleiben Sie auf Kurs, um diese zu erreichen."
    },
    { 
      name: "Cweor", 
      image: "/images/cweor.jpg", 
      meaning: "Cweor steht für Weg, Reise und Orientierung.", 
      meditation: "Wie finde ich die beste Orientierung für meine aktuelle Lebensreise?", 
      tips: "Suchen Sie nach Klarheit und Orientierung auf Ihrem Lebensweg."
    }
  ];
  
  export default runenkarten;
  