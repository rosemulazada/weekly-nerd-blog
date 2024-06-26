Same-document view transitions for single-page applications provide a much smoother transition between different views within the same page compared to the traditional method of navigating from page to page. This technique enhances user experience by eliminating the need for full page reloads, thus maintaining continuity and improving perceived performance during navigation within the application.
This <a href="https://live-transitions.pages.dev/](https://live-transitions.pages.dev/" class="hyperlink">CodePen by Maxi Ferreira</a> illustrates this beautifully.

> “The view transition API gives you the power to create seamless visual transitions between different views of your website.”

Fallback using `if (!document.startViewTransition)` supports progressive enhancement! But you can use it like this: `document.startViewTransition(() => {})`. 

View this <a href="https://codepen.io/bramus/full/xxQkvJP" class="hyperlink">CodePen</a> for a simple demonstration.

When the page loads, it takes a snapshot of the page that it remembers. Underneath the hood, some things will be changed in the rendering. In the DOM, the old sentence will be inserted but the user does not see this immediately. It then takes a snapshot of the new sentence. It basically layers the two snapshots over each other, the first snapshot gets layered over the other and a transition is toggled between them.

## But how does the browser know what to capture on the screen?  
It’s this line in the user agent stylesheet:


```
/* The old and new snapshots get layered over one another */
:root {
    view-transition-name: root;
}

::root::view-transition
    ::view-transition-group(root);
        ::view-transition-image-pair(root);
            ::view-transition-old(root);
            ::view-transition-new(root);
```

<a href="https://codepen.io/bramus/full/zYMOggP" class="hyperlink">This CodePen visualizes how this works.</a>

Right now, interrupted view transitions skip to the end; in the future, they hope to have a solution for this. 
You can also transition between two different elements, it does not have to be the same elements each time that you’re transitioning between.

Some feedback Google got was that it is a lot of code, which it does look like that - but it seems worth it for what you’re getting for it.. I’m sincerely hoping for a full integration to other browsers and I’m hoping that future agencies and companies developing on the web pick it up, it may already be in use but I’m not sure. You can animate all .box elements at once with for example html::view-transition-group(.box), but you still need to give all the names to the transitions for every element.

Another thing he wanted to mention was promises, which.. Thank god we’re hearing about this because promises can at times be exhausting, at least to me. He mentioned that you can await these transitions in JavaScript, which is pretty cool. You can also combine them with active elements, you can for example change the direction an element is moving in depending on which box is active, <a href="https://view-transitions.netlify.app/pagination/spa/)" class="hyperlink">as you can see here</a>.

Something new that is being shipped with Chrome now or next week is the following: cross-document view transitions for multi-page applications; this entails the same principle as the view transitions as we know it, but instead of being applicable to a single-page app, it now works for apps with multiple pages! As he beautifully said;

> “You no longer need to re-architect your website to an SPA to use View Transitions!” 

However.. There are two conditions that need to be met for this to work. 

a) The navigation needs to be same-site and same-origin, meaning you cannot go to a cross-origin site. They do however hope to enable this.

b) Cross-Document View Transitions are opt-in; the pages need to have opted in to allowing these view transitions to happen, and you do this with:

```css
@view-transition {
    navigation: auto; /* traverse + push/replace (non-browser UI) */
}
```

There’s different events you can fire depending on if you’re on the old- or new page.
They could not use already existing events, unfortunately, but they’re still very cool..

### Old page
- Navigate
- Pagehide
- Visibilitychange
- Unload

### New page
- Load
- Pageshow 

You can use these to set a different type of transition on the pages, these are preset types, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis" class="hyperlink">a list of which you can find here</a>.

### Render blocking
Meaning: block rendering until X element is on the page! That means that the element has to be present in the DOM; that doesn’t mean it has to be visible. Word of caution; don’t rely on it because streaming HTML is a pain; be sure that the gains that you get by doing the animations here dont negatively impact the UX.
```html
    <link render=”blocking” />
```

## Reflection
What an amazing experience to receive a lecture from a developer at Google. As soon as I heard this I got excited. This is not an opportunity you receive often. Especially the fact that he told us about something that would be rolling in the next week after this lecture, I couldn't believe what I was hearing!

View transitions are not something that I've personally worked with, but naturally I've heard of it plenty of times. I have to say that I found myself telling Brianne, who was seated beside me, that I was itching to make something using this soon. I still feel this way, and I believe that once I've finished off the meesterproef, I will take a look into it.

I did find it kind of difficult to understand as I was sitting there but seeing the amazing works made by it (made visual by the useful, neat CodePens he shared with us) made my enthusiasm grow.

Who knows, maybe whenever I _do_ start that blog, you'll see an article about this appear.