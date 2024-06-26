## What are containers not telling us? Do they know stuff?
This is a question developers have been asking for ages, since media queries came out and the dawn of responsive web design was breached; Miriam instantly tells us that the answer is yes. So, we can wrap it up there.

"Kidding," she says. It’s more complicated than that. Here are some of the problems with them.

They thought querying containers would never be possible because it would cause infinite layout loops. And they were right! It’s still a problem to this day. 

> “Web for all, web on everything.”

In print design, we get to decide every single thing about the page down to what ink to use and what paper to print on. But we lack total control; paper is limited. However, the web cannot be controlled.. But we can adapt to it.

All elements have an intrinsic sizing that it wants to be, that we can access with fit-content, min-content, max-content, etc. Then you have extrinsic sizing, these are values that come outside of the content itself and are set in units like pixels, vh, etc. Essentially, extrinsic and intrinsic sizes push against each other which can cause issues.. It can be cool but it can also go severely wrong if we’re not careful about how the two are overlapping.

A rule is we can’t change a container that we’re querying, because this causes a loop; this is the first rule of querying. 
Another rule is that you have to turn off intrinsic sizing which can be pretty dangerous.

If your box collapses, your code is probably relying on something intrinsic which is making it keep its shape instead of the extrinsic thing you specified.  

## Reflection
This is a problem I've found myself running into so often, so to hear someone speaking about it felt nice. Good to know I wasn't just messing up CSS up to so bad that it broke the sizing of elements on my web-page; this is a legitimate concept to keep in mind when developing. 
I had experience with this problem but did not exactly know what could cause it or rather what could prevent it. I've taken her suggestion of CSS reset with me in my newer project as a preventive measure. The way she speaks and explains things is so easy to follow for me, and the way she demonstrated for us in the app helped as well. An amazing talk!