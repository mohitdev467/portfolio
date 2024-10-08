/* Change this file to get your personal Porfolio */
// Import necessary libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(fab);

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hi 👋.",
  title2: "Mohit",
  logo_name: "<MO",
  logo_name2: "HIT />",

  nickname: "Mohit",
  full_name: "Mohit Lehri",
  subTitle:
    "Frontend Developer with 3 years of experience in Web Development | Skilled in React.js, Next.js, Javascript, Typescript, HTML5, CSS3, Bootstrap, TailwindCSS, MaterialUI, NodeJs, ExpressJs, MongoDB and React-native",
  resumeLink:
    "https://drive.google.com/file/d/1cUhe7fT8Pnk7Umtfjuz4ZkLAT1xtuFEV/view?usp=sharing",
  mail: "mailto:mohitlehri99@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  // github: "https://github.com/mohitdev467?tab=repositories",
  linkedin: "https://www.linkedin.com/in/mohit-lehri-576320200/",
  gmail: "mohitlehri99@gmail.com",
};

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "Proficient in JavaScript, the backbone of the MERN stack, enabling both frontend and backend development. Comfortable with modern JavaScript features like ES6+.",
        "Expertise in developing dynamic, component based user interfaces with React.js and Next.js. Knowledgeable in state management using Redux or Context API, and adept at optimizing performance with React hooks and NextJs SSR and SSG.",
        "Skilled in building robust and scalable server-side applications using NodeJs and Express.js. Capable of setting up middleware, routing & also experienced in using MongoDB, a NoSQL database, to design, implement, and manage complex, scalable databases.",
        "Familiar with Git for version control, enabling efficient tracking of changes, collaborative development, and seamless integration with platforms like GitHub or GitLab.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: ["fab", "html5"],
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: ["fab", "css3"],
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: ["fab", "js"],
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: ["fab", "react"],
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: ["fab", "node"],
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: ["fab", "npm"],
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: ["fab", "git"],
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: ["fab", "github"],
          style: {
            color: "#2b3137",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Prestige Institute of Engineering Management & Research, Indore",
      subtitle: "B.Tech in Mechanical Engineering",
      logo_path: "piemr-logo.png",
      alt_name: "PIEMR",
      duration: "2017 - 2021",
      descriptions: ["⚡ I have secured 7.5 CGPA.."],
      website_link: "https://piemr.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ReactJS Basics",
      subtitle: "Hackathon",
      logo_path: "react-2.svg",
      certificate_link:
        "https://drive.google.com/file/d/1TYgPr9xRkKfxrCQGC_xluLicFNZpByox/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
      certificateBgColor: "rgba(0,0,0,0.5)",
    },
    {
      title: "AWS for Beginners",
      subtitle: "Great Learning",
      logo_path: "aws.svg",
      certificate_link:
        "https://drive.google.com/file/d/1udP7WG-ZGNkQd55b7V4aZFw97Cnk7PYX/view?usp=sharing",
      alt_name: "Aws",
      color_code: "#eb6559",
      certificateBgColor: "rgba(0,0,0,0.5)",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  postionName: "Software Developer",
  experienceCount: "3 Year",
  description: `I am a Software Developer and having 3 Year of experience with Software Development, in these period of two years. I got the opportunity to strengthen my knowledge in web development and mobile app development, In addition, I am well-schooled in manual testing and debugging processes needed to enhance user experience and provide client satisfaction.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "Samyotech Software Solutions Pvt. Ltd.",
          company_url: "https://samyotech.com/",
          logo_path: "samyotech.jpg",
          duration: "Aug 2023 - Currently Working",
          location: "Indore, Madhya Pradesh",
          description: `With a strong background in frontend development and a specialization in React-Native, I have assumed a leadership role where I excel in training, overseeing, and mentoring emerging talents in the software development realm. I have notably steered the creation and management of a sophisticated banking application, showcasing my prowess in Payment Gateway Integration and comprehensive understanding of banking legislation. My collaborative approach is evident in close partnerships with project managers and team leads, particularly in addressing change requests. Proficient in the MERN Stack, my focus is primarily on mobile app development, constituting 80% of my work, while the remaining 20% involves web development. Notable achievements include a 50% increase in productivity through innovative problem-solving techniques. I take pride in a holistic approach to application lifecycle management, ensuring sustained functionality and user satisfaction.`,
          color: "#854fee",
        },

        {
          title: "Software Developer",
          company: "Softmind Infotech Pvt. Ltd.",
          company_url: "https://www.softmindinfotech.com/",
          logo_path: "softmind.jpg",
          duration: "Nov 2021 - July 2023",
          location: "Indore, India",
          description: ` I maintained continuous communication with both clients and the development team, fostering a collaborative environment for optimal project outcomes. My focus centered on an eduTech project, where ReactJS played a central role as the primary technology. Dedicated entirely to frontend development, my responsibilities were divided, with 60% of my efforts dedicated to make user interfaces and the remaining 40% focused on implementing logics within the code to achieve desired outcomes.
          `,
          color: "#4458dc",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I am having expertise in JavaScript,Typescript, React.js, Next.js, Node.js, ExpressJS, MongoDB and React Native, which enabling me to create robust and scalable applications for both web and mobile platforms. With a deep understanding of JavaScript concepts.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mohit-lehri.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Digital Regenesys",
      url: "https://www.digitalregenesys.com/",
      description:
        "Digital Regenesys, the groundbreaking online platform brought to you by Regenesys, a global educational institution renowned for its 25+ years legacy of providing quality and holistic education.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "NextJS",
          iconifyClass: "fab fa-react",
        },
      ],
    },
    {
      id: "1",
      name: "BudgetBuddie",
      url: "https://www.budgetbuddie.com/",
      description:
        "BudgetBuddie managing your finances easy, After BudgetBuddie Founder, Tim spent countless hours using spreadsheets and other tools to manage his finances he grew frustrated with the lack of an all-in-one platform available that was easy to understand and use. BudgetBuddie was then created to allow people from all walks of life to gain an understanding of their finances and make better money choices.",

      languages: [
        {
          name: "HTML5",
          iconifyClass: "fab fa-html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fab fa-css3-alt",
        },
        {
          name: "Bootstrap",
          iconifyClass: "fab fa-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "ReactJS",
          iconifyClass: "fab fa-react",
        },
      ],
    },
    {
      id: "2",
      name: "PetStand",
      url:
        "https://play.google.com/store/apps/details?id=com.samyotech.petstand&hl=en&gl=US",
      description:
        "PetStand is your pet’s super store! PetStand is a one-stop online pet store for all your pet care needs. Our mission is to make sure that your pets receive the best care possible, and we do this by providing a vast range of pet products that include treats, food, grooming accessories, health supplements, cleaning products, clothing, toys, and much more.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "React-Native",
          iconifyClass: "fab fa-react",
        },
      ],
    },
    {
      id: "3",
      name: "Nordiqo",
      url: "https://nordiqo.com/",
      description:
        "Nordiqo is a banking application is designed to managing finances of people. This application enables users to analyse their incomes and expenses, also manage group expenses, track your expenses, and much more.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "React-Native",
          iconifyClass: "fab fa-react",
        },
      ],
    },

    {
      id: "4",
      name: "Matrimonix",
      url:
        "https://play.google.com/store/apps/details?id=com.samyotech.smmatrimony",
      description:
        "Matrimonix, is a product by Samyotech made for helping people find their life partners easily, Converted the Matrimonix app from being available only on Android to being accessible on both Android and IOS mobile devices using React Native.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "React-Native",
          iconifyClass: "fab fa-react",
        },
      ],
    },
    {
      id: "4",
      name: "Medical App",
      url:
        "https://drive.google.com/file/d/1KKL5LNxGbobT4SLqSwlKRliAXNtcHIyZ/view?usp=sharing",
      description:
        "The Medical App is a comprehensive solution designed to streamline and enhance the healthcare experience for both patients and healthcare providers. Built on the versatile React Native platform, this app offers a seamless and intuitive interface for users to access a wide range of healthcare services.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "React-Native",
          iconifyClass: "fab fa-react",
        },
      ],
    },

    {
      id: "5",
      name: "Edusity",
      url: "https://www.edusity.com/",
      description:
        "Everyone, everywhere has the right to access education. Edusity's mission is to overcome whatever obstacles individuals, communities and societies may encounter on the path to growing and sharing humanity’s knowledge.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "fab fa-html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fab fa-css3-alt",
        },
        {
          name: "JavaScript",
          iconifyClass: "fab fa-js",
        },
        {
          name: "ReactJS",
          iconifyClass: "fab fa-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
