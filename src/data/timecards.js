const timecards = [
  { 
    name: "1. 00:00 - Neubeginn (1. Der Reiter, Herz Neun)", 
    image: "/images/time_0000.jpg", 
    meaning: "00:00 markiert einen absoluten Neubeginn, eine Zeit der Unschuld und unendlichen Möglichkeiten. Der Reiter und Herz Neun verstärken dieses Thema, indem sie auf eine gute Nachricht oder ein Ereignis hinweisen, das Bewegung und frische Energie in Ihr Leben bringt. Es ist der ideale Moment, um neue Projekte zu starten oder eine neue Richtung einzuschlagen.", 
    meditation: "Welche ersten Schritte kann ich unternehmen, um diesen Neuanfang zu verwirklichen?", 
    tips: "Nutzen Sie diesen Moment, um mutig in neue Vorhaben zu investieren. Setzen Sie klare Absichten, da die Energien zu Ihren Gunsten wirken."
  },
  { 
    name: "2. 01:01 - Neue Anfänge (13. Das Kind, Pik Bube)", 
    image: "/images/time_0101.jpg", 
    meaning: "01:01 signalisiert einen Neuanfang, bei dem Sie Ihrer Intuition folgen sollten. Das Kind und Pik Bube symbolisieren Unschuld und eine spielerische Herangehensweise an neue Projekte. Jetzt ist die Zeit, um etwas Neues zu beginnen, ohne die Last der Vergangenheit.", 
    meditation: "Wie kann ich meine innere Unschuld und Neugier bewahren, während ich neue Wege beschreite?", 
    tips: "Gehen Sie spielerisch und offen an neue Herausforderungen heran. Vertrauen Sie auf Ihre Instinkte und seien Sie bereit, etwas Unbekanntes auszuprobieren."
  },
  { 
    name: "3. 01:11 - Geistiges Erwachen (16. Die Sterne, Herz Sechs)", 
    image: "/images/time_0111.jpg", 
    meaning: "01:11 ist ein starkes Zeichen für geistiges Erwachen und spirituelle Klarheit. Die Sterne und Herz Sechs symbolisieren Inspiration und das große Glück, das durch spirituelle Praktiken erreicht werden kann. Es ist eine Zeit, sich auf geistige Führung zu konzentrieren und neue Einsichten zu gewinnen.", 
    meditation: "Wie kann ich meine spirituellen Praktiken vertiefen, um mehr Klarheit und Führung zu erhalten?", 
    tips: "Nutzen Sie diese Zeit, um Ihre spirituellen Ziele zu stärken und sich bewusst mit höheren Ebenen des Bewusstseins zu verbinden."
  },
  { 
    name: "4. 02:02 - Harmonie und Gleichgewicht (24. Das Herz, Herz Bube)", 
    image: "/images/time_0202.jpg", 
    meaning: "02:02 steht für Harmonie und Gleichgewicht, besonders in Ihren Beziehungen. Das Herz und Herz Bube verstärken das Thema der Liebe und Partnerschaft, indem sie auf tiefe emotionale Verbindungen und aufrichtiges Engagement hinweisen.", 
    meditation: "Wie kann ich mehr Harmonie und Liebe in meine Beziehungen bringen?", 
    tips: "Konzentrieren Sie sich darauf, liebevolle Beziehungen aufzubauen und bestehende Partnerschaften zu stärken. Streben Sie nach einem Gleichgewicht zwischen Geben und Nehmen."
  },
  { 
    name: "5. 02:22 - Geduld (23. Die Mäuse, Kreuz Sieben)", 
    image: "/images/time_0222.jpg", 
    meaning: "02:22 erinnert Sie daran, dass Geduld erforderlich ist, während sich die Dinge entwickeln. Die Mäuse und Kreuz Sieben stehen für kleine Sorgen und Herausforderungen, die Geduld und Vertrauen verlangen, damit sich alles fügen kann.", 
    meditation: "Wie kann ich geduldig und zuversichtlich bleiben, während sich meine Pläne entwickeln?", 
    tips: "Vertrauen Sie darauf, dass alles zur richtigen Zeit geschieht. Achten Sie darauf, dass Sie sich nicht von kleinen Hindernissen entmutigen lassen."
  },
  { 
    name: "6. 03:03 - Unterstützung des Universums (30. Die Lilien, Pik König)", 
    image: "/images/time_0303.jpg", 
    meaning: "03:03 zeigt, dass das Universum Sie unterstützt und Ihnen Frieden und Harmonie bringt. Die Lilien und Pik König symbolisieren familiäre Harmonie und Schutz, und zeigen an, dass Sie auf dem richtigen Weg sind.", 
    meditation: "Wie kann ich mich für die Unterstützung des Universums öffnen und in Harmonie bleiben?", 
    tips: "Achten Sie auf die Zeichen, die Ihnen das Universum sendet. Bleiben Sie in Ihrem inneren Frieden und lassen Sie sich durch nichts aus der Ruhe bringen."
  },
  { 
    name: "7. 03:33 - Aufgestiegene Meister (17. Der Storch, Herz Dame)", 
    image: "/images/time_0333.jpg", 
    meaning: "03:33 ist ein Hinweis darauf, dass die Aufgestiegenen Meister bei Ihnen sind und Sie in Zeiten des Wandels unterstützen. Der Storch und Herz Dame symbolisieren Veränderungen und emotionale Unterstützung, die Ihnen helfen, neue Anfänge zu meistern.", 
    meditation: "Wie kann ich die Präsenz und Unterstützung der Aufgestiegenen Meister in meinem Leben spüren?", 
    tips: "Seien Sie offen für die Führung und Unterstützung, die Ihnen durch spirituelle Meister zuteilwird. Nutzen Sie diese Zeit für positive Veränderungen."
  },
  { 
    name: "8. 04:04 - Engelspräsenz (15. Der Bär, Kreuz Zehn)", 
    image: "/images/time_0404.jpg", 
    meaning: "04:04 signalisiert eine starke Engelspräsenz, die Schutz und Sicherheit bietet. Der Bär und Kreuz Zehn stehen für Stärke und Macht, die Ihnen durch himmlische Wesen verliehen wird.", 
    meditation: "Wie kann ich mich sicher und geschützt fühlen, während ich meinen Weg gehe?", 
    tips: "Vertrauen Sie darauf, dass Engel über Sie wachen. Bleiben Sie stark und wissen Sie, dass Sie beschützt sind."
  },
  { 
    name: "9. 04:44 - Verstärkte Engelspräsenz (33. Der Schlüssel, Karo Acht)", 
    image: "/images/time_0444.jpg", 
    meaning: "04:44 verstärkt die Präsenz der Engel und bestätigt, dass Sie auf dem richtigen Weg sind. Der Schlüssel und Karo Acht symbolisieren Erfolg und Lösungen, die durch göttliche Führung ermöglicht werden.", 
    meditation: "Welche Schritte kann ich unternehmen, um sicherzustellen, dass ich auf meinem richtigen Weg bleibe?", 
    tips: "Folgen Sie Ihrem Weg mit Vertrauen und wissen Sie, dass Sie von höheren Kräften unterstützt werden."
  },
  { 
    name: "10. 05:05 - Vorbereitung auf Veränderungen (10. Die Sense, Karo Bube)", 
    image: "/images/time_0505.jpg", 
    meaning: "05:05 weist auf bevorstehende Veränderungen hin, die plötzlich und unerwartet eintreten können. Die Sense und Karo Bube stehen für schnelle Entscheidungen und das Ernten der Früchte Ihrer Arbeit.", 
    meditation: "Welche Veränderungen sind notwendig in meinem Leben und wie kann ich mich darauf vorbereiten?", 
    tips: "Bereiten Sie sich mental und emotional auf kommende Veränderungen vor. Seien Sie bereit, schnelle Entscheidungen zu treffen, wenn es notwendig ist."
  },
  { 
    name: "11. 05:55 - Große Veränderungen (7. Die Schlange, Kreuz Dame)", 
    image: "/images/time_0555.jpg", 
    meaning: "05:55 kündigt große Veränderungen an, die möglicherweise mit Komplikationen verbunden sind. Die Schlange und Kreuz Dame symbolisieren Umwege und List, die jedoch notwendig sind, um voranzukommen.", 
    meditation: "Wie kann ich die bevorstehenden Veränderungen willkommen heißen und mich darauf einstellen?", 
    tips: "Seien Sie bereit, alte Muster loszulassen und Veränderungen zu akzeptieren. Bleiben Sie wachsam und flexibel."
  },
  { 
    name: "12. 06:06 - Ausgleich zwischen materiellen und spirituellen Belangen (34. Die Fische, Karo König)", 
    image: "/images/time_0606.jpg", 
    meaning: "06:06 fordert Sie auf, einen Ausgleich zwischen Ihren materiellen und spirituellen Belangen zu finden. Die Fische und Karo König symbolisieren Wohlstand und die Notwendigkeit, in beiden Bereichen Ihres Lebens Gleichgewicht zu schaffen.", 
    meditation: "Wie kann ich eine Balance zwischen meinen materiellen und spirituellen Zielen finden?", 
    tips: "Streben Sie nach einem Gleichgewicht in allen Lebensbereichen. Achten Sie darauf, dass weder materielle noch spirituelle Aspekte vernachlässigt werden."
  },
  { 
    name: "13. 07:07 - Spirituelle Entwicklung (22. Die Wege, Karo Dame)", 
    image: "/images/time_0707.jpg", 
    meaning: "07:07 weist darauf hin, dass Sie auf einem Weg der spirituellen Entwicklung sind. Die Wege und Karo Dame symbolisieren Entscheidungen und Möglichkeiten, die Ihnen auf Ihrem spirituellen Pfad begegnen.", 
    meditation: "Wie kann ich weiterhin auf meinem spirituellen Weg wachsen und die richtigen Entscheidungen treffen?", 
    tips: "Vertrauen Sie darauf, dass Sie spirituell geführt werden. Treffen Sie Entscheidungen, die mit Ihrem höheren Selbst im Einklang stehen."
  },
  { 
    name: "14. 08:08 - Überfluss und Wohlstand (11. Die Ruten, Kreuz Bube)", 
    image: "/images/time_0808.jpg", 
    meaning: "08:08 kündigt Überfluss und Wohlstand an, die sich durch harte Arbeit und Kommunikation einstellen. Die Ruten und Kreuz Bube stehen für Konflikte und Diskussionen, die gelöst werden müssen, um Fülle zu erreichen.", 
    meditation: "Wie kann ich mich auf den Empfang von Wohlstand und Fülle vorbereiten?", 
    tips: "Verfolgen Sie Ihre Ziele mit Entschlossenheit und Energie. Seien Sie bereit, Konflikte zu klären, um Wohlstand zu manifestieren."
  },
  { 
    name: "15. 09:09 - Zyklusende (8. Der Sarg, Karo Neun)", 
    image: "/images/time_0909.jpg", 
    meaning: "09:09 signalisiert das Ende eines Zyklus und den Beginn eines neuen. Der Sarg und Karo Neun symbolisieren Abschiede und Transformationen, die notwendig sind, um Platz für Neues zu schaffen.", 
    meditation: "Was muss ich in meinem Leben abschließen, um Platz für Neues zu schaffen?", 
    tips: "Seien Sie bereit, das Alte loszulassen und sich auf neue Anfänge zu konzentrieren. Lassen Sie Vergangenes los, um Raum für Wachstum zu schaffen."
  },
  { 
    name: "16. 10:01 - Neue Möglichkeiten und Beginn (3. Das Schiff, Pik Zehn)", 
    image: "/images/time_1001.jpg", 
    meaning: "10:01 steht für neue Möglichkeiten und den Beginn eines Abenteuers. Das Schiff und Pik Zehn symbolisieren Reisen und Veränderungen, die Sie auf neue Wege führen.", 
    meditation: "Wie kann ich neue Chancen in meinem Leben erkennen und ergreifen?", 
    tips: "Halten Sie Ausschau nach neuen Möglichkeiten und nutzen Sie diese. Seien Sie bereit, sich auf Abenteuer und Veränderungen einzulassen."
  },
  { 
    name: "17. 10:10 - Vertrauen und Ermutigung (31. Die Sonne, Karo Ass)", 
    image: "/images/time_1010.jpg", 
    meaning: "10:10 ist eine Botschaft des Universums, dass Sie Vertrauen und Ermutigung auf Ihrem Weg finden werden. Die Sonne und Karo Ass symbolisieren Erfolg und kreative Energie, die Ihnen zu einem positiven Ausgang verhelfen.", 
    meditation: "Wie kann ich meinem Lebensweg mehr Vertrauen und Optimismus entgegenbringen?", 
    tips: "Hören Sie auf die Botschaften des Universums und lassen Sie sich von positiver Energie leiten. Vertrauen Sie auf den Erfolg, der vor Ihnen liegt."
  },
  { 
    name: "18. 11:11 - Geistige Verbindung (32. Der Mond, Herz Acht)", 
    image: "/images/time_1111.jpg", 
    meaning: "11:11 ist ein kraftvolles Zeichen für eine tiefe geistige Verbindung. Der Mond und Herz Acht symbolisieren Intuition und emotionale Tiefe, die Ihnen helfen, sich mit höheren Ebenen zu verbinden.", 
    meditation: "Wie kann ich meine spirituelle Verbindung und Intuition stärken?", 
    tips: "Nehmen Sie sich Zeit, um sich mit Ihrem höheren Selbst und spirituellen Ebenen zu verbinden. Achten Sie auf Ihre Träume und intuitiven Eingebungen."
  },
  { 
    name: "19. 12:12 - Geistiges Wachstum (25. Der Ring, Kreuz Ass)", 
    image: "/images/time_1212.jpg", 
    meaning: "12:12 signalisiert eine Phase des geistigen Wachstums und der Fortschritte. Der Ring und Kreuz Ass stehen für Verbindungen und Verpflichtungen, die Ihren spirituellen Fortschritt fördern.", 
    meditation: "Welche spirituellen Ziele möchte ich erreichen und wie kann ich diese festigen?", 
    tips: "Verfolgen Sie Ihren Weg des spirituellen Wachstums mit Hingabe und Festigkeit. Schaffen Sie starke Verbindungen, die Ihr Wachstum unterstützen."
  },
  { 
    name: "20. 12:21 - Zykluswechsel (20. Der Park, Pik Acht)", 
    image: "/images/time_1221.jpg", 
    meaning: "12:21 markiert das Ende eines Zyklus und den Beginn eines neuen. Der Park und Pik Acht symbolisieren Offenheit und soziale Verbindungen, die neue Wege eröffnen.", 
    meditation: "Welche neuen Wege eröffnen sich für mich durch die Beendigung eines alten Zyklus?", 
    tips: "Bereiten Sie sich auf neue Anfänge vor und seien Sie offen für neue soziale Verbindungen und Erfahrungen."
  },
  { 
    name: "21. 13:13 - Göttliche Weiblichkeit und Intuition (29. Die Dame, Pik Ass)", 
    image: "/images/time_1313.jpg", 
    meaning: "13:13 ist ein Zeichen für die Präsenz göttlicher Weiblichkeit und starker Intuition. Die Dame und Pik Ass symbolisieren eine wichtige Frau oder weibliche Energie in Ihrem Leben, die Ihnen hilft, Ihre innere Weisheit zu stärken.", 
    meditation: "Wie kann ich meine Intuition und weibliche Energie stärken und besser nutzen?", 
    tips: "Vertrauen Sie auf Ihre innere Weisheit und die Kraft der Intuition. Lassen Sie weibliche Energie Ihr Handeln leiten."
  },
  { 
    name: "22. 13:31 - Vertrauen Sie Ihrem inneren Selbst (14. Der Fuchs, Kreuz Neun)", 
    image: "/images/time_1331.jpg", 
    meaning: "13:31 erinnert Sie daran, Ihrem inneren Selbst zu vertrauen, besonders in schwierigen Situationen. Der Fuchs und Kreuz Neun symbolisieren List und Vorsicht, aber auch die Notwendigkeit, auf die innere Stimme zu hören.", 
    meditation: "Wie kann ich mein inneres Selbst besser verstehen und ihm vertrauen?", 
    tips: "Hören Sie auf Ihre innere Stimme und handeln Sie danach. Seien Sie wachsam und treffen Sie kluge Entscheidungen."
  },
  { 
    name: "23. 14:14 - Hören Sie auf Ihre Engel und Führer (12. Die Vögel, Karo Sieben)", 
    image: "/images/time_1414.jpg", 
    meaning: "14:14 fordert Sie auf, auf die Botschaften Ihrer Engel und spirituellen Führer zu hören. Die Vögel und Karo Sieben symbolisieren Kommunikation und Aufregung, die von geistigen Botschaften begleitet werden.", 
    meditation: "Welche Botschaften empfange ich von meinen Engeln und wie kann ich sie besser wahrnehmen?", 
    tips: "Seien Sie offen für die Führung und Unterstützung Ihrer Engel. Achten Sie auf Zeichen und Botschaften, die Ihnen übermittelt werden."
  },
  { 
    name: "24. 14:41 - Fokussierung auf das Positive (6. Die Wolken, Kreuz König)", 
    image: "/images/time_1441.jpg", 
    meaning: "14:41 erinnert Sie daran, sich auf das Positive zu konzentrieren, auch wenn die Dinge unklar erscheinen. Die Wolken und Kreuz König symbolisieren Unklarheiten und Hindernisse, aber auch die Notwendigkeit, Klarheit zu schaffen.", 
    meditation: "Wie kann ich in schwierigen Zeiten mehr Positivität in mein Leben bringen?", 
    tips: "Bemühen Sie sich um Klarheit und lösen Sie Verwirrungen auf. Fokussieren Sie sich auf das Gute in jeder Situation."
  },
  { 
    name: "25. 15:15 - Konzentration auf die Gedanken (4. Das Haus, Herz König)", 
    image: "/images/time_1515.jpg", 
    meaning: "15:15 betont die Wichtigkeit, sich auf Gedanken zu konzentrieren, die Ihnen Stabilität und Sicherheit bringen. Das Haus und Herz König symbolisieren Familie, Heim und Autorität, die durch positive Gedanken genährt werden.", 
    meditation: "Welche Gedanken möchte ich in meinem Leben stärken und wie kann ich sie stabilisieren?", 
    tips: "Seien Sie achtsam, welche Gedanken Sie nähren. Konzentrieren Sie sich auf Stabilität und Sicherheit in Ihrem Denken und Handeln."
  },
  { 
    name: "26. 15:51 - Ein Wandel steht bevor (9. Die Blumen, Pik Dame)", 
    image: "/images/time_1551.jpg", 
    meaning: "15:51 kündigt einen bevorstehenden Wandel an, der Freude und positive Überraschungen bringen kann. Die Blumen und Pik Dame symbolisieren Geschenke und kreative Vielfalt, die sich in Ihrem Leben entfalten werden.", 
    meditation: "Welche Veränderungen erwarte ich in meinem Leben und wie kann ich sie willkommen heißen?", 
    tips: "Seien Sie bereit für Transformationen und neue Richtungen. Akzeptieren Sie die Geschenke, die das Leben Ihnen bietet."
  },
  { 
    name: "27. 16:16 - Liebe und Romantik (18. Der Hund, Herz Zehn)", 
    image: "/images/time_1616.jpg", 
    meaning: "16:16 signalisiert eine Zeit der Liebe und Romantik. Der Hund und Herz Zehn stehen für Treue und tiefe emotionale Verbindungen, die in dieser Zeit gestärkt werden können.", 
    meditation: "Wie kann ich Liebe und Romantik in meinem Leben verstärken und genießen?", 
    tips: "Öffnen Sie Ihr Herz für Liebe und neue romantische Möglichkeiten. Pflegen Sie bestehende Beziehungen mit Liebe und Aufmerksamkeit."
  },
  { 
    name: "28. 17:17 - Karmischer Pfad (19. Der Turm, Pik Sechs)", 
    image: "/images/time_1717.jpg", 
    meaning: "17:17 zeigt an, dass Sie sich auf einem karmischen Pfad befinden. Der Turm und Pik Sechs symbolisieren Isolation und Autorität, die notwendig sind, um karmische Lektionen zu lernen.", 
    meditation: "Welche karmischen Lektionen erlebe ich derzeit und wie kann ich sie besser verstehen?", 
    tips: "Achten Sie auf karmische Muster und arbeiten Sie daran, diese zu verstehen. Nutzen Sie die Zeit der Selbstreflexion, um innerlich zu wachsen."
  },
  { 
    name: "29. 18:18 - Positivität trotz Hindernissen (21. Der Berg, Kreuz Acht)", 
    image: "/images/time_1818.jpg", 
    meaning: "18:18 ermutigt Sie, trotz Hindernissen positiv zu bleiben. Der Berg und Kreuz Acht symbolisieren Herausforderungen und Blockaden, die jedoch mit einem positiven Geist überwunden werden können.", 
    meditation: "Wie kann ich in schwierigen Zeiten optimistisch und zuversichtlich bleiben?", 
    tips: "Bleiben Sie optimistisch, auch wenn Herausforderungen auftreten. Vertrauen Sie darauf, dass jede Blockade überwunden werden kann."
  },
  { 
    name: "30. 19:19 - Abschluss und Neuanfang (35. Der Anker, Pik Neun)", 
    image: "/images/time_1919.jpg", 
    meaning: "19:19 markiert das Ende eines alten Zyklus und den Beginn eines neuen. Der Anker und Pik Neun symbolisieren Stabilität und Beständigkeit, die Ihnen helfen, sicher in den nächsten Abschnitt zu gehen.", 
    meditation: "Was muss ich in meinem Leben loslassen, um Platz für neue Anfänge zu schaffen?", 
    tips: "Lassen Sie das Alte los und bereiten Sie sich auf neue Chancen vor. Suchen Sie nach Stabilität, während Sie in einen neuen Lebensabschnitt eintreten."
  },
  { 
    name: "31. 20:02 - Harmonie in Partnerschaften (28. Der Herr, Herz Ass)", 
    image: "/images/time_2002.jpg", 
    meaning: "20:02 betont die Bedeutung von Harmonie in Partnerschaften. Der Herr und Herz Ass symbolisieren eine wichtige männliche Energie oder Person in Ihrem Leben, die zur Schaffung von Gleichgewicht und Harmonie beiträgt.", 
    meditation: "Wie kann ich mehr Harmonie in meine Beziehungen bringen und sie stärken?", 
    tips: "Arbeiten Sie daran, Gleichgewicht und Harmonie in Ihren Partnerschaften zu fördern. Pflegen Sie Ihre Beziehungen mit Sorgfalt und Respekt."
  },
  { 
    name: "32. 20:20 - Bestätigung (26. Das Buch, Karo Zehn)", 
    image: "/images/time_2020.jpg", 
    meaning: "20:20 bietet Ihnen Bestätigung, dass Sie auf dem richtigen Weg sind. Das Buch und Karo Zehn symbolisieren verborgenes Wissen und Bildung, die Ihnen helfen, Ihre Ziele zu erreichen.", 
    meditation: "Wie kann ich Vertrauen in den Prozess haben und auf mein Wissen bauen?", 
    tips: "Vertrauen Sie darauf, dass sich alles zu Ihrem höchsten Wohl entwickelt. Nutzen Sie Ihr Wissen und Ihre Erfahrungen, um erfolgreich voranzukommen."
  },
  { 
    name: "33. 21:21 - Schnelle Manifestation (27. Der Brief, Pik Sieben)", 
    image: "/images/time_2121.jpg", 
    meaning: "21:21 deutet auf eine schnelle Manifestation Ihrer Gedanken hin. Der Brief und Pik Sieben symbolisieren Nachrichten und Kommunikation, die Ihre Manifestationen unterstützen.", 
    meditation: "Wie kann ich meine Gedanken bewusst gestalten und meine Ziele schneller erreichen?", 
    tips: "Achten Sie darauf, was Sie denken, denn Ihre Gedanken manifestieren sich schnell. Seien Sie präzise in Ihren Absichten und Zielen."
  },
  { 
    name: "34. 21:12 - Lebenszweck (2. Der Klee, Karo Sechs)", 
    image: "/images/time_2112.jpg", 
    meaning: "21:12 erinnert Sie daran, Ihren Lebenszweck weiterhin zu verfolgen. Der Klee und Karo Sechs symbolisieren Glück und günstige Gelegenheiten, die Ihnen auf Ihrem Weg begegnen.", 
    meditation: "Was ist mein Lebenszweck und wie kann ich ihm treu bleiben?", 
    tips: "Bleiben Sie Ihrem Lebensweg treu und folgen Sie Ihrer Bestimmung. Nutzen Sie die Chancen, die sich Ihnen bieten."
  },
  { 
    name: "35. 22:22 - Träume werden Wirklichkeit (36. Das Kreuz, Kreuz Sechs)", 
    image: "/images/time_2222.jpg", 
    meaning: "22:22 ist ein kraftvolles Zeichen, dass Ihre Träume Wirklichkeit werden. Das Kreuz und Kreuz Sechs symbolisieren Schicksal und Karma, die sich in Ihrem Leben manifestieren.", 
    meditation: "Welche meiner Träume verwirklichen sich gerade und wie kann ich sie weiter fördern?", 
    tips: "Bleiben Sie auf Kurs, denn Ihre Träume werden Realität. Vertrauen Sie auf das Schicksal, das sich vor Ihnen entfaltet."
  },
  { 
    name: "36. 23:23 - Vertrauen und Führung (5. Der Baum, Herz Sieben)", 
    image: "/images/time_2323.jpg", 
    meaning: "23:23 ermutigt Sie, Ihrem Lebensweg zu vertrauen und auf die Führung des Universums zu hören. Der Baum und Herz Sieben symbolisieren Wachstum und Lebensenergie, die Sie in dieser Phase unterstützen.", 
    meditation: "Wie kann ich meinem Lebensweg vertrauen und mich vom Universum führen lassen?", 
    tips: "Vertrauen Sie darauf, dass Sie auf dem richtigen Weg sind. Lassen Sie sich von der Weisheit des Universums leiten und unterstützen."
  },
  { 
    name: "37. 23:32 - Loslassen (34. Die Fische, Karo König)", 
    image: "/images/time_2332.jpg", 
    meaning: "23:32 erinnert Sie daran, loszulassen und dem Fluss des Lebens zu vertrauen. Die Fische und Karo König symbolisieren Wohlstand und die Notwendigkeit, Kontrolle abzugeben, um Erfolg zu finden.", 
    meditation: "Wie kann ich mich dem Fluss des Lebens hingeben und loslassen?", 
    tips: "Lassen Sie die Kontrolle los und vertrauen Sie darauf, dass sich alles fügen wird. Erlauben Sie dem Leben, sich auf natürliche Weise zu entfalten."
  }
];

export default timecards;
