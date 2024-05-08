# Nils Binder

Before I even start with the blog on Nils Binder, I just want to state how fascinated I was with his work during the period that he taught us during CSS to the Rescue. He had a clever way of thinking about things, his designs are something I admire and I truly learned a lot from him and his workshops. That aside, just speaking to him was nice, too!

06.03

### 9elements:

-   **Different Units:**
    -   Nils is head of the web development unit.

### Company Formation:

-   **3 People Wanted to Build a Company:**
    -   "3 Elements" was taken, so they chose "9elements" as the next available URL.

### Units within the Company:

1. **Communication Design:**

    - Focuses on corporate identity, printwork (logos, etc.).
    - Non-coding designers work closely with Nils.
    - Consists of 4 people.

2. **Product Development:**

    - Projects include banking apps, photobook software for the LA County Museum of Arts, data visualization, etc.
    - Staffed by 30 people.

3. **Web Development Unit:**

    - Handles small to medium-sized websites.
    - Comprised of 7 people.

4. **Cybersecurity:**
    - Primarily involved in firmware development, not cybersecurity.

### The Wrapper Element (Container):

#### Main Functions:

-   Sets max-width for content to prevent it from becoming too wide.
-   Adds padding to prevent content from reaching the edges of the browser.
-   Centers content in most cases, maintaining equal spacing on both sides.

#### Building a Container:

1. **Old School:**

    ```css
    .wrapper {
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .wrapper {
        width: min(100% - 3rem, 75rem);
        margin-inline: auto; /* (right to left) */
    }

    .wrapper {
        margin-inline: max(
            1.5rem,
            ((100% - 75rem) / 2)
        ); /* clever but not recommended */
    }

    :root {
        --wrapper-max: 100% - 75rem;
    }
    ```

### Design Consistency:

**Reasoning:**

-   Figma closely mimics CSS, offering control similar to coding.
-   Sometimes, relinquishing control to the browser for decisions like element breaking or text wrapping may be beneficial.

**Available Units in Figma:**

-   Mostly pixels, including fixed and viewport-based units.
-   Additionally, container queries are available.

**Grid Layout:**

-   Proposes transforming relationships between margins and paddings into a grid layout instead of specifying pixel values.
