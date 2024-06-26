## Who is Fenna?
- Creative front end developer
- Currently working at Bakken en Baeck
- Land of Ride (nice inspo website).
- Worked at Phantom (cryptocurrency)
- Her 'setup':
  - Emotion: CSS-in-JS library
  - Vercel for deploying
  - Sanity CMS
  - React
    - Framer motion as animation library for React
    - React-focus-lock: Controls focus within a specified range in a React application, such as a modal window, to restrict focus for accessibility.
    - React-aria-components: A library of accessible React components that adhere to ARIA standards for building inclusive web applications.

## Fenna, Phantom and accessibility

- Accessibility was not a requirement but was Fenna's own motivation
- In professional life, accessibility is not taken seriously and is overlooked. Aesthetics and smooth animations often receive all the attention and priority.

### What she always _at least_ brings into her work

- Focus state for keyboard users -> `:focus-visible.`
 - `:focus-visible` only works with a keyboard focus or something that has nothing to do with touch input, such as calling focus in JavaScript
- aria attributes
- accessible carousels
- focus guards and esc key configuration for modals and overlays
- good color contrasts, font sizes and line lengths
 - She uses Lighthouse audit for this: a color contrast checker.
 - You will also receive a warning in DevTools if the contrast is not good enough.

### Aria attributes: deep dive

1. `aria-controls`: This attribute is used to indicate the relationship between two elements where one element has control over the other. The element that has the aria controls affects or displays the controlled element. This can be useful for tabs, for example, where one tab checks the contents of another tab.
2. `aria-live`: This attribute is used to specify how dynamic changes in an element's content should be announced to screen readers. It has three values:
 - `off`: No automatic announcements are made.
 - `polite`: Announcements are made when there is a natural break in the screen reader's speech.
 - `assertive`: Announcements are made immediately, even when there is active speech. (Fenna finds this quite intense and has never used/had to use it).
3. `aria-atomic`: This attribute works together with `aria-live`. If `aria-atomic` is set to `true`, this means that the entire contents of the checked element should be treated as a single change. Without aria-atomic, only the changed information would be announced.
 - In the example Fenna gave, `aria-live` is used to indicate that dynamic changes must be announced immediately to screen readers. This is important in situations where the content of an element (e.g. a score) may change dynamically, and `aria-atomic` may be used to ensure that the entire content is treated as one change.

### Alt image generator
Because accessibility is not taken seriously by developers, she tried to find a method with which, for example, alt texts can be automatically generated. But unfortunately AI is not yet advanced enough to add useful alt text, in fact, in the example she showed it was very much the opposite.. (An image of a man in a wheelchair standing in front of a staircase, with the alt text 'man in wheelchair goes up staircase.' Not quite correct).

## Latest tips and things to take with you in terms of accessibility

- All autoplay videos must be able to be paused
 **- Use a screen reader yourself to test whether your website is really accessible or not!**
- Add a 'skip to main content' button, which all major websites have, such as YouTube. - Being able to skip content is important: suppose you have a carousel of 20 images, you don't want the user to have to go through it. - Extra point: if you have a carousel, the screen reader should not read the elements that are off-screen.

## Reflection

I've always cared about accessibility and always try to include it in my projects, but I had no idea there were so many things I didn't know about or that needed to be taken into account for screen readers, for example with the `aria-live.` I have heard before that in business semantics and accessibility are often forgotten (or ignored on purpose), but I didn't know exactly how bad it was. I will certainly try, when designing a website, to take into account the points she has explained here before coding; I like that she has provided a list of things she always looks at, this helps me to start being more aware of accessibility.