// Nav links

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  {
    name: "Download CV",
    link: "https://docs.google.com/document/d/1ZSgPXzWG0TdPAdTiJYZ0MQYtmhpoExU96rKy6cmC0Os/edit?usp=sharing",
  },
];

export const contactEmail = "sejokarizz@gmail.com";

export const techStackLists = {
  left: ["ReactJS", "Express", "Javascript"],
  right: ["Svelte", "NextJS", "MongoDB"],
};

//Grid items for bentogrid about section
export const gridItems = [
  {
    id: 1,
    title: "I build strong client partnerships with transparent communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications to accommodate clients",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly learn and improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Techie with a flair for code and creativity.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Modern, Minimalist Portfolio.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

//Projects done
export const projects = [
  {
    id: 1,
    title: "What Beats It?",
    des: "A playful escalation game: start with Rock, answer “What beats it?”, and keep the chain going. Each deliberate answer is judged by a Vercel serverless function that calls the Gemini API.",
    img: "/projects/what-beats-it.webp",
    iconLists: ["/next.svg", "/js.svg", "/tail.svg", "/ex.svg"],
    link: "https://github.com/Josekariz/what-beats-it",
  },
  {
    id: 2,
    title: "AnimeVault Web App",
    des: "Welcome to AnimeVault, featuring Server Actions, Infinite Scrolling, and Framer Motion Animations to create a dynamic and engaging user experience.",
    img: "/projects/animevault.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Josekariz/aniVault",
  },
  {
    id: 3,
    title: "Gidevtech Innovations Website",
    des: "A modern, responsive website for Gidevtech Innovations, built with React.js and TailwindCSS. It showcases the company's services, projects, and team.",
    img: "/projects/gidevtech.webp",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg"],
    link: "https://gidevtech.com/",
  },
  {
    id: 4,
    title: "Ortus Flore",
    des: "Led development of core client-facing dashboards for Ortus Flore, a live production platform, using React and Tailwind CSS. Focused on optimizing cross-device responsiveness for a real-world user base.",
    img: "/projects/ortusflore.webp",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg"],
    link: "https://ortusflore.com/",
  },

  {
    id: 5,
    title: "Apple Website Clone",
    des: "This project is a clone of Apple's iPhone 15 Pro website, built using React.js and TailwindCSS. It showcases advanced animations and 3D model rendering techniques, using GSAP and Three.js to provide an immersive user experience.",
    img: "/projects/apple-clone.webp",
    iconLists: ["/next.svg", "/js.svg", "/tail.svg"],
    link: "https://github.com/Josekariz/apple-website-clone",
  },
];

// Testimonials
export const testimonials = [
  {
    quote:
      "Collaborating with Joseph was an absolute pleasure. His dedication and lively spirit were evident throughout our console build project using C. Joseph's enthusiasm and refusal to give up, no matter what, truly stand out. If you're seeking a partner who brings energy and perseverance, Joseph is the ideal choice. 💪",
    name: "Marrionette",
    title: "ALX Graduate",
  },
  {
    quote:
      "Working with Joseph on the Jumba rental management system was a game-changer. He has a spark I've never seen in anyone else and I am confident he will go far. Joseph's passion and unique perspective make him an exceptional collaborator. If you're looking to elevate your project, Joseph is the person you need. 🚀",
    name: "Chris",
    title: "CEO and Co-founder of Koditrack",
  },
  {
    quote:
      "Joseph, my very close friend, created a web app that I absolutely love using. His keen focus on design makes the app not only fun but also highly functional. I'm excited for him to tackle more ambitious projects, like creating a game app similar to Call of Duty Mobile, though he jokes he can't do that yet. 😄",
    name: "Davi",
    title: "Close friend",
  },
  {
    quote:
      "As the youth leader at our local church, working with Joseph to build our new website has been amazing. With each step, his progress blows me away, especially after he mentioned he'll be using one of the best frameworks ever. I can't wait to see the final result, and I know it will impress everyone. 🙌",
    name: "Phelix",
    title: "Youth Leader at Local Church",
  },
  {
    quote:
      "As the CEO of Dayari Technologies, I've had the pleasure of collaborating with Joseph on a groundbreaking platform. He continuously impresses me with his vision and dedication. Joseph sees our project as the next big thing, and I wholeheartedly support him in all his endeavors. His future is bright. 🌟",
    name: "Daniel",
    title: "CEO of Dayari Technologies",
  },
];

// Work exp
export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platforms using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Digital Legislator",
    desc: "Digitized legislative documents to ensure accessibility for all Africans.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web App Dev project",
    desc: "Led the dev of a Web app, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.webp",
  },
  {
    id: 4,
    title: "Frontend Developer Internship",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// Social media icons
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Josekariz",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/sejoqariz",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sejoqariz/",
  },
];
