export interface Blog {
  title: string;
  description: string;
  content: string;
  tags: string[];
  date: string;
  readTime: string;
}

export const blogs: Blog[] = [
  {
    title: "The Journey of Styling My Own Portfolio",
    description:
      "Building for clients is one thing. Building for yourself — with no brief, no deadline, and full creative control — is a completely different challenge.",
    content: `I've styled components for projects before. But styling my own portfolio was the first time I had to make every decision myself — color, spacing, typography, motion — with no design file to follow and no one to approve it.

It started simple. Dark background, white text, some cards. It looked like every other dev portfolio I'd seen. Fine, but forgettable.

The first real decision was the dot pattern background. I wanted something subtle — something that added texture without screaming "I added a cool background." The trick was getting the opacity and the radial gradient mask right so it fades at the edges. Too visible and it's distracting. Too faint and it's pointless. I must have tweaked it fifteen times.

Then came the borders. I landed on dashed borders for cards instead of solid ones. It sounds like a small thing, but it completely changed the feel — more editorial, less "SaaS dashboard." It also made the overall design feel more intentional, like every element had a reason for being there.

Typography took longer than I expected. I kept going back and forth between sizes. The section headings use a pipe character — just a | — as a visual anchor. It's simple, but it gives each section a clear starting point without needing a full design system.

The skill marquee rows were the most satisfying to build. Two rows, one scrolling left, one right, with a fade-out gradient on both edges. Getting the animation timing smooth so it felt natural — not too fast, not like it was barely moving — took a few iterations.

Dark mode wasn't an afterthought. The color tokens are defined in CSS variables with both light and dark values. The difference between a dark mode that looks like someone just inverted the colors versus one that was actually designed for dark is huge. I kept the backgrounds almost black but not pure black, and made sure the card backgrounds were slightly lighter than the page — just enough to create hierarchy without harsh contrast.

The GitHub contribution graph at the bottom was a late addition. It connects the portfolio back to actual output — real commits, real consistency. It's not decorative; it says something.

Every section went through multiple revisions. The Hero rearranged. The Projects section gained and lost elements. The spacing between sections changed probably a dozen times.

The result isn't perfect. It'll keep evolving. But every pixel on this page is a decision I made — and that's what makes it mine.`,
    tags: ["Design", "CSS", "Portfolio"],
    date: "2025-05-08",
    readTime: "5 min read",
  },
  
];
