// Nav links
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

//Grid items for bentogrid about section
export const gridItems = [
  {
    id: 1,
    title: "I build strong client partnerships with transparent communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
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
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Modern, Minimalist Portfolio.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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
    title: "AnimeVault Web App",
    des: "Welcome to AnimeVault, featuring Server Actions, Infinite Scrolling, and Framer Motion Animations to create a dynamic and engaging user experience.",
    img: "https://github.com/Josekariz/aniVault/assets/108508143/b84d53a9-b578-42ba-8801-f3b47ff95c61",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Josekariz/aniVault",
  },
  {
    id: 2,
    title: "Autolib: Where Car Passion Meets Real Stories",
    des: "Discover authentic car stories and experiences from real owners on Autolib, transcending traditional car reviews.",
    img: "https://raw.githubusercontent.com/Josekariz/reactautolib/main/Screenshot%20(39).png",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg", "/ex.svg"],
    link: "https://github.com/Josekariz/reactautolib",
  },
  {
    id: 3,
    title: "Aesthetic-color-picker",
    des: "Discover this React application enabling you to customize website aesthetics with background, text, and button colors. It offers live previews and color pickers for seamless customization.",
    img: "https://github.com/Josekariz/Aesthetic-color-picker/assets/108508143/03a2672a-e5c6-4d47-93ae-3381bb015172",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg"],
    link: "https://github.com/Josekariz/Aesthetic-color-picker",
  },
  {
    id: 4,
    title: "Happybarks: Enhancing Canine Welfare",
    des: "In my early project, I addressed canine welfare through Happybarks, a startup I'm eager to develop with interested collaborators, reflecting my dedication to improving the relationship between humans and dogs",
    img: "https://github.com/Josekariz/happybarks_1/assets/108508143/ba948c36-63e0-4c6c-9727-42dd9a961482",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://github.com/Josekariz/happybarks_1",
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
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web App Dev project",
    desc: "Led the dev of a Web app, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
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
    link: "https://twitter.com/sejokariz",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/josephmachariakariuki/",
  },
];
