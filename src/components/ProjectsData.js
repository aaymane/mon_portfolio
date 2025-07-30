// src/data/projectsData.js
const projects = [
    {
      id:1,
      title: "Tapis Rouges",
      description: "Developed a comprehensive restaurant website as part of a front-end internship, showcasing my skills in HTML, CSS, and JavaScript. The website consists of seven pages, each serving a unique purpose to enhance the user experience.",
      image:  require('./images/Tapis_rouges.png'),
      liveDemoLink: "https://agitated-swanson-b1aba5.netlify.app/",
      githubLink: "https://github.com/aaymane",
      technologies: ["HTML","CSS","JAVASCRIPT"],
      KeyFeatures: [
        "Engaging User Interface",
        "Online Ordering Functionality",
        "Team Showcase",
        "Interactive Gallery",
        "Contact Form"
      ],
    },{
      id: 2,
      title: "Let's Do It",
      description: 'Immerse yourself in a cutting-edge T-shirt customization experience with our ThreeJs-powered platform. Unleash your creativity by dynamically changing T-shirt colors, exploring smooth mouse-driven movements, and personalizing your apparel with uploaded logos and textures. Elevate your fashion game in real-time!',
      image: require('./images/letsdoit.png'),
      liveDemoLink: "https://serene-dasik-eb2298.netlify.app/",
    githubLink: "https://github.com/aaymane",
      technologies: [
        "React",
        "ThreeJs",
        "HTML",
        "CSS",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "ESLint",
        "PostCSS",
      ],
      KeyFeatures: [
        "T-shirt color customization",
        "Fluid mouse-controlled T-shirt movement",
        "Seamless logo and texture uploading",
      ],
    },    
    {
      id: 3,
      title: "Weather PWA",
      description: 'A progressive web app for checking the weather forecast.',
      image: require('./images/PWA.png'),
      liveDemoLink: "https://astounding-pothos-aad407.netlify.app/",
      githubLink: "https://github.com/aaymane",
      technologies: ["React", "Axios"],
      KeyFeatures: [
        "PWA functionality (offline support, add to home screen)",
        "Real-time weather updates",
        "User-friendly interface",
        "Responsive design",
        "Integration with a weather API (using Axios)"
      ],
    },
  {
    id: 4,
    title: "E-scooter Marketing Website",
    description: 'Developed a marketing website for promoting e-scooters, leveraging ReactJS for frontend development and Tailwind CSS for styling. Implemented user authentication using Clerk to provide secure access to exclusive content and features.',
    image: require('./images/scooter.png'),
    liveDemoLink: "https://6607ff509a3fbb9a421d49b9--dynamic-platypus-92be49.netlify.app/",
    githubLink: "https://github.com/aaymane",
    technologies: ["React", "clerk","tailwindcss","vite"],
    KeyFeatures: [
      "User Authentication with Clerk",
      "Promotional Content Display",
      "Responsive Design",
    ],
  },
  {
    id: 5,
    title: "PopCorn",
    description: 'Discover your next favorite movie with PopCorn! This website recommends movies through an infinite scroll, providing brief details, posters, ratings, and release dates. Immerse yourself in the world of cinema and find the perfect film for your mood.',
    image: require('./images/POPCORN.png'),
    liveDemoLink: "https://65d63b63b1e8efe586808cf6--thriving-cocada-164f97.netlify.app/",
    githubLink: "https://github.com/aaymane",
    technologies: ["React", "axios","vite"],
    KeyFeatures: [
      "Infinite Scroll of Movie Recommendations",
      "Short Movie Briefs",
      "Rating Information",
      "Rating Information",
      "Release Date",
    ],
  }
  ];
  
  export default projects;
