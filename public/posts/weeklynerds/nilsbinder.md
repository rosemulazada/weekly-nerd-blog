## 9elements:

At 9elements, they work with different units which Nils tells us about briefly. Nils is head of the web development unit.

### Company Formation

Three people wanted to form a company. "3 Elements" was taken, so they chose "9elements" as the next available URL.

### Units within the Company

**Communication Design**: Focuses on corporate identity and printwork such as logos. Non-coding designers collaborate closely with Nils. The team consists of 4 people.

**Product Development**: Manages projects like banking apps, photobook software for the LA County Museum of Arts, and data visualization. The unit is staffed by 30 people.

**Web Development Unit**: Responsible for small to medium-sized websites. The team comprises 7 people.

**Cybersecurity**: Mainly engaged in firmware development rather than cybersecurity.

## The Wrapper Element (Container):

**Main Functions**

-   Sets max-width for content to prevent it from becoming too wide.
-   Adds padding to prevent content from reaching the edges of the browser.
-   Centers content in most cases, maintaining equal spacing on both sides.

### Building a Container:

**Old School:**

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
Figma closely mimics CSS, offering control similar to coding. Sometimes, relinquishing control to the browser for decisions like element breaking or text wrapping may be beneficial.

**Available Units in Figma:**
Mostly pixels, including fixed and viewport-based units. Additionally, container queries are available.

**Grid Layout:**
Proposes transforming relationships between margins and paddings into a grid layout instead of specifying pixel values.