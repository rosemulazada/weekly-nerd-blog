# Hackaton

The hackaton was a very unique experience to me, we had never really done anything like this before at my study. Krijn Hoetmer, the co-founder of CSS Day, came to our university and gave us an assignment that sounded something like this:

"Take this API I put together with a load of data from the last ten years of CSS Day, and make something cool. The winner gets CSS Day tickets. You have three days."

I thought, 'Alright! A fun challenge, _and_ we get to possibly win tickets,' that sounded good to me!

## Our concept

In a team of four (Elaine Wilberforce, Sena Nur Kolkutan, Brianne de Deugd and myself) we started brainstorming. We rather quickly knew that we wanted to do something surrounding the amount of attendees per year and per country, as visualising this seemed very cool to us. Although I felt like I was making too bold of a suggestion with my idea, I was enthusiastic about it and pitched it nonetheless, bringing up the possibility of using a 3D globe library to visualise this data very literally. Thankfully, the girls I was working with were very enthusiastic, and we soon set off to start.

I was reminded of the work of a fellow student who had also worked with a 3D map and after snooping around some in her repo, I found that the library she had used was called **MapBox GL.** Which was great! Now we knew what we could work with.

Soon enough, we settled on making a **3D interactive globe** that visualises the the **countries of origin** of the attendees, the **amount** of attendees, and showed this on an opacity-based scale with the main color being the **color code assigned to that years CSS Day.**

## The process
This was all of our first time working with a library like this, and for two of our team members, this was also the first time working with SvelteKit. Brianne and I, who followed the minor Information Design-Tech together previously, had already been introduced to it and thought that the component-based structure of the framework would be much more convenient not only for the project itself but also for collaboration purposes. In a lot of ways, this proved to be true! And I was very impressed by how quickly the other two picked up the framework. Of course, we did assess that if it proved too difficult by the first day (not just for the two learning SvelteKit but this entire idea of a 3D globe to begin with), we'd come up with something else. But this was not needed, and we worked very enthusiastically on this project.

The first day, I set up the boilerplate and retrieved the data we would be using and Brianne set up MapBox GL while the other two did some digging about the framework we were using. Brianne added buttons on the screen for controls so that it was that little bit more accessible as well as for responsiveness' sake. The other two began to work on the menu that would actually allow the user to switch between years, and kept responsiveness in mind for this as well, which looked great!

Then came the main part: loading in the data, making it visual, which I was responsible for. Actually loading it in proved not to be so difficult. But the problem came with sending this data to the other components using SvelteKits store, which my entire team was compeletely lost on. None of our current teachers had worked with SvelteKit, either. However, thankfully, one of them called Sanne 't Hooft redirected us to FDND: the Front end Development study that's nearby us, and they managed to help us out just in the nick of time.

## The conclusion

This project, I won't lie, was stressful.. but very pleasing at the same time. I'm glad about the experience and it taught me a lot about libraries like this and reading docs, which is a skill strengthened over time.. so I was glad to try something so different and see how far I could get. I will say that there is a small problem with the data visualization: as we were rushing to get the data loaded in, this meant that we resorted to removing the **previous layer** of color when you pick a new year by just picking the currentIndex and doing -1 to get the previousIndex. Problem is: in 2020 and 2021, there was no CSS Day. What does this mean? Exactly, some of the years data does not get removed once you reach 2020.

Nonetheless, this project is something I'm proud of. I'm thankful for the experience, I'm thankful for the amazing team I had because of which we actually ended up never having any merge conflicts whatsoever, we didn't win but I don't care because I could feel how enthusiastic we all were about what we had learned and managed to get done in such a brief span of time.

If you're curious about how it ended up working, you can find the live version [here at CSS Day-ta!](https://cssdayta.vercel.app/)
