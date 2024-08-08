const zwillingsflammen = [
    { 
      name: "1. Flammende Verbindung", 
      image: "/images/flammende_verbindung.jpg", 
      meaning: "Feuer: Leidenschaftliche Verbindung, die stark und energetisch ist.", 
      meditation: "Visualisiere ein starkes Feuer, das zwischen dir und deinem Partner brennt, und fühle die intensive Verbindung, die euch energetisch verbindet.",
      tips: "Nutze die Leidenschaft dieser Verbindung, um gemeinsam neue Projekte zu starten und eure Beziehung zu stärken."
    },
    { 
      name: "2. Loderndes Wachstum", 
      image: "/images/loderndes_wachstum.jpg", 
      meaning: "Feuer: Dynamisches Wachstum durch Herausforderungen und Transformation.", 
      meditation: "Stelle dir vor, wie ein kleiner Funke zu einer großen Flamme wird und dabei Hindernisse überwinden und wachsen kann.",
      tips: "Sei offen für Veränderungen und Herausforderungen. Sie sind Gelegenheiten für persönliches und gemeinsames Wachstum."
    },
    { 
      name: "3. Zündende Leidenschaft", 
      image: "/images/zuendende_leidenschaft.jpg", 
      meaning: "Feuer: Brennende Leidenschaft und starke emotionale Ausdrücke.", 
      meditation: "Fühle die Hitze und das Feuer der Leidenschaft in deinem Herzen und lasse diese Energie durch deinen ganzen Körper strömen.",
      tips: "Drücke deine Gefühle frei aus und lasse die Leidenschaft deine Taten leiten."
    },
    { 
      name: "4. Glühende Heilung", 
      image: "/images/gluehende_heilung.jpg", 
      meaning: "Feuer: Intensive und manchmal stürmische Heilungsprozesse.", 
      meditation: "Visualisiere ein wärmendes Feuer, das alle Wunden heilt und negative Energien in positive verwandelt.",
      tips: "Lass die intensiven Gefühle zu und nutze sie als Antrieb für deine Heilungsprozesse."
    },
    { 
      name: "5. Feurige Klarheit", 
      image: "/images/feurige_klarheit.jpg", 
      meaning: "Feuer: Klare, direkte Kommunikation und Erkenntnisse, die direkt und energisch sind.", 
      meditation: "Stelle dir vor, wie ein klares Feuer den Nebel der Verwirrung verbrennt und die Wahrheit enthüllt.",
      tips: "Sei direkt und ehrlich in deiner Kommunikation, um Missverständnisse zu vermeiden."
    },
    { 
      name: "6. Brennende Veränderung", 
      image: "/images/brennende_veraenderung.jpg", 
      meaning: "Feuer: Plötzliche und kraftvolle Veränderungen, die Energie und Bewegung bringen.", 
      meditation: "Visualisiere ein Feuer, das alles Alte verbrennt und Platz für Neues schafft.",
      tips: "Umarme Veränderungen und nutze die neue Energie, die sie mit sich bringen."
    },
    { 
      name: "7. Hitzige Trennung", 
      image: "/images/hitzige_trennung.jpg", 
      meaning: "Feuer: Dramatik und Intensität während der Trennung, die emotionale Ausbrüche verursachen kann.", 
      meditation: "Stelle dir ein kontrolliertes Feuer vor, das die Trennung erleichtert und Klarheit bringt.",
      tips: "Erlaube dir, deine Emotionen auszudrücken, aber halte dabei eine Balance zwischen Gefühl und Vernunft."
    },
    { 
      name: "8. Flammende Wiedervereinigung", 
      image: "/images/flammende_wiedervereinigung.jpg", 
      meaning: "Feuer: Leidenschaftliche und energiegeladene Wiedervereinigung, die intensiv und aufregend ist.", 
      meditation: "Visualisiere ein Feuerwerk, das die Wiedervereinigung feiert und die Verbindung stärkt.",
      tips: "Nutze die Energie der Wiedervereinigung, um die Beziehung auf ein neues Level zu bringen."
    },
    { 
      name: "9. Erleuchtende Selbstentdeckung", 
      image: "/images/erleuchtende_selbstentdeckung.jpg", 
      meaning: "Feuer: Entdeckung durch intensive Erfahrungen und Herausforderungen.", 
      meditation: "Stelle dir ein inneres Feuer vor, das dein wahres Selbst erleuchtet und dir hilft, dich selbst besser zu verstehen.",
      tips: "Sei mutig und stelle dich den Herausforderungen, um mehr über dich selbst zu lernen."
    },
    { 
      name: "10. Kraftvolle Unterstützung", 
      image: "/images/kraftvolle_unterstuetzung.jpg", 
      meaning: "Feuer: Dynamische und energetische Unterstützung, die motivierend und anregend ist.", 
      meditation: "Visualisiere ein Lagerfeuer, um das sich Menschen versammeln und sich gegenseitig unterstützen.",
      tips: "Sei ein aktiver Unterstützer für deinen Partner und motiviere ihn, seine Ziele zu erreichen."
    },
    { 
      name: "11. Feurige Herausforderungen", 
      image: "/images/feurige_herausforderungen.jpg", 
      meaning: "Feuer: Intensität und Kraft der Herausforderungen, die mit Energie und Leidenschaft angegangen werden.", 
      meditation: "Stelle dir vor, wie du durch ein Feuer gehst und dabei stärker und entschlossener wirst.",
      tips: "Nutze die Energie der Herausforderungen, um über dich hinauszuwachsen."
    },
    { 
      name: "12. Flammende Kommunikation", 
      image: "/images/flammende_kommunikation.jpg", 
      meaning: "Feuer: Direkte, energetische und leidenschaftliche Kommunikation.", 
      meditation: "Visualisiere ein Feuer, das die Worte verstärkt und die Kommunikation klar und deutlich macht.",
      tips: "Sei klar und leidenschaftlich in deiner Kommunikation, um Missverständnisse zu vermeiden."
    },
    { 
      name: "13. Energie der Glut", 
      image: "/images/energie_der_glut.jpg", 
      meaning: "Feuer: Hochenergetische und dynamische Energie, die aktiv und impulsiv ist.", 
      meditation: "Stelle dir die Glut eines Feuers vor, die dich mit Energie und Dynamik versorgt.",
      tips: "Nutze diese Energie, um aktiv und entschlossen deine Ziele zu verfolgen."
    },
 // const zwillingsflammenThemenWasser = [
    { 
      name: "1. Tiefgründige Verbindung", 
      image: "/images/tiefgruendige_verbindung.jpg", 
      meaning: "Wasser: Tiefe emotionale Verbindung, die gefühlvoll und einfühlsam ist.", 
      meditation: "Visualisiere einen ruhigen See, dessen Wasser tief und klar ist, und fühle die emotionale Tiefe der Verbindung.",
      tips: "Sei offen für tiefgehende Gespräche und teile deine Gefühle, um die emotionale Bindung zu stärken."
    },
    { 
      name: "2. Sanftes Wachstum", 
      image: "/images/sanftes_wachstum.jpg", 
      meaning: "Wasser: Emotionales Wachstum durch Heilung und Reflexion.", 
      meditation: "Stelle dir vor, wie sanfter Regen die Erde nährt und Wachstum fördert.",
      tips: "Nimm dir Zeit für Selbstreflexion und emotionales Wachstum, um Heilung zu ermöglichen."
    },
    { 
      name: "3. Fließende Leidenschaft", 
      image: "/images/fliessende_leidenschaft.jpg", 
      meaning: "Wasser: Sanfte, aber tiefgründige Leidenschaft, die intuitiv und empathisch ist.", 
      meditation: "Visualisiere einen Fluss, der ruhig und beständig fließt, und spüre die sanfte Leidenschaft, die er mit sich bringt.",
      tips: "Erlaube deinen Gefühlen, frei zu fließen, und teile diese leidenschaftlich mit deinem Partner."
    },
    { 
      name: "4. Heilendes Wasser", 
      image: "/images/heilendes_wasser.jpg", 
      meaning: "Wasser: Sanfte, tiefgehende Heilung durch emotionale Unterstützung.", 
      meditation: "Stelle dir vor, wie du in einem warmen, heilenden Wasserbad liegst, das all deine Wunden heilt.",
      tips: "Nutze die heilende Kraft von Wasser, indem du Zeit in der Natur verbringst oder Meditationen mit Wassergeräuschen machst."
    },
    { 
      name: "5. Klarer Seelenblick", 
      image: "/images/klarer_seelenblick.jpg", 
      meaning: "Wasser: Tiefe, emotionale Klarheit, die intuitiv und reflektierend ist.", 
      meditation: "Visualisiere einen klaren, ruhigen See, dessen Wasser so klar ist, dass du bis zum Grund sehen kannst.",
      tips: "Nimm dir Zeit, um in dich zu gehen und deine Gefühle klar und deutlich zu erkennen."
    },
    { 
      name: "6. Ruhige Veränderung", 
      image: "/images/ruhige_veraenderung.jpg", 
      meaning: "Wasser: Sanfte und fließende Veränderungen, die emotional angepasst werden.", 
      meditation: "Stelle dir vor, wie ein Fluss sanft seine Richtung ändert und sich an neue Gegebenheiten anpasst.",
      tips: "Sei flexibel und offen für Veränderungen, die auf natürliche und fließende Weise geschehen."
    },
    { 
      name: "7. Eisige Trennung", 
      image: "/images/eisige_trennung.jpg", 
      meaning: "Wasser: Tiefe emotionale Traurigkeit und Reflexion während der Trennung.", 
      meditation: "Visualisiere eine gefrorene Landschaft, die die Kälte und Stille einer Trennung symbolisiert.",
      tips: "Erlaube dir, deine Traurigkeit zu fühlen und sie zu reflektieren, um schließlich Heilung zu finden."
    },
    { 
      name: "8. Wärme des Wiedersehens", 
      image: "/images/waerme_des_wiedersehens.jpg", 
      meaning: "Wasser: Emotionale und einfühlsame Wiedervereinigung, die Heilung und Trost bringt.", 
      meditation: "Stelle dir vor, wie du nach einer langen Reise in ein warmes, einladendes Zuhause zurückkehrst.",
      tips: "Nutze die Wiedervereinigung, um emotionale Wunden zu heilen und die Beziehung zu stärken."
    },
    { 
      name: "9. Gefühlvolle Entdeckung", 
      image: "/images/gefuehlvolle_entdeckung.jpg", 
      meaning: "Wasser: Entdeckung durch emotionale Reflexion und tiefes Verständnis.", 
      meditation: "Visualisiere einen tiefen Ozean, in dem du nach Schätzen suchst, die deine wahren Gefühle und Gedanken repräsentieren.",
      tips: "Verbringe Zeit mit dir selbst, um deine tiefsten Gefühle und Wünsche zu entdecken."
    },
    { 
      name: "10. Sanfte Unterstützung", 
      image: "/images/sanfte_unterstuetzung.jpg", 
      meaning: "Wasser: Sanfte und emotionale Unterstützung, die Trost und Sicherheit bietet.", 
      meditation: "Stelle dir vor, wie du von sanften Wellen umgeben bist, die dich stützen und tragen.",
      tips: "Sei einfühlsam und unterstützend für deinen Partner, besonders in schwierigen Zeiten."
    },
    { 
      name: "11. Wasser der Prüfungen", 
      image: "/images/wasser_der_pruefungen.jpg", 
      meaning: "Wasser: Emotionale Herausforderungen, die tief empfunden und reflektiert werden.", 
      meditation: "Visualisiere stürmische Wellen, die du mit innerer Ruhe und emotionaler Stärke überwindest.",
      tips: "Sei geduldig mit dir selbst und deinem Partner, wenn ihr emotionale Prüfungen durchmacht."
    },
    { 
      name: "12. Klarheit des Gefühls", 
      image: "/images/klarheit_des_gefuehls.jpg", 
      meaning: "Wasser: Einfühlsame und emotionale Kommunikation, die auf Verständnis und Unterstützung basiert.", 
      meditation: "Stelle dir vor, wie du in einem klaren See schwimmst und deine Gefühle klar und deutlich erkennst.",
      tips: "Kommuniziere offen und ehrlich über deine Gefühle, um Missverständnisse zu vermeiden."
    },
    { 
      name: "13. Fließende Energie", 
      image: "/images/fliessende_energie.jpg", 
      meaning: "Wasser: Ruhige und fließende Energie, die sanft und anpassungsfähig ist.", 
      meditation: "Visualisiere einen Fluss, der ruhig und beständig fließt, und fühle, wie diese Energie dich erfüllt.",
      tips: "Nutze die sanfte Energie des Wassers, um in deinem Leben Gleichgewicht und Harmonie zu schaffen."
    },
  //const zwillingsflammenThemenLuft = [
    { 
      name: "1. Erfrischende Verbindung", 
      image: "/images/erfrischende_verbindung.jpg", 
      meaning: "Luft: Intellektuelle und kommunikative Tiefe, die anregend und inspirierend ist.", 
      meditation: "Visualisiere eine frische Brise, die dich umhüllt und klare Gedanken und frische Perspektiven bringt.",
      tips: "Fördere offene und ehrliche Kommunikation, um die Verbindung zu stärken und neue Ideen zu teilen."
    },
    { 
      name: "2. Leichteres Wachstum", 
      image: "/images/leichteres_wachstum.jpg", 
      meaning: "Luft: Wachstum durch neue Ideen, Erkenntnisse und Perspektiven.", 
      meditation: "Stelle dir vor, wie der Wind sanft die Blätter eines Baumes bewegt und Wachstum fördert.",
      tips: "Sei offen für neue Ideen und Perspektiven, um persönliches und gemeinsames Wachstum zu fördern."
    },
    { 
      name: "3. Windsbrise der Leidenschaft", 
      image: "/images/windsbrise_der_leidenschaft.jpg", 
      meaning: "Luft: Leidenschaft für intellektuelle und kreative Ausdrucksformen.", 
      meditation: "Visualisiere eine starke Brise, die kreative Ideen und leidenschaftliche Gedanken mit sich trägt.",
      tips: "Nutze deine intellektuelle und kreative Energie, um deine Leidenschaft auszudrücken und zu teilen."
    },
    { 
      name: "4. Luftige Heilung", 
      image: "/images/luftige_heilung.jpg", 
      meaning: "Luft: Heilung durch neue Ideen, Kommunikation und Verständnis.", 
      meditation: "Stelle dir vor, wie ein sanfter Wind alle negativen Gedanken wegweht und Platz für Heilung und Klarheit schafft.",
      tips: "Fördere offene Kommunikation und Verständnis, um Heilung und Klarheit zu erreichen."
    },
    { 
      name: "5. Klarer Gedanke", 
      image: "/images/klarer_gedanke.jpg", 
      meaning: "Luft: Intellektuelle Klarheit, die durch Diskussion und Analyse erreicht wird.", 
      meditation: "Visualisiere einen klaren Himmel, der dir hilft, klare und fokussierte Gedanken zu haben.",
      tips: "Nutze Diskussionen und Analysen, um Klarheit und Verständnis in deiner Beziehung zu fördern."
    },
    { 
      name: "6. Frische Veränderung", 
      image: "/images/frische_veraenderung.jpg", 
      meaning: "Luft: Schnelle und anpassungsfähige Veränderungen durch neue Ideen und Perspektiven.", 
      meditation: "Stelle dir vor, wie ein frischer Wind Veränderungen bringt und neue Möglichkeiten eröffnet.",
      tips: "Sei flexibel und offen für Veränderungen, die durch neue Ideen und Perspektiven angestoßen werden."
    },
    { 
      name: "7. Luftige Trennung", 
      image: "/images/luftige_trennung.jpg", 
      meaning: "Luft: Logische und analytische Betrachtung der Trennung und deren Ursachen.", 
      meditation: "Visualisiere einen klaren, kühlen Wind, der dir hilft, die Trennung rational und ohne emotionale Last zu betrachten.",
      tips: "Analysiere die Ursachen der Trennung logisch und objektiv, um Klarheit und Verständnis zu erreichen."
    },
    { 
      name: "8. Spritzige Wiedervereinigung", 
      image: "/images/spritzige_wiedervereinigung.jpg", 
      meaning: "Luft: Erneuerung der Beziehung durch neue Ideen und Kommunikation.", 
      meditation: "Stelle dir vor, wie ein erfrischender Wind neue Energie und Leben in die Beziehung bringt.",
      tips: "Nutze die Wiedervereinigung, um neue Ideen und Perspektiven zu teilen und die Beziehung zu erneuern."
    },
    { 
      name: "9. Erhellende Selbstentdeckung", 
      image: "/images/erhellende_selbstentdeckung.jpg", 
      meaning: "Luft: Entdeckung durch intellektuelle Erkundung und neue Perspektiven.", 
      meditation: "Visualisiere einen klaren Himmel, der dir hilft, neue Erkenntnisse über dich selbst zu gewinnen.",
      tips: "Sei neugierig und offen für neue Ideen und Perspektiven, um mehr über dich selbst zu erfahren."
    },
    { 
      name: "10. Inspirierende Unterstützung", 
      image: "/images/inspirierende_unterstuetzung.jpg", 
      meaning: "Luft: Intellektuelle und kommunikative Unterstützung, die inspiriert und anregt.", 
      meditation: "Stelle dir vor, wie ein sanfter Wind dich stützt und dir neue Inspiration und Energie bringt.",
      tips: "Sei ein inspirierender und unterstützender Partner, der durch Kommunikation und Ideen Austausch motiviert."
    },
    { 
      name: "11. Luftige Herausforderungen", 
      image: "/images/luftige_herausforderungen.jpg", 
      meaning: "Luft: Intellektuelle Herausforderungen, die durch Diskussion und Analyse gemeistert werden.", 
      meditation: "Stelle dir vor, wie ein starker Wind dich fordert, aber auch deine Fähigkeiten und Stärken enthüllt.",
      tips: "Nutze intellektuelle Herausforderungen, um zu wachsen und deine Fähigkeiten zu stärken."
    },
    { 
      name: "12. Wortgewandte Kommunikation", 
      image: "/images/wortgewandte_kommunikation.jpg", 
      meaning: "Luft: Intellektuelle und rationale Kommunikation, die klar und analytisch ist.", 
      meditation: "Stelle dir vor, wie ein klarer Wind deine Worte trägt und sie klar und deutlich macht.",
      tips: "Fördere eine klare und rationale Kommunikation, um Missverständnisse zu vermeiden und Verständnis zu schaffen."
    },
    { 
      name: "13. Energie des Windes", 
      image: "/images/energie_des_windes.jpg", 
      meaning: "Luft: Erneuerbare und kreative Energie, die durch Ideen und Inspiration angetrieben wird.", 
      meditation: "Visualisiere einen kraftvollen Wind, der dich mit kreativer Energie und Inspiration erfüllt.",
      tips: "Nutze die erneuerbare Energie des Windes, um kreativ und inspiriert zu bleiben und deine Ziele zu verfolgen."
    },
  // const zwillingsflammenThemenErde = [
    { 
      name: "1. Stabile Verbindung", 
      image: "/images/stabile_verbindung.jpg", 
      meaning: "Erde: Solide und stabile Verbindung, die Sicherheit und Verlässlichkeit bietet.", 
      meditation: "Visualisiere einen starken Baum mit tiefen Wurzeln, der symbolisch für eine stabile und sichere Verbindung steht.",
      tips: "Baue eine verlässliche und stabile Beziehung auf, indem du Vertrauen und Sicherheit förderst."
    },
    { 
      name: "2. Reifes Wachstum", 
      image: "/images/reifes_wachstum.jpg", 
      meaning: "Erde: Langsam und beständig, mit einem Fokus auf Stabilität und Reife.", 
      meditation: "Stelle dir vor, wie eine Pflanze langsam wächst und gedeiht, dabei tief verwurzelt und stark wird.",
      tips: "Setze auf kontinuierliches und stabiles Wachstum, indem du Geduld und Beständigkeit übst."
    },
    { 
      name: "3. Ernte der Leidenschaft", 
      image: "/images/ernte_der_leidenschaft.jpg", 
      meaning: "Erde: Praktische Leidenschaft, die in langfristige und stabile Ziele umgesetzt wird.", 
      meditation: "Visualisiere eine reiche Ernte, die die Früchte deiner leidenschaftlichen Bemühungen darstellt.",
      tips: "Fokussiere deine Leidenschaft auf langfristige Ziele und arbeite kontinuierlich daran, diese zu erreichen."
    },
    { 
      name: "4. Festigende Heilung", 
      image: "/images/festigende_heilung.jpg", 
      meaning: "Erde: Geduldige und kontinuierliche Heilung durch Stabilität und Unterstützung.", 
      meditation: "Stelle dir vor, wie sich ein gebrochenes Stück Erde langsam und stetig wieder zusammensetzt und heilt.",
      tips: "Nutze die Kraft der Geduld und Kontinuität, um Heilung und Unterstützung zu bieten."
    },
    { 
      name: "5. Erdige Klarheit", 
      image: "/images/erdige_klarheit.jpg", 
      meaning: "Erde: Praktische Klarheit, die durch konkrete Erfahrungen und Stabilität erlangt wird.", 
      meditation: "Visualisiere eine klare, weite Landschaft, die dir hilft, klare und stabile Gedanken zu haben.",
      tips: "Setze auf praktische Erfahrungen und stabile Grundlagen, um Klarheit in deinen Entscheidungen zu finden."
    },
    { 
      name: "6. Geerdete Veränderung", 
      image: "/images/geerdete_veraenderung.jpg", 
      meaning: "Erde: Langsame und durchdachte Veränderungen, die mit Bedacht und Stabilität umgesetzt werden.", 
      meditation: "Stelle dir vor, wie sich eine Landschaft langsam verändert und dabei stabil und sicher bleibt.",
      tips: "Plane Veränderungen sorgfältig und setze sie mit Bedacht um, um Stabilität zu gewährleisten."
    },
    { 
      name: "7. Ernte der Trennung", 
      image: "/images/ernte_der_trennung.jpg", 
      meaning: "Erde: Praktische Auseinandersetzung mit der Trennung und den langfristigen Konsequenzen.", 
      meditation: "Visualisiere eine Ernte, bei der du die Früchte deiner Erfahrungen und Erkenntnisse sammelst.",
      tips: "Betrachte Trennungen als Gelegenheit zur Reflexion und lerne aus den Erfahrungen für zukünftige Stabilität."
    },
    { 
      name: "8. Stabiler Neuanfang", 
      image: "/images/stabiler_neuanfang.jpg", 
      meaning: "Erde: Stabilisierung der Beziehung und Rückkehr zu einem soliden Fundament.", 
      meditation: "Stelle dir vor, wie ein neues Gebäude auf einem starken und stabilen Fundament errichtet wird.",
      tips: "Baue auf stabilen Grundlagen auf, um einen sicheren und verlässlichen Neuanfang zu ermöglichen."
    },
    { 
      name: "9. Fundamentale Entdeckung", 
      image: "/images/fundamentale_entdeckung.jpg", 
      meaning: "Erde: Entdeckung durch praktische Erfahrungen und verlässliche Erkenntnisse.", 
      meditation: "Visualisiere, wie du tief in die Erde gräbst und dabei wertvolle Schätze und Erkenntnisse findest.",
      tips: "Nutze praktische Erfahrungen, um tiefere Erkenntnisse über dich selbst und deine Beziehung zu gewinnen."
    },
    { 
      name: "10. Praktische Unterstützung", 
      image: "/images/praktische_unterstuetzung.jpg", 
      meaning: "Erde: Praktische und stabile Unterstützung, die Verlässlichkeit und Halt gibt.", 
      meditation: "Stelle dir vor, wie du auf festem Boden stehst und dich unterstützt und sicher fühlst.",
      tips: "Biete deinem Partner praktische und verlässliche Unterstützung, um Stabilität und Sicherheit zu gewährleisten."
    },
    { 
      name: "11. Erdige Prüfungen", 
      image: "/images/erdige_pruefungen.jpg", 
      meaning: "Erde: Praktische Herausforderungen, die durch Geduld und Stabilität bewältigt werden.", 
      meditation: "Stelle dir vor, wie du auf einem steinigen Weg gehst und dabei Schritt für Schritt Hindernisse überwindest.",
      tips: "Bewältige Herausforderungen mit Geduld und einer stabilen Herangehensweise, um langfristigen Erfolg zu erzielen."
    },
    { 
      name: "12. Konkrete Kommunikation", 
      image: "/images/konkrete_kommunikation.jpg", 
      meaning: "Erde: Praktische und klare Kommunikation, die Stabilität und Verlässlichkeit vermittelt.", 
      meditation: "Visualisiere eine klare Straße, die dir hilft, deine Gedanken und Worte deutlich zu machen.",
      tips: "Kommuniziere auf klare und praktische Weise, um Missverständnisse zu vermeiden und Stabilität zu fördern."
    },
    { 
      name: "13. Stabile Energie", 
      image: "/images/stabile_energie.jpg", 
      meaning: "Erde: Beständige und stabile Energie, die durch kontinuierliche Anstrengung und Zuverlässigkeit charakterisiert ist.", 
      meditation: "Stelle dir vor, wie du eine solide Mauer baust, die dich mit stabiler und beständiger Energie umgibt.",
      tips: "Nutze beständige und zuverlässige Energiequellen, um kontinuierlich an deinen Zielen zu arbeiten."
    }
  ];
  
  export default zwillingsflammen;
  
  