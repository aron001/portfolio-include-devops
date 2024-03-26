/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aron Hunde",
  title: "Hi all, I'm Aron Hunde",
  subTitle: emoji(
    "A passionate DevOps Engineer and MERN stack Developer 🚀 with expertise in implementing and managing DevOps practices and have an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1m38Bl4Q5xpwHXvE35z3X2SXd_QmfOc117eyaRC8mNU8/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aron001",
  linkedin: "https://www.linkedin.com/in/aron-hunde-665001240",
  gmail: "aronhunde20@gmail.com",
  gitlab: "https://gitlab.com/aron001",


  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Certified DevOps Engineer And MERN Stack  DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Implement and manage continuous integration and delivery pipelines for efficient software development and deployment"
    ),
    emoji("⚡ Build and deploy Progressive Web Applications (PWAs) using MERN stack"),
    emoji(
      "⚡ Troubleshoot and optimize application performance, scalability, and security in production environments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */


    softwareSkills: [
      {
        skillName: "Kubernetis",
        fontAwesomeClassname: require("./assets/images/kubernetis.png"),
      },
      {
        skillName: "docker",
        fontAwesomeClassname: require("./assets/images/docker.jpg"),
      },
      {
        skillName: "Jenkins",
        fontAwesomeClassname: require("./assets/images/jenkins.jpg"),
      },
      {
        skillName: "Gitlab ci/cd",
        fontAwesomeClassname: require("./assets/images/gitlab.png"),
      },
      {
        skillName: "Grafana",
        fontAwesomeClassname: require("./assets/images/Grafana.png"),
      },
      {
        skillName: "Promethus",
        fontAwesomeClassname: require("./assets/images/promerheus.png"),
      },
      {
        skillName: "Argocd",
        fontAwesomeClassname: require("./assets/images/argocd.png"),
      },
      {
        skillName: "Ansible",
        fontAwesomeClassname: require("./assets/images/ansible.png"),
      },
      {
        skillName: "Terraform",
        fontAwesomeClassname: require("./assets/images/Terraform.png"),
      },
    {
      skillName: "javascript",
      fontAwesomeClassname: require("./assets/images/js.png"),
    },
    {
      skillName: "react",
      fontAwesomeClassname: require("./assets/images/react.png"),
    },

    {
      skillName: "Tailwind Css",
      fontAwesomeClassname: require("./assets/images/tailwindcss.png"),
    },
    {
      skillName: "Node",
      fontAwesomeClassname: require("./assets/images/node.png"),
    },
    {
      skillName: "Express",
      fontAwesomeClassname: require("./assets/images/express.png"),
    },

    {
      skillName: "Mongo Db",
      fontAwesomeClassname: require("./assets/images/mongodb.jpg"),
    },
    {
      skillName: "Postgress Db",
      fontAwesomeClassname: require("./assets/images/postgress.png"),
    },
    {
      skillName: "aws",
      fontAwesomeClassname: require("./assets/images/aws.png"),
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: require("./assets/images/azure.png"),
    },
   

  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: " Gebeya Inc",
      logo: require("./assets/images/gebeya.png"),
      subHeader: "DevOps Training Program",
      duration: "Oct 2023 - Apr 2024",
      desc: "Mastered DevOps tools and methodologies for streamlined software delivery pipelines.",
      descBullets: [
        "Gained practical skills in containerization with Docker, enabling efficient application packaging and deployment",
        "Learned GitLab CI/CD to automate build, test, and deployment processes, ensuring consistent and reliable releases.",
      "Utilized Grafana to visualize application performance metrics and troubleshoot issues proactively.",
    "Understood Kubernetes for managing containerized applications at scale, promoting high availability and scalability.",
    "Employed Prometheus to collect and analyze application and infrastructure metrics, facilitating performance optimization" ,
    "Leveraged ArgoCD to declaratively manage infrastructure and applications using Git as the source of truth, ensuring consistency and rollback capabilities"
    ]
    },
    {
      schoolName: "Bahirdar University",
      logo: require("./assets/images/bahirdar.jpg"),
      subHeader: "Bachelor of Science in COmputer Engineering",
      duration: "September 2018 - july 2023",
      desc: " Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer Intern",
      company: "Safaricom",
      companylogo: require("./assets/images/safaricom.jpg"),
      date: "April 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Web Developer",
      company: "Andinet ict Tech",
      companylogo: require("./assets/images/andinet.jpg"),
      date: "oct 2023 – jan 2024",
      desc: "Develop a modern and interactive web application using Nuxt.js, a Vue.js framework for server-side rendering that drives  improved SEO ranking or increased user conversion rate"
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Exceed It",
      companylogo: require("./assets/images/exceed.png"),
      date: "Jun 2022 – oct 2022",
      desc: "Developed a digital archive system using the MERN stack to facilitate the transition of manual data into a secure and searchable digital format for Maya Production."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "From DevOps and FullStack Development",
  projects: [
    {
      image: require("./assets/images/grafanapng.png"),
      projectName: "DevOps Pipeline Implementation for Tele insight issue resolution",
      projectDesc: "Implemented CI/CD pipeline using GitLab CI/CD,docker,kubernetis,grafana,argocd,prometheus, for a Spring Boot application with 6 microservices running on Azure Kubernetes Service (AKS)",
      footerLink: [
        {
          name: "Visit project repo",
          url: "https://github.com/aron001/tele-insight-feedback-and-issue-resolution.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hululogoo.png"),
      projectName: "hulu Ecommerce Web App",
      projectDesc: "Intuitive product browsing and search functionality,Streamlined shopping cart and secure checkout process,Responsive design for optimal viewing across devices (desktop, mobile, tablet),Developed a full-featured e-commerce application using the MERN stack",
      footerLink: [
        {
          name: "Visit project repo",
          url: "https://github.com/aron001/Ecommerce-Web-App.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DevOps Engineer",
      subtitle:
        "DevOps engineer Certeficate .",
      image: require("./assets/images/gebeya.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },

      ]
    },
    {
      title: "Cert prep: Certified Kubernetis Administrator(CKA)",
      subtitle:
        "Cert prep: Certified Kubernetis Administrator(CKA) from linked in",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "certefication",
          url: "https://www.linkedin.com/learning/certificates/54e2276ddbf6190b3c3ac64a351894987b0a2e855fff3da51cc7f8b6c8288b2a?u=137689028"
        }
      ]
    },

    {
      title: "AWS Certified Cloud Practitioner (CLF-C01) Cert Prep: 1 Cloud Concepts",
      subtitle: "Completed Certifcation from linked in AWS Certified Cloud Practitioner (CLF-C01) Cert Prep: 1 Cloud Concepts",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.linkedin.com/learning/certificates/82ddc0c9479582eb900cd901e5657e69e1b25494a7870159334ab07e0321d271?u=137689028"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+251-941390824",
  number2: "+251-701602204",
  email_address: "aronhunde20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
