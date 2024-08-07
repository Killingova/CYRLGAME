const engelkarten = [
    { 
      name: "Nemamiah", 
      image: "/images/engel_nemamiah.jpg", 
      meaning: "Kann die Ursache Ihrer tiefsten Probleme aufdecken.",
      meditation: "Welche tiefen Probleme belasten mich?",
      tips: "Seien Sie bereit, sich Ihren tiefsten Problemen zu stellen und Lösungen zu finden."
    },
    { 
      name: "Yeialel", 
      image: "/images/engel_yeialel.jpg", 
      meaning: "Hilft Ihnen, Ihre psychischen Fähigkeiten wie Hellsehen und Klarheit zu entwickeln.",
      meditation: "Wie kann ich meine psychischen Fähigkeiten verbessern?",
      tips: "Üben Sie regelmäßig, um Ihre psychischen Fähigkeiten zu stärken."
    },
    { 
      name: "Harahel", 
      image: "/images/engel_harahel.jpg", 
      meaning: "Sein Hauptziel ist es, Ihnen zu helfen, Ihre Träume zu verwirklichen.",
      meditation: "Welche Träume möchte ich verwirklichen?",
      tips: "Setzen Sie sich klare Ziele und arbeiten Sie kontinuierlich daran."
    },
    { 
      name: "Mitzrael", 
      image: "/images/engel_mitzrael.jpg", 
      meaning: "Korrigiert Ihre Fehler und führt Sie dazu, die Bedeutung von Gehorsam und Autorität zu verstehen.",
      meditation: "Welche Fehler muss ich korrigieren?",
      tips: "Lernen Sie aus Ihren Fehlern und respektieren Sie Autoritäten."
    },
    { 
      name: "Umabel", 
      image: "/images/engel_umabel.jpg", 
      meaning: "Es gibt Ihnen ein tiefes Bewusstsein für das Leben und bietet bei Bedarf Konzentration und Verständnis.",
      meditation: "Wie kann ich mein Leben besser verstehen?",
      tips: "Nehmen Sie sich Zeit für Selbstreflexion und suchen Sie nach innerem Verständnis."
    },
    { 
      name: "Iahhel", 
      image: "/images/engel_iahhel.jpg", 
      meaning: "Stärken Sie Ihre positiven, konstruktiven Gedanken und lehren Sie, Einsamkeit und Ruhe zu genießen.",
      meditation: "Wie kann ich positive Gedanken fördern?",
      tips: "Praktizieren Sie Achtsamkeit und genießen Sie die Stille."
    },
    { 
      name: "Anauel", 
      image: "/images/engel_anauel.jpg", 
      meaning: "Ermöglicht den Erfolg der Kommunikation und der Beziehungen zu anderen.",
      meditation: "Wie kann ich meine Kommunikationsfähigkeiten verbessern?",
      tips: "Arbeiten Sie daran, klar und effektiv zu kommunizieren."
    },
    { 
      name: "Mehiel", 
      image: "/images/engel_mehiel.jpg", 
      meaning: "Fördert Vorstellungskraft, Intelligenz und Verständnis. Ein großartiger Verbündeter gegen dunkle Energien und Kräfte.",
      meditation: "Wie kann ich meine Vorstellungskraft und Intelligenz nutzen?",
      tips: "Nutzen Sie Ihre kreativen Fähigkeiten und schützen Sie sich vor negativen Einflüssen."
    },
    { 
      name: "Damabiah", 
      image: "/images/engel_damabiah.jpg", 
      meaning: "Er ist derjenige, der jedem, der zu ihm kommt, bedingungslose Liebe schenkt.",
      meditation: "Wie kann ich bedingungslose Liebe in mein Leben integrieren?",
      tips: "Öffnen Sie Ihr Herz und zeigen Sie Liebe und Mitgefühl für andere."
    },
    { 
      name: "Manakel", 
      image: "/images/engel_manakel.jpg", 
      meaning: "Beseitigt Ängste durch Verständnis und Transformation.",
      meditation: "Welche Ängste muss ich überwinden?",
      tips: "Arbeiten Sie daran, Ihre Ängste zu verstehen und sie in Stärke umzuwandeln."
    },
    { 
      name: "Eiael", 
      image: "/images/engel_eiael.jpg", 
      meaning: "Führt Sie zu guten Entscheidungen und unterstützt Sie, wenn Sie das Gefühl haben, dass alles verloren ist.",
      meditation: "Welche Entscheidungen muss ich treffen?",
      tips: "Vertrauen Sie Ihrem inneren Kompass und suchen Sie nach Weisheit in schwierigen Zeiten."
    },
    { 
      name: "Habuhiah", 
      image: "/images/engel_habuhiah.jpg", 
      meaning: "Es ist das Muster von medizinischen Therapien sowie spirituellen oder metaphysischen Behandlungen.",
      meditation: "Wie kann ich Heilung in mein Leben bringen?",
      tips: "Suchen Sie nach Wegen zur körperlichen und spirituellen Heilung."
    },
    { 
      name: "Rochel", 
      image: "/images/engel_rochel.jpg", 
      meaning: "Er ist dafür verantwortlich, jedem Menschen das zu geben, was er verdient. Symbol für Gerechtigkeit und Gerechtigkeit.",
      meditation: "Wie kann ich Gerechtigkeit in meinem Leben fördern?",
      tips: "Setzen Sie sich für Fairness und Gerechtigkeit in all Ihren Handlungen ein."
    },
    { 
      name: "Jabamiah", 
      image: "/images/engel_jabamiah.jpg", 
      meaning: "Liefert Heilenergie in dein Leben. Hat die Fähigkeit, sich zu regenerieren, zu heilen, zu revitalisieren und die Harmonie wiederherzustellen.",
      meditation: "Wie kann ich Heilung und Harmonie in mein Leben bringen?",
      tips: "Praktizieren Sie Selbstheilung und fördern Sie Harmonie in Ihrem Umfeld."
    },
    { 
      name: "Haiaiel", 
      image: "/images/engel_haiaiel.jpg", 
      meaning: "Gibt uns göttlichen Schutz und hilft uns, gerechte und richtige Entscheidungen zu treffen.",
      meditation: "Wie kann ich göttlichen Schutz in meinem Leben fühlen?",
      tips: "Vertrauen Sie auf göttlichen Schutz und treffen Sie Entscheidungen, die mit Ihren moralischen Werten übereinstimmen."
    },
    { 
      name: "Mumiah", 
      image: "/images/engel_mumiah.jpg", 
      meaning: "Hilft bei schwierigen Aufgaben und gibt uns die nötige Energie, um neue zu beginnen.",
      meditation: "Welche schwierigen Aufgaben stehen vor mir?",
      tips: "Seien Sie bereit, neue Herausforderungen anzunehmen und nutzen Sie Ihre innere Stärke."
    },
    { 
      name: "Vehuiah", 
      image: "/images/engel_vehuiah.jpg", 
      meaning: "Führt uns zu unserem Schicksal. Verschenkt Energien, wenn wir sie am dringendsten brauchen.",
      meditation: "Wie kann ich meinem Schicksal näher kommen?",
      tips: "Seien Sie offen für die Führung Ihres Schicksals und nutzen Sie die Energie, die Ihnen zur Verfügung steht."
    },
    { 
      name: "Jeliel", 
      image: "/images/engel_jeliel.jpg", 
      meaning: "Bietet Liebe und Weisheit in unserem Leben. Ihre Mission ist es, Liebe in all ihren Formen zu verbreiten.",
      meditation: "Wie kann ich mehr Liebe und Weisheit in mein Leben bringen?",
      tips: "Verbreiten Sie Liebe und suchen Sie nach Weisheit in Ihren täglichen Aktivitäten."
    },
    { 
      name: "Sitael", 
      image: "/images/engel_sitael.jpg", 
      meaning: "Seine Mission ist es, uns zu helfen, Erfolg zu haben und unsere Träume zu erfüllen.",
      meditation: "Welche Träume möchte ich verwirklichen?",
      tips: "Arbeiten Sie kontinuierlich an Ihren Zielen und suchen Sie nach Wegen, Erfolg zu haben."
    },
    { 
      name: "Elemiah", 
      image: "/images/engel_elemiah.jpg", 
      meaning: "Du kannst zu ihm gehen, wann immer du wissen musst, was der richtige Weg in deinem Leben ist.",
      meditation: "Welchen Weg soll ich in meinem Leben einschlagen?",
      tips: "Vertrauen Sie Ihrem inneren Kompass und suchen Sie nach dem richtigen Weg für Ihr Leben."
    },
    { 
      name: "Mahasiah", 
      image: "/images/engel_mahasiah.jpg", 
      meaning: "Er ist der Führer und Assistent der Schüler.",
      meditation: "Wie kann ich meine Lernfähigkeiten verbessern?",
      tips: "Seien Sie offen für neues Wissen und suchen Sie nach Wegen, Ihre Lernfähigkeiten zu verbessern."
    },
    { 
      name: "Lelahel", 
      image: "/images/engel_lelahel.jpg", 
      meaning: "Löst alle Ihre Zweifel und lehrt uns, nach innen zu schauen.",
      meditation: "Welche Zweifel belasten mich?",
      tips: "Suchen Sie nach innerer Klarheit und lösen Sie Ihre Zweifel auf."
    },
    { 
      name: "Aciaiah", 
      image: "/images/engel_aciaiah.jpg", 
      meaning: "Gewährt heilige Geduld, wenn wir schwierige Zeiten in unserem Leben durchmachen.",
      meditation: "Wie kann ich mehr Geduld in schwierigen Zeiten entwickeln?",
      tips: "Üben Sie sich in Geduld und Vertrauen, dass schwierige Zeiten vorübergehen."
    },
    { 
      name: "Cahetel", 
      image: "/images/engel_cahetel.jpg", 
      meaning: "Ist der Engel der Veränderungen im Leben. Rufen Sie ihn auf, wenn Sie echte Veränderungen benötigen.",
      meditation: "Welche Veränderungen brauche ich in meinem Leben?",
      tips: "Seien Sie offen für Veränderungen und begrüßen Sie sie mit einem offenen Herzen."
    },
    { 
      name: "Haziel", 
      image: "/images/engel_haziel.jpg", 
      meaning: "Bringt Vergebung und Versöhnung in Ihr Leben.",
      meditation: "Wie kann ich Vergebung und Versöhnung in mein Leben bringen?",
      tips: "Arbeiten Sie an Vergebung und suchen Sie nach Wegen, sich mit anderen zu versöhnen."
    },
    { 
      name: "Aladiah", 
      image: "/images/engel_aladiah.jpg", 
      meaning: "Er ist Träger zweiter Chancen und hat eine heilende Fähigkeit.",
      meditation: "Welche zweite Chance brauche ich?",
      tips: "Nutzen Sie die Gelegenheit für eine zweite Chance und arbeiten Sie daran, vergangene Fehler zu korrigieren."
    },
    { 
      name: "Laoviah", 
      image: "/images/engel_laoviah.jpg", 
      meaning: "Hilft dabei, Ihre Intuition in der irdischen und spirituellen Welt zu entwickeln.",
      meditation: "Wie kann ich meine Intuition besser nutzen?",
      tips: "Vertrauen Sie Ihrer Intuition und suchen Sie nach Wegen, sie in Ihrem täglichen Leben zu integrieren."
    },
    { 
      name: "Hahaiah", 
      image: "/images/engel_hahaiah.jpg", 
      meaning: "Lehrt dich, dich selbst zu lieben und zu meditieren.",
      meditation: "Wie kann ich Selbstliebe entwickeln?",
      tips: "Praktizieren Sie Selbstliebe und suchen Sie nach Wegen, sich selbst besser zu verstehen."
    },
    { 
      name: "Lezalel", 
      image: "/images/engel_lezalel.jpg", 
      meaning: "Bringt Versöhnung und Affinität, wenn Sie Probleme in einer Beziehung haben.",
      meditation: "Wie kann ich Versöhnung in meine Beziehungen bringen?",
      tips: "Arbeiten Sie an Versöhnung und suchen Sie nach Wegen, Ihre Beziehungen zu verbessern."
    },
    { 
      name: "Mebahel", 
      image: "/images/engel_mebahel.jpg", 
      meaning: "Er ist der große Beschützer von Wahrheit, Gerechtigkeit, Freiheit und Engagement.",
      meditation: "Wie kann ich Wahrheit und Gerechtigkeit fördern?",
      tips: "Setzen Sie sich für Wahrheit und Gerechtigkeit in all Ihren Handlungen ein."
    },
    { 
      name: "Hariel", 
      image: "/images/engel_hariel.jpg", 
      meaning: "Hilft Menschen, Abhängigkeiten und Abhängigkeiten loszuwerden.",
      meditation: "Welche Abhängigkeiten muss ich loswerden?",
      tips: "Arbeiten Sie daran, Ihre Abhängigkeiten zu überwinden und suchen Sie nach Wegen, sich zu befreien."
    },
    { 
      name: "Hakamiah", 
      image: "/images/engel_hakamiah.jpg", 
      meaning: "Lehrt und bietet Loyalität nach göttlichen Prinzipien.",
      meditation: "Wie kann ich Loyalität in mein Leben integrieren?",
      tips: "Seien Sie loyal und treu zu Ihren Prinzipien und Werten."
    },
    { 
      name: "Lauviah", 
      image: "/images/engel_lauviah.jpg", 
      meaning: "Er ist der Engel des Sieges und erfolgreicher Menschen.",
      meditation: "Wie kann ich Sieg und Erfolg in mein Leben bringen?",
      tips: "Setzen Sie sich Ziele und arbeiten Sie kontinuierlich daran, erfolgreich zu sein."
    },
    { 
      name: "Caliel", 
      image: "/images/engel_caliel.jpg", 
      meaning: "Hilft uns, die Unterschiede zwischen Gut und Böse zu verstehen.",
      meditation: "Wie kann ich Gut und Böse besser unterscheiden?",
      tips: "Reflektieren Sie Ihre Handlungen und suchen Sie nach Wegen, ethisch zu handeln."
    },
    { 
      name: "Leuviah", 
      image: "/images/engel_leuviah.jpg", 
      meaning: "Rettet die Erinnerungen an deine vergangenen Leben.",
      meditation: "Welche Erinnerungen aus meinen vergangenen Leben beeinflussen mich?",
      tips: "Arbeiten Sie daran, Ihre vergangenen Erinnerungen zu verstehen und nutzen Sie sie, um in Ihrem jetzigen Leben zu wachsen."
    },
    { 
      name: "Pahaliah", 
      image: "/images/engel_pahaliah.jpg", 
      meaning: "Er ist der Engel derer, die altes und schlechtes Benehmen loswerden wollen.",
      meditation: "Welches alte und schlechte Benehmen muss ich loswerden?",
      tips: "Arbeiten Sie daran, schlechtes Verhalten zu ändern und neue, positive Gewohnheiten zu entwickeln."
    },
    { 
      name: "Nelchael", 
      image: "/images/engel_nelchael.jpg", 
      meaning: "Er ist der Engel derer, die den brennenden Wunsch haben zu lernen.",
      meditation: "Wie kann ich meinen Wissensdurst stillen?",
      tips: "Suchen Sie nach Wegen, Ihr Wissen zu erweitern und kontinuierlich zu lernen."
    },
    { 
      name: "Leiel", 
      image: "/images/engel_leiel.jpg", 
      meaning: "Vermittelt Ordnung und Disziplin für diejenigen, die es am dringendsten brauchen.",
      meditation: "Wie kann ich mehr Ordnung und Disziplin in mein Leben bringen?",
      tips: "Arbeiten Sie daran, disziplinierter zu werden und Ordnung in Ihr Leben zu bringen."
    },
    { 
      name: "Melahel", 
      image: "/images/engel_melahel.jpg", 
      meaning: "Hat die Fähigkeit zu heilen und schützt daher Ärzte und alle, die sich für die Heilung anderer einsetzen.",
      meditation: "Wie kann ich Heilung in mein Leben und das Leben anderer bringen?",
      tips: "Setzen Sie sich für die Heilung ein und suchen Sie nach Wegen, anderen zu helfen."
    },
    { 
      name: "Hahuiah", 
      image: "/images/engel_hahuiah.jpg", 
      meaning: "Verleiht den zu dieser Zeit Geborenen die Tugend der Aufrichtigkeit und Wahrheit.",
      meditation: "Wie kann ich aufrichtiger und wahrhaftiger sein?",
      tips: "Arbeiten Sie daran, in allen Aspekten Ihres Lebens aufrichtig und ehrlich zu sein."
    },
    { 
      name: "Nith-Haiah", 
      image: "/images/engel_nith_haiah.jpg", 
      meaning: "Lehrt, geistige Kräfte richtig zu verstehen und anzuwenden.",
      meditation: "Wie kann ich meine geistigen Kräfte richtig nutzen?",
      tips: "Suchen Sie nach Wegen, Ihre geistigen Kräfte zu verstehen und positiv anzuwenden."
    },
    { 
      name: "Haaiah", 
      image: "/images/engel_haaiah.jpg", 
      meaning: "Bewahrt die Geheimnisse auf, die nicht enthüllt werden sollten.",
      meditation: "Welche Geheimnisse muss ich bewahren?",
      tips: "Seien Sie vertrauenswürdig und bewahren Sie Geheimnisse, die Ihnen anvertraut wurden."
    },
    { 
      name: "Ierathel", 
      image: "/images/engel_ierathel.jpg", 
      meaning: "Er ist der Propagator des göttlichen Lichts.",
      meditation: "Wie kann ich das göttliche Licht in meinem Leben verbreiten?",
      tips: "Suchen Sie nach Wegen, das göttliche Licht in Ihrem täglichen Leben zu verbreiten und andere zu inspirieren."
    },
    { 
      name: "Séheiah", 
      image: "/images/engel_seheiah.jpg", 
      meaning: "Schützt Sie vor Unfällen, Stürzen, Blitzen, Feuer oder Krankheiten.",
      meditation: "Wie kann ich göttlichen Schutz in meinem Leben erfahren?",
      tips: "Vertrauen Sie auf göttlichen Schutz und suchen Sie nach Wegen, sich vor Unfällen und Krankheiten zu schützen."
    },
    { 
      name: "Reiiel", 
      image: "/images/engel_reiiel.jpg", 
      meaning: "Ist in der Lage, uns von jeder bösen Macht und Zauberei zu befreien.",
      meditation: "Wie kann ich mich von bösen Mächten und Zauberei schützen?",
      tips: "Suchen Sie nach Wegen, sich spirituell zu schützen und negative Energien abzuwehren."
    },
    { 
      name: "Omael", 
      image: "/images/engel_omael.jpg", 
      meaning: "Hilft Ihnen dabei, Projekte zu erstellen, Ihre Träume zu erweitern und sie zu verwirklichen.",
      meditation: "Welche Projekte und Träume möchte ich verwirklichen?",
      tips: "Arbeiten Sie kontinuierlich an Ihren Projekten und suchen Sie nach Wegen, Ihre Träume zu realisieren."
    },
    { 
      name: "Lecabel", 
      image: "/images/engel_lecabel.jpg", 
      meaning: "Menschen, die unter seinem Schutz stehen, werden versuchen, in ihrem Leben Vollkommenheit zu erreichen.",
      meditation: "Wie kann ich Vollkommenheit in meinem Leben erreichen?",
      tips: "Streben Sie nach Perfektion in Ihren Bemühungen und suchen Sie nach Wegen, sich kontinuierlich zu verbessern."
    },
    { 
      name: "Vasariah", 
      image: "/images/engel_vasariah.jpg", 
      meaning: "Bietet Weisheit zum Nachdenken und zur Lösung von Problemen.",
      meditation: "Wie kann ich Weisheit nutzen, um meine Probleme zu lösen?",
      tips: "Reflektieren Sie Ihre Herausforderungen und suchen Sie nach weisen Lösungen."
    },
    { 
      name: "Yehuiah", 
      image: "/images/engel_yehuiah.jpg", 
      meaning: "Lehrt die Vorteile der Zusammenarbeit im Team und der einfachen Zusammenarbeit mit anderen.",
      meditation: "Wie kann ich besser im Team zusammenarbeiten?",
      tips: "Arbeiten Sie an Ihren Teamfähigkeiten und suchen Sie nach Wegen, effektiv mit anderen zusammenzuarbeiten."
    },
    { 
      name: "Lehahiah", 
      image: "/images/engel_lehahiah.jpg", 
      meaning: "Diejenigen, die unter seinem Zeichen geboren wurden, werden den Gesetzen Gottes folgen, auch wenn sie sie nicht verstehen.",
      meditation: "Wie kann ich den Gesetzen Gottes besser folgen?",
      tips: "Vertrauen Sie auf göttliche Führung und suchen Sie nach Wegen, die göttlichen Gesetze in Ihrem Leben zu integrieren."
    },
    { 
      name: "Chavakiah", 
      image: "/images/engel_chavakiah.jpg", 
      meaning: "Ist der Engel der Versöhnung schlechthin.",
      meditation: "Wie kann ich Versöhnung in mein Leben bringen?",
      tips: "Arbeiten Sie an Versöhnung und suchen Sie nach Wegen, Frieden in Ihre Beziehungen zu bringen."
    },
    { 
      name: "Menadel", 
      image: "/images/engel_menadel.jpg", 
      meaning: "Kann uns helfen, einen besseren Job zu finden, der zu dem passt, wovon wir immer geträumt haben.",
      meditation: "Wie kann ich meinen Traumjob finden?",
      tips: "Suchen Sie aktiv nach Karrieremöglichkeiten und arbeiten Sie daran, Ihren Traumjob zu finden."
    },
    { 
      name: "Aniel", 
      image: "/images/engel_aniel.jpg", 
      meaning: "Er ist mit Geld und Tausch verwandt.",
      meditation: "Wie kann ich besser mit Geld umgehen?",
      tips: "Arbeiten Sie daran, Ihre finanziellen Fähigkeiten zu verbessern und suchen Sie nach Wegen, finanziellen Wohlstand zu erreichen."
    },
    { 
      name: "Haamiah", 
      image: "/images/engel_haamiah.jpg", 
      meaning: "Ist der Engel der Rituale, Zeremonien und magischen Tage.",
      meditation: "Wie kann ich Rituale und Zeremonien in mein Leben integrieren?",
      tips: "Suchen Sie nach spirituellen Praktiken, die Ihrem Leben Bedeutung verleihen."
    },
    { 
      name: "Rehael", 
      image: "/images/engel_rehael.jpg", 
      meaning: "Hilft, die Dinge tiefer zu verstehen.",
      meditation: "Wie kann ich ein tieferes Verständnis für die Welt um mich herum entwickeln?",
      tips: "Nehmen Sie sich Zeit für Reflexion und suchen Sie nach tieferem Verständnis in Ihrem Leben."
    },
    { 
      name: "Ieazel", 
      image: "/images/engel_ieazel.jpg", 
      meaning: "Tröstet unser Leben und lehrt uns, die Zeiten der Erneuerung zu schätzen.",
      meditation: "Wie kann ich Trost und Erneuerung in mein Leben bringen?",
      tips: "Suchen Sie nach Wegen, Trost zu finden und schätzen Sie die Zeiten der Erneuerung."
    },
    { 
      name: "Hahahel", 
      image: "/images/engel_hahahel.jpg", 
      meaning: "Hilft uns, unserer Mission auf der Erde treu zu sein und unsere spirituelle Berufung zu wecken.",
      meditation: "Wie kann ich meiner spirituellen Berufung folgen?",
      tips: "Arbeiten Sie daran, Ihre spirituelle Berufung zu entdecken und ihr treu zu bleiben."
    },
    { 
      name: "Mikael", 
      image: "/images/engel_mikael.jpg", 
      meaning: "Hilft in Organisationen sowie beim Unterrichten von Gut und Böse.",
      meditation: "Wie kann ich in Organisationen besser arbeiten?",
      tips: "Arbeiten Sie an Ihren organisatorischen Fähigkeiten und suchen Sie nach Wegen, Gut und Böse zu unterrichten."
    },
    { 
      name: "Veualiah", 
      image: "/images/engel_veualiah.jpg", 
      meaning: "Ist der Engel des Wohlstands, des Überflusses und des Reichtums für Ihr Leben.",
      meditation: "Wie kann ich Wohlstand und Überfluss in mein Leben bringen?",
      tips: "Arbeiten Sie daran, Wohlstand und Überfluss in Ihr Leben zu integrieren."
    },
    { 
      name: "Yelahiah", 
      image: "/images/engel_yelahiah.jpg", 
      meaning: "Er ist ein Krieger des Lichts, also ist er ein himmlischer Beschützer und Führer.",
      meditation: "Wie kann ich das Licht in meinem Leben verteidigen?",
      tips: "Suchen Sie nach Wegen, das Licht in Ihrem Leben zu verteidigen und andere zu beschützen."
    },
    { 
      name: "Sealiah", 
      image: "/images/engel_sealiah.jpg", 
      meaning: "Verantwortlich für Motivation, Bereitschaft, Reinheit und Absicht.",
      meditation: "Wie kann ich motivierter und reiner in meinen Absichten sein?",
      tips: "Arbeiten Sie an Ihrer Motivation und suchen Sie nach Wegen, Ihre Absichten zu klären."
    },
    { 
      name: "Ariel", 
      image: "/images/engel_ariel.jpg", 
      meaning: "Bevorzugt unser Hellsehen.",
      meditation: "Wie kann ich meine Hellseherfähigkeiten verbessern?",
      tips: "Arbeiten Sie daran, Ihre Hellseherfähigkeiten zu entwickeln und zu nutzen."
    },
    { 
      name: "Asaliah", 
      image: "/images/engel_asaliah.jpg", 
      meaning: "Hilft Ihnen, die Wahrheit zu entdecken, die in den kleinen Dingen des Lebens verborgen ist.",
      meditation: "Wie kann ich die Wahrheit in den kleinen Dingen des Lebens entdecken?",
      tips: "Suchen Sie nach Wahrheit in den alltäglichen Details Ihres Lebens."
    },
    { 
      name: "Mihael", 
      image: "/images/engel_mihael.jpg", 
      meaning: "Ist dafür verantwortlich, die Beziehungen in Einklang zu bringen.",
      meditation: "Wie kann ich meine Beziehungen in Einklang bringen?",
      tips: "Arbeiten Sie daran, Harmonie in Ihre Beziehungen zu bringen."
    },
    { 
      name: "Vehuel", 
      image: "/images/engel_vehuel.jpg", 
      meaning: "Er ist der Führer aller, die spirituelle Erleuchtung erlangen wollen.",
      meditation: "Wie kann ich spirituelle Erleuchtung erlangen?",
      tips: "Suchen Sie nach Wegen, spirituelle Erleuchtung zu erlangen und anderen zu helfen, dasselbe zu tun."
    },
    { 
      name: "Daniel", 
      image: "/images/engel_daniel.jpg", 
      meaning: "Ist derjenige, der uns hilft, unsere Kommunikationsfähigkeiten zu entwickeln.",
      meditation: "Wie kann ich meine Kommunikationsfähigkeiten verbessern?",
      tips: "Arbeiten Sie daran, klarer und effektiver zu kommunizieren."
    },
    { 
      name: "Hahasiah", 
      image: "/images/engel_hahasiah.jpg", 
      meaning: "Heilt mit kosmischer Energie und hilft Ärzten und Krankenschwestern bei ihrer Arbeit.",
      meditation: "Wie kann ich kosmische Energie für Heilung nutzen?",
      tips: "Suchen Sie nach Wegen, kosmische Energie für Heilung in Ihrem Leben zu nutzen."
    },
    { 
      name: "Imamiah", 
      image: "/images/engel_imamiah.jpg", 
      meaning: "Mit ihm können wir die meisten unserer Fehler heilen und reparieren.",
      meditation: "Welche Fehler muss ich heilen und reparieren?",
      tips: "Arbeiten Sie daran, Ihre Fehler zu korrigieren und daraus zu lernen."
    },
    { 
      name: "Nanael", 
      image: "/images/engel_nanael.jpg", 
      meaning: "Ist der Engel der spirituellen Kommunikation in all ihren Formen.",
      meditation: "Wie kann ich meine spirituelle Kommunikation verbessern?",
      tips: "Arbeiten Sie daran, Ihre spirituelle Kommunikation zu entwickeln und zu verbessern."
    },
    { 
      name: "Nithael", 
      image: "/images/engel_nithael.jpg", 
      meaning: "Steht für ewige Jugend. Dies liegt daran, dass es enorm mit der Verjüngung verbunden ist.",
      meditation: "Wie kann ich ewige Jugend und Verjüngung in mein Leben bringen?",
      tips: "Suchen Sie nach Wegen, sich zu verjüngen und Ihre Jugendlichkeit zu bewahren."
    },
    { 
      name: "Mebahiah", 
      image: "/images/engel_mebahiah.jpg", 
      meaning: "Bringt Klarheit und Trost in Ihr Leben.",
      meditation: "Wie kann ich Klarheit und Trost finden?",
      tips: "Suchen Sie nach Wegen, Klarheit und Trost in Ihrem Leben zu finden."
    },
    { 
      name: "Poyel", 
      image: "/images/engel_poyel.jpg", 
      meaning: "Ist der Engel des Glücks und der Unterstützung.",
      meditation: "Wie kann ich Glück und Unterstützung in mein Leben bringen?",
      tips: "Arbeiten Sie daran, Glück und Unterstützung in Ihr Leben zu integrieren."
    }
  ];

export default engelkarten;
