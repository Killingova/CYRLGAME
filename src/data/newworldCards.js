const newworldCards = [
    {
      name: "1. Flüchtling / Bettler",
      image: "src/assets/images/fluechtling_bettler.jpg",
      meaning: "Anfang, Neubeginn, Einheit – der Mensch auf der Flucht, der nach Heimat und Integration sucht. Zugleich Symbol für Demut und einen Neubeginn – der Mensch auf der Suche nach Sicherheit und Würde.",
      meditation: "Wo finde ich Heimat, wenn alles Vertraute verloren scheint?",
      tips: "Bleiben Sie offen für Neuanfänge und akzeptieren Sie Unterstützung."
    },
    {
      name: "2. Arbeiter (Gig-Economy) / Helfer",
      image: "src/assets/images/arbeiter_helfer.jpg",
      meaning: "Dualität, Balance – Arbeit als Basis gesellschaftlicher Stabilität, aber auch Zwiespalt. Dienst und Flexibilität – moderne Arbeit zwischen Freiwilligkeit und Ausbeutung, Symbol für Mitgefühl.",
      meditation: "Wie wahre ich meine Würde in einem System schneller Jobs und ständiger Verfügbarkeit?",
      tips: "Setzen Sie klare Grenzen und achten Sie auf Ihre Bedürfnisse."
    },
    {
      name: "3. Konsument / Macher",
      image: "src/assets/images/konsument_macher.jpg",
      meaning: "Kreativität, Expansion – Konsumverhalten treibt Wachstum an, reflektiert die Schöpfungskraft der Wirtschaft. Wahlfreiheit und Materialismus – Konsum als Schöpfungskraft und Verschwendung zugleich.",
      meditation: "Was brauche ich wirklich, und wo liegt meine kreative Selbstverwirklichung?",
      tips: "Fokussieren Sie sich auf das Wesentliche und entwickeln Sie Ihre kreativen Fähigkeiten."
    },
    {
      name: "4. Influencer / Händler",
      image: "src/assets/images/influencer_haendler.jpg",
      meaning: "Stabilität, Reichweite – Digitale Präsenz (Viereck als Symbol digitaler Plattformen). Sichtbarkeit und Wert – digitale Meinungsbildung, Symbol für Austausch und Geschäft.",
      meditation: "Womit handle ich eigentlich: mit Produkten oder mit der Aufmerksamkeit der Menschen?",
      tips: "Reflektieren Sie Ihre wahren Absichten und bleiben Sie authentisch."
    },
    {
      name: "5. Aktivist / Idealist",
      image: "src/assets/images/aktivist_idealist.jpg",
      meaning: "Veränderung, Wandel – Aktivismus fordert gesellschaftlichen Wandel. Gesellschaftliches Gewissen, Symbol für Vision und Würde.",
      meditation: "Wie setze ich meine Überzeugungen mutig in Handlungen um?",
      tips: "Bleiben Sie konsequent und authentisch in Ihren Überzeugungen."
    },
    {
      name: "6. Unternehmer (Start-up) / Kämpfer",
      image: "src/assets/images/unternehmer_kaempfer.jpg",
      meaning: "Harmonie, Wachstum (6 als Zahl des Wachstums). Innovation und Risiko – Brückenbauer zwischen Vision und Realität, Symbol für Mut und Durchsetzungskraft.",
      meditation: "Wie finde ich Balance zwischen Gewinnstreben und Verantwortung?",
      tips: "Verlieren Sie nie die Balance zwischen Erfolg und Verantwortung."
    },
    {
      name: "7. Politiker / Leader",
      image: "src/assets/images/politiker_leader.jpg",
      meaning: "Kontrolle, Ordnung – (7 als Zahl von Macht und Weisheit) verweist auf politische Führung. Führung und Kompromiss – Machtbalance und Ideal, Symbol für Verantwortung und Einfluss.",
      meditation: "Kann ich führen, ohne meine Ideale zu opfern?",
      tips: "Führen Sie mit Integrität und bleiben Sie Ihren Überzeugungen treu."
    },
    {
      name: "8. Investor / Hüter",
      image: "src/assets/images/investor_hueter.jpg",
      meaning: "Materieller Erfolg (8 als Symbol für finanziellen Gewinn und Einfluss). Kapitalmacht und Ressourcenlenkung – Symbol für Gerechtigkeit und Schutz (oder Manipulation).",
      meditation: "Was treibt mein Handeln an: Profit oder eine bessere Zukunft?",
      tips: "Nutzen Sie Ihren Einfluss für das Wohl aller und nicht nur für den eigenen Gewinn."
    },
    {
      name: "9. Tech-Magnat (Digitaler Kaiser) / Hüter der Ordnung",
      image: "src/assets/images/tech_magnat.jpg",
      meaning: "Vollendung, Herrschaft – maximale Macht in der technologischen Ära. Digitale Vormacht, Datenhoheit – Systeme & Führung, Symbol für Macht im Tech-Zeitalter.",
      meditation: "Gestalte ich die Regeln oder werde ich von meinen eigenen Algorithmen beherrscht?",
      tips: "Bewahren Sie eine kritische Perspektive auf Ihre eigene Macht und Kontrolle."
    },
    {
      name: "10. Globale Elite (Das Netzwerk) / Der Weise",
      image: "src/assets/images/globale_elite.jpg",
      meaning: "Gesamtstruktur, Gesamtheit – Symbol für Kontrolle und Vernetzung. Globale Koordination, Metamacht – Spiritualität und Erkenntnis, Symbol für die Spitze der Weltordnung.",
      meditation: "Wie nutze ich meinen Einfluss zum Wohle aller und nicht nur weniger?",
      tips: "Nutzen Sie Ihre Macht für das Wohl der Gemeinschaft."
    },
    {
      name: "11. Algorithmus / Die Erzählerin",
      image: "src/assets/images/algorithmus_erzählerin.jpg",
      meaning: "Erleuchtung, Meisterzahl – Basiswissen, Tor zum digitalen Verständnis. Neue Sprache und Ordnungsprinzip – KI-Texter, Storytelling, Logik hinter digitalen Entscheidungen.",
      meditation: "Wer entscheidet, was ich sehe – und was ich nicht sehe?",
      tips: "Seien Sie kritisch gegenüber den digitalen Informationen, die Sie erhalten."
    },
    {
      name: "12. Künstliche Intelligenz / Die Sternguckerin",
      image: "src/assets/images/kuenstliche_intelligenz.jpg",
      meaning: "Ganzheit, kosmische Ordnung – KI als universelle Intelligenz. Die neue Muse – lernende Systeme, Spiegel menschlicher Kreativität und Grenzen.",
      meditation: "Was bleibt von mir, wenn die Maschine auch schöpfen kann?",
      tips: "Erforschen Sie das Potenzial von KI, aber bewahren Sie sich Ihre eigene Kreativität."
    },
    {
      name: "13. Datenfluss (Big Data) / Die Tänzerin",
      image: "src/assets/images/datenfluss_taenzerin.jpg",
      meaning: "Transformation – Die symbolische Kraft, welche Daten in Wissen verwandelt. Informationsströme – Vernetzung, Statistiken, kollektive Muster, Rhythmus des Digitalen.",
      meditation: "Bin ich ein Mensch oder nur ein Muster in der Statistik?",
      tips: "Lernen Sie, Ihre Daten zu verstehen und bewusst zu nutzen."
    },
    {
      name: "14. Blockchain / Die Liebende",
      image: "src/assets/images/blockchain_liebende.jpg",
      meaning: "Sicherheit, Balance – Stabilität durch dezentrale Ordnung, Vertrauen. Vertrauen neu definiert – Krypto, Smart Contracts, Transparenz in Beziehungen.",
      meditation: "Was bedeutet Wahrheit, wenn niemand mehr der Mitte traut?",
      tips: "Setzen Sie auf Transparenz und Vertrauen in Ihren Beziehungen."
    },
    {
      name: "15. Virtuelle Realität (Metaversum) / Die Sängerin",
      image: "src/assets/images/virtuelle_realitaet.jpg",
      meaning: "Kreative Dimension – VR erschafft neue, grenzenlose Realitäten. Illusionswelten, erweiterte Wahrnehmung, Klang & Frequenz.",
      meditation: "Wann bin ich mehr ich: in der Realität oder in der Simulation?",
      tips: "Nutzen Sie virtuelle Welten zur persönlichen Entfaltung, aber bleiben Sie geerdet."
    },
    {
      name: "16. Cybersecurity (Wächter der Daten) / Die Humoristin",
      image: "src/assets/images/cybersecurity_humoristin.jpg",
      meaning: "Schutz, Begrenzung – Zahl 16 (4x4) als Symbol umfassender Sicherheit. Integrität, Firewalls, Verschlüsselung – Ironie & Wahrheit.",
      meditation: "Was beschütze ich – und was verbirgt sich dahinter?",
      tips: "Achten Sie auf Ihre digitale Sicherheit und hinterfragen Sie die Wahrheiten, die Ihnen präsentiert werden."
    },
    {
      name: "17. Automatisierung (Neue Arbeitswelt) / Die Träumerin",
      image: "src/assets/images/automatisierung_traeumerin.jpg",
      meaning: "Evolution, Entwicklung – technologischer Fortschritt, Anpassung der Gesellschaft. Effizienz, Robotic Process Automation – neue Berufe, neue Träume.",
      meditation: "Was macht mich menschlich, wenn Maschinen schneller handeln?",
      tips: "Finden Sie Ihre menschliche Essenz inmitten des technologischen Fortschritts."
    },
    {
      name: "18. Drohne (Neue Perspektive) / Die Musikerin",
      image: "src/assets/images/drohne_musikerin.jpg",
      meaning: "Perspektivenwechsel – Übersicht und Distanz ermöglichen neue Sichtweisen. Schweben, Überwachen, Schwingung & Ordnung, Töne von oben.",
      meditation: "Was sehe ich aus der Ferne – und was verliere ich im Nahen?",
      tips: "Nutzen Sie verschiedene Perspektiven, um Ihre Wahrnehmung zu erweitern."
    },
    {
      name: "19. Robotik (Der neue Helfer) / Die Erinnernde",
      image: "src/assets/images/robotik_erinnernde.jpg",
      meaning: "Vollendung, Autonomie – Höhepunkt autonomer Maschinenentwicklung. Körperbauer, Assistenzsysteme – Mensch-Maschine-Beziehungen & Archive.",
      meditation: "Was heißt Nähe, wenn sie programmiert ist?",
      tips: "Reflektieren Sie, wie Technologie Ihre menschlichen Beziehungen beeinflusst."
    },
    {
      name: "20. Quantencomputer (Grenzenlose Möglichkeiten) / Der Lichtbringer",
      image: "src/assets/images/quantencomputer_lichtbringer.jpg",
      meaning: "Unbegrenzte Möglichkeiten – Zahl 20 als Schwelle zur neuen Ära. Paradoxien, Sprung ins Unbekannte – Klarheit & Inspiration, Schöpferkraft.",
      meditation: "Wenn alles gleichzeitig möglich ist – wofür entscheide ich mich?",
      tips: "Nutzen Sie die Unbegrenztheit der Möglichkeiten, aber wählen Sie bewusst Ihre Richtung."
    },
    {
      name: "21. Klima- & Umweltwissenschaft (Anthropozän) / Die Sprache",
      image: "src/assets/images/klima_umweltwissenschaft.jpg",
      meaning: "Zyklus, Verantwortung – Natürlicher Kreislauf und menschliche Pflicht. Bewusstsein für Erde und Wandel – Kommunikation als Schlüssel zum Überleben.",
      meditation: "Welche Worte wähle ich, um den Planeten zu schützen?",
      tips: "Achten Sie auf die Sprache, die Sie in Bezug auf den Umweltschutz verwenden."
    },
    {
      name: "22. Genetik & Bioengineering (Leben neu definieren) / Der Denker",
      image: "src/assets/images/genetik_bioengineering.jpg",
      meaning: "Meisterzahl, Schöpfung – Kontrolle über das Leben selbst. Biologische Gestaltungskraft – Logik & Struktur der Gene, ethische Grenzen.",
      meditation: "Darf ich alles tun, was möglich ist?",
      tips: "Reflektieren Sie die ethischen Dimensionen Ihrer Entscheidungen."
    },
    {
      name: "23. Weltraumforschung (Expansion der Menschheit) / Die Stimme",
      image: "src/assets/images/weltraumforschung.jpg",
      meaning: "Expansion, Freiheit – Erweiterung der menschlichen Grenzen. Entdeckung, Marsmission – Wirkung & Resonanz in kosmischen Dimensionen.",
      meditation: "Wohin führt unsere Sehnsucht nach dem Unbekannten?",
      tips: "Verfolgen Sie Ihre Träume und erweitern Sie Ihre Horizonte."
    },
    {
      name: "24. Energiewende (Die neue Geometrie der Macht) / Die Form",
      image: "src/assets/images/energiewende.jpg",
      meaning: "Neuordnung, Struktur – Aufbau einer neuen Energiewirtschaft. Nachhaltige Ressourcen, Muster und Wandel.",
      meditation: "Welche Form soll unsere Zukunft annehmen?",
      tips: "Denken Sie nachhaltig und gestalten Sie mit Bedacht."
    },
    {
      name: "25. Nachhaltige Ökonomie (Arithmetik des Wachstums) / Die Zahl",
      image: "src/assets/images/nachhaltige_oekonomie.jpg",
      meaning: "Balance, Harmonie (5²) – Gleichgewicht zwischen Wirtschaft und Umwelt. Mathematik & Ordnung – kann endloses Wachstum nachhaltig sein?",
      meditation: "Kann endloses Wachstum jemals nachhaltig sein?",
      tips: "Streben Sie nach einem Gleichgewicht zwischen Erfolg und Verantwortung."
    },
    {
      name: "26. Medizintechnik (Musik des Lebens) / Der Ton",
      image: "src/assets/images/medizintechnik.jpg",
      meaning: "Heilung, Genesung – Innovation zur Gesundung der Menschheit. Harmonie im Körper, technologischer Eingriff.",
      meditation: "Wie kann Technik uns helfen, ohne uns zu entseelen?",
      tips: "Nutzen Sie die Technologie für Heilung und nicht zur Entfremdung."
    },
    {
      name: "27. Psychologie & Mental Health (Innere Welt) / Das Bild",
      image: "src/assets/images/psychologie_mental_health.jpg",
      meaning: "Innere Weisheit (3³) – Ergründung der menschlichen Seele. Selbstverstehen, Vision & Gestaltung unseres Inneren.",
      meditation: "Wie male ich mein inneres Bild – und mit welchen Farben?",
      tips: "Finden Sie Frieden in Ihrem Inneren durch Selbstreflexion."
    },
    {
      name: "28. Bildung & lebenslanges Lernen (Weisheit der Zukunft) / Die Frage",
      image: "src/assets/images/bildung_lebenslanges_lernen.jpg",
      meaning: "Zyklus (4x7) – lebenslanger, wiederkehrender Lernprozess. Offenes Denken, Philosophie & Zweifel als Entfaltung des Geistes.",
      meditation: "Welche Fragen stelle ich, um wirklich zu lernen?",
      tips: "Seien Sie offen für Neues und nutzen Sie den Lernprozess als Wachstumsquelle."
    },
    {
      name: "29. Medien & Kommunikation (Die neue Wahrheit) / Die Verbindung",
      image: "src/assets/images/medien_kommunikation.jpg",
      meaning: "Wahrheit, Offenbarung (2+9=11) – Suche nach Authentizität im digitalen Zeitalter. Austausch, globale Verständigung, digitale Vernetzung.",
      meditation: "Wem vertraue ich meine Wahrheit an?",
      tips: "Achten Sie darauf, wem Sie Ihre Wahrheit mitteilen und bleiben Sie authentisch."
    },
    {
      name: "30. Ethik & Philosophie (Moral im digitalen Zeitalter) / Der Glaube",
      image: "src/assets/images/ethik_philosophie.jpg",
      meaning: "Vollständigkeit, geistige Reife – Kulmination geistiger und ethischer Reflexion. Weisheit, Urteilskraft – Spiritualität & Vertrauen als moralischer Kompass.",
      meditation: "Woran glaube ich, wenn alle Sicherheiten wanken?",
      tips: "Finden Sie ethische Klarheit und stehen Sie zu Ihren Prinzipien."
    },
    {
      name: "31. Diversität (Vielfalt als Stärke) / Das innere Feuer",
      image: "src/assets/images/diversitaet_innere_feuer.jpg",
      meaning: "Neuer Anfang (30+1) – Vielfalt als Beginn neuer sozialer Realität. Lebensenergie durch Verschiedenheit – Kraft der Unterschiede.",
      meditation: "Wo könnte mir eine andere Perspektive das Feuer entfachen?",
      tips: "Feiern Sie die Vielfalt und lassen Sie sich von neuen Perspektiven inspirieren."
    },
    {
      name: "32. Transparenz (Das Auge der Gesellschaft) / Der Rhythmus der Zeit",
      image: "src/assets/images/transparenz_auge_gesellschaft.jpg",
      meaning: "Offenbarung (8x4) – Enthüllung von Wahrheiten und Strukturen. Jetzt und Wandel als Taktgeber des Fortschritts.",
      meditation: "Was halte ich verborgen, obwohl es gesehen werden müsste?",
      tips: "Setzen Sie auf Klarheit und Offenheit, um den Wandel zu fördern."
    },
    {
      name: "33. Globale Vernetzung (Verbundenheit der Welt) / Der Herzschlag der Erde",
      image: "src/assets/images/globale_vernetzung.jpg",
      meaning: "Meisterzahl (11x3) – Verbindung, spirituelle und weltliche Einheit. Gemeinsamkeit, Puls des Planeten – Symbiose von Mensch und Natur.",
      meditation: "Was verbindet uns alle jenseits von Sprache und Grenzen?",
      tips: "Fördern Sie das globale Verständnis und die Zusammenarbeit."
    },
    {
      name: "34. Nachhaltigkeit (Mäßigung des Verbrauchs) / Balance",
      image: "src/assets/images/nachhaltigkeit_balance.jpg",
      meaning: "Balance (3+4=7) – Ausgleich als Basis für dauerhafte Existenz. Sorgfältiger Umgang mit Ressourcen, Mitte finden.",
      meditation: "Wann ist genug wirklich genug?",
      tips: "Finden Sie den richtigen Ausgleich und achten Sie auf Ihre Ressourcen."
    },
    {
      name: "35. Resilienz (Klugheit der Anpassung) / Intuition",
      image: "src/assets/images/resilienz_intuition.jpg",
      meaning: "Flexibilität (5x7) – Anpassung und Beharrlichkeit. Innere Stärke, Spüren der Grenzen in Krisenzeiten.",
      meditation: "Höre ich auf meine innere Stimme, wenn es eng wird?",
      tips: "Hören Sie auf Ihre Intuition, um in schwierigen Zeiten standhaft zu bleiben."
    },
    {
      name: "36. Innovation (Tapferkeit des Neuen) / Mut",
      image: "src/assets/images/innovation_mut.jpg",
      meaning: "Dynamik (6²) – Ausdruck kreativer Kraft und Fortschritt. Neues wagen, Pionier- und Erfindergeist.",
      meditation: "Wo macht mich die Angst klein – und wie sprenge ich meine Ketten?",
      tips: "Ergreifen Sie die Chancen und lassen Sie sich nicht von Ängsten bremsen."
    },
    {
      name: "37. Gerechtigkeit (Fairness im globalen Maßstab) / Gerechtigkeit",
      image: "src/assets/images/gerechtigkeit_fairness.jpg",
      meaning: "Integrität (3+7=10) – Symbol moralischer Vollkommenheit. Ethik, Fairness, Gleichgewicht als universaler Grundsatz.",
      meditation: "Wie würde eine Welt aussehen, in der alle Stimmen gehört werden?",
      tips: "Setzen Sie sich für Gerechtigkeit und Fairness in allen Bereichen ein."
    },
    {
      name: "38. Solidarität (Neue Nächstenliebe) / Liebe",
      image: "src/assets/images/solidaritaet_liebe.jpg",
      meaning: "Gemeinschaft (3+8=11) – Meisterzahl für Zusammenhalt und Mitgefühl. Mitgefühl, Verbundenheit – Handeln für das Wohl aller.",
      meditation: "Wann habe ich zuletzt selbstlos unterstützt – und wie hat es sich angefühlt?",
      tips: "Unterstützen Sie andere aus echter Nächstenliebe und Verbundenheit."
    },
    {
      name: "39. Hoffnung (Optimismus als Motor) / Hoffnung",
      image: "src/assets/images/hoffen_optimismus.jpg",
      meaning: "Optimismus (3x13) – positive Transformation durch Visionen. Licht und Zukunftsvision als innere Kraftquelle.",
      meditation: "Welche Vorstellung meiner Zukunft ermutigt mich heute?",
      tips: "Lassen Sie sich von Ihrer Hoffnung leiten, um positive Veränderungen zu bewirken."
    },
    {
      name: "40. Empathie (Mitgefühl als Schlüssel) / Vertrauen",
      image: "src/assets/images/empathie_vertrauen.jpg",
      meaning: "Innere Vollendung (4x10) – tiefes Verständnis des Menschlichen. Glaube an das Gute, echtes Einfühlungsvermögen.",
      meditation: "Wie kann ich mich öffnen, ohne meine Grenzen zu verlieren?",
      tips: "Seien Sie offen und empathisch, ohne sich selbst aufzugeben."
    },
    {
      name: "41. Internet (Neue Mondkraft – digitale Realität) / Mond",
      image: "src/assets/images/internet_mondkraft.jpg",
      meaning: "Globale Verbindung (4+1=5) – transformative Kraft. Emotion & Intuition im Netz, Spiegelung globaler Stimmungen.",
      meditation: "Was sagt der digitale Mond über mein inneres Licht?",
      tips: "Verstehen Sie die emotionale Dimension der digitalen Welt und deren Einfluss auf Ihre Wahrnehmung."
    },
    {
      name: "42. Soziale Medien (Merkurs neuer Flügel) / Merkur",
      image: "src/assets/images/soziale_medien_merkur.jpg",
      meaning: "Kommunikation (6x7) – Allgegenwärtigkeit sozialer Vernetzung. Rasante Verbreitung von Information und Lernlust.",
      meditation: "Welche Botschaften trage ich in die Welt – und welche bleiben ungesagt?",
      tips: "Nutzen Sie soziale Medien verantwortungsvoll, um echte Verbindungen zu schaffen."
    },
    {
      name: "43. Globale Kulturindustrie (Venus' Reich der Schönheit) / Venus",
      image: "src/assets/images/globale_kulturindustrie.jpg",
      meaning: "Schöpfung (4+3=7) – kulturelle, globale Gestaltungsmacht. Ästhetik, Beziehung, Entertainment & Beeinflussung.",
      meditation: "Was ist echte Schönheit – und was nur Inszenierung?",
      tips: "Sehen Sie die wahre Schönheit jenseits von oberflächlichen Darstellungen."
    },
    {
      name: "44. Digitale Plattformen (Sonne – Zentrum neuer Macht) / Sonne",
      image: "src/assets/images/digitale_plattformen.jpg",
      meaning: "Herrschaft, Stabilität (4x11) – Meisterzahl der digitalen Macht. Strahlkraft, Klarheit – globale Reichweite und Abhängigkeit.",
      meditation: "Woher beziehe ich meine Energie – aus eigener Kraft oder aus Likes?",
      tips: "Sehen Sie digitale Reichweite als Werkzeug, um echte Verbindungen zu schaffen."
    },
    {
      name: "45. Militärisch-industrieller Komplex (Mars' modernes Schild) / Mars",
      image: "src/assets/images/militaer_industrie.jpg",
      meaning: "Macht & Dominanz (9x5) – Gewalt und Kontrolle. Wille und Handlung – Konflikt und Verteidigung in Hightechform.",
      meditation: "Welche Kämpfe trage ich aus – und welchen gehe ich aus dem Weg?",
      tips: "Überdenken Sie, welche Konflikte wirklich Ihre Energie wert sind."
    },
    {
      name: "46. Globaler Finanzmarkt (Jupiters neues Imperium) / Jupiter",
      image: "src/assets/images/globaler_finanzmarkt.jpg",
      meaning: "Reichtum, Expansion (4+6=10) – materielle Herrschaft der Weltordnung. Wachstum & Sinn – Kapitalströme, Wohlstand, Macht.",
      meditation: "Woran messe ich den wahren Wert meines Lebens?",
      tips: "Setzen Sie Ihren Fokus auf Werte und nicht nur auf materiellen Reichtum."
    },
    {
      name: "47. Geopolitische Rivalität (Saturns Begrenzung & Konflikt) / Saturn",
      image: "src/assets/images/geopolitische_rivalitaet.jpg",
      meaning: "Konflikt & Begrenzung (4+7=11) – Meisterzahl, dualistische Spannung. Struktur & Verantwortung – Grenzen, Krisen, Machtspiele.",
      meditation: "Wann führt Rivalität zu Fortschritt – und wann zu Zerstörung?",
      tips: "Setzen Sie sich für Diplomatie und langfristigen Frieden ein."
    },
    {
      name: "48. Multinationale Organisationen (Achte Sphäre – Vereinte Nationen & Co.) / Sternenraum",
      image: "src/assets/images/multinationale_organisationen.jpg",
      meaning: "Organisation (4x12) – strukturelle, globale Vernetzung. Unendlichkeit & Seele – überstaatliche Einigung.",
      meditation: "Wie vereinen wir eine Welt voller Unterschiede in Frieden?",
      tips: "Arbeiten Sie an globaler Zusammenarbeit und Friedensförderung."
    },
    {
      name: "49. Virtuelle globale Gesellschaft (Primum Mobile – digitale Sphäre) / Bewegung der Welten",
      image: "src/assets/images/virtuelle_globale_gesellschaft.jpg",
      meaning: "Vollendung & Transformation (7x7) – neue Realität menschlicher Existenz. Wandel, Vernetzung und allumfassende Dynamik.",
      meditation: "Bin ich bereit, mich ständig neu zu erfinden?",
      tips: "Öffnen Sie sich für die Veränderungen der digitalen Welt."
    },
    {
      name: "50. Die Quelle (Einheit & Ursprung) / Die Quelle",
      image: "src/assets/images/die_quelle.jpg",
      meaning: "Ultimative menschliche Vollkommenheit (5x10) – höchster Ausdruck evolutionärer Entwicklung & spiritueller Erfüllung. Symbol für höchste Einheit und kosmische Verbundenheit.",
      meditation: "Wenn alles eins ist – was trennt uns noch?",
      tips: "Erkennen Sie die Einheit in allem und leben Sie in Harmonie mit der Welt."
    }
  ];
  export default newworldCards;