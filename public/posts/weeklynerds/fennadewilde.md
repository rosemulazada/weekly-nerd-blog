
## Who is Fenna?
-   Creative front end developer
-   Momenteel werkend bij Bakken en Baeck
-   Land of Ride (nice inspo website).
-   Heeft gewerkt bij Phantom (cryptocurrency)
-   Haar 'setup':
    -   Emotion: CSS-in-JS library
    -   Vercel for deploying
    -   Sanity CMS
    -   React
        -   Framer motion als animatie library voor React
    -   React-focus-lock: Beheert de focus binnen een opgegeven bereik in een React-applicatie, zoals een modal venster, om de focus te beperken voor toegankelijkheid.
        -   React-aria-components: Een library met toegankelijke React-componenten die voldoen aan ARIA-standaarden voor het bouwen van inclusieve webapplicaties.

**Fenna, Phantom en toegankelijkheid**

-   Toegankelijkheid was geen eis maar was de eigen motivatie van Fenna
-   In het professionele leven word toegankelijkheid niet serieus genomen en er wordt overheen gekeken. Esthetiek en vloeiende animaties krijgen vaak alle aandacht en prioriteit.

**Wat ze altijd _in ieder geval_ meeneemt in haar werk**

-   Focus state voor keyboard users -> `:focus-visible.`
    -   `:focus-visible` doet het alleen met een keyboard focus of iets dat niet met touch input te maken heeft, zoals bijv in JavaScript focus aanroepen
-   aria-attributes
-   toegankelijke carousels
-   focus guards en esc key configuratie voor modals en overlays
-   goede kleurcontrasten, lettergroottes en lijnlengtes
    -   Hiervoor gebruikt zij Lighthouse audit: een kleurcontrast checker.
    -   Ook in DevTools krijg je een waarschuwing als het contrast niet goed genoeg is.

**Aria-attributes: deep dive**

1. `aria-controls`: Dit attribuut wordt gebruikt om de relatie tussen twee elementen aan te geven waarbij het ene element controle heeft over het andere. Het element dat de aria-controls heeft, beïnvloedt of toont het gecontroleerde element. Dit kan handig zijn voor bijvoorbeeld tabbladen, waar één tabblad de inhoud van een ander tabblad controleert.
2. `aria-live`: Dit attribuut wordt gebruikt om aan te geven hoe dynamische veranderingen in de inhoud van een element moeten worden aangekondigd aan screenreaders. Het heeft drie waarden:
    - `off`: Er worden geen automatische aankondigingen gedaan.
    - `polite`: Aankondigingen worden gedaan als er een natuurlijke onderbreking in de spraak van de screenreader is.
    - `assertive`: Aankondigingen worden onmiddellijk gedaan, zelfs als er sprake is van actieve spraak. (Deze vindt Fenna best heftig en heeft ze ook nooit gebruikt/hoeven gebruiken).
3. `aria-atomic`: Dit attribuut werkt samen met `aria-live`. Als `aria-atomic` is ingesteld op `true`, betekent dit dat de gehele inhoud van het gecontroleerde element moet worden beschouwd als één enkele wijziging. Zonder `aria-atomic` zou alleen de gewijzigde informatie worden aangekondigd.
    - In het voorbeeld wat Fenna heeft gegeven wordt `aria-live` gebruikt om aan te geven dat dynamische veranderingen onmiddellijk moeten worden aangekondigd aan screenreaders. Dit is belangrijk in situaties waarin de inhoud van een element (bijvoorbeeld een score) dynamisch kan veranderen, en `aria-atomic` wordt mogelijk gebruikt om ervoor te zorgen dat de volledige inhoud als één wijziging wordt beschouwd.

**Alt image generator**
Omdat toegankelijkheid zo weinig serieus genomen wordt door developers, heeft ze geprobeerd om een methode te achterhalen waarmee bijvoorbeeld alt teksten automatisch gegenereerd kunnen worden. Maar helaas is AI nog niet ver genoeg om nuttige alt tekst toe te voegen, sterker nog, in het voorbeeld dat ze toonde was het heel erg het tegenovergestelde.. (Een afbeelding van een man in een rolstoel die voor een trap staat, met de alt tekst 'man in wheelchair goes up staircase.' Klopt niet helemaal).

**Laatste tips en dingen om mee te nemen qua toegankelijkheid**

-   Alle autoplay videos moet gepauzeerd kunnen worden
    **- Gebruik zelf een screenreader om te testen of je website echt toegankelijk is of niet!**
-   Voeg een 'skip to main content' button toe, dit hebben alle belangrijkste websites zoals bijvoorbeeld YouTube. - Uberhaubt content kunnen skippen is belangrijk: stel je hebt een carousel van 20 images, je wilt niet dat de user daar verplicht doorheen moet. - Extra puntje: als je een carousel hebt, moet de screenreader de elementen die off-screen staan niet oplezen.

### Reflectie

Ik heb altijd veel waarde gehecht aan toegankelijkheid en probeer het altijd mee te nemen in mijn projecten, maar ik had geen idee was dat er zoveel dingen waren waar ik niet vanaf wist of waarvan ik niet wist dat daar rekening mee gehouden moet worden voor screenreaders, bijvoorbeeld met de `aria-live.` Ik heb al eerder gehoord dat in het bedrijfsleven de semantiek en toegankelijkheid vaak vergeten worden (of juist expres genegeerd worden), maar ik wist niet hoe erg het precies was. Ik zal zeker proberen om, wanneer ik een website design, voorafgaand aan het coderen rekening zal houden met de puntjes die zij hier heeft toegelicht; ik vind het fijn dat ze een lijstje heeft meegegeven met dingen waar ze altijd naar kijkt, dit helpt vor mij om te beginnen met meer bewust zijn over toegankelijkheid.
