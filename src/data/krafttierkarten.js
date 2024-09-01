const krafttierkarten = [
    // Widder (21. März – 19. April)
    {
        name: "Gepard",
        image: "/images/krafttier_gepard.jpg",
        meaning: "Widder 1 (Afrika) Impulsivität, Schnelligkeit, Entschlossenheit.",
        meditation: "Wie kann ich meine spontane Energie gezielt einsetzen?",
        tips: "Handeln Sie schnell, aber nicht überstürzt. Nutzen Sie Ihre Impulse, um Ziele effizient zu erreichen."
    },
    {
        name: "Känguru",
        image: "/images/krafttier_kaenguru.jpg",
        meaning: "Widder 2 (Australien) Abenteuerlust, Vorwärtsbewegung, Balance.",
        meditation: "Wie kann ich mutig neue Wege beschreiten und dabei im Gleichgewicht bleiben?",
        tips: "Wagen Sie den Sprung ins Unbekannte. Bewahren Sie dabei Ihre innere Balance und bleiben Sie flexibel."
    },
    {
        name: "Weißkopfseeadler",
        image: "/images/krafttier_weisskopfseeadler.jpg",
        meaning: "Widder 3 (Nordamerika) Selbstbewusstsein, Freiheit, Weitblick.",
        meditation: "Wie kann ich mein Selbstvertrauen stärken und eine höhere Perspektive einnehmen?",
        tips: "Vertrauen Sie auf Ihre Fähigkeiten. Erheben Sie sich über alltägliche Probleme und behalten Sie das große Ganze im Blick."
    },
    {
        name: "Tiger",
        image: "/images/krafttier_tiger.jpg",
        meaning: "Widder 4 (Asien) Durchsetzungsvermögen, Kraft, Mut.",
        meditation: "Wie kann ich meine innere Stärke nutzen, um meine Ziele zu erreichen?",
        tips: "Setzen Sie sich selbstbewusst für Ihre Interessen ein. Nutzen Sie Ihre Kraft weise und zielgerichtet."
    },
    {
        name: "Wolf",
        image: "/images/krafttier_wolf.jpg",
        meaning: "Widder 5 (Europa) Führung, Teamwork, Intuition.",
        meditation: "Wie kann ich meine Führungsqualitäten entwickeln und dabei im Einklang mit anderen bleiben?",
        tips: "Übernehmen Sie Verantwortung für sich und andere. Arbeiten Sie im Team und vertrauen Sie auf Ihre Intuition."
    },
    {
        name: "Kaiserpinguin",
        image: "/images/krafttier_kaiserpinguin.jpg",
        meaning: "Widder 6 (Antarktis) Unabhängigkeit, Ausdauer, Anpassungsfähigkeit.",
        meditation: "Wie kann ich meine Unabhängigkeit bewahren und gleichzeitig Teil einer Gemeinschaft sein?",
        tips: "Bleiben Sie standhaft, auch wenn die Umstände herausfordernd sind. Passen Sie sich an, ohne Ihre Individualität zu verlieren."
    },
    {
        name: "Jaguar",
        image: "/images/krafttier_jaguar.jpg",
        meaning: "Widder 7 (Südamerika) Selbstverwirklichung, Kraft, Eleganz.",
        meditation: "Wie kann ich meine Ziele kraftvoll und zielgerichtet verfolgen?",
        tips: "Setzen Sie Ihre Energie gezielt ein, um Ihre Träume zu verwirklichen. Handeln Sie mit Kraft und Anmut zugleich."
    },
    // Stier (20. April – 20. Mai)
    {
        name: "Elefant",
        image: "/images/krafttier_elefant.jpg",
        meaning: "Stier 1 (Afrika) Sinnlichkeit, Empfindsamkeit, Stärke.",
        meditation: "Wie kann ich meine Sinne bewusster wahrnehmen und genießen?",
        tips: "Nehmen Sie sich Zeit, körperliche Genüsse zu erleben. Bleiben Sie dabei sensibel für Ihre Umgebung und andere."
    },
    {
        name: "Bison",
        image: "/images/krafttier_bison.jpg",
        meaning: "Stier 2 (Nordamerika) Sicherheit, Stabilität, Ausdauer.",
        meditation: "Wie kann ich mehr Stabilität und Sicherheit in mein Leben bringen?",
        tips: "Bauen Sie auf Ihre innere Stärke. Schaffen Sie sich eine solide Basis für Ihr Leben und Ihre Ziele."
    },
    {
        name: "Panda",
        image: "/images/krafttier_panda.jpg",
        meaning: "Stier 3 (Asien) Besitz, Gemütlichkeit, Wertschätzung.",
        meditation: "Wie kann ich materielle Dinge wertschätzen, ohne von ihnen abhängig zu werden?",
        tips: "Genießen Sie die Dinge, die Sie besitzen, aber bleiben Sie innerlich frei. Schaffen Sie sich eine behagliche Umgebung."
    },
    {
        name: "Koala",
        image: "/images/krafttier_koala.jpg",
        meaning: "Stier 4 (Australien) Geduld, Ruhe, Ausdauer.",
        meditation: "Wie kann ich mehr Geduld und innere Ruhe entwickeln?",
        tips: "Üben Sie sich in Geduld und Gelassenheit. Nehmen Sie sich die Zeit, die Sie brauchen, um Ihre Ziele zu erreichen."
    },
    {
        name: "Dachs",
        image: "/images/krafttier_dachs.jpg",
        meaning: "Stier 5 (Europa) Beharrlichkeit, Zielstrebigkeit, Ausdauer.",
        meditation: "Wie kann ich beharrlich an meinen Zielen arbeiten, ohne stur zu werden?",
        tips: "Bleiben Sie hartnäckig bei der Verfolgung Ihrer Ziele. Seien Sie dabei aber auch flexibel und offen für neue Wege."
    },
    {
        name: "Faultier",
        image: "/images/krafttier_faultier.jpg",
        meaning: "Stier 6 (Südamerika) Genuss, Entspannung, Achtsamkeit.",
        meditation: "Wie kann ich das Leben mehr genießen und dabei im Moment präsent sein?",
        tips: "Nehmen Sie sich bewusst Zeit zum Entspannen und Genießen. Praktizieren Sie Achtsamkeit im Alltag."
    },
    {
        name: "Weddellrobbe",
        image: "/images/krafttier_weddellrobbe.jpg",
        meaning: "Stier 7 (Antarktis) Erfüllung, Anpassungsfähigkeit, Ausdauer.",
        meditation: "Wie kann ich innere Zufriedenheit finden und mich gleichzeitig an neue Situationen anpassen?",
        tips: "Suchen Sie nach innerer Erfüllung, unabhängig von äußeren Umständen. Bleiben Sie flexibel und passen Sie sich neuen Situationen an."
    },
    // Zwillinge (21. Mai – 20. Juni)
    {
        name: "Papagei",
        image: "/images/krafttier_papagei.jpg",
        meaning: "Zwillinge 1 (Afrika) Kommunikation, Redegewandtheit, Geselligkeit.",
        meditation: "Wie kann ich meine verbalen Fähigkeiten verbessern und effektiver kommunizieren?",
        tips: "Üben Sie aktives Zuhören und klare Ausdrucksweise. Seien Sie offen für den Austausch mit anderen und teilen Sie Ihr Wissen."
    },
    {
        name: "Chamäleon",
        image: "/images/krafttier_chamaeleon.jpg",
        meaning: "Zwillinge 2 (Australien) Anpassungsfähigkeit, Wandelbarkeit, Flexibilität.",
        meditation: "Wie kann ich mich besser an verschiedene Situationen anpassen, ohne mich selbst zu verlieren?",
        tips: "Bleiben Sie flexibel in Ihrem Denken und Handeln. Passen Sie sich an neue Umstände an, aber bewahren Sie Ihre Kernwerte."
    },
    {
        name: "Waschbär",
        image: "/images/krafttier_waschbaer.jpg",
        meaning: "Zwillinge 3 (Nordamerika) Neugier, Geschicklichkeit, Erkundungsdrang.",
        meditation: "Wie kann ich meine Neugier nutzen, um neue Erkenntnisse zu gewinnen?",
        tips: "Erforschen Sie Ihre Umgebung mit offenem Geist. Seien Sie neugierig auf neue Ideen und Erfahrungen."
    },
    {
        name: "Oktopus",
        image: "/images/krafttier_oktopus.jpg",
        meaning: "Zwillinge 4 (Asien) Vielseitigkeit, Intelligenz, Anpassungsfähigkeit.",
        meditation: "Wie kann ich meine vielfältigen Talente entwickeln und einsetzen?",
        tips: "Nutzen Sie Ihre Vielseitigkeit, um kreative Lösungen zu finden. Entwickeln Sie verschiedene Fähigkeiten und setzen Sie sie flexibel ein."
    },
    {
        name: "Rabe",
        image: "/images/krafttier_rabe.jpg",
        meaning: "Zwillinge 5 (Europa) Intellekt, Weisheit, Einfallsreichtum.",
        meditation: "Wie kann ich meinen Verstand schärfen und meine Weisheit vertiefen?",
        tips: "Fordern Sie Ihren Geist durch kontinuierliches Lernen heraus. Suchen Sie nach tieferen Einsichten in alltäglichen Situationen."
    },
    {
        name: "Ameise",
        image: "/images/krafttier_ameise.jpg",
        meaning: "Zwillinge 6 (Südamerika) Vernetzung, Kooperation, Fleiß.",
        meditation: "Wie kann ich effektiver mit anderen zusammenarbeiten und Netzwerke aufbauen?",
        tips: "Arbeiten Sie im Team und nutzen Sie die Stärken jedes Einzelnen. Bauen Sie ein Netzwerk von Kontakten auf und pflegen Sie es."
    },
    {
        name: "Albatros",
        image: "/images/krafttier_albatros.jpg",
        meaning: "Zwillinge 7 (Antarktis) Leichtigkeit, Freiheit, Weitblick.",
        meditation: "Wie kann ich Dinge mit mehr Leichtigkeit angehen und eine breitere Perspektive einnehmen?",
        tips: "Versuchen Sie, Situationen aus verschiedenen Blickwinkeln zu betrachten. Lassen Sie los, was Sie beschwert, und streben Sie nach innerer Freiheit."
    },
    // Krebs (21. Juni – 22. Juli)
    {
        name: "Nilpferd",
        image: "/images/krafttier_nilpferd.jpg",
        meaning: "Krebs 1 (Afrika) Emotionalität, Sensibilität, Beschützerinstinkt.",
        meditation: "Wie kann ich meine Gefühle besser verstehen und ausdrücken?",
        tips: "Nehmen Sie sich Zeit, Ihre Emotionen zu ergründen. Nutzen Sie Ihre Sensibilität, um andere zu verstehen und zu unterstützen."
    },
    {
        name: "Biber",
        image: "/images/krafttier_biber.jpg",
        meaning: "Krebs 2 (Nordamerika) Häuslichkeit, Fleiß, Heimatverbundenheit.",
        meditation: "Wie kann ich mein Zuhause zu einem Ort der Geborgenheit machen?",
        tips: "Investieren Sie Zeit und Energie in Ihr Zuhause. Schaffen Sie eine Umgebung, in der Sie sich wohl und sicher fühlen."
    },
    {
        name: "Orang-Utan",
        image: "/images/krafttier_orang-utan.jpg",
        meaning: "Krebs 3 (Asien) Fürsorge, Mitgefühl, Weisheit.",
        meditation: "Wie kann ich meine fürsorgliche Seite stärken und anderen helfen?",
        tips: "Pflegen Sie Ihre Beziehungen mit Liebe und Aufmerksamkeit. Seien Sie geduldig und verständnisvoll im Umgang mit anderen."
    },
    {
        name: "Delfin",
        image: "/images/krafttier_delfin.jpg",
        meaning: "Krebs 4 (Australien) Intuition, Empathie, Spielfreude.",
        meditation: "Wie kann ich meiner Intuition mehr vertrauen und sie im Alltag nutzen?",
        tips: "Hören Sie auf Ihr Bauchgefühl. Üben Sie sich darin, die Gefühle anderer wahrzunehmen und darauf einzugehen."
    },
    {
        name: "Igel",
        image: "/images/krafttier_igel.jpg",
        meaning: "Krebs 5 (Europa) Schutz, Vorsicht, Selbstverteidigung.",
        meditation: "Wie kann ich mich und andere schützen, ohne mich zu verschließen?",
        tips: "Setzen Sie gesunde Grenzen, bleiben Sie aber offen für positive Erfahrungen. Lernen Sie, wann es Zeit ist, sich zu öffnen und wann sich zu schützen."
    },
    {
        name: "Kolibri",
        image: "/images/krafttier_kolibri.jpg",
        meaning: "Krebs 6 (Südamerika) Erinnerung, Treue, Lebensfreude.",
        meditation: "Wie kann ich wertvolle Erinnerungen bewahren und gleichzeitig im Jetzt leben?",
        tips: "Schätzen Sie die schönen Momente in Ihrem Leben. Bleiben Sie flexibel und passen Sie sich neuen Situationen an, ohne Ihre Wurzeln zu vergessen."
    },
    {
        name: "Seeleopard",
        image: "/images/krafttier_seeleopard.jpg",
        meaning: "Krebs 7 (Antarktis) Anpassung, Widerstandsfähigkeit, Überlebenswille.",
        meditation: "Wie kann ich mich besser an schwierige Situationen anpassen?",
        tips: "Entwickeln Sie Ihre Fähigkeit, sich flexibel an neue Umstände anzupassen. Bleiben Sie stark und fokussiert, auch wenn die Bedingungen herausfordernd sind."
    },
    // Löwe (23. Juli – 22. August)
    {
        name: "Pfau",
        image: "/images/krafttier_pfau.jpg",
        meaning: "Löwe 1 (Afrika) Selbstausdruck, Schönheit, Stolz.",
        meditation: "Wie kann ich meine Einzigartigkeit ausdrücken und meine innere Schönheit zeigen?",
        tips: "Zeigen Sie sich von Ihrer besten Seite. Seien Sie stolz auf Ihre Talente und Fähigkeiten."
    },
    {
        name: "Leierschwanz",
        image: "/images/krafttier_leierschwanz.jpg",
        meaning: "Löwe 2 (Australien) Kreativität, Nachahmung, Einfallsreichtum.",
        meditation: "Wie kann ich meine kreativen Fähigkeiten weiterentwickeln und mich inspirieren lassen?",
        tips: "Nutzen Sie Ihre Kreativität, um neue Wege zu finden. Lassen Sie sich von Ihrer Umgebung inspirieren."
    },
    {
        name: "Grizzlybär",
        image: "/images/krafttier_grizzlybaer.jpg",
        meaning: "Löwe 3 (Nordamerika) Großzügigkeit, Stärke, Schutz.",
        meditation: "Wie kann ich meine Stärke nutzen, um anderen zu helfen und zu schützen?",
        tips: "Seien Sie großzügig mit Ihren Ressourcen. Nutzen Sie Ihre Stärke, um Schwächere zu unterstützen."
    },
    {
        name: "Elefantenbulle",
        image: "/images/krafttier_elefantenbulle.jpg",
        meaning: "Löwe 4 (Asien) Führungskraft, Weisheit, Stärke.",
        meditation: "Wie kann ich meine Führungsqualitäten stärken und andere inspirieren?",
        tips: "Übernehmen Sie Verantwortung und führen Sie mit Weisheit. Inspirieren Sie andere durch Ihr Beispiel."
    },
    {
        name: "Löwe",
        image: "/images/krafttier_löwe.jpg",
        meaning: "Löwe 5 (Europa) Loyalität, Mut, Königlichkeit.",
        meditation: "Wie kann ich meine Loyalität zeigen und mutig für das einstehen, was mir wichtig ist?",
        tips: "Seien Sie treu und loyal. Zeigen Sie Mut und Entschlossenheit in schwierigen Situationen."
    },
    {
        name: "Ara",
        image: "/images/krafttier_ara.jpg",
        meaning: "Löwe 6 (Südamerika) Charisma, Farbenpracht, Ausdruck.",
        meditation: "Wie kann ich mein Charisma stärken und mich lebendig und farbenfroh ausdrücken?",
        tips: "Nutzen Sie Ihre Ausstrahlung, um andere zu begeistern. Seien Sie lebendig und farbenfroh in Ihrem Ausdruck."
    },
    {
        name: "Königspinguin",
        image: "/images/krafttier_königspinguin.jpg",
        meaning: "Löwe 7 (Antarktis) Würde, Gemeinschaft, Führung.",
        meditation: "Wie kann ich mit Würde und Anmut führen und ein Vorbild für andere sein?",
        tips: "Führen Sie mit Würde und Anmut. Seien Sie ein Vorbild für andere in Ihrer Gemeinschaft."
    },
    // Jungfrau (23. August – 22. September)
    {
        name: "Schimpanse",
        image: "/images/krafttier_schimpanse.jpg",
        meaning: "Jungfrau 1 (Afrika) Analyse, Intelligenz, Problemlösung.",
        meditation: "Wie kann ich meine analytischen Fähigkeiten nutzen, um Probleme zu lösen?",
        tips: "Nutzen Sie Ihre Intelligenz, um komplexe Probleme zu analysieren und Lösungen zu finden."
    },
    {
        name: "Bienenfresser",
        image: "/images/krafttier_bienenfresser.jpg",
        meaning: "Jungfrau 2 (Australien) Perfektion, Präzision, Schönheit.",
        meditation: "Wie kann ich meine Arbeit perfektionieren und dabei die Schönheit im Detail erkennen?",
        tips: "Streben Sie nach Perfektion in Ihren Aufgaben. Achten Sie auf die Schönheit im Detail."
    },
    {
        name: "Bienenstock",
        image: "/images/krafttier_bienenstock.jpg",
        meaning: "Jungfrau 3 (Nordamerika) Ordnung, Gemeinschaft, Fleiß.",
        meditation: "Wie kann ich Ordnung in mein Leben bringen und gleichzeitig zur Gemeinschaft beitragen?",
        tips: "Schaffen Sie Ordnung in Ihrem Umfeld. Arbeiten Sie fleißig und tragen Sie zur Gemeinschaft bei."
    },
    {
        name: "Wasserbüffel",
        image: "/images/krafttier_wasserbüffel.jpg",
        meaning: "Jungfrau 4 (Asien) Dienst, Stärke, Ausdauer.",
        meditation: "Wie kann ich anderen besser dienen und dabei meine eigene Stärke nutzen?",
        tips: "Nutzen Sie Ihre Stärke, um anderen zu dienen. Zeigen Sie Ausdauer und Engagement in Ihrem Dienst."
    },
    {
        name: "Storch",
        image: "/images/krafttier_storch.jpg",
        meaning: "Jungfrau 5 (Europa) Gesundheit, Heilung, Fürsorge.",
        meditation: "Wie kann ich meine Gesundheit fördern und anderen bei ihrer Heilung helfen?",
        tips: "Achten Sie auf Ihre Gesundheit. Seien Sie fürsorglich und helfen Sie anderen bei ihrer Heilung."
    },
    {
        name: "Ameisenbär",
        image: "/images/krafttier_ameisenbaer.jpg",
        meaning: "Jungfrau 6 (Südamerika) Effizienz, Fleiß, Anpassungsfähigkeit.",
        meditation: "Wie kann ich effizienter arbeiten und meine Fähigkeiten besser einsetzen?",
        tips: "Arbeiten Sie effizient und fleißig. Passen Sie sich an neue Herausforderungen an."
    },
    {
        name: "Krill",
        image: "/images/krafttier_krill.jpg",
        meaning: "Jungfrau 7 (Antarktis) Bescheidenheit, Gemeinschaft, Überlebenswille.",
        meditation: "Wie kann ich bescheiden bleiben und dennoch einen wichtigen Beitrag leisten?",
        tips: "Bleiben Sie bescheiden und arbeiten Sie im Team. Ihr Beitrag ist wichtig, auch wenn er klein erscheint."
    },
    // Waage (23. September – 22. Oktober)
    {
        name: "Zebra",
        image: "/images/krafttier_zebra.jpg",
        meaning: "Waage 1 (Afrika) Harmonie, Gleichgewicht, Gemeinschaft.",
        meditation: "Wie kann ich mehr Harmonie und Gleichgewicht in mein Leben bringen?",
        tips: "Streben Sie nach Harmonie in Ihren Beziehungen. Finden Sie das Gleichgewicht zwischen verschiedenen Aspekten Ihres Lebens."
    },
    {
        name: "Kookaburra",
        image: "/images/krafttier_kookaburra.jpg",
        meaning: "Waage 2 (Australien) Partnerschaft, Freude, Kommunikation.",
        meditation: "Wie kann ich meine Partnerschaften stärken und dabei Freude und Leichtigkeit bewahren?",
        tips: "Pflegen Sie Ihre Partnerschaften mit Freude. Kommunizieren Sie offen und ehrlich."
    },
    {
        name: "Präriehund",
        image: "/images/krafttier_präriehund.jpg",
        meaning: "Waage 3 (Nordamerika) Diplomatie, Gemeinschaft, Zusammenarbeit.",
        meditation: "Wie kann ich diplomatischer handeln und besser mit anderen zusammenarbeiten?",
        tips: "Seien Sie diplomatisch in Ihren Interaktionen. Arbeiten Sie eng mit anderen zusammen, um gemeinsame Ziele zu erreichen."
    },
    {
        name: "Kranich",
        image: "/images/krafttier_kranich.jpg",
        meaning: "Waage 4 (Asien) Ästhetik, Schönheit, Harmonie.",
        meditation: "Wie kann ich mehr Schönheit und Harmonie in mein Leben integrieren?",
        tips: "Achten Sie auf die ästhetischen Aspekte des Lebens. Schaffen Sie Harmonie in Ihrem Umfeld."
    },
    {
        name: "Eule",
        image: "/images/krafttier_eule.jpg",
        meaning: "Waage 5 (Europa) Gerechtigkeit, Weisheit, Klarheit.",
        meditation: "Wie kann ich gerechter handeln und klarere Entscheidungen treffen?",
        tips: "Streben Sie nach Gerechtigkeit in Ihren Handlungen. Nutzen Sie Ihre Weisheit, um klare Entscheidungen zu treffen."
    },
    {
        name: "Kapuzineraffe",
        image: "/images/krafttier_kapuzineraffe.jpg",
        meaning: "Waage 6 (Südamerika) Kooperation, Intelligenz, Geselligkeit.",
        meditation: "Wie kann ich besser mit anderen kooperieren und dabei meine Intelligenz nutzen?",
        tips: "Arbeiten Sie eng mit anderen zusammen. Nutzen Sie Ihre Intelligenz, um gemeinsame Ziele zu erreichen."
    },
    {
        name: "Sturmvogel",
        image: "/images/krafttier_sturmvogel.jpg",
        meaning: "Waage 7 (Antarktis) Ausgleich, Freiheit, Anpassungsfähigkeit.",
        meditation: "Wie kann ich mehr Ausgleich und Freiheit in mein Leben bringen?",
        tips: "Finden Sie den Ausgleich zwischen verschiedenen Aspekten Ihres Lebens. Streben Sie nach innerer Freiheit und passen Sie sich an neue Herausforderungen an."
    },
    // Skorpion (23. Oktober – 21. November)
    {
        name: "Nashorn",
        image: "/images/krafttier_nashorn.jpg",
        meaning: "Skorpion 1 (Afrika) Intensität, Kraft, Schutz.",
        meditation: "Wie kann ich meine innere Stärke und Intensität besser nutzen?",
        tips: "Nutzen Sie Ihre Kraft und Intensität, um Ihre Ziele zu erreichen. Schützen Sie, was Ihnen wichtig ist."
    },
    {
        name: "Tasmanischer Teufel",
        image: "/images/krafttier_tasmanischer_teufel.jpg",
        meaning: "Skorpion 2 (Australien) Transformation, Überleben, Anpassungsfähigkeit.",
        meditation: "Wie kann ich mich besser an Veränderungen anpassen und dabei wachsen?",
        tips: "Seien Sie bereit, sich zu verändern und anzupassen. Nutzen Sie Herausforderungen als Wachstumschancen."
    },
    {
        name: "Orca",
        image: "/images/krafttier_orca.jpg",
        meaning: "Skorpion 3 (Nordamerika) Tiefgründigkeit, Gemeinschaft, Kommunikation.",
        meditation: "Wie kann ich tiefere Verbindungen zu anderen aufbauen und meine Kommunikation verbessern?",
        tips: "Suchen Sie nach tieferen Verbindungen in Ihren Beziehungen. Kommunizieren Sie offen und ehrlich."
    },
    {
        name: "Komododrache",
        image: "/images/krafttier_komododrache.jpg",
        meaning: "Skorpion 4 (Asien) Macht, Kontrolle, Anpassungsfähigkeit.",
        meditation: "Wie kann ich meine Macht und Kontrolle auf konstruktive Weise nutzen?",
        tips: "Nutzen Sie Ihre Macht und Kontrolle weise. Passen Sie sich an neue Herausforderungen an und bleiben Sie flexibel."
    },
    {
        name: "Salamander",
        image: "/images/krafttier_salamander.jpg",
        meaning: "Skorpion 5 (Europa) Regeneration, Anpassungsfähigkeit, Transformation.",
        meditation: "Wie kann ich mich besser regenerieren und transformieren?",
        tips: "Nutzen Sie Ihre Fähigkeit zur Regeneration. Seien Sie bereit, sich zu verändern und zu wachsen."
    },
    {
        name: "Piranha",
        image: "/images/krafttier_piranha.jpg",
        meaning: "Skorpion 6 (Südamerika) Leidenschaft, Intensität, Überlebenswille.",
        meditation: "Wie kann ich meine Leidenschaft und Intensität besser kanalisieren?",
        tips: "Nutzen Sie Ihre Leidenschaft, um Ihre Ziele zu erreichen. Bleiben Sie fokussiert und entschlossen."
    },
    {
        name: "Riesensturmvogel",
        image: "/images/krafttier_riesensturmvogel.jpg",
        meaning: "Skorpion 7 (Antarktis) Ausdauer, Widerstandsfähigkeit, Anpassungsfähigkeit.",
        meditation: "Wie kann ich meine Ausdauer und Widerstandsfähigkeit stärken?",
        tips: "Bleiben Sie ausdauernd und widerstandsfähig in schwierigen Zeiten. Passen Sie sich an neue Herausforderungen an."
    },
    // Schütze (22. November – 21. Dezember)
    {
        name: "Giraffe",
        image: "/images/krafttier_giraffe.jpg",
        meaning: "Schütze 1 (Afrika) Optimismus, Weitblick, Freiheit.",
        meditation: "Wie kann ich meinen Optimismus und meine Freiheit stärken?",
        tips: "Behalten Sie den Überblick und bleiben Sie optimistisch. Streben Sie nach Freiheit in Ihren Handlungen."
    },
    {
        name: "Emu",
        image: "/images/krafttier_emu.jpg",
        meaning: "Schütze 2 (Australien) Abenteuer, Entdeckung, Neugier.",
        meditation: "Wie kann ich mein Bedürfnis nach Abenteuer und Entdeckung stillen?",
        tips: "Suchen Sie nach neuen Abenteuern und Entdeckungen. Bleiben Sie neugierig und offen für Neues."
    },
    {
        name: "Mustang",
        image: "/images/krafttier_mustang.jpg",
        meaning: "Schütze 3 (Nordamerika) Freiheit, Wildheit, Unabhängigkeit.",
        meditation: "Wie kann ich meine Unabhängigkeit und Freiheit stärken?",
        tips: "Streben Sie nach Unabhängigkeit und Freiheit. Seien Sie wild und ungebunden in Ihren Handlungen."
    },
    {
        name: "Yak",
        image: "/images/krafttier_yak.jpg",
        meaning: "Schütze 4 (Asien) Weisheit, Stärke, Durchhaltevermögen.",
        meditation: "Wie kann ich meine Weisheit und Stärke weiterentwickeln?",
        tips: "Nutzen Sie Ihre Weisheit und Stärke, um Herausforderungen zu meistern. Bleiben Sie ausdauernd und entschlossen."
    },
    {
        name: "Hirsch",
        image: "/images/krafttier_hirsch.jpg",
        meaning: "Schütze 5 (Europa) Expansion, Wachstum, Entfaltung.",
        meditation: "Wie kann ich mein Wachstum und meine Entfaltung fördern?",
        tips: "Streben Sie nach Wachstum und Entfaltung. Nutzen Sie jede Gelegenheit zur persönlichen Entwicklung."
    },
    {
        name: "Tukan",
        image: "/images/krafttier_tukan.jpg",
        meaning: "Schütze 6 (Südamerika) Enthusiasmus, Farbenpracht, Ausdruck.",
        meditation: "Wie kann ich meinen Enthusiasmus und meinen Ausdruck stärken?",
        tips: "Nutzen Sie Ihren Enthusiasmus, um andere zu inspirieren. Seien Sie lebendig und farbenfroh in Ihrem Ausdruck."
    },
    {
        name: "Wanderalbatros",
        image: "/images/krafttier_wanderalbatros.jpg",
        meaning: "Schütze 7 (Antarktis) Vision, Freiheit, Weitblick.",
        meditation: "Wie kann ich meine Vision und meinen Weitblick entwickeln?",
        tips: "Streben Sie nach Freiheit und Weitblick. Entwickeln Sie eine klare Vision für Ihre Zukunft."
    },
    // Steinbock (22. Dezember – 19. Januar)
    {
        name: "Bergziege",
        image: "/images/krafttier_bergziege.jpg",
        meaning: "Steinbock 1 (Afrika) Verantwortung, Ausdauer, Zielstrebigkeit.",
        meditation: "Wie kann ich meine Verantwortung und Ausdauer stärken?",
        tips: "Übernehmen Sie Verantwortung für Ihre Handlungen. Bleiben Sie ausdauernd und zielstrebig in Ihren Bemühungen."
    },
    {
        name: "Wombat",
        image: "/images/krafttier_wombat.jpg",
        meaning: "Steinbock 2 (Australien) Ausdauer, Geduld, Stärke.",
        meditation: "Wie kann ich meine Geduld und Stärke weiterentwickeln?",
        tips: "Bleiben Sie geduldig und stark in schwierigen Zeiten. Nutzen Sie Ihre Ausdauer, um Ihre Ziele zu erreichen."
    },
    {
        name: "Dickhornschaf",
        image: "/images/krafttier_dickhornschaf.jpg",
        meaning: "Steinbock 3 (Nordamerika) Struktur, Stabilität, Widerstandsfähigkeit.",
        meditation: "Wie kann ich mehr Struktur und Stabilität in mein Leben bringen?",
        tips: "Schaffen Sie Struktur in Ihrem Alltag. Bleiben Sie stabil und widerstandsfähig in herausfordernden Situationen."
    },
    {
        name: "Steinbock",
        image: "/images/krafttier_steinbock.jpg",
        meaning: "Steinbock 4 (Asien) Ambition, Entschlossenheit, Zielstrebigkeit.",
        meditation: "Wie kann ich meine Ambitionen und meine Entschlossenheit stärken?",
        tips: "Setzen Sie sich ehrgeizige Ziele und arbeiten Sie entschlossen daran, sie zu erreichen. Bleiben Sie zielstrebig und entschlossen."
    },
    {
        name: "Steinadler",
        image: "/images/krafttier_steinadler.jpg",
        meaning: "Steinbock 5 (Europa) Disziplin, Fokus, Weitblick.",
        meditation: "Wie kann ich meine Disziplin und meinen Fokus verbessern?",
        tips: "Bleiben Sie diszipliniert und fokussiert in Ihren Bemühungen. Behalten Sie das große Ganze im Blick."
    },
    {
        name: "Andenkondor",
        image: "/images/krafttier_andenkondor.jpg",
        meaning: "Steinbock 6 (Südamerika) Reife, Weisheit, Weitblick.",
        meditation: "Wie kann ich meine Reife und Weisheit weiterentwickeln?",
        tips: "Nutzen Sie Ihre Reife und Weisheit, um kluge Entscheidungen zu treffen. Behalten Sie den Überblick in schwierigen Situationen."
    },
    {
        name: "Krabbenfresserrobbe",
        image: "/images/krafttier_krabbenfresserrobbe.jpg",
        meaning: "Steinbock 7 (Antarktis) Beständigkeit, Anpassungsfähigkeit, Überlebenswille.",
        meditation: "Wie kann ich meine Beständigkeit und Anpassungsfähigkeit stärken?",
        tips: "Bleiben Sie beständig und anpassungsfähig in schwierigen Zeiten. Nutzen Sie Ihren Überlebenswillen, um Herausforderungen zu meistern."
    },
    // Wassermann (20. Januar – 18. Februar)
    {
        name: "Okapi",
        image: "/images/krafttier_okapi.jpg",
        meaning: "Wassermann 1 (Afrika) Innovation, Einzigartigkeit, Geheimnis.",
        meditation: "Wie kann ich meine Innovationskraft und Einzigartigkeit fördern?",
        tips: "Nutzen Sie Ihre Einzigartigkeit, um kreative Lösungen zu finden. Seien Sie offen für neue Ideen und Innovationen."
    },
    {
        name: "Flughund",
        image: "/images/krafttier_flughund.jpg",
        meaning: "Wassermann 2 (Australien) Freiheit, Gemeinschaft, Kommunikation.",
        meditation: "Wie kann ich meine Freiheit und meine Kommunikationsfähigkeiten stärken?",
        tips: "Nutzen Sie Ihre Kommunikationsfähigkeiten, um in Ihrer Gemeinschaft zu wachsen. Streben Sie nach Freiheit in Ihren Handlungen."
    },
    {
        name: "Kojote",
        image: "/images/krafttier_kojote.jpg",
        meaning: "Wassermann 3 (Nordamerika) Originalität, Anpassungsfähigkeit, Intelligenz.",
        meditation: "Wie kann ich meine Originalität und Intelligenz besser nutzen?",
        tips: "Nutzen Sie Ihre Originalität und Intelligenz, um neue Wege zu finden. Seien Sie anpassungsfähig in herausfordernden Situationen."
    },
    {
        name: "Orang-Utan",
        image: "/images/krafttier_orang-utane.jpg",
        meaning: "Wassermann 4 (Asien) Humanität, Weisheit, Gemeinschaft.",
        meditation: "Wie kann ich meine humanitäre Seite stärken und meiner Gemeinschaft besser dienen?",
        tips: "Seien Sie weise und humanitär in Ihren Handlungen. Nutzen Sie Ihre Weisheit, um Ihrer Gemeinschaft zu dienen."
    },
    {
        name: "Wildpferd",
        image: "/images/krafttier_wildpferd.jpg",
        meaning: "Wassermann 5 (Europa) Rebellion, Freiheit, Unabhängigkeit.",
        meditation: "Wie kann ich meine rebellische Seite konstruktiv nutzen und meine Unabhängigkeit stärken?",
        tips: "Nutzen Sie Ihre rebellische Seite, um neue Wege zu finden. Streben Sie nach Unabhängigkeit und Freiheit."
    },
    {
        name: "Flussdelfin",
        image: "/images/krafttier_flussdelfin.jpg",
        meaning: "Wassermann 6 (Südamerika) Gemeinschaft, Intelligenz, Anpassungsfähigkeit.",
        meditation: "Wie kann ich meine Gemeinschaft und meine Anpassungsfähigkeit stärken?",
        tips: "Nutzen Sie Ihre Intelligenz und Anpassungsfähigkeit, um in Ihrer Gemeinschaft zu wachsen. Seien Sie flexibel in neuen Situationen."
    },
    {
        name: "Schneeeule",
        image: "/images/krafttier_schneeeule.jpg",
        meaning: "Wassermann 7 (Antarktis) Zukunftsvision, Weisheit, Klarheit.",
        meditation: "Wie kann ich meine Zukunftsvision und meine Weisheit weiterentwickeln?",
        tips: "Streben Sie nach Klarheit und Weisheit in Ihren Handlungen. Entwickeln Sie eine klare Vision für Ihre Zukunft."
    },
    // Fische (19. Februar – 20. März)
    {
        name: "Afrikanischer Lungenfisch",
        image: "/images/krafttier_lungenfisch.jpg",
        meaning: "Fische 1 (Afrika) Intuition, Sensibilität, Schutz.",
        meditation: "Wie kann ich meine Intuition und Sensibilität stärken?",
        tips: "Nutzen Sie Ihre Intuition, um kluge Entscheidungen zu treffen. Seien Sie sensibel und schützend gegenüber anderen."
    },
    {
        name: "Dugong",
        image: "/images/krafttier_dugong.jpg",
        meaning: "Fische 2 (Australien) Mitgefühl, Ruhe, Heilung.",
        meditation: "Wie kann ich mehr Mitgefühl und Ruhe in mein Leben bringen?",
        tips: "Seien Sie mitfühlend und ruhig in Ihren Handlungen. Nutzen Sie Ihre Fähigkeit zur Heilung, um anderen zu helfen."
    },
    {
        name: "Lachs",
        image: "/images/krafttier_lachs.jpg",
        meaning: "Fische 3 (Nordamerika) Spiritualität, Beständigkeit, Zielstrebigkeit.",
        meditation: "Wie kann ich meine Spiritualität und Beständigkeit weiterentwickeln?",
        tips: "Nutzen Sie Ihre Spiritualität, um inneren Frieden zu finden. Bleiben Sie beständig und zielstrebig in Ihren Bemühungen."
    },
    {
        name: "Kugelfisch",
        image: "/images/krafttier_kugelfisch.jpg",
        meaning: "Fische 4 (Asien) Fantasie, Kreativität, Anpassungsfähigkeit.",
        meditation: "Wie kann ich meine Fantasie und Kreativität stärken?",
        tips: "Nutzen Sie Ihre Fantasie, um kreative Lösungen zu finden. Seien Sie anpassungsfähig in neuen Situationen."
    },
    {
        name: "Seepferdchen",
        image: "/images/krafttier_seepferdchen.jpg",
        meaning: "Fische 5 (Europa) Hingabe, Treue, Zärtlichkeit.",
        meditation: "Wie kann ich meine Hingabe und Zärtlichkeit stärken?",
        tips: "Seien Sie treu und zärtlich in Ihren Beziehungen. Nutzen Sie Ihre Hingabe, um anderen zu helfen."
    },
    {
        name: "Amazonas-Manati",
        image: "/images/krafttier_amazonas-manati.jpg",
        meaning: "Fische 6 (Südamerika) Heilung, Sanftmut, Geduld.",
        meditation: "Wie kann ich meine Heilungsfähigkeiten und meine Geduld stärken?",
        tips: "Seien Sie sanft und geduldig in Ihren Handlungen. Nutzen Sie Ihre Fähigkeit zur Heilung, um anderen zu helfen."
    },
    {
        name: "Buckelwal",
        image: "/images/krafttier_buckelwal.jpg",
        meaning: "Fische 7 (Antarktis) Transzendenz, Weisheit, Harmonie.",
        meditation: "Wie kann ich meine Transzendenz und Weisheit weiterentwickeln?",
        tips: "Streben Sie nach innerer Harmonie und Weisheit. Nutzen Sie Ihre Fähigkeit zur Transzendenz, um spirituelles Wachstum zu erreichen."
    }
];

export default krafttierkarten;