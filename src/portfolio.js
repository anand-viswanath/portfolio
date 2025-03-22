/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anand Viswanath",
  title: "Hi all, I'm Anand",
  subTitle: emoji(
    "AI & Data Science Specialist | Full-Stack Developer, passionate about building smart solutions using neural networks, machine learning, and clean code."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hirRBADp6nEicM-zJr7pBZ8LdKgKv6oJ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anand-viswanath",
  linkedin: "https://www.linkedin.com/in/anandviswanathiyer/",
  gmail: "anandviswanathiyer@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "logos:python",
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "logos:java",
  },
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "logos:tensorflow",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "logos:javascript",
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "logos:react",
  },
  {
    skillName: "NodeJS",
    fontAwesomeClassname: "logos:nodejs",
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "logos:npm-icon",
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "logos:mysql",
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "logos:aws",
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "logos:firebase",
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "logos:docker-icon",
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New South Wales",
      logo: require("./assets/images/unsw.png"),
      subHeader: "Master's in Information Technology",
      duration: "February 2023 - January 2025",
      desc: "Specialized in Artificial Intelligence, Machine Learning, Big Data Management, Neural Networks, and Computer Vision. Achieved High Distinction in AI and conducted a major capstone project (MedSegDiff) in medical image segmentation using Swin Transformer and Diffusion Models.",
      grade: "WAM: 72.5",
      descBullets: [
        "Built AI-powered music generation system using LSTM, RNN, and MusicLM",
        "Created hybrid fashion recommender using ALS + ResNet50",
        "Capstone: Developed MedSegDiff for dermatological image segmentation"
      ]
    },
    {
      schoolName: "University of Petroleum and Energy Studies",
      logo: require("./assets/images/UPES_Distance_Education_Dehradun_logo_a66be1fe70.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "May 2015 - April 2019",
      desc: "Focused on IT Infrastructure and core CS fundamentals. Worked on full-stack web app projects and contributed to metro fare automation and network setup during internships.",
      grade: "8.4 GPA",
      descBullets: ["Interned at DMRC – enhanced Automated Fare Collection System",
        "Built HR Leave & Attendance Portal using Kotlin during Nineleaps internship",
        "Configured new network infrastructure during Allsec internship"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML & Data Science",
      progressPercentage: "85%"
    },
    {
      Stack: "Full-Stack Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "65%"
    },
    {
      Stack: "Android Development",
      progressPercentage: "75%"
    },
    {
      Stack: "DevOps & Cloud",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Capillary Technologies",
      companylogo: require("./assets/images/capillary.jpeg"), // Add this logo to your assets folder
      date: "April 2021 – February 2022",
      desc: "Led CRM development and mobile solutions for Fortune 500 clients. Delivered end-to-end modules, implemented APIs, and optimized data operations in a fast-paced, customer-focused environment.",
      descBullets: [
        "Built and deployed core modules for a major petroleum client in the Middle East",
        "Designed scalable backend APIs and workflows using Java and Spring Boot",
        "Collaborated with frontend, QA, and deployment teams to deliver on tight deadlines"
      ]
    },
    {
      role: "Software Developer",
      company: "Nineleaps Technology Solutions",
      companylogo: require("./assets/images/nineleaps_logo.jpeg"), // Add this logo to your assets folder
      date: "July 2019 – March 2021",
      desc: "Focused on Android development and full-stack solutions for finance, education, and enterprise applications. Worked independently on client deliverables from scratch to deployment.",
      descBullets: [
        "Developed a Kotlin-based HR Portal with leave and attendance features",
        "Built and maintained mobile banking app features for a major fintech client",
        "Handled deployments and bug fixes across QA, UAT, and production"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/unsw.png"),
      projectName: "[UNSW] Region-attention Based Medical Image Segmentation",
      projectDesc:
        "Capstone project using MedSegDiff v2 (a diffusion model) with transformer modifications to enhance dermatological image segmentation.",
      footerLink: []
    },
    {
      image: require("./assets/images/unsw.png"),
      projectName: "[UNSW] Music Generation Using Deep Learning",
      projectDesc:
        "Created three music generation models using Autoencoders, GANs, and LSTM networks. Focused on short-form content for social media.",
      footerLink: []
    },
    {
      image: require("./assets/images/unsw.png"),
      projectName: "[UNSW] Hybrid Fashion Recommender System",
      projectDesc:
        "Combined ALS collaborative filtering with ResNet50-based content filtering to build a fashion recommendation engine.",
      footerLink: []
    },
    {
      image: require("./assets/images/unsw.png"),
      projectName: "[UNSW] Multitask Medical Prediction System",
      projectDesc:
        "Developed a machine learning model to predict multiple medical conditions from a dataset of 1,000 anonymized observations and 111 diverse features.",
      footerLink: []
    },
    {
      image: require("./assets/images/nineleaps_logo.jpeg"),
      projectName: "[Nineleaps] Aspire Fintech App",
      projectDesc:
        "Built Android & iOS apps for credit risk analysis and goal-based savings. Developed decision engine, backend APIs, and integrated payment gateway.",
      footerLink: []
    },
    {
      image: require("./assets/images/nineleaps_logo.jpeg"),
      projectName: "[Nineleaps] Tamasha Live – Gaming Platform",
      projectDesc:
        "Engineered a Ludo game module using Kotlin. Migrated Java code and integrated AWS web services for better performance and scalability.",
      footerLink: []
    },
    {
      image: require("./assets/images/nineleaps_logo.jpeg"),
      projectName: "[Nineleaps] ApnaIAS EdTech Platform",
      projectDesc:
        "Built a tutoring platform with a machine learning-based essay evaluation system for IAS aspirants. Contributed to full-stack development.",
      footerLink: []
    },
    {
      image: require("./assets/images/capillary.jpeg"),
      projectName: "[Capillary] Shell Petroleum Mobile App",
      projectDesc:
        "Customized and deployed mobile apps for Shell Petroleum across India, Iran, and Malaysia. Developed region-specific features.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Highlights & Recognitions ✨"),
  subtitle: "Some proud moments and recognitions from my journey so far.",
  achievementsCards: [
    {
      title: "Feather on Hat Award – Nineleaps",
      subtitle: "Received this recognition multiple times for outstanding contributions to Android and backend projects.",
      image: require("./assets/images/trophy.png"),
      imageAlt: "Award Trophy",
      footerLink: []
    },
    {
      title: "Internship Impact Awards",
      subtitle: "Recognized for completing high-impact projects at DMRC (Delhi Metro Rail Corporation) and Allsec Technologies.",
      image: require("./assets/images/star.png"),
      imageAlt: "Award Star",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch ☎️"),
  subtitle: "Open to roles, collabs, and good conversations.",
  number: "+61-415965225",
  email_address: "anandviswanathiyer@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
