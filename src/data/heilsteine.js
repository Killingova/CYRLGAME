const heilsteine = [
    // Geistige Klarheit und Fokus
    {
        name: "Amethyst",
        image: "/images/amethyst.jpg",
        meaning: "Farbe: Violett, Wirkung: Geistige Klarheit und Fokus, Chakra: Kronenchakra, Härtegrad: 7",
        meditation: "Visualisiere, wie der Amethyst dein Kronenchakra öffnet und Klarheit sowie spirituelles Bewusstsein fördert.",
        tips: "Platziere einen Amethysten in deinem Arbeits- oder Meditationsraum, um Konzentration und geistige Klarheit zu unterstützen."
    },
    {
        name: "Bergkristall",
        image: "/images/bergkristall.jpg",
        meaning: "Farbe: Klar, Wirkung: Geistige Klarheit und Fokus, Chakra: Kronenchakra, Härtegrad: 7",
        meditation: "Stelle dir vor, wie der Bergkristall reines und klares Bewusstsein in dein Leben bringt.",
        tips: "Nutze den Bergkristall als Teil deiner täglichen Meditation, um geistige Klarheit zu fördern."
    },
    {
        name: "Fluorit",
        image: "/images/fluorit.jpg",
        meaning: "Farbe: Grün, Violett, Blau, Wirkung: Geistige Klarheit und Fokus, Chakra: Stirnchakra, Härtegrad: 4",
        meditation: "Konzentriere dich auf dein Stirnchakra und lasse den Fluorit deine Gedanken ordnen und klären.",
        tips: "Halte einen Fluorit in deinem Studier- oder Arbeitsbereich, um Konzentration und Verarbeitung komplexer Informationen zu verbessern."
    },
    {
        name: "Sodalith",
        image: "/images/sodalith.jpg",
        meaning: "Farbe: Blau, Wirkung: Geistige Klarheit und Fokus, Chakra: Halschakra, Härtegrad: 5.5-6",
        meditation: "Fokussiere dich auf dein Halschakra und spüre, wie Sodalith deine Kommunikationsfähigkeiten verbessert.",
        tips: "Trage Sodalith bei wichtigen Gesprächen oder Präsentationen, um deine Ausdruckskraft zu stärken."
    },
    {
        name: "Zirkon",
        image: "/images/zirkon.jpg",
        meaning: "Farbe: Verschiedene Farben, Wirkung: Geistige Klarheit und Fokus, Chakra: Kronenchakra, Härtegrad: 7.5",
        meditation: "Nutze die Energie des Zirkons, um mentale Barrieren zu überwinden und klare Ziele zu setzen.",
        tips: "Halte einen Zirkon bei dir, um deine Ziele mit Entschlossenheit und Klarheit zu verfolgen."
    },
    {
        name: "Topas",
        image: "/images/topas.jpg",
        meaning: "Farbe: Blau, Gelb, Klar, Wirkung: Geistige Klarheit und Fokus, Chakra: Solarplexuschakra, Härtegrad: 8",
        meditation: "Visualisiere, wie der Topas dein Solarplexuschakra stärkt und dir hilft, deine persönlichen und beruflichen Ziele zu erreichen.",
        tips: "Trage Topas, um deine Entschlossenheit zu steigern und deine Ziele zu erreichen."
    },
    {
        name: "Aquamarin",
        image: "/images/aquamarin.jpg",
        meaning: "Farbe: Blau, Wirkung: Geistige Klarheit und Fokus, Chakra: Halschakra, Härtegrad: 7.5-8",
        meditation: "Visualisiere, wie der Aquamarin dein Halschakra öffnet und deine Kommunikationsfähigkeiten verbessert.",
        tips: "Trage Aquamarin bei dir, um Klarheit in der Kommunikation zu fördern, besonders in schwierigen Gesprächen."
    },
    // Liebe und Mitgefühl
    {
        name: "Rosenquarz",
        image: "/images/rosenquarz.jpg",
        meaning: "Farbe: Rosa, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 7",
        meditation: "Konzentriere dich auf dein Herzchakra und fühle, wie Rosenquarz Liebe und Mitgefühl in deinem Leben vermehrt.",
        tips: "Platziere Rosenquarz in deinem Wohnraum oder trage ihn bei dir, um positive, liebevolle Energie zu fördern."
    },
    {
        name: "Kunzit",
        image: "/images/kunzit.jpg",
        meaning: "Farbe: Rosa bis Violett, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 6-7",
        meditation: "Meditiere mit Kunzit, um emotionale Barrieren zu überwinden und Herzlichkeit zu fördern.",
        tips: "Halte Kunzit in deiner Nähe, wenn du emotionale Heilung suchst oder deine zwischenmenschlichen Beziehungen verbessern möchtest."
    },
    {
        name: "Morganit",
        image: "/images/morganit.jpg",
        meaning: "Farbe: Rosa, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 7.5-8",
        meditation: "Fokussiere dich auf die sanfte Energie des Morganits, um Liebe zu kultivieren und emotionale Wunden zu heilen.",
        tips: "Trage Morganit als Schmuck, um seine liebende Energie den ganzen Tag über zu spüren."
    },
    {
        name: "Rhodonit",
        image: "/images/rhodonit.jpg",
        meaning: "Farbe: Rosa, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 5.5-6.5",
        meditation: "Nutze Rhodonit, um dein Herzchakra zu öffnen und Vergebung sowie Verständnis zu fördern.",
        tips: "Bewahre einen Rhodonit in deiner Umgebung auf, um Harmonie und Frieden zu unterstützen."
    },
    {
        name: "Rubellit",
        image: "/images/rubellit.jpg",
        meaning: "Farbe: Rot bis Rosa, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 7-7.5",
        meditation: "Meditiere mit Rubellit, um leidenschaftliche Liebe und emotionale Wärme zu fördern.",
        tips: "Trage Rubellit, um deine emotionale Ausdruckskraft und Herzenswärme zu steigern."
    },
    {
        name: "Dioptas",
        image: "/images/dioptas.jpg",
        meaning: "Farbe: Grün, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 5",
        meditation: "Fokussiere dich auf das Herzchakra und spüre, wie Dioptas Mitgefühl und Verständnis in deinem Herzen stärkt.",
        tips: "Halte Dioptas in deinem Wohn- oder Arbeitsbereich, um eine Atmosphäre der Herzlichkeit und des Verstehens zu schaffen."
    },
    {
        name: "Smaragd",
        image: "/images/smaragd.jpg",
        meaning: "Farbe: Grün, Wirkung: Liebe und Mitgefühl, Chakra: Herzchakra, Härtegrad: 7.5-8",
        meditation: "Fokussiere dich auf dein Herzchakra und spüre, wie der Smaragd Liebe und Mitgefühl in deinem Leben verstärkt.",
        tips: "Trage den Smaragd nahe deinem Herzen, um die emotionale Heilung zu fördern und zwischenmenschliche Beziehungen zu stärken."
    },
    // Schutz und Erdung
    {
        name: "Schwarzer Turmalin",
        image: "/images/schwarzer_turmalin.jpg",
        meaning: "Farbe: Schwarz, Wirkung: Schutz und Erdung, Chakra: Wurzelchakra, Härtegrad: 7-7.5",
        meditation: "Visualisiere, wie schwarzer Turmalin negative Energie absorbiert und dich erdet.",
        tips: "Halte schwarzen Turmalin in deinem Zuhause, um Schutz und Stabilität zu gewährleisten."
    },
    {
        name: "Obsidian",
        image: "/images/obsidian.jpg",
        meaning: "Farbe: Schwarz, Wirkung: Schutz und Erdung, Chakra: Wurzelchakra, Härtegrad: 5-5.5",
        meditation: "Nutze Obsidian, um tief sitzende Blockaden zu lösen und emotionale Heilung zu fördern.",
        tips: "Trage Obsidian als Schutzschild gegen negative Energien."
    },
    {
        name: "Hämatit",
        image: "/images/haematit.jpg",
        meaning: "Farbe: Grau bis Schwarz, Wirkung: Schutz und Erdung, Chakra: Wurzelchakra, Härtegrad: 5.5-6.5",
        meditation: "Meditiere mit Hämatit, um dich zu erden und innere Stärke zu entwickeln.",
        tips: "Bewahre Hämatit in deiner Tasche, um geerdet und zentriert zu bleiben."
    },
    {
        name: "Onyx",
        image: "/images/onyx.jpg",
        meaning: "Farbe: Schwarz, Wirkung: Schutz und Erdung, Chakra: Wurzelchakra, Härtegrad: 6.5-7",
        meditation: "Visualisiere, wie Onyx dich mit stabilisierender Energie versorgt und schützt.",
        tips: "Trage Onyx, um dich vor negativen Einflüssen zu schützen und inneren Frieden zu finden."
    },
    {
        name: "Rauchquarz",
        image: "/images/rauchquarz.jpg",
        meaning: "Farbe: Braun, Wirkung: Schutz und Erdung, Chakra: Wurzelchakra, Härtegrad: 7",
        meditation: "Fokussiere dich auf die erdende Energie von Rauchquarz, um Stress abzubauen.",
        tips: "Platziere Rauchquarz in deinem Wohnraum, um eine beruhigende und schützende Atmosphäre zu schaffen."
    },
    {
        name: "Pyrit",
        image: "/images/pyrit.jpg",
        meaning: "Farbe: Gold, Wirkung: Schutz und Erdung, Chakra: Solarplexuschakra, Härtegrad: 6-6.5",
        meditation: "Nutze Pyrit, um deine Energiezentren zu stärken und Selbstvertrauen zu gewinnen.",
        tips: "Bewahre Pyrit in deiner Nähe auf, um dich vor negativen Energien zu schützen und positive Schwingungen zu fördern."
    },
    {
        name: "Granat",
        image: "/images/granat.jpg",
        meaning: "Farbe: Rot, Wirkung: Schutz und Erdung, Chakra: Wurzelchakra, Härtegrad: 6.5-7.5",
        meditation: "Meditiere mit Granat, um deine Lebensenergie zu steigern und Schutz zu erfahren.",
        tips: "Trage Granat, um dich geerdet zu fühlen und deine innere Kraft zu stärken."
    },
    // Intuition und spirituelles Wachstum
    {
        name: "Lapislazuli",
        image: "/images/lapislazuli.jpg",
        meaning: "Farbe: Blau, Wirkung: Intuition und spirituelles Wachstum, Chakra: Stirnchakra, Härtegrad: 5-6",
        meditation: "Konzentriere dich auf dein Stirnchakra und spüre, wie Lapislazuli deine Intuition stärkt.",
        tips: "Trage Lapislazuli, um deine spirituelle Entwicklung zu fördern und deine innere Weisheit zu nutzen."
    },
    {
        name: "Tansanit",
        image: "/images/tansanit.jpg",
        meaning: "Farbe: Blau bis Violett, Wirkung: Intuition und spirituelles Wachstum, Chakra: Stirnchakra, Härtegrad: 6.5-7",
        meditation: "Visualisiere, wie Tansanit deine spirituellen Fähigkeiten erweckt und Intuition fördert.",
        tips: "Halte Tansanit während der Meditation, um tiefere Einsichten zu gewinnen."
    },
    {
        name: "Azurit",
        image: "/images/azurit.jpg",
        meaning: "Farbe: Blau, Wirkung: Intuition und spirituelles Wachstum, Chakra: Stirnchakra, Härtegrad: 3.5-4",
        meditation: "Fokussiere dich auf Azurit, um Klarheit und tiefere spirituelle Erkenntnisse zu erlangen.",
        tips: "Bewahre Azurit in deinem Meditationsraum auf, um deine spirituelle Praxis zu vertiefen."
    },
    {
        name: "Sugilith",
        image: "/images/sugilith.jpg",
        meaning: "Farbe: Violett, Wirkung: Intuition und spirituelles Wachstum, Chakra: Kronenchakra, Härtegrad: 6-6.5",
        meditation: "Nutze Sugilith, um dein Kronenchakra zu öffnen und höhere Bewusstseinsebenen zu erreichen.",
        tips: "Trage Sugilith bei dir, um deine spirituelle Reise zu unterstützen und dich mit höheren Energien zu verbinden."
    },
    {
        name: "Labradorit",
        image: "/images/labradorit.jpg",
        meaning: "Farbe: Schillerndes Grau, Wirkung: Intuition und spirituelles Wachstum, Chakra: Stirnchakra, Härtegrad: 6-6.5",
        meditation: "Visualisiere, wie Labradorit dein Stirnchakra aktiviert und deine Intuition verstärkt.",
        tips: "Platziere Labradorit in deinem Meditationsraum, um spirituelle Transformation und innere Stärke zu fördern."
    },
    {
        name: "Mondstein",
        image: "/images/mondstein.jpg",
        meaning: "Farbe: Weiß bis Opal, Wirkung: Intuition und spirituelles Wachstum, Chakra: Sakralchakra, Härtegrad: 6-6.5",
        meditation: "Nutze Mondstein, um emotionale Balance zu finden und deine intuitive Seite zu stärken.",
        tips: "Trage Mondstein, um deine intuitive Weisheit zu fördern und emotionale Klarheit zu erlangen."
    },
    {
        name: "Amethyst",
        image: "/images/amethyst.jpg",
        meaning: "Farbe: Violett, Wirkung: Intuition und spirituelles Wachstum, Chakra: Kronenchakra, Härtegrad: 7",
        meditation: "Visualisiere, wie der Amethyst dein Kronenchakra öffnet und Klarheit sowie spirituelles Bewusstsein fördert.",
        tips: "Platziere einen Amethysten in deinem Arbeits- oder Meditationsraum, um Konzentration und geistige Klarheit zu unterstützen."
    },
    // Heilung und Transformation
    {
        name: "Malachit",
        image: "/images/malachit.jpg",
        meaning: "Farbe: Grün, Wirkung: Heilung und Transformation, Chakra: Herzchakra, Härtegrad: 3.5-4",
        meditation: "Fokussiere dich auf Malachit, um tiefe emotionale Heilung und Transformation zu fördern.",
        tips: "Halte Malachit in deiner Nähe, um Heilung und positive Veränderung zu unterstützen."
    },
    {
        name: "Prehnit",
        image: "/images/prehnit.jpg",
        meaning: "Farbe: Grün, Wirkung: Heilung und Transformation, Chakra: Herzchakra, Härtegrad: 6-6.5",
        meditation: "Nutze Prehnit, um dein Herzchakra zu heilen und emotionale Balance zu finden.",
        tips: "Trage Prehnit, um Heilung und Wachstum in deinem Leben zu fördern."
    },
    {
        name: "Rubin",
        image: "/images/rubin.jpg",
        meaning: "Farbe: Rot, Wirkung: Heilung und Transformation, Chakra: Wurzelchakra, Härtegrad: 9",
        meditation: "Fokussiere dich auf Rubin, um innere Stärke und Heilung zu fördern.",
        tips: "Trage Rubin, um deine Lebensenergie zu steigern und Transformation zu unterstützen."
    },
    {
        name: "Saphir",
        image: "/images/saphir.jpg",
        meaning: "Farbe: Blau, Wirkung: Heilung und Transformation, Chakra: Stirnchakra, Härtegrad: 9",
        meditation: "Meditiere mit Saphir, um spirituelles Wachstum und innere Heilung zu fördern.",
        tips: "Trage Saphir, um deine spirituelle Entwicklung und innere Weisheit zu unterstützen."
    },
    {
        name: "Unakit",
        image: "/images/unakit.jpg",
        meaning: "Farbe: Grün und Rosa, Wirkung: Heilung und Transformation, Chakra: Herzchakra, Härtegrad: 6-7",
        meditation: "Nutze Unakit, um dein Herzchakra zu heilen und emotionale Balance zu finden.",
        tips: "Halte Unakit in deiner Nähe, um Heilung und positive Veränderung zu unterstützen."
    },
    {
        name: "Dioptas",
        image: "/images/dioptas.jpg",
        meaning: "Farbe: Grün, Wirkung: Heilung und Transformation, Chakra: Herzchakra, Härtegrad: 5",
        meditation: "Fokussiere dich auf das Herzchakra und spüre, wie Dioptas Mitgefühl und Verständnis in deinem Herzen stärkt.",
        tips: "Halte Dioptas in deinem Wohn- oder Arbeitsbereich, um eine Atmosphäre der Herzlichkeit und des Verstehens zu schaffen."
    },
    {
        name: "Rhodonit",
        image: "/images/rhodonit.jpg",
        meaning: "Farbe: Rosa, Wirkung: Heilung und Transformation, Chakra: Herzchakra, Härtegrad: 5.5-6.5",
        meditation: "Nutze Rhodonit, um dein Herzchakra zu öffnen und Vergebung sowie Verständnis zu fördern.",
        tips: "Bewahre einen Rhodonit in deiner Umgebung auf, um Harmonie und Frieden zu unterstützen."
    },
    // Kommunikation und Ausdruck
    {
        name: "Türkis",
        image: "/images/tuerkis.jpg",
        meaning: "Farbe: Türkis, Wirkung: Kommunikation und Ausdruck, Chakra: Halschakra, Härtegrad: 5-6",
        meditation: "Visualisiere, wie Türkis dein Halschakra öffnet und deine Kommunikationsfähigkeiten verbessert.",
        tips: "Trage Türkis, um Klarheit in der Kommunikation zu fördern, besonders in schwierigen Gesprächen."
    },
    {
        name: "Angelit",
        image: "/images/angelit.jpg",
        meaning: "Farbe: Hellblau, Wirkung: Kommunikation und Ausdruck, Chakra: Halschakra, Härtegrad: 3.5-4",
        meditation: "Nutze Angelit, um deine Kommunikationsfähigkeiten zu stärken und deine innere Ruhe zu finden.",
        tips: "Trage Angelit, um Klarheit und Ruhe in deiner Kommunikation zu fördern."
    },
    {
        name: "Amazonit",
        image: "/images/amazonit.jpg",
        meaning: "Farbe: Grün, Wirkung: Kommunikation und Ausdruck, Chakra: Herzchakra, Härtegrad: 6-6.5",
        meditation: "Fokussiere dich auf Amazonit, um deine Kommunikationsfähigkeiten zu verbessern und dein Herzchakra zu öffnen.",
        tips: "Trage Amazonit, um deine Kommunikationsfähigkeiten zu stärken und emotionale Balance zu finden."
    },
    {
        name: "Chrysokoll",
        image: "/images/chrysokoll.jpg",
        meaning: "Farbe: Blau bis Grün, Wirkung: Kommunikation und Ausdruck, Chakra: Halschakra, Härtegrad: 2-4",
        meditation: "Nutze Chrysokoll, um deine Kommunikationsfähigkeiten zu stärken und deine innere Ruhe zu finden.",
        tips: "Trage Chrysokoll, um Klarheit und Ruhe in deiner Kommunikation zu fördern."
    },
    {
        name: "Lapislazuli",
        image: "/images/lapislazuli.jpg",
        meaning: "Farbe: Blau, Wirkung: Kommunikation und Ausdruck, Chakra: Stirnchakra, Härtegrad: 5-6",
        meditation: "Konzentriere dich auf dein Stirnchakra und spüre, wie Lapislazuli deine Intuition stärkt.",
        tips: "Trage Lapislazuli, um deine spirituelle Entwicklung zu fördern und deine innere Weisheit zu nutzen."
    },
    {
        name: "Aquamarin",
        image: "/images/aquamarin.jpg",
        meaning: "Farbe: Blau, Wirkung: Kommunikation und Ausdruck, Chakra: Halschakra, Härtegrad: 7.5-8",
        meditation: "Visualisiere, wie der Aquamarin dein Halschakra öffnet und deine Kommunikationsfähigkeiten verbessert.",
        tips: "Trage Aquamarin bei dir, um Klarheit in der Kommunikation zu fördern, besonders in schwierigen Gesprächen."
    },
    {
        name: "Sodalith",
        image: "/images/sodalith.jpg",
        meaning: "Farbe: Blau, Wirkung: Kommunikation und Ausdruck, Chakra: Halschakra, Härtegrad: 5.5-6",
        meditation: "Fokussiere dich auf dein Halschakra und spüre, wie Sodalith deine Kommunikationsfähigkeiten verbessert.",
        tips: "Trage Sodalith bei wichtigen Gesprächen oder Präsentationen, um deine Ausdruckskraft zu stärken."
    },
    // Positivität und Erfolg
    {
        name: "Citrin",
        image: "/images/citrin.jpg",
        meaning: "Farbe: Gelb, Wirkung: Positivität und Erfolg, Chakra: Solarplexuschakra, Härtegrad: 7",
        meditation: "Konzentriere dich darauf, wie der Citrin positive Energie ausstrahlt und dein Selbstvertrauen stärkt.",
        tips: "Halte einen Citrin in deiner Tasche oder am Arbeitsplatz, um Optimismus und Erfolg zu fördern."
    },
    {
        name: "Tigerauge",
        image: "/images/tigerauge.jpg",
        meaning: "Farbe: Goldbraun, Wirkung: Positivität und Erfolg, Chakra: Solarplexuschakra, Härtegrad: 6.5-7",
        meditation: "Visualisiere, wie Tigerauge dein Solarplexuschakra stärkt und dir hilft, deine persönlichen und beruflichen Ziele zu erreichen.",
        tips: "Trage Tigerauge, um deine Entschlossenheit zu steigern und deine Ziele zu erreichen."
    },
    {
        name: "Peridot",
        image: "/images/peridot.jpg",
        meaning: "Farbe: Grün, Wirkung: Positivität und Erfolg, Chakra: Herzchakra, Härtegrad: 6.5-7",
        meditation: "Fokussiere dich auf Peridot, um positive Energie und Erfolg in dein Leben zu ziehen.",
        tips: "Trage Peridot, um Optimismus und Erfolg zu fördern."
    },
    {
        name: "Aventurin",
        image: "/images/aventurin.jpg",
        meaning: "Farbe: Grün, Wirkung: Positivität und Erfolg, Chakra: Herzchakra, Härtegrad: 7",
        meditation: "Visualisiere, wie Aventurin positive Energie und Erfolg in dein Leben zieht.",
        tips: "Trage Aventurin, um Optimismus und Erfolg zu fördern."
    },
    {
        name: "Ametrin",
        image: "/images/ametrin.jpg",
        meaning: "Farbe: Violett und Gelb, Wirkung: Positivität und Erfolg, Chakra: Solarplexus- und Kronenchakra, Härtegrad: 7",
        meditation: "Fokussiere dich auf Ametrin, um positive Energie und Erfolg in dein Leben zu ziehen.",
        tips: "Trage Ametrin, um Optimismus und Erfolg zu fördern."
    },
    {
        name: "Pyrit",
        image: "/images/pyrit.jpg",
        meaning: "Farbe: Gold, Wirkung: Positivität und Erfolg, Chakra: Solarplexuschakra, Härtegrad: 6-6.5",
        meditation: "Nutze Pyrit, um deine Energiezentren zu stärken und Selbstvertrauen zu gewinnen.",
        tips: "Bewahre Pyrit in deiner Nähe auf, um dich vor negativen Energien zu schützen und positive Schwingungen zu fördern."
    },
    {
        name: "Topas",
        image: "/images/topas.jpg",
        meaning: "Farbe: Blau, Gelb, Klar, Wirkung: Positivität und Erfolg, Chakra: Solarplexuschakra, Härtegrad: 8",
        meditation: "Visualisiere, wie der Topas dein Solarplexuschakra stärkt und dir hilft, deine persönlichen und beruflichen Ziele zu erreichen.",
        tips: "Trage Topas, um deine Entschlossenheit zu steigern und deine Ziele zu erreichen."
    },
    // Ruhe und Balance
    {
        name: "Howlith",
        image: "/images/howlith.jpg",
        meaning: "Farbe: Weiß mit grauen Adern, Wirkung: Ruhe und Balance, Chakra: Kronenchakra, Härtegrad: 3.5",
        meditation: "Nutze Howlith, um dein Kronenchakra zu öffnen und innere Ruhe zu finden.",
        tips: "Trage Howlith, um innere Ruhe und Balance zu fördern."
    },
    {
        name: "Mondstein",
        image: "/images/mondstein.jpg",
        meaning: "Farbe: Weiß bis Opal, Wirkung: Ruhe und Balance, Chakra: Sakralchakra, Härtegrad: 6-6.5",
        meditation: "Nutze Mondstein, um emotionale Balance zu finden und deine intuitive Seite zu stärken.",
        tips: "Trage Mondstein, um deine intuitive Weisheit zu fördern und emotionale Klarheit zu erlangen."
    },
    {
        name: "Ametrin",
        image: "/images/ametrin.jpg",
        meaning: "Farbe: Violett und Gelb, Wirkung: Ruhe und Balance, Chakra: Solarplexus- und Kronenchakra, Härtegrad: 7",
        meditation: "Fokussiere dich auf Ametrin, um positive Energie und Erfolg in dein Leben zu ziehen.",
        tips: "Trage Ametrin, um Optimismus und Erfolg zu fördern."
    },
    {
        name: "Aventurin",
        image: "/images/aventurin.jpg",
        meaning: "Farbe: Grün, Wirkung: Ruhe und Balance, Chakra: Herzchakra, Härtegrad: 7",
        meditation: "Visualisiere, wie Aventurin positive Energie und Erfolg in dein Leben zieht.",
        tips: "Trage Aventurin, um Optimismus und Erfolg zu fördern."
    },
    {
        name: "Chrysopras",
        image: "/images/chrysopras.jpg",
        meaning: "Farbe: Grün, Wirkung: Ruhe und Balance, Chakra: Herzchakra, Härtegrad: 6-7",
        meditation: "Fokussiere dich auf Chrysopras, um dein Herzchakra zu öffnen und innere Ruhe zu finden.",
        tips: "Trage Chrysopras, um innere Ruhe und Balance zu fördern."
    },
    {
        name: "Angelit",
        image: "/images/angelit.jpg",
        meaning: "Farbe: Hellblau, Wirkung: Ruhe und Balance, Chakra: Halschakra, Härtegrad: 3.5-4",
        meditation: "Nutze Angelit, um deine Kommunikationsfähigkeiten zu stärken und deine innere Ruhe zu finden.",
        tips: "Trage Angelit, um Klarheit und Ruhe in deiner Kommunikation zu fördern."
    },
    {
        name: "Smaragd",
        image: "/images/smaragd.jpg",
        meaning: "Farbe: Grün, Wirkung: Ruhe und Balance, Chakra: Herzchakra, Härtegrad: 7.5-8",
        meditation: "Fokussiere dich auf dein Herzchakra und spüre, wie der Smaragd Liebe und Mitgefühl in deinem Leben verstärkt.",
        tips: "Trage den Smaragd nahe deinem Herzen, um die emotionale Heilung zu fördern und zwischenmenschliche Beziehungen zu stärken."
    }
];

export default heilsteine;
