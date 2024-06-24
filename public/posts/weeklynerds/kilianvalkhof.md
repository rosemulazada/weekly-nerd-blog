# Kilian Valkhof

07/02: Stop Using JavaScript for That: Moving Features from JavaScript to CSS & HTML.

### Kilian

- Onderdeel van het Electron governance team waarmee je met web development kennis desktop applicaties kunt maken.
- Met Electron maakt hij ook Polypane!

- De browser kan meer dan jij kan met js.
- Volgende keer dat je denkt dat er ergens javascript voor nodig is, check dan of dit ook echt (nogsteeds) waar is.

### The Rule of Least Power

-   De Regel van Minste Kracht is een fundamenteel principe in webontwikkeling, waarbij de keuze voor programmeertalen gebaseerd is op hun mate van kracht. HTML kan het minst, dus daar begin je mee. Als het met HTML niet lukt, ga dan over in CSS, en als het dan niet lukt, kies dan pas voor JavaScript.
    -   JavaScript is het meest breekbaar.
    -   Het is makkelijk om met JavaScript grote bestanden te bouwen => betekent langere laadtijden
    -   Als je JavaScript breekt, breekt je hele website: dit is minder waarschijnlijk bij HTML/CSS.

**Het belang van de browser(makers)**
Browsermakers zijn actief bezig met het luisteren naar de behoeften van ontwikkelaars en implementeren functies die voorheen handmatig werden gebouwd. Innovaties binnen HTML en CSS verminderen de afhankelijkheid van overmatig gebruik van JavaScript. Door nauw samen te werken met browsers, kunnen ontwikkelaars profiteren van verbeterde prestaties en nieuwe mogelijkheden zonder zwaar te leunen op JavaScript.

**Ook belangrijk..**
Oudere JavaScript-code kan nog steeds functioneren, maar het is belangrijk om regelmatig te evalueren of er modernere en betere benaderingen beschikbaar zijn. Onderzoek bij het herbouwen van iets dat eerder is gemaakt, of er verbeterde methoden zijn om hetzelfde resultaat te bereiken.

### LIVE DEMO

**Custom toggles/custom switches**

-   Veel designers willen graag een switch-knop hebben omdat het mooi is. dit moet je inbouwen als developer. I.p.v. ‘React Switch’ te googelen en de eerste te pakken, kan je het ook doen met de checkboxes. Je hoeft dan geen listeners toe te voegen met JavaScript en hoeft niet te denken aan toegankelijkheid omdat de browser het allemaal voor je doet.

**Replaced content: Input systemen**

-   Verschillende besturingssystemen hebben verschillende vormen qua input elementen. Input elementen zijn hierdoor niet erg aanpasbaar qua stijl, browserontwikkelaars werken hier aan.
-   Met `appearance: none` zeg je dat je niet de checkbox wilt van de OS, maar je stijlt het zelf. Nu kun je gebruik maken van een `pseudo-element`: een normaal `input` element kan dit niet gebruiken maar met `appearance: none` wel. `::before` is de ‘thumb’ (cirkeltje), en `::after` is de achtergrond.
-   Je kunt nu ook `:checked {}` gebruiken om te stijlen dat het gechecked is, bijv

    ```css
    ::checked { background-color: green; }

    ::checked::before { transform: translateX(10px)}.
    ```

_Accessibility_
voor screenreaders: `input:focus` werd vroeger gebruikt en `outline:none` ook, maar omdat het een raar vierkant dotted lijntje veroorzaakte vonden designers het niet leuk.
Ondertussen hoeven we geen `:focus` meer te gebruiken maar `input:focus-visible`, dit is ALLEEN voor interactie dat _niet_ met een muis is! Zo kun je stijlen hoe het eruit komt te zien als je een screenreader gebruikt.

Wil je geen focus style voor muis gebruikers? Gebruik dan `outline-color: transparent`; zo zeg je niet dat de outline er niet is. Sommige mensen gebruiken high-contrast mode, en dan is het voor hen nogsteeds zichtbaar.

Sinds een aantal weken kun je in safari doen `input[type=“checkbox” switch]` Dit is geen web standaard. (Je kunt niet zeggen [type=“switch”] i.v.m. backwards compatibility).
Je hebt ook `input::thumb {}` en `input::track{}` om het te stijlen.

**Easy dropdown without JavaScript**
[**`<datalist>` element with a nested `<option>`.**](https://codepen.io/roza-m/pen/QWoYKyj)

**Ingebouwde Color picker in HTML/CSS**

```html
input[type=“color”]
```

```css
input {
color-scheme: dark;} de browser kan het hele scherm af om kleuren te picken (colorpicker). met color-scheme kun je ook alle form-elementen in dark-mode geven.
```

<!-- in-page transitions: te snel. desorienterend: geven geen gevoel van hoe ver je omlaag bent gescrolled door een navigatie. vroeger deden we dit met jquery. -->

<!-- @media (
prefers-reduced-motion: no-preference ) {
html {
scroll-behavior: smooth;
}}

standaard: geen smooth scroll. pas als aangegeven dat de browser het ondersteunt en het wilt, dan zet je smooth-scrolling aan. -->
<!--
#my-target {
scroll-margin/padding-top:100px;
}

#my-target:target {
outline: 10px solid deeppink;
transition: 1s ease-in-out outline;
} hiermee laat je degene weten dat dit de plek is waar de user moet zijn. -->

**Position fixed/sticky**
Een `sticky` element is pas 'fixed' wanneer je een `top/left/right/bottom` geeft. Als het 'parent' element van het scherm af is, neemt de parent het sticky element mee, dus het blijft dan niet middenin je scherm staan.
Dit betekent dat je een 'fixed' element (sticky dus) wel kunt stijlen.

```css
div {
    position: relative;
}

div > .sticky {
    position: sticky;
    top: 50%;
}
```

<!-- carousels
scroll-snap-type zet je op de parent.
scroll-snap-align zet je op de child.

oh snap video.
youtu.be/34zcWFLCDIc

accordions and modals
details>summary&p
je kunt ook doen ```<details open>``` dan blijft ie open. edit het vormpje van de driehoek met summary::marker {font-size: 1.5rem;} content:””; en [open]summary::marker. let erop dat ze er meerdere kunnen openen. dit is niet een default.-->

**dialog**
Nieuw HTML element wat je kan gebruiken om je gebruiker keuzes te laten maken in de form van een `modal`.
Je kon alert, confirm & prompt gebruiken in JavaScript, maar deze onderbreken andere JavaScript functies. De modal is geen browser-actie, dus het is onderdeel van de pagina en hindert geen JavaScript. Je voegt een form toe aan de dialog. Je hebt nu ook `method=“dialog”`
[Artikel met meer informatie hierover](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)

```html
<dialog>
  <form action="" method="dialog"></form>
<button onclick="$$('dialog').showModal()”>
  Show the dialog
</button>
</dialog>
```

Wat stijling hierbij:

```css
button {
    font-size: 1.2rem;
    padding: 5px 15px;
}

dialog::backdrop {
    background-color: #fff5;
    backdrop-filter: blur(4px);
}
```

**Container queries**
Werken als media queries, maar je kijkt niet naar width/height van browser: je kijkt naar de width/height van het omliggende element.

**Parent selector**
`:has()` werkt als volgt: als mijn formulier een element met het `id` other heeft, en die is checked, kijk dan naar #other-text en geef het display:block;
Zie onderstaande code voor een voorbeeld, en/of lees dit [Polypane artikel met meer informatie](https://polypane.app/blog/where-is-has-new-css-selectors-that-make-your-life-easier/)

```css
/* Als formulier #other is gecontroleerd, stijl #other-text */
form #other:checked #other-text {
    display: block;
}

/* Optioneel: verberg #other-text standaard */
#other-text {
    display: none;
}
```

**Field-sizing**
https://polypane.app/blog/field-sizing-just-works/
input elementen hebben een vaste breedte. soms wil je een input die meeschaalt. werkt in chrome:

```css
input {
    field-sizing: content;
}
/* dit is altijd inline-block;
gebruikt hier als je een width geeft een min/max-width */

**textarea ** {
    field-sizing: content;
}
// dit is display: block;
```

**Masonry layout**
Bestaat lang in Firefox. Dit jaar komt er een nieuwe versie van in alle browsers.

-   Je kunt een grid maken: grid-template-rows:masonry; waarmee je zegt tegen de browser: ‘vul het maar op!’
-   Je kunt de browser vertellen in welke richting het grid moet zijn (row/grid)
    smashingmagazine.com/native-css-masonry-layout-css-grid/
-   [Een artikel over masonry grids]()

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
}
```

<!-- komt in de toekomst: werkt nog niet.
<selectlist>
	<option></option>
	<option></option>
	<option></option>
</selectlist>

selectlist [popover] {}
selectlist::part(button) {

}

scroll-driven animations
zitten in chrome. vervangen alle libraries die je gebruikt om aan de hand van de scrolpositie iets te laten gebeuren

bram.us/2023/02/12/scroll-driven-animations-cover-flow-2022-10-06-full-stack-europe/-->

### Reflectie

Kilian liet heel veel CSS properties zien waarvan ik helemaal geen idee had dat ze bestonden, en liet ook veel weten over dingen waarmee browser developers mee bezig zijn, en dit maakt me enthausiast om deze dingen bij te houden. Ik had geen idee hoe krachtig CSS eigenlijk kon zijn, en ik heb gemerkt, ook in de korte tijd na zijn weekly nerd presentatie, dat ik hier steeds bewuster van ben wanneer ik iets codeer: ik kijk altijd eerst of het misschien in CSS kan. De quote `Once your learn something, you don't learn it again` is me hierdoor ook erg bijgebleven.

Al gelijk na zijn presentatie heb ik geexperimenteerd met bijvoorbeeld de container widths/height units, en ik merkte dat ik niet de enige was; ook teamleden tijdens WAFS probeerde dit en andere methoden waarover hij verteld heeft.

Via Github Student kan ik toegang krijgen tot een trial versie van zijn web browser voor developers, Polypane, en dit ga ik ook zeker uitproberen.
