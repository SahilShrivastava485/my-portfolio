// src/data.js

export const personalInfo = {
  name: "Sahil Shrivastava",
  title: "Software Engineer",
  about: "Experienced in developing and managing AI-driven web applications, bringing a solid blend of frontend and backend expertise. Proficient in ReactJS, Flask, and MongoDB, with a strong focus on enhancing visualization tools and creating intuitive user interfaces. Played a key role in building a web application for clinical scientists, improving data visualization and overall user experience. Skilled in crafting Python solutions that streamline data handling and optimize database performance.",
  skills: {
    frontend: ['HTML', 'CSS', 'Tailwind CSS' , 'Javascript' ,'React.js', 'Next.js', 'Material UI'],
    backend: ['Flask', 'Celery', 'Gunicorn', 'Django', 'Crontab', 'Multiprocessing','Python','C++'],
    database: ['MongoDB', 'SQL', 'Redis'],
    understanding: ['Git', 'Linux', 'Postman', 'Vim', 'Unit Testing', 'Data Structures', 'Algorithms', 'System Design', 'Object Oriented Programming']
  },
  contact: {
    email: "sahilshrivastava485@gmail.com",
    linkedin: "https://www.linkedin.com/in/sahil-shrivastava-bb74a019b",
    github: "https://github.com/SahilShrivastava485"
  }
};


export const experience = [
  {
    role: "Software Engineer",
    company: "Nference",
    duration: "02/2022 – Present",
    logo: "/nference_logo.png",
    description:[
      "Enhanced an internal JavaScript and HTML5 Canvas library utilized for visualizing ECG graphs across 4-5 applications.",
      "Expanded the library's capabilities by integrating features like an annotator, cursor for accurate data display, and zoom functionalities.",
      "Implemented a user-friendly editing mode to facilitate manual correction and enhancement of visualizations.",
      "Facilitated in improving the usability and functionality of the library, resulting in enhanced visualization experiences for users.",
      "Managed concurrent involvement in 3 distinct projects under the guidance of 3 different managers. Demonstrated versatility in navigating varied project requirements and managerial styles.",
      "Engineered a web application for clinical scientists, streamlining data visualization and model refinement processes. Instrumental in validation, eradicated manual methods, saving over 100 hours per project cycle.",
      "Incorporated React JS, integrating Material UI and Internal Components of the company to craft an intuitive user-friendly interface increasing user satisfaction and decreasing user time on a task by 50%.",
      "Implemented Flask to create backend APIs for relaying AI insights to the UI, enhancing system agility, user satisfaction by 25%, and decision-making speed.",
      "Engineered the incorporation of MongoDB to enhance database efficiency, enabling seamless storage and retrieval of annotated results; this implementation led to a 50% decrease in data access latency, improving overall system performance.",
      "Architected Python solutions to streamline data generation and database updates, resulting in a 50% reduction in manual data handling, subsequently optimizing database performance and ensuring seamless system scalability.",
      "Developed a service leveraging Celery workers to dynamically generate responses utilizing my team's fine-tuned LLM models, seamlessly integrated into the backend of four distinct applications.",
      "Revamped the UI for multiple applications, improving user experience by 50%.",
      "Identified and resolved 10+ UI issues, leading to a 25% boost in user satisfaction."
    ],    
  }
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science - CGPA 8.5",
    institution: "Jaypee Institute Of Information Technology, Noida, India",
    duration: "07/2018 – 06/2022",
    logo: "/jiit_logo.png"
  },
  {
    degree: "Higher Secondary School (Class 12th) - 85.8%",
    institution: "Kendriya Vidyalaya No.3, Jhansi",
    duration: "2017",
    logo: "/kv_logo.png"
  },
  {
    degree: "Secondary School (Class 10th) - CGPA 9.6",
    institution: "Kendriya Vidyalaya No.2, Jhansi",
    duration: "2015",
    logo: "/kv_logo.png"
  },
];


export const projects = []; // Keep this for public projects if needed in the future.
