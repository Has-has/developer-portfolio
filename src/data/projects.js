import portfolioImage from "../assets/images/projects/portfolio.webp";
import midnightCakeImage from "../assets/images/projects/midnight-cake.webp";

const projects = [
  {
    id: "01",

    title: "Developer Portfolio",

    description:
      "Modern portfolio website showcasing responsive design, smooth animations, reusable React components, and a clean user experience.",

    image: portfolioImage,

    tech: [
      "React",
      "SCSS",
      "Framer Motion",
      "Vite",
    ],

    highlights: [
      "Responsive Design",
      "Modern UI",
      "Smooth Animations",
    ],

    github: "https://github.com/Has-has",

    demo: "#",

    buttonText: "View Project",

    status: "completed",
  },

  {
    id: "02",

    title: "Midnight Cake Shop",

    description:
      "Modern bakery website focused on showcasing products, creating a premium shopping experience, and strengthening the business brand.",

    image: midnightCakeImage,

    tech: [
      "React",
      "SCSS",
      "Responsive Design",
      "UI/UX",
    ],

    highlights: [
      "Modern Design",
      "Mobile First",
      "Interactive UI",
    ],

    github: "https://github.com/Has-has",

    demo: "#",

    buttonText: "In Progress",

    status: "in-progress",
  },
];

export default projects;