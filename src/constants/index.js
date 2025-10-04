import {
  webDevelopment,
  devops,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  carrent,
  jobit,
  threejs,
  aqsLogo,
  datability,
  xtraCareLogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webDevelopment,
  },
  {
    title: "Frontend Master",
    icon: frontend,
  },
  {
    title: "DevOps Beginner",
    icon: devops,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "OSR Journey Pvt. Ltd.",
    icon: '',
    iconBg: "#383E56",
    date: "Jan 2015 - Apr 2016",
    points: [
      "Website Design & Layouts: Assisted in designing and developing responsive website layouts using HTML, CSS, and Bootstrap, ensuring compatibility across various devices and screen sizes.",
      "Graphics & Visual Elements: Designed custom graphics, icons, and imagery using Adobe Photoshop and Illustrator, contributing to visually appealing and brand-consistent web pages",
      "Basic SEO Practices: Applied basic SEO techniques such as optimizing images, meta tags, and content structure to improve website visibility and search engine rankings.",
    ],
  },
  {
    title: "UI Developer",
    company_name: "Expert Web Solutions",
    icon: '',
    iconBg: "#E6DEDD",
    date: "May 2016 - Nov 2016",
    points: [
      "Created UI's from PSD, mostly worked on Real Estate projects. Take leadership and guide junior web designers to adapt responsive web design, make pixel perfect layouts.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Angel Quality Solutions Pvt. Ltd.",
    icon: aqsLogo,
    iconBg: "#383E56",
    date: "Dec 2016 - Jun 2017",
    points: [
      "User Experience, planning a website. Gathering information then creating personas. To make features of app/website. Test those features, information architecture, navigation, sketching and wireframing. ",
      "Then design and develop landing pages for Tech Support.",
      "Designing websites for the company which is obviously Tech Support. Testing, debugging, cross-browser compatibility. SEO friendly and responsive behaviour of all web pages is always my top priority and job.",
    ],
  },
  {
    title: "Senior Web Designer",
    company_name: "Info IT Services",
    icon: '',
    iconBg: "#E6DEDD",
    date: "Jun 2017 - Dec 2017",
    points: [
      "Designed and developed user-centric web interfaces focusing on clean UI and engaging UX using Adobe Photoshop, Illustrator, and other Creative Suite tools.",
      "Built responsive and accessible layouts using HTML5, CSS3, and JavaScript/jQuery to ensure seamless performance across devices and browsers.",
      "Created interactive prototypes and wireframes using Sketch and InVision to visualize design concepts and user flows effectively.",
      "Applied strong knowledge of typography, color theory, and layout principles to maintain visual consistency and enhance brand identity.",
      "Collaborated closely with developers, product managers, and clients to translate business goals into intuitive, high-quality design solutions.",
      "Optimized website design for usability and SEO best practices, ensuring faster load times and improved user engagement",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Xtracare IT Solutions",
    icon: xtraCareLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - May 2018",
    points: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript to deliver seamless user experiences across devices.",
      "Collaborated with senior developers and designers to implement UI/UX design principles focused on usability, accessibility, and visual consistency.",
      "Utilized front-end frameworks like Bootstrap and jQuery to enhance functionality, interactivity, and design aesthetics of web applications.",
      "Maintained clean, reusable, and standards-compliant code while using Git for version control and collaborative development.",
      "Contributed to optimizing website speed, accessibility, and cross-browser compatibility to improve overall user satisfaction.",
      "Demonstrated strong problem-solving and teamwork skills, consistently supporting the team in achieving project goals and deadlines.",
    ],

  },
  {
    title: "Senior Sofware Engineer",
    company_name: "Datability Technologies Pvt. Ltd.",
    icon: datability,
    iconBg: "#E6DEDD",
    date: "Jun 2018 - present",
    points: [
      "Developed and maintained dynamic web interfaces at iZooto using Angular, TypeScript, and Angular Material, ensuring responsive and accessible user experiences.",
      "Led frontend feature implementations and performance optimizations, focusing on scalability, clean architecture, and code quality through rigorous testing and debugging.",
      "Collaborated closely with UX/UI designers and backend engineers to translate business requirements into efficient, visually consistent, and maintainable Angular components.",
      "Contributed to modernizing legacy codebases, implementing new modules, and refining UI/UX flows to align with evolving product goals and design standards.",
      "Stayed updated with Angular ecosystem advancements, introducing best practices and innovative solutions that improved development efficiency and overall product performance.",
    ],

  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "StreamVibe",
    description:
      "A simple yet elegant movie search app where you can search almost all the movies, check their in-depts details, startcast, similar movies. The app gives you a dynaimic trending searches functionality that will give real you top time searched movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appWrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rohitKSharmaDev/streamVibe/",
    livePreviewUrl: "https://stream-vibe-search-movie-app.netlify.app/"
  },
  {
    name: "Sushiman",
    description:
      "Recently made a very simple and beautiful landing page which highlights the most famous Japanese food, Sushi.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "aos",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rohitKSharmaDev/sushiman/",
    livePreviewUrl: "https://sushiman-japanese-food.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };