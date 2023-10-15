import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  //git,
  //figma,
  //docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  //threejs,
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
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Junior Unity Developer",
    company_name: "Tech XR Innovations Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "Throughout my tenure, I had the opportunity to delve into a series of captivating projects that not only tested my skills but also redefined the possibilities within the realm of Augmented Reality (AR) and Virtual Reality (VR).",
      "Notably, I spearheaded a groundbreaking initiative centered around the development of an immersive virtual reality simulation tailored for younger audiences.",
      "My involvement encompassed a multifaceted role, ranging from the curation of bespoke video content to the orchestration of pivotal project milestones.I took charge of defining essential XR (Extended Reality) system terminology, a pivotal undertaking that significantly augmented the functionality and user experience of our cutting-edge product using 6 DoF.",
      "These experiences were instrumental in honing my expertise and solidifying my commitment to pioneering innovation within the ever-evolving landscape of AR and VR technology.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Cisco",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2023",
    points: [
      "I served as a passionate advocate for Cisco within the academic community, actively engaging with fellow students, faculty, and campus organizations. Through seminars, workshops, and informative sessions, I effectively communicated Cisco's vision and product offerings to my peers.",
      "These connections facilitated collaborations, internship opportunities, and knowledge sharing between the academic environment and Cisco.",
      "I organized and participated in various events such as tech talks, hackathons, and networking sessions, aligning them with Cisco's initiatives and values. These events not only raised awareness about Cisco but also provided a platform for students to learn and engage with industry professionals.",
      "I effectively communicated Cisco's vision and product offerings, as well as the educational opportunities offered through Cisco Netacad courses, to my peers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Up Work",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Crafting and upkeeping web applications through the utilization of React.js and associated technologies.",
      "Fostering collaboration within diverse, multifunctional teams, which encompass designers, product managers, and fellow developers, to deliver top-tier products.",
      "Executing responsive design strategies and guaranteeing seamless compatibility across various web browsers.",
      "Actively engaging in code review processes and offering valuable feedback to fellow developers, thereby nurturing a culture of constructive improvement and innovation.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial: "Dhruva, a dedicated B.Tech CSE in AIML student at Gyan Ganga, excels in learning cutting-edge tech and thriving in Hackathons. His focus, diligence, and web development contributions make him industry-ready. Best wishes for his future endeavors! 👍.",
    name: "Dr. Ritu Ahluwalia",
    designation: "Professor & Head",
    company: "CSBS, GGITS",
    image: "https://github.com/naitikcpp2/ggn/assets/116038165/514a8f9d-f821-4146-be0a-980e501af954",
  },
  {
    testimonial: "Dhruva, a former Junior Unity developer intern at Tech XR Innovations, demonstrated tremendous expertise in the realm of Augmented and Virtual reality. His contributions to curating exclusive video content and project, defining XR system terminology greatly enhanced our product.",
    name: "Shivang Mishra",
    designation: "Founding Member",
    company: "Tech XR",
    image: "https://github.com/naitikcpp2/ggn/assets/116038165/aa7a8cc1-a6a5-4bd2-800e-e49d2fc65773",
  },
  {
    testimonial: "Dhruva's unwavering passion for innovation and problem-solving shines through his proactive engagement in mart India Hackathon. Notably, he demonstrated his leadership quality by leading his team in addressing a formidable challenge centered around the cultural representation of heritage sites and monuments. Apart from this he is also been a winner in Alibaba Low Code Development Contest 2022",
    name: "Dr. Preeti Rai",
    designation: "Professor",
    company: "Dept. CSE-AIML",
    image: "https://www.adscientificindex.com/pictures/28/4537614.jpg",
  },
];

const projects = [
  {
    name: "Top Movie Rating Sites",
    description:
      "Web-based platform that allows built with React for the frontend, MongoDB for data storage, and Tailwind CSS for design, it ensures an engaging and responsive experience. Users can access a vast movie database, rate films, and discover the best-rated movies across platforms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://play-movies-with-dhruva.netlify.app/",
  },
  {
    name: "Collect The Coin",
    description:
      "Interactive 3D game using Unity Simulation, where the player's objective is to collect coins within a dynamic and immersive virtual environment. This game will offer an exciting and challenging experience while also showcasing the capabilities of Unity Simulation in creating complex and realistic simulations.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Unity Assets Libraries",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/dhruvaop/Collect-the-coin",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
