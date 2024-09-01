const plants = [
    // Wurzelchakra (Muladhara)
    {
        name: "1. Süßholz",
        image: "/images/suessholz.jpg",
        meaning: "Wirkung: Unterstützung des Wurzelchakras und Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin sicher und geerdet.'",
        meditation: "Nutze die Kraft des Süßholzes, um dein Wurzelchakra zu stärken und dich geerdet zu fühlen.",
        tips: "Süßholz kann in Tees oder als Süßungsmittel verwendet werden."
    },
    {
        name: "2. Ginseng",
        image: "/images/ginseng.jpg",
        meaning: "Wirkung: Stärkung der Lebensenergie. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin vital und kraftvoll.'",
        meditation: "Fokussiere dich auf die vitalisierende Wirkung von Ginseng, um deine Lebensenergie zu steigern.",
        tips: "Ginseng kann in Tees oder als Nahrungsergänzungsmittel eingenommen werden."
    },
    {
        name: "3. Löwenzahn",
        image: "/images/loewenzahn.jpg",
        meaning: "Wirkung: Entgiftung und Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich lasse los, was mich belastet, und bin geerdet.'",
        meditation: "Visualisiere, wie Löwenzahn dich von toxischen Energien reinigt und dich fest auf der Erde verankert.",
        tips: "Löwenzahnblätter können als Salat oder Tee genossen werden."
    },
    {
        name: "4. Eichenrinde",
        image: "/images/eichenrinde.jpg",
        meaning: "Wirkung: Stärkung und Schutz. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin stark und standhaft.'",
        meditation: "Verbinde dich mit der Stärke der Eichenrinde, um deine innere Festigkeit zu finden.",
        tips: "Eichenrinde kann als Tee oder in Bädern verwendet werden."
    },
    {
        name: "5. Zedernholz",
        image: "/images/zedernholz.jpg",
        meaning: "Wirkung: Schutz und Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin geschützt und geerdet.'",
        meditation: "Nutze die Schutzkraft von Zedernholz, um dich sicher und geerdet zu fühlen.",
        tips: "Zedernholzöl kann zur Meditation und Erdung verwendet werden."
    },
    {
        name: "6. Angelikawurzel",
        image: "/images/angelikawurzel.jpg",
        meaning: "Wirkung: Unterstützung der Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin in meiner Mitte und stabil.'",
        meditation: "Verwende Angelikawurzel in Meditationen, um dein Gleichgewicht und deine Erdung zu stärken.",
        tips: "Angelikawurzel kann in Kräutertees oder als Räucherwerk genutzt werden."
    },
    {
        name: "7. Brennnessel",
        image: "/images/brennnessel.jpg",
        meaning: "Wirkung: Stärkung und Reinigung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin rein und stark.'",
        meditation: "Visualisiere, wie die Brennnessel deine Energien reinigt und stärkt.",
        tips: "Brennnesselblätter können als Tee oder in Salaten verwendet werden."
    },
    {
        name: "8. Teufelskralle",
        image: "/images/teufelskralle.jpg",
        meaning: "Wirkung: Schmerzlinderung und Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich lasse den Schmerz los und finde Erdung.'",
        meditation: "Nutze Teufelskralle in deiner Meditation, um Schmerzen loszulassen und Erdung zu finden.",
        tips: "Teufelskralle kann als Tee oder in Tinkturen verwendet werden."
    },
    {
        name: "9. Weidenrinde",
        image: "/images/weidenrinde.jpg",
        meaning: "Wirkung: Beruhigung und Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin ruhig und geerdet.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Weidenrinde, um Erdung zu finden.",
        tips: "Weidenrinde kann in Tees oder als Extrakt zur Schmerzlinderung verwendet werden."
    },
    {
        name: "10. Goldrute",
        image: "/images/goldrute.jpg",
        meaning: "Wirkung: Stärkung und Schutz. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin stark und geschützt.'",
        meditation: "Visualisiere die schützende Kraft der Goldrute während deiner Meditation.",
        tips: "Goldrute kann in Tees zur Stärkung des Immunsystems verwendet werden."
    },
    {
        name: "11. Eberraute",
        image: "/images/eberraute.jpg",
        meaning: "Wirkung: Schutz und Erdung. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin sicher und geerdet.'",
        meditation: "Nutze Eberraute, um dich in deiner Meditation sicher und geerdet zu fühlen.",
        tips: "Eberraute kann als Tee oder Räucherwerk verwendet werden."
    },
    {
        name: "12. Kadschu",
        image: "/images/kadschu.jpg",
        meaning: "Wirkung: Erdung und Stabilität. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin stabil und geerdet.'",
        meditation: "Fokussiere dich auf die stabilisierende Wirkung von Kadschu während deiner Meditation.",
        tips: "Kadschu kann in traditionellen Teemischungen oder als Pulver verwendet werden."
    },
    {
        name: "13. Isländisch Moos",
        image: "/images/islaendisch_moos.jpg",
        meaning: "Wirkung: Reinigung und Schutz. Chakra: Wurzelchakra (Muladhara). Affirmation: 'Ich bin gereinigt und geschützt.'",
        meditation: "Visualisiere, wie Isländisch Moos deine Energien reinigt und schützt.",
        tips: "Isländisch Moos kann als Tee oder zur Stärkung des Immunsystems verwendet werden."
    },

    // Sakralchakra (Svadhisthana)
    {
        name: "1. Ingwer",
        image: "/images/ingwer.jpg",
        meaning: "Wirkung: Anregung und Vitalität. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin voller Lebensfreude und Kreativität.'",
        meditation: "Fokussiere dich auf die belebende Wirkung von Ingwer, um deine Kreativität zu steigern.",
        tips: "Ingwer kann frisch, als Tee oder in Gerichten verwendet werden."
    },
    {
        name: "2. Zimt",
        image: "/images/zimt.jpg",
        meaning: "Wirkung: Wärme und Stimulation. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin warmherzig und leidenschaftlich.'",
        meditation: "Nutze Zimt in deiner Meditation, um Wärme und Leidenschaft in dein Leben zu bringen.",
        tips: "Zimt kann in Tees, als Gewürz in Speisen oder in Duftölen verwendet werden."
    },
    {
        name: "3. Sanddorn",
        image: "/images/sanddorn.jpg",
        meaning: "Wirkung: Vitalität und Schutz. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin vital und geschützt.'",
        meditation: "Visualisiere die stärkende Kraft von Sanddorn, um dein Sakralchakra zu aktivieren.",
        tips: "Sanddorn kann als Saft, Öl oder in Nahrungsergänzungsmitteln verwendet werden."
    },
    {
        name: "4. Ylang-Ylang",
        image: "/images/ylang_ylang.jpg",
        meaning: "Wirkung: Beruhigung und Harmonie. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin in Harmonie mit meinen Gefühlen.'",
        meditation: "Fokussiere dich auf die harmonisierende Wirkung von Ylang-Ylang, um emotionale Balance zu finden.",
        tips: "Ylang-Ylang kann als ätherisches Öl in der Aromatherapie verwendet werden."
    },
    {
        name: "5. Muskatnuss",
        image: "/images/muskatnuss.jpg",
        meaning: "Wirkung: Beruhigung und Erdung. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin ruhig und geerdet.'",
        meditation: "Nutze Muskatnuss, um Ruhe und Erdung in dein Sakralchakra zu bringen.",
        tips: "Muskatnuss kann als Gewürz in Speisen oder in kleinen Mengen als Tee verwendet werden."
    },
    {
        name: "6. Damiana",
        image: "/images/damiana.jpg",
        meaning: "Wirkung: Stärkung der Libido und Emotionen. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin im Einklang mit meiner Sexualität und Emotionen.'",
        meditation: "Fokussiere dich auf die erotisierende Kraft von Damiana, um dein Sakralchakra zu aktivieren.",
        tips: "Damiana kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "7. Koriander",
        image: "/images/koriander.jpg",
        meaning: "Wirkung: Verdauungsfördernd und ausgleichend. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich finde Balance in meinem Körper und Geist.'",
        meditation: "Nutze die ausgleichende Kraft von Koriander, um dein Sakralchakra zu harmonisieren.",
        tips: "Koriander kann frisch, als Tee oder als Gewürz in Speisen verwendet werden."
    },
    {
        name: "8. Safran",
        image: "/images/safran.jpg",
        meaning: "Wirkung: Anregend und stimmungsaufhellend. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin voller Lebensfreude und Optimismus.'",
        meditation: "Visualisiere, wie Safran deine Lebensfreude und Kreativität verstärkt.",
        tips: "Safran kann in kleinen Mengen als Gewürz in Speisen verwendet werden."
    },
    {
        name: "9. Orangenblüte",
        image: "/images/orangenbluete.jpg",
        meaning: "Wirkung: Beruhigend und harmonisierend. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich finde Frieden und Harmonie in meinem Inneren.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Orangenblüte, um emotionale Balance zu finden.",
        tips: "Orangenblütenwasser kann in Getränken oder als Duftspray verwendet werden."
    },
    {
        name: "10. Zitronenmelisse",
        image: "/images/zitronenmelisse.jpg",
        meaning: "Wirkung: Beruhigung und Balance. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich finde Ruhe und Ausgeglichenheit in meinen Emotionen.'",
        meditation: "Nutze die beruhigende Wirkung von Zitronenmelisse, um dein Sakralchakra zu stabilisieren.",
        tips: "Zitronenmelisse kann in Tees oder als ätherisches Öl verwendet werden."
    },
    {
        name: "11. Johanniskraut",
        image: "/images/johanniskraut.jpg",
        meaning: "Wirkung: Stimmungsaufhellend und schützend. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin voller Licht und Freude.'",
        meditation: "Visualisiere, wie Johanniskraut Licht und Freude in dein Sakralchakra bringt.",
        tips: "Johanniskraut kann in Tees oder als Öl verwendet werden."
    },
    {
        name: "12. Fenchel",
        image: "/images/fenchel.jpg",
        meaning: "Wirkung: Verdauungsfördernd und beruhigend. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich finde Ruhe und Harmonie in meinem Körper.'",
        meditation: "Nutze die beruhigende Kraft von Fenchel, um dein Sakralchakra auszugleichen.",
        tips: "Fenchel kann als Tee oder als Gewürz in Speisen verwendet werden."
    },
    {
        name: "13. Kardamom",
        image: "/images/kardamom.jpg",
        meaning: "Wirkung: Belebend und klärend. Chakra: Sakralchakra (Svadhisthana). Affirmation: 'Ich bin klar und voller Energie.'",
        meditation: "Fokussiere dich auf die klärende Wirkung von Kardamom, um dein Sakralchakra zu beleben.",
        tips: "Kardamom kann in Tees, als Gewürz in Speisen oder als Öl verwendet werden."
    },

    // Solarplexus-Chakra (Manipura)
    {
        name: "1. Gelbwurz",
        image: "/images/gelbwurz.jpg",
        meaning: "Wirkung: Entzündungshemmend und klärend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin voller Kraft und Klarheit.'",
        meditation: "Nutze die klärende Kraft von Gelbwurz, um dein Solarplexus-Chakra zu reinigen.",
        tips: "Gelbwurz kann in Tees, als Gewürz oder in goldener Milch verwendet werden."
    },
    {
        name: "2. Anis",
        image: "/images/anis.jpg",
        meaning: "Wirkung: Verdauungsfördernd und beruhigend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich finde Ruhe und Harmonie in meinem Inneren.'",
        meditation: "Visualisiere die beruhigende Wirkung von Anis, um dein Solarplexus-Chakra zu harmonisieren.",
        tips: "Anis kann als Tee oder als Gewürz verwendet werden."
    },
    {
        name: "3. Zitronengras",
        image: "/images/zitronengras.jpg",
        meaning: "Wirkung: Erfrischend und klärend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin erfrischt und klar.'",
        meditation: "Fokussiere dich auf die erfrischende Wirkung von Zitronengras, um dein Solarplexus-Chakra zu beleben.",
        tips: "Zitronengras kann als Tee oder in der Küche verwendet werden."
    },
    {
        name: "4. Kardamom",
        image: "/images/kardamom.jpg",
        meaning: "Wirkung: Verdauungsfördernd und belebend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin vital und klar.'",
        meditation: "Nutze die belebende Kraft von Kardamom, um dein Solarplexus-Chakra zu stärken.",
        tips: "Kardamom kann in Tees oder als Gewürz in Speisen verwendet werden."
    },
    {
        name: "5. Petersilie",
        image: "/images/petersilie.jpg",
        meaning: "Wirkung: Entgiftend und belebend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin rein und voller Energie.'",
        meditation: "Fokussiere dich auf die entgiftende Wirkung von Petersilie, um dein Solarplexus-Chakra zu reinigen.",
        tips: "Petersilie kann frisch in Salaten oder Smoothies verwendet werden."
    },
    {
        name: "6. Kamille",
        image: "/images/kamille.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich finde Ruhe und Heilung in meinem Inneren.'",
        meditation: "Nutze die heilende Kraft von Kamille, um dein Solarplexus-Chakra zu beruhigen.",
        tips: "Kamille kann als Tee oder in Hautpflegeprodukten verwendet werden."
    },
    {
        name: "7. Johanniskraut",
        image: "/images/johanniskraut.jpg",
        meaning: "Wirkung: Stimmungsaufhellend und schützend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin voller Licht und Freude.'",
        meditation: "Visualisiere die lichtbringende Wirkung von Johanniskraut, um dein Solarplexus-Chakra zu stärken.",
        tips: "Johanniskraut kann als Tee oder als Öl verwendet werden."
    },
    {
        name: "8. Pfefferminze",
        image: "/images/pfefferminze.jpg",
        meaning: "Wirkung: Erfrischend und klärend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin erfrischt und klar.'",
        meditation: "Fokussiere dich auf die klärende Wirkung von Pfefferminze, um dein Solarplexus-Chakra zu beleben.",
        tips: "Pfefferminze kann als Tee, als Öl oder in der Küche verwendet werden."
    },
    {
        name: "9. Zitronenmelisse",
        image: "/images/zitronenmelisse.jpg",
        meaning: "Wirkung: Beruhigend und ausgleichend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich finde Balance und Harmonie in meinem Inneren.'",
        meditation: "Nutze die ausgleichende Wirkung von Zitronenmelisse, um dein Solarplexus-Chakra zu harmonisieren.",
        tips: "Zitronenmelisse kann als Tee oder in Hautpflegeprodukten verwendet werden."
    },
    {
        name: "10. Fenchel",
        image: "/images/fenchel.jpg",
        meaning: "Wirkung: Verdauungsfördernd und beruhigend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich finde Ruhe und Harmonie in meinem Körper.'",
        meditation: "Visualisiere die beruhigende Wirkung von Fenchel, um dein Solarplexus-Chakra zu stabilisieren.",
        tips: "Fenchel kann als Tee oder als Gewürz verwendet werden."
    },
    {
        name: "11. Wermut",
        image: "/images/wermut.jpg",
        meaning: "Wirkung: Verdauungsfördernd und stärkend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin stark und stabil.'",
        meditation: "Nutze die stärkende Wirkung von Wermut, um dein Solarplexus-Chakra zu kräftigen.",
        tips: "Wermut kann als Tee oder als Bitter verwendet werden."
    },
    {
        name: "12. Gelbwurz",
        image: "/images/gelbwurz.jpg",
        meaning: "Wirkung: Entzündungshemmend und klärend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin voller Kraft und Klarheit.'",
        meditation: "Nutze die klärende Kraft von Gelbwurz, um dein Solarplexus-Chakra zu reinigen.",
        tips: "Gelbwurz kann in Tees, als Gewürz oder in goldener Milch verwendet werden."
    },
    {
        name: "13. Löwenzahn",
        image: "/images/loewenzahn.jpg",
        meaning: "Wirkung: Entgiftend und stärkend. Chakra: Solarplexus-Chakra (Manipura). Affirmation: 'Ich bin gereinigt und gestärkt.'",
        meditation: "Visualisiere die reinigende Wirkung von Löwenzahn, um dein Solarplexus-Chakra zu stärken.",
        tips: "Löwenzahn kann in Tees oder als Gemüse verwendet werden."
    },

    // Herzchakra (Anahata)
    {
        name: "1. Rosenblätter",
        image: "/images/rosenblaetter.jpg",
        meaning: "Wirkung: Öffnend und heilend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist offen und voller Liebe.'",
        meditation: "Fokussiere dich auf die öffnende Wirkung von Rosenblättern, um dein Herzchakra zu heilen.",
        tips: "Rosenblätter können in Tees oder als Badezusatz verwendet werden."
    },
    {
        name: "2. Jasmin",
        image: "/images/jasmin.jpg",
        meaning: "Wirkung: Beruhigend und harmonisierend. Chakra: Herzchakra (Anahata). Affirmation: 'Ich finde Frieden und Harmonie in meinem Herzen.'",
        meditation: "Visualisiere die beruhigende Wirkung von Jasmin, um dein Herzchakra zu harmonisieren.",
        tips: "Jasmin kann als Tee oder als Duftöl verwendet werden."
    },
    {
        name: "3. Lindenblüten",
        image: "/images/lindenblueten.jpg",
        meaning: "Wirkung: Beruhigend und herzöffnend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist ruhig und offen für Liebe.'",
        meditation: "Nutze die beruhigende Kraft von Lindenblüten, um dein Herzchakra zu öffnen.",
        tips: "Lindenblüten können als Tee oder in Bädern verwendet werden."
    },
    {
        name: "4. Basilikum",
        image: "/images/basilikum.jpg",
        meaning: "Wirkung: Stärkend und ausgleichend. Chakra: Herzchakra (Anahata). Affirmation: 'Ich bin stark und finde Balance in meinem Herzen.'",
        meditation: "Fokussiere dich auf die ausgleichende Wirkung von Basilikum, um dein Herzchakra zu stärken.",
        tips: "Basilikum kann frisch in Salaten oder in Tees verwendet werden."
    },
    {
        name: "5. Aloe Vera",
        image: "/images/aloe_vera.jpg",
        meaning: "Wirkung: Heilend und beruhigend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist geheilt und ruhig.'",
        meditation: "Visualisiere die heilende Kraft von Aloe Vera, um dein Herzchakra zu beruhigen.",
        tips: "Aloe Vera kann äußerlich zur Hautpflege oder innerlich als Saft verwendet werden."
    },
    {
        name: "6. Eisenkraut",
        image: "/images/eisenkraut.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist geschützt und heil.'",
        meditation: "Nutze die schützende Kraft von Eisenkraut, um dein Herzchakra zu heilen.",
        tips: "Eisenkraut kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "7. Gänseblümchen",
        image: "/images/gaensebluemchen.jpg",
        meaning: "Wirkung: Beruhigend und stärkend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist ruhig und stark.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Gänseblümchen, um dein Herzchakra zu stärken.",
        tips: "Gänseblümchen können als Tee oder als Zutat in Salaten verwendet werden."
    },
    {
        name: "8. Klette",
        image: "/images/klette.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist geschützt und heil.'",
        meditation: "Visualisiere die schützende Kraft von Klette, um dein Herzchakra zu heilen.",
        tips: "Klette kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "9. Eibischwurzel",
        image: "/images/eibischwurzel.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist ruhig und heil.'",
        meditation: "Nutze die beruhigende Kraft von Eibischwurzel, um dein Herzchakra zu heilen.",
        tips: "Eibischwurzel kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "10. Melisse",
        image: "/images/melissa.jpg",
        meaning: "Wirkung: Beruhigung und Balance. Chakra: Herzchakra (Anahata). Affirmation: 'Ich finde Ruhe und Ausgeglichenheit in meinem Herzen.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung der Melisse, um dein Herzchakra zu stabilisieren und emotionale Balance zu finden.",
        tips: "Melisse kann in Tees oder als ätherisches Öl zur Beruhigung und Unterstützung der Verdauung verwendet werden."
    },
    {
        name: "11. Lavendel",
        image: "/images/lavendel.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist ruhig und heil.'",
        meditation: "Visualisiere die beruhigende Wirkung von Lavendel, um dein Herzchakra zu heilen.",
        tips: "Lavendel kann als Tee oder als ätherisches Öl verwendet werden."
    },
    {
        name: "12. Mistelzweig",
        image: "/images/mistelzweig.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Herzchakra (Anahata). Affirmation: 'Mein Herz ist geschützt und heil.'",
        meditation: "Nutze die schützende Kraft von Mistelzweig, um dein Herzchakra zu heilen.",
        tips: "Mistelzweig kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "13. Melisse",
        image: "/images/melissa.jpg",
        meaning: "Wirkung: Beruhigung und Balance. Chakra: Herzchakra (Anahata). Affirmation: 'Ich finde Ruhe und Ausgeglichenheit in meinem Herzen.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung der Melisse, um dein Herzchakra zu stabilisieren und emotionale Balance zu finden.",
        tips: "Melisse kann in Tees oder als ätherisches Öl zur Beruhigung und Unterstützung der Verdauung verwendet werden."
    },

    // Kehlchakra (Vishuddha)
    {
        name: "1. Salbei",
        image: "/images/salbei.jpg",
        meaning: "Wirkung: Reinigend und klärend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Ich spreche meine Wahrheit klar und mutig.'",
        meditation: "Fokussiere dich auf die reinigende Wirkung von Salbei, um dein Kehlchakra zu klären.",
        tips: "Salbei kann als Tee, als Gewürz oder als Räucherwerk verwendet werden."
    },
    {
        name: "2. Veilchen",
        image: "/images/veilchen.jpg",
        meaning: "Wirkung: Beruhigend und öffnend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Mein Kehlchakra ist offen und klar.'",
        meditation: "Visualisiere die beruhigende Wirkung von Veilchen, um dein Kehlchakra zu öffnen.",
        tips: "Veilchen können als Tee oder in Hautpflegeprodukten verwendet werden."
    },
    {
        name: "3. Holunderblüten",
        image: "/images/holunderblueten.jpg",
        meaning: "Wirkung: Schützend und öffnend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Ich drücke meine Wahrheit klar und mutig aus.'",
        meditation: "Nutze die öffnende Wirkung von Holunderblüten, um dein Kehlchakra zu aktivieren.",
        tips: "Holunderblüten können als Tee oder in Sirup verwendet werden."
    },
    {
        name: "4. Schlüsselblume",
        image: "/images/schluesselblume.jpg",
        meaning: "Wirkung: Beruhigend und öffnend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Ich finde Frieden und Klarheit in meiner Kommunikation.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Schlüsselblume, um dein Kehlchakra zu öffnen.",
        tips: "Schlüsselblume kann als Tee oder als Öl verwendet werden."
    },
    {
        name: "5. Eibisch",
        image: "/images/eibisch.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Kommunikation ist klar und liebevoll.'",
        meditation: "Nutze die heilende Kraft von Eibisch, um dein Kehlchakra zu klären.",
        tips: "Eibisch kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "6. Thymian",
        image: "/images/thymian.jpg",
        meaning: "Wirkung: Reinigend und stärkend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Ich drücke meine Wahrheit klar und mutig aus.'",
        meditation: "Visualisiere die reinigende Wirkung von Thymian, um dein Kehlchakra zu stärken.",
        tips: "Thymian kann als Tee oder in der Küche verwendet werden."
    },
    {
        name: "7. Pfefferminze",
        image: "/images/pfefferminze.jpg",
        meaning: "Wirkung: Erfrischend und klärend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Stimme ist klar und stark.'",
        meditation: "Fokussiere dich auf die klärende Wirkung von Pfefferminze, um dein Kehlchakra zu beleben.",
        tips: "Pfefferminze kann als Tee, als Öl oder in der Küche verwendet werden."
    },
    {
        name: "8. Kamille",
        image: "/images/kamille.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Kommunikation ist friedvoll und klar.'",
        meditation: "Nutze die heilende Kraft von Kamille, um dein Kehlchakra zu beruhigen.",
        tips: "Kamille kann als Tee oder in Hautpflegeprodukten verwendet werden."
    },
    {
        name: "9. Lavendel",
        image: "/images/lavendel.jpg",
        meaning: "Wirkung: Beruhigend und klärend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Worte sind ruhig und klar.'",
        meditation: "Fokussiere dich auf die klärende Wirkung von Lavendel, um dein Kehlchakra zu harmonisieren.",
        tips: "Lavendel kann als Tee oder als ätherisches Öl verwendet werden."
    },
    {
        name: "10. Eukalyptus",
        image: "/images/eukalyptus.jpg",
        meaning: "Wirkung: Klärend und öffnend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Stimme ist klar und stark.'",
        meditation: "Visualisiere die öffnende Wirkung von Eukalyptus, um dein Kehlchakra zu stärken.",
        tips: "Eukalyptus kann als Tee oder in der Aromatherapie verwendet werden."
    },
    {
        name: "11. Fenchel",
        image: "/images/fenchel.jpg",
        meaning: "Wirkung: Verdauungsfördernd und beruhigend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Kommunikation ist klar und ruhig.'",
        meditation: "Nutze die beruhigende Wirkung von Fenchel, um dein Kehlchakra zu stabilisieren.",
        tips: "Fenchel kann als Tee oder als Gewürz verwendet werden."
    },
    {
        name: "12. Wermut",
        image: "/images/wermut.jpg",
        meaning: "Wirkung: Verdauungsfördernd und stärkend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Stimme ist klar und stark.'",
        meditation: "Nutze die stärkende Wirkung von Wermut, um dein Kehlchakra zu kräftigen.",
        tips: "Wermut kann als Tee oder als Bitter verwendet werden."
    },
    {
        name: "13. Myrrhe",
        image: "/images/myrrhe.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Kehlchakra (Vishuddha). Affirmation: 'Meine Worte sind wahrhaftig und stark.'",
        meditation: "Nutze die schützende Kraft von Myrrhe, um dein Kehlchakra zu heilen.",
        tips: "Myrrhe kann als Räucherwerk oder in ätherischen Ölen verwendet werden."
    },

    // Drittes Auge (Ajna)
    {
        name: "1. Muskatnuss",
        image: "/images/muskatnuss.jpg",
        meaning: "Wirkung: Beruhigend und klärend. Chakra: Drittes Auge (Ajna). Affirmation: 'Meine Gedanken sind klar und fokussiert.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Muskatnuss, um dein Drittes Auge zu klären.",
        tips: "Muskatnuss kann als Gewürz in Speisen oder in kleinen Mengen als Tee verwendet werden."
    },
    {
        name: "2. Weißer Salbei",
        image: "/images/weisser_salbei.jpg",
        meaning: "Wirkung: Reinigend und klärend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist rein und klar.'",
        meditation: "Nutze die reinigende Kraft von Weißem Salbei, um dein Drittes Auge zu klären.",
        tips: "Weißer Salbei kann als Räucherwerk verwendet werden."
    },
    {
        name: "3. Heilziest",
        image: "/images/heilziest.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist geschützt und klar.'",
        meditation: "Visualisiere die schützende Kraft von Heilziest, um dein Drittes Auge zu stärken.",
        tips: "Heilziest kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "4. Holunderbeere",
        image: "/images/holunderbeere.jpg",
        meaning: "Wirkung: Immunstärkend und schützend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist geschützt und stark.'",
        meditation: "Nutze die schützende Kraft von Holunderbeere, um dein Drittes Auge zu stärken.",
        tips: "Holunderbeere kann als Sirup oder Tee verwendet werden."
    },
    {
        name: "5. Ginkgo",
        image: "/images/ginkgo.jpg",
        meaning: "Wirkung: Gedächtnisfördernd und schützend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist scharf und fokussiert.'",
        meditation: "Fokussiere dich auf die gedächtnisfördernde Wirkung von Ginkgo, um dein Drittes Auge zu stärken.",
        tips: "Ginkgo kann als Tee oder Nahrungsergänzungsmittel verwendet werden."
    },
    {
        name: "6. Rosmarin",
        image: "/images/rosmarin.jpg",
        meaning: "Wirkung: Klärend und belebend. Chakra: Drittes Auge (Ajna). Affirmation: 'Meine Gedanken sind klar und fokussiert.'",
        meditation: "Nutze die klärende Wirkung von Rosmarin, um dein Drittes Auge zu beleben.",
        tips: "Rosmarin kann als Gewürz in Speisen oder als Tee verwendet werden."
    },
    {
        name: "7. Lavendel",
        image: "/images/lavendel.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist ruhig und klar.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Lavendel, um dein Drittes Auge zu klären.",
        tips: "Lavendel kann als Tee oder als ätherisches Öl verwendet werden."
    },
    {
        name: "8. Kardamom",
        image: "/images/kardamom.jpg",
        meaning: "Wirkung: Verdauungsfördernd und belebend. Chakra: Drittes Auge (Ajna). Affirmation: 'Meine Gedanken sind klar und fokussiert.'",
        meditation: "Nutze die belebende Kraft von Kardamom, um dein Drittes Auge zu stärken.",
        tips: "Kardamom kann in Tees oder als Gewürz in Speisen verwendet werden."
    },
    {
        name: "9. Fenchel",
        image: "/images/fenchel.jpg",
        meaning: "Wirkung: Verdauungsfördernd und beruhigend. Chakra: Drittes Auge (Ajna). Affirmation: 'Meine Gedanken sind klar und ruhig.'",
        meditation: "Visualisiere die beruhigende Wirkung von Fenchel, um dein Drittes Auge zu stabilisieren.",
        tips: "Fenchel kann als Tee oder als Gewürz verwendet werden."
    },
    {
        name: "10. Eukalyptus",
        image: "/images/eukalyptus.jpg",
        meaning: "Wirkung: Klärend und öffnend. Chakra: Drittes Auge (Ajna). Affirmation: 'Meine Gedanken sind klar und fokussiert.'",
        meditation: "Visualisiere die öffnende Wirkung von Eukalyptus, um dein Drittes Auge zu stärken.",
        tips: "Eukalyptus kann als Tee oder in der Aromatherapie verwendet werden."
    },
    {
        name: "11. Kurkuma",
        image: "/images/kurkuma.jpg",
        meaning: "Wirkung: Entzündungshemmend und klärend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist klar und fokussiert.'",
        meditation: "Nutze die klärende Wirkung von Kurkuma, um dein Drittes Auge zu reinigen.",
        tips: "Kurkuma kann in Tees, als Gewürz oder in goldener Milch verwendet werden."
    },
    {
        name: "12. Schafgarbe",
        image: "/images/schafgarbe.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist geschützt und klar.'",
        meditation: "Visualisiere die schützende Kraft von Schafgarbe, um dein Drittes Auge zu stärken.",
        tips: "Schafgarbe kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "13. Holunderbeere",
        image: "/images/holunderbeere.jpg",
        meaning: "Wirkung: Immunstärkend und schützend. Chakra: Drittes Auge (Ajna). Affirmation: 'Mein Geist ist geschützt und stark.'",
        meditation: "Nutze die schützende Kraft von Holunderbeere, um dein Drittes Auge zu stärken.",
        tips: "Holunderbeere kann als Sirup oder Tee verwendet werden."
    },

    // Kronenchakra (Sahasrara)
    {
        name: "1. Lotusblüte",
        image: "/images/lotusbluete.jpg",
        meaning: "Wirkung: Öffnend und erleuchtend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist offen für das Göttliche.'",
        meditation: "Fokussiere dich auf die öffnende Wirkung der Lotusblüte, um dein Kronenchakra zu aktivieren.",
        tips: "Lotusblüten können in Tees oder als Symbol in der Meditation verwendet werden."
    },
    {
        name: "2. Mistelzweig",
        image: "/images/mistelzweig.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist geschützt und erleuchtet.'",
        meditation: "Nutze die schützende Kraft von Mistelzweig, um dein Kronenchakra zu heilen.",
        tips: "Mistelzweig kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "3. Weißer Tee",
        image: "/images/weisser_tee.jpg",
        meaning: "Wirkung: Klärend und erfrischend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist klar und ruhig.'",
        meditation: "Fokussiere dich auf die klärende Wirkung von Weißem Tee, um dein Kronenchakra zu reinigen.",
        tips: "Weißer Tee kann als Getränk zur Stärkung des Kronenchakras verwendet werden."
    },
    {
        name: "4. Myrrhe",
        image: "/images/myrrhe.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist geschützt und erleuchtet.'",
        meditation: "Nutze die schützende Kraft von Myrrhe, um dein Kronenchakra zu heilen.",
        tips: "Myrrhe kann als Räucherwerk oder in ätherischen Ölen verwendet werden."
    },
    {
        name: "5. Kiefernnadel",
        image: "/images/kiefernnadel.jpg",
        meaning: "Wirkung: Reinigend und stärkend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist klar und fokussiert.'",
        meditation: "Fokussiere dich auf die reinigende Wirkung von Kiefernnadel, um dein Kronenchakra zu reinigen.",
        tips: "Kiefernnadel kann als Tee oder in ätherischen Ölen verwendet werden."
    },
    {
        name: "6. Sandelholz",
        image: "/images/sandelholz.jpg",
        meaning: "Wirkung: Beruhigend und erdend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist ruhig und erleuchtet.'",
        meditation: "Nutze die beruhigende Wirkung von Sandelholz, um dein Kronenchakra zu erden.",
        tips: "Sandelholz kann als Räucherwerk oder in ätherischen Ölen verwendet werden."
    },
    {
        name: "7. Weißer Lotus",
        image: "/images/weisser_lotus.jpg",
        meaning: "Wirkung: Öffnend und erleuchtend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist offen für das Göttliche.'",
        meditation: "Fokussiere dich auf die öffnende Wirkung des Weißen Lotus, um dein Kronenchakra zu aktivieren.",
        tips: "Weißer Lotus kann als Symbol in der Meditation verwendet werden."
    },
    {
        name: "8. Engelwurz",
        image: "/images/engelwurz.jpg",
        meaning: "Wirkung: Schützend und heilend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist geschützt und erleuchtet.'",
        meditation: "Nutze die schützende Kraft von Engelwurz, um dein Kronenchakra zu heilen.",
        tips: "Engelwurz kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "9. Baldrian",
        image: "/images/baldrian.jpg",
        meaning: "Wirkung: Beruhigend und schlaffördernd. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist ruhig und entspannt.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Baldrian, um dein Kronenchakra zu entspannen.",
        tips: "Baldrian kann als Tee oder in Kräutermischungen verwendet werden."
    },
    {
        name: "10. Myrte",
        image: "/images/myrte.jpg",
        meaning: "Wirkung: Klärend und schützend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist klar und geschützt.'",
        meditation: "Nutze die klärende Wirkung von Myrte, um dein Kronenchakra zu reinigen.",
        tips: "Myrte kann als Tee oder in ätherischen Ölen verwendet werden."
    },
    {
        name: "11. Lavendel",
        image: "/images/lavendel.jpg",
        meaning: "Wirkung: Beruhigend und heilend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist ruhig und klar.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Lavendel, um dein Kronenchakra zu klären.",
        tips: "Lavendel kann als Tee oder als ätherisches Öl verwendet werden."
    },
    {
        name: "12. Weißer Salbei",
        image: "/images/weisser_salbei.jpg",
        meaning: "Wirkung: Reinigend und klärend. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist rein und klar.'",
        meditation: "Nutze die reinigende Kraft von Weißem Salbei, um dein Kronenchakra zu klären.",
        tips: "Weißer Salbei kann als Räucherwerk verwendet werden."
    },
    {
        name: "13. Baldrian",
        image: "/images/baldrian.jpg",
        meaning: "Wirkung: Beruhigend und schlaffördernd. Chakra: Kronenchakra (Sahasrara). Affirmation: 'Mein Geist ist ruhig und entspannt.'",
        meditation: "Fokussiere dich auf die beruhigende Wirkung von Baldrian, um dein Kronenchakra zu entspannen.",
        tips: "Baldrian kann als Tee oder in Kräutermischungen verwendet werden."
    }
];

export default plants;
