## Stop Using JavaScript for That: Moving Features from JavaScript to CSS & HTML
He starts us telling us two things that will stay with me forever as a developer;

> The browser can achieve more than we can with JavaScript

and..

> Next time you think that something requires JavaScript, check whether this is actually (still) true.

### The Rule of Least Power

- The Rule of Least Force is a fundamental principle in web development, where the choice of programming languages ​​is based on their degree of power. HTML is the least possible, so you start with that. If HTML doesn't work, switch to CSS, and if that doesn't work, opt for JavaScript.
 - JavaScript is the most fragile.
 - It's easy to build large files with JavaScript => means longer loading times
 - If you break JavaScript, your entire website will break: this is less likely with HTML/CSS.

**The importance of the browser(makers)**
Browser makers are actively listening to developer needs and implementing features that were previously built manually. Innovations within HTML and CSS reduce the dependency on JavaScript overuse. By working closely with browsers, developers can benefit from improved performance and new capabilities without relying heavily on JavaScript.

**Also important..**
Older JavaScript code can still function, but it is important to regularly evaluate whether more modern and better approaches are available. When rebuilding something that was previously created, investigate if there are improved methods to achieve the same result.

### LIVE DEMO

#### Custom toggles/custom switches**

- Many designers like to have a switch button because it is beautiful. You have to build this in as a developer. Instead of If you google 'React Switch' and grab the first one, you can also do it with the checkboxes. You don't have to add listeners with JavaScript and you don't have to think about accessibility because the browser does it all for you.

#### Replaced content: Input systems**

- Different operating systems have different shapes in terms of input elements. Input elements are therefore not very customizable in terms of style, browser developers are working on this.
- With `appearance: none` you say that you don't want the checkbox from the OS, but you style it yourself. Now you can use a `pseudo-element`: a normal `input` element cannot use this, but with `appearance: none` you can. `::before` is the 'thumb' (circle), and `::after` is the background.
- You can now also use `:checked {}` to style it as checked, e.g

 ```css
 ::checked { background-color: green; }

 ::checked::before { transform: translateX(10px)}.
 ```

#### Accessibility
for screen readers: `input:focus` used to be used and so did `outline:none`, but because it caused a weird square dotted line, designers didn't like it.
Meanwhile we no longer need to use `:focus` but `input:focus-visible`, this is ONLY for interaction that is _not_ with a mouse! This way you can style how it will look when you use a screen reader.

Don't want a focus style for mouse users? Then use `outline-color: transparent`; this does not mean that the outline is not there. Some people use high-contrast mode, and it is still visible to them.

For a few weeks now you have been able to do `input[type=“checkbox” switch]` in safari. This is not a web standard. (You can't say [type=“switch”] because of backwards compatibility).
You also have `input::thumb {}` and `input::track{}` to style it.

#### Easy dropdown without JavaScript
<a href="https://codepen.io/roza-m/pen/QWoYKyj" class="hyperlink">CodePen of a ```datalist``` element with a nested ```option```.</a>

#### Built-in Color picker in HTML/CSS

```html
input[type=“color”]
```


```css
input {
color-scheme: dark;} the browser can use the entire screen to pick colors (colorpicker). With color-scheme you can also set all form elements to dark mode.
```

<!-- in-page transitions: too fast. disorienting: provide no sense of how far you have scrolled down through a navigation. We used to do this with jquery. -->

<!-- @media (
prefers-reduced-motion: no-preference ) {
html {
scroll-behavior: smooth;
}}

default: no smooth scroll. only when it has been indicated that the browser supports it and you want it, then you turn on smooth scrolling. -->
<!--
#my-target {
scroll-margin/padding-top:100px;
}

#my-target:target {
outline: 10px solid deeppink;
transition: 1s ease-in-out outline;
} this lets the person know that this is the place where the user should be. -->

#### Position fixed/sticky
A 'sticky' element is only 'fixed' when you give it a 'top/left/right/bottom'. When the 'parent' element is off the screen, the parent takes the sticky element with it, so it doesn't stay in the middle of your screen.
This means that you can style a 'fixed' element (sticky).

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
scroll-snap-type is set to the parent.
scroll-snap-align is set to the child.

oh snap video.
youtu.be/34zcWFLCDIc

accordions and modals
details>summary&p
you can also do ```<details open>``` then it will stay open. edit the shape of the triangle with summary::marker {font-size: 1.5rem;} content:””; and [open]summary::marker. note that they can open multiple. this is not a default.-->

#### ```dialogue```
New HTML element that you can use to let your user make choices in the form of a 'modal'.
You could use alert, confirm & prompt in JavaScript, but these interrupt other JavaScript functions. The modal is not a browser action, so it is part of the page and does not interfere with JavaScript. You add a form to the dialog. You now also have `method=“dialog”`
[Article with more information about this](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)

```html
<dialog>
 <form action="" method="dialog"></form>
<button onclick="$$('dialog').showModal()”>
 Show the dialogue
</button>
</dialog>
```

Some styling here:

```css
button {
 font-size: 1.2rem;
 padding: 5px 15px;
}

dialog::backdrop {
 background-color: #fff5;
 backdrop filter: blur(4px);
}
```

#### Container queries
Work like media queries, but you don't look at the width/height of the browser: you look at the width/height of the surrounding element.

#### Parent selector
`:has()` works like this: if my form has an element with the `id` other, and it is checked, look at #other-text and give it display:block;
See the code below for an example, and/or read this [Polypane article with more information](https://polypane.app/blog/where-is-has-new-css-selectors-that-make-your-life- easier/)

```css
/* If form #other is checked, style #other-text */
form #other:checked #other-text {
 display: block;
}

/* Optional: hide #other-text by default */
#other-text {
 display: none;
}
```

#### Field sizing
https://polypane.app/blog/field-sizing-just-works/
input elements have a fixed width. sometimes you want an input that scales. works in chrome:

```css
input {
 field sizing: content;
}
/* this is always inline-block;
Use here if you give a width a min/max-width */

**textarea** {
 field sizing: content;
}
// this is display: block;
```

#### Masonry layout
Exists in Firefox for a long time. This year a new version will be available in all browsers.

- You can create a grid: grid-template-rows:masonry; which tells the browser: 'fill it up!'
- You can tell the browser which direction the grid should be (row/grid)
 smashingmagazine.com/native-css-masonry-layout-css-grid/
- [An article about masonry grids]()

```css
.container {
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: masonry;
}
```

<!-- coming in the future: not working yet.
<selectlist>
  <option></option>
  <option></option>
  <option></option>
</selectlist>

selectlist [popover] {}
selectlist::part(button) {

}

scroll-driven animations
are in chrome. replace all libraries that you use to make something happen based on the scroll position

bram.us/2023/02/12/scroll-driven-animations-cover-flow-2022-10-06-full-stack-europe/-->

## Reflection

Kilian showed a lot of CSS properties that I had no idea existed, and also shared a lot about things that browser developers are working on, and this makes me excited to keep track of these things. I had no idea how powerful CSS could actually be, and I have noticed, even in the short time after his weekly nerd presentation, that I am increasingly aware of this when I code something: I always first check whether it could possibly be done in CSS. The quote 'Once you learn something, you don't learn it again' really stuck with me.

Immediately after his presentation I experimented with, for example, the container widths/height units, and I noticed that I was not the only one; Team members during WAFS also tried this and other methods he talked about.

Through Github Student I can get access to a trial version of its web browser for developers, Polypane, and I will definitely try it out.