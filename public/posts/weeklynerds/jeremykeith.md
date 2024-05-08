# Declarative Design: Jeremy Keith

Jeremy Keith uses music as a metaphor for imperative/declarative programming languages which can also be split into different schools of thought.

## Declarative/Imperative programming languages

-   Two methods on composing music
    -   Classic approach
    -   Jazz approach

### Imperative programming:

Most programming languages are imperative languages. You tell the computer exactly what to do, step by step.

-   JavaScript: You have more power, but it comes at somewhat of a cost.

### Declarative programming language:

You don't tell the computer exactly what to do; you specify the output you want and you leave the details to the computer on how to achieve this output. These languages tend to be domain specific. IF YOU MAKE A MISTAKE in your instructions, the browser ignores it.

-   SQL is an example of this.
-   HTML
-   CSS: with CSS you give a suggestion to the web browser.

### Breaching the ‘gap’

> “JavaScript should only do what only JavaScript can do.”

Why do some people choose to write such complex code rather than using what we have natively? It’s about exercising control. Imagine disabling a button; oh, now the button gets a styling I didn’t specifically tell it to have? This now feels like a bug.

**Even with a declarative language like CSS, you can introduce imperative thinking. **
For example, giving a `padding/font-size:1rem;` instead of using `px`; now you’re making an exchange with the language. Instead of saying `padding-left:1rem;` when you want to add padding on the side where the text starts, you can say `padding-inline-start`. This will make it consistent no matter what direction the language used is read from. Or for example, using `clamp`: you can’t say what font-size an element should have at a certain screen-width, but you know it’s going to look good, because you’ve told it to never get smaller/bigger than a specified amount. So you’ve relinquished control, on your own terms.

Another example is `vw`, a dangerous unit because it remains the same no matter what. You can improve this slightly with `clamp`.
ex. `font-size: clamp(1rem, 0.5rem + 0.666vw, 1.5rem);`

Other ways to achieve this are:

-   `calc()`
-   `clamp()`
-   `min()` and `max()`
-   `fit-content`
-   `min-content` and `max-content`
-   `repeat()`
-   `minmax()`

-   [utopia.fy](link)
-   [youtube.com/layoutland](link)
-   [every-layout.dev](link)
-   [buildexcellentwebsit.es](link)

### So… declarative > imperative..?

If someone tells you ‘it depends,’ ask, ‘depends on what?’ It’s a bullshit answer, Jeremy says.

**Whether declarative/imperative thinking is punished or rewarded _depends_ on:**

-   Culture: find a workspace that supports the mindset you follow when working.
-   Design systems: ‘the way we do things ‘round here.’ These systems can also be imperative or declarative; this is your basis. The foundation should be either declarative/imperative and the coding approach that comes after should match that.
-   Analytical design: Exact color codes to use, for example.
-   Systems design: ‘The border should be 10% lighter than the background color.’ This is less stifling for someone with a declarative mindset.
-   Your team
-   Classical musicians: have been taught to read sheet music. This is their superpower, you could give them the sheet to a song they’ve never heard before and they could play it perfectly.
-   Jazz musicians: have been taught to improvise. If their music was planned out, they wouldn’t thrive as well, the music would not be rich.

So, make sure the team you work in matches you.

**Analytical thinking vs systems thinking**
Analytical thinking is about zooming in, and would be the equivalent of imperative thinking. Think of Figma stylesheets with exact color codes. Systems thinking is about zooming out, and matches declarative thinking more.

### The conclusion

> The more you tighten your grip, the more you lose control.

Jeremy has a preference for declarative programming, despite saying that ‘it depends’ - because it does: it’s personal. So you should strive to work in environments that suit your workflow.
He argues most of all that you should do this, but he does advocate for declarative programming, saying that the less control you have, the lesser your chances of things going wrong - HTML/CSS are the foundation for the web for a reason; we are meant to be able to rely on them rather than reach for JavaScript for everything. HTML elements/CSS properties are built to encapsulate a lot of the needs of the developer, it exists to be used to its full capacity. Usually, there will be something of a native solution or at least building block for what you want to achieve, and this is a lot more secure than using pure JavaScript, which is meant to be the solution to when you can no longer achieve your goal with just HTML/CSS.

JavaScript should do what only JavaScript can do. Another quote to live by.

-   [a dao of web design](link)
-   [responsive web design](link)
