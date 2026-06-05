import reactimg from "../images/react.png";
import htmlimg from "../images/html.png";
import cssimg from "../images/css.png";
import javascriptimg from "../images/javascript.png";
import flutterimg from "../images/flutter.png";
import tailwindcss from "../images/tailwind.png";
import nextjsimg from "../images/nextjs.png";
import nodejsimg from "../images/nodejs.png";
import expressjsimg from "../images/expressjs.png";
import mysqlimg from "../images/mysql.png";
import mongodbimg from "../images/mongodb.png";
import firebaseimg from "../images/firebase.png";
import vscodeimg from "../images/vscode.png";
import gitimg from "../images/git.png";
import githubimg from "../images/github.png";
import postmanimg from "../images/postman.png";
import cplusimg from "../images/c++.png";
import pythonimg from "../images/python.png";
import dpsimg from "../images/dps.jpg";
import kipsimg from "../images/kips.png";
import ucpimg from "../images/ucp.png";
import clangimg from "../images/c.png";
import jupyterimg from "../images/jupyter.png";
import matplot from "../images/matplot.png";
import numpy from "../images/numpy.png";
import pandas from "../images/pandas.png";
import seaborn from "../images/seaborn.png";
import sklearn from "../images/sklearn.png";
import streamlit from "../images/streamlit.png";
import mv from "../images/mv.png";
import diabetes from "../images/dia.png";


export const Bio = {
  name: "Ahmad Nawaz",
  roles: [
    "AI/ML Engineer",
    "Programmer",
  ],
  skilldur: "Technologies I work with",
  description:
    "Aspiring Machine Learning Engineer and Computer Science student at UCP. Skilled in Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, and Streamlit, with a strong foundation in Data Structures & Algorithms (C++). Experienced in frontend development with React and passionate about building AI/ML solutions to real-world problems. Currently seeking AI/ML internship opportunities.",
  github: "https://github.com/ahmadnawaz01",
  resume:
    "https://drive.google.com/file/d/1xewBCg-QlC6l4xl-LzXLNsvCWLP2Bsga/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/ahmad-nawaz-0099cs/",
  twitter: "",
  insta: "https://www.instagram.com/ahmadnawaz.21/",
  facebook: "",
  exp: "Currently Studing in BS Computer Science (6th Semester)",
  education: "Currently Studing In 6th Semester",
};

export const skills = [
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Jupyter Notebook",
        image:
          jupyterimg,
      },
      {
        name: "Matplotlib",
        image:
          matplot,
      },
      {
        name: "NumPy",
        image:
          numpy,
      },
      {
        name: "Pandas",
        image:
          pandas,
      },
      {
        name: "Seaborn",
        image:
          seaborn,
      },
      {
        name: "Scikit-learn",
        image:
          sklearn,
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: htmlimg,
      },
      {
        name: "CSS",
        image: cssimg,
      },
      {
        name: "React Js",
        image:
          reactimg,
      },
      {
        name: 'Streamlit',
        image: streamlit,
      },
      {
        name: "JavaScript",
        image:
          javascriptimg,
      },
      {
        name: "TailWind CSS",
        image: tailwindcss
      },
      {
        name: "Flutter",
        image:
          flutterimg,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "MySQL",
        image:
          mysqlimg,
      },
      {
        name: "MongoDB",
        image:
          mongodbimg,
      },
      {
        name: "Firebase",
        image: firebaseimg,
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "c++",
        image:
          cplusimg,
      },
      {
        name: "Javascript",
        image:
          javascriptimg,
      },
      {
        name: "Python",
        image:
          pythonimg,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Jupyter Notebook",
        image: jupyterimg,
      },
      {
        name: "Git",
        image:
          gitimg,
      },
      {
        name: "GitHub",
        image:
          githubimg,
      },
      {
        name: "VS Code",
        image:
          vscodeimg,
      },
      {
        name: "Postman",
        image:
          postmanimg,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ucpimg,
    role: "Aspiring Machine Learning Engineer",
    company: "University of Central Punjab, Lahore",
    date: "Oct 2023 - Present",
    desc: "6th semester Computer Science student focused on AI/ML. Skilled in Python, NumPy, Pandas, Scikit-learn, and Streamlit, with a strong foundation in C++ and DSA. Passionate about building real-world machine learning solutions.",
    skills: [
      "Python",
      "Machine Learning",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "C++",
      "DSA"
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: ucpimg,
    school: "University of Central Punjab (UCP), Lahore",
    date: "Oct 2023 - June 2027",
    grade: "",
    desc: "I am in the 6th semester and have focused on core subjects such as Data Structures & Algorithms, Operating Systems, and Database Management Systems. At UCP, I am gaining practical knowledge through projects and lab work, developing strong programming, problem-solving, and software development skills.",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    id: 1,
    img: kipsimg,
    school: "KIPS College, Okara",
    date: "2021 - 2023",
    grade: "",
    desc: "Completed FSc Pre-Medical at KIPS College, Okara, focusing on science subjects including Physics, Chemistry, and Biology.",
    degree: "FSc Pre-Medical",
  },
  {
    id: 2,
    img: dpsimg,
    school: "District Public School (DPS), Bangla Gogera",
    date: "2019 - 2021",
    grade: "89%",
    desc: "Completed Matriculation in Science at District Public School (DPS), Bangla Gogera, achieving 89% marks.",
    degree: "Matriculation (Science)",
  },
];
export const projects = [
  {
  "id": 9,
  "title": "Movie Recommender System",
  "date": "June 2026",
  "description": "An end-to-end Content-Based Recommendation Engine that calculates semantic vector distances across 5,000 titles. Implemented Joblib matrix compression to reduce storage footprints by 60%, bypassing cloud deployment limits. Features a clean, poster-first UI that streams real-time media via the TMDB API.",
  "image": mv,
  "tags": ["Python", "Scikit-Learn", "Streamlit", "Joblib", "Machine Learning", "NLP"],
  "category": "machine learning",
  "github": "https://github.com/ahmadnawaz01/Movie-Recomendation-System---Machine-Learning-Project",
  "webapp": "https://movie-recomendation-system---machine-learning-project-3shsnryt.streamlit.app/"
},
  {
  id: 8, 
  title: "Email/SMS Spam Classifier",
  date: "May 2026",
  description:
    "An end-to-end Machine Learning pipeline designed to classify messages as either 'Spam' or 'Ham'. It features a comprehensive lifecycle from custom text preprocessing and model evaluation to a live interactive web deployment.",
  image:
    "https://raw.githubusercontent.com/ahmadnawaz01/SMS-Span-Classifier---Machine-Learning-Project---Scklearn---Streamlit/main/sms.spam.classifier.png",
  tags: ["Python", "Scikit-Learn", "Streamlit", "NLTK", "Machine Learning"],
  category: "machine learning",
  github: "https://github.com/ahmadnawaz01/SMS-Span-Classifier---Machine-Learning-Project---Scklearn---Streamlit",
  webapp: "https://sms-span-classifier---machine-learning-project---scklearn---ap.streamlit.app/",
},
{
  "id": 10,
  "title": "Diabetes Predictive System",
  "date": "June 2026",
  "description": "An end-to-end Machine Learning web application designed for early healthcare screening. Implemented a Support Vector Machine (SVM) classifier mapped to a robust data preprocessing pipeline using StandardScaler. Features a responsive, real-time diagnostic screening interface built with Streamlit.",
  "image": diabetes,
  "tags": ["Python", "Scikit-Learn", "Streamlit", "Machine Learning", "Data Science"],
  "category": "machine learning",
  "github": "https://github.com/ahmadnawaz01/Diabetes-Prediction-System---Scklearn---Streamlit",
  "webapp": "https://diabetes-prediction-system---scklearn---app-8kpe99hnltcja7swdh.streamlit.app/"
},
{
  id: 6,
    title: "Personal Portfolio",
    date: "Jun 2026",
    description:
      "An interactive personal developer portfolio featuring advanced UI micro-animations, custom particle canvas effects, a sleek vertical timeline, and direct EmailJS contact integration.",
    image:
      "https://github.com/ahmadnawaz01/Portfolio-Website-Using-React/raw/main/portfolio.png",
    tags: ["React 19", "Vite", "Framer Motion", "Tailwind v4", "MUI"],
    category: "web app",
    github: "https://github.com/ahmadnawaz01/Portfolio-Website-Using-React",
    webapp: "https://ahmadnawazportfolio.netlify.app/",
  },
  {
    id: 7, 
    title: "EventPass",
    date: "Jun 2026",
    description:
      "A cross-platform Flutter mobile application featuring robust Firebase authentication, secure role-based admin controls, and integrated Stripe test-mode payments for seamless ticket checkout.",
    image:
      "https://github.com/ahmadnawaz01/MAD-Project_02-Flutter-Event_Booking_App/raw/main/Screenshot_20260601_021538_com.example.event_booking_app.jpg.jpeg",
    tags: ["Flutter", "Dart", "Firebase", "Stripe API"],
    category: "android app",
    github: "https://github.com/ahmadnawaz01/MAD-Project_02-Flutter-Event_Booking_App",
    webapp: "https://github.com/ahmadnawaz01/MAD-Project_02-Flutter-Event_Booking_App",
  },
  {
    id: 1,
    title: "SwiftKeys",
    date: "Jan 2026",
    description:
    "A highly responsive peer-to-peer car rental UI showcase featuring a sleek public storefront and an isolated, comprehensive dashboard layout for vehicle fleet management.",
    image:
      "https://github.com/ahmadnawaz01/SwiftKeys-rental-car-booking-site-Project/raw/main/2.png",
    tags: ["React 19", "Vite 8", "Tailwind CSS v4", "React Router v7"],
    category: "web app",
    github: "https://github.com/ahmadnawaz01/SwiftKeys-rental-car-booking-site-Project",
    webapp: "https://swiftkeeys.netlify.app/",
  },
  {
    id: 4, 
    title: "PassOP",
    date: "Aug 2025",
    description:
      "A lightweight, secure local password manager utilizing LocalStorage state persistence, unique UUID tracking for clean CRUD actions, and custom responsive layouts for mobile data tables.",
    image:
      "https://github.com/ahmadnawaz01/-PassOP-Password-Manager-Using-React_Tailwindcss/raw/main/passop.png",
    tags: ["React 19", "Vite", "Tailwind CSS", "UUID API"],
    category: "web app",
    github: "https://github.com/ahmadnawaz01/-PassOP-Password-Manager-Using-React_Tailwindcss",
    webapp: "https://passop-password-manager-using-react.netlify.app/",
  },
];
