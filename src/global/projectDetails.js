export const projects = [
  {
    title: 'My Blog',
    imgSrc: 'img/blog-584x584.jpg',
    qanda: [
      {
        q: 'What is it?',
        a: 'It\'s my blog. I made it. It\'s "Full Stack"',
      },
      {
        q: 'Cool!',
        a: 'I know, right?',
      },
      {
        q: 'How did you build it?',
        a: 'I\'ll be honest, I more or less hacked it together from the dismembered remains of half a dozen tutorials. Felt like Frankenstein. Even shouted "IT LIVES!" when I got it to work.',
      },
      {
        q: 'No, I mean what tech did you use?',
        a: "Oh, right. Well, it's running on an Express server and pulling data from MongoDB. The front-end uses ejs templates and some vanilla css. I would probably have used React for the front-end if I'd known React when I built it.",
      },
      {
        q: 'Are you going to rebuild it with React at some point?',
        a: 'Almost certainly.',
      },
    ],
    githubLink: 'https://github.com/gordonwoodbine/web-dev-blog',
    liveLink: 'https://aqueous-depths-91518.herokuapp.com/',
  },
  {
    title: 'AnnaCats',
    imgSrc: 'img/annacats-1200x1200.jpg',
    qanda: [
      {
        q: 'What is it?',
        a: "It's a web app that shows you a random cat. If you like it, you can save it to your favourites. Then you can get another random cat.",
      },
      {
        q: "Isn't that a bit silly?",
        a: 'Depends how seriously you take cats, I suppose.',
      },
      {
        q: 'Why is it called AnnaCats?',
        a: 'Cos I thought my friend Anna might get a kick out of it. She takes cats very seriously.',
      },
      {
        q: 'Talk techy to me.',
        a: 'Okay. I built it to teach myself more about using APIs with fetch. Originally I built something with dogs because, you know, "fetch". But this one also taught me how to use CSS Grid more or less properly. Oh, and it saves the favourites to local storage in the browser because I hadn\'t really done much with databases at that point.',
      },
    ],
    githubLink: 'https://github.com/gordonwoodbine/annacats',
    liveLink: 'https://gordonwoodbine.github.io/annacats/',
  },
  {
    title: 'Songs I Like',
    imgSrc: 'img/musicblog-1200x1200.jpg',
    qanda: [
      {
        q: 'What is it?',
        a: "It's a little blog of songs that I like.",
      },
      {
        q: 'You have a thing for blogs, I see.',
        a: 'Trying to build them, yes. Actually remembering to update them, not so much.',
      },
      {
        q: 'Tell me more.',
        a: "This was the first thing that I built using React. The data is coming from a Contentful database because I wanted to play around with that. Turns out it's pretty easy to use.",
      },
      {
        q: 'We need to talk about your taste in music...',
        a: "No we don't.",
      },
    ],
    githubLink: 'https://github.com/gordonwoodbine/little-music-blog',
    liveLink: 'https://agitated-ride-861f52.netlify.app/',
  },
  {
    title: 'This Portfolio',
    imgSrc: 'img/portfolio-1200x1200.jpg',
    qanda: [
      {
        q: "Seriously? You're using your portfolio as a project in your portfolio?",
        a: 'Sure am.',
      },
      {
        q: "Isn't that cheating?",
        a: 'I hope not. I mean I built it, right? It uses React and has some cool animations courtesy of framer-motion. Plus, I know about recursion now and this is my one chance to show off that fact.',
      },
    ],
    githubLink: 'https://github.com/gordonwoodbine/portfolio-starter',
    liveLink: 'https://mikelightfoot.tech',
  },
  {
    title: 'Binary Clock Thing',
    imgSrc: 'img/binclock-1200x1200.jpg',
    githubLink: 'https://github.com/gordonwoodbine/binary-clock-v1',
  },
];
