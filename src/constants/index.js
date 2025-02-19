import {
  c,
  CompileVortex,
  cpp,
  css,
  git,
  html,
  java,
  javascript,
  mhft,
  nodejs,
  payloadmaster,
  python,
  reactjs,
  sketcher,
  tailwind,
  termpw,
  threejs,
  utn,
  viceroy,
  weatherpedia
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "UTN FRRe.| Chaco, Argentina",
    icon: utn,
    iconBg: "#161329",
    date: "Mar 2024 - Dec 2024",
    points: [
      "Worked in a team of 6+ people building an ED Platform that helped automate tasks, optimize processes, and maximize productivity.",
      "Designed and implemented a scalable server architecture and automated workflows to support hundreds of users.",
      "Collaborated with the financial department to streamline operational processes, resulting in a 10% reduction in costs and a 50% increase in efficiency.",
    ],
  },
  {
    title: "Server",
    company_name: "Viceroy Snowmass | Aspen, CO",
    icon: viceroy,
    iconBg: "#161329",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Provided excellent dining experiences and managed customer orders efficiently",
      "Coordinated with kitchen staff to ensure timely and accurate food delivery",
      "Maintained high standards of customer service in a luxury resort environment",
    ],
  },
  {
    title: "Barista",
    company_name: "Viceroy Snowmass | Aspen, CO",
    icon: viceroy,
    iconBg: "#161329",
    date: "Dec 2021 - Dec 2022",
    points: [
      "Mastered coffee preparation techniques and delivered exceptional customer service",
      "Managed daily operations of the coffee bar and maintained inventory",
      "Handled high-volume customer traffic during peak resort seasons",
    ],
  },
  {
    // here goes covid 19
    title: "Convid-19 Pandemic",
    company_name: "COVID-19 Pandemic | Worldwide",
    icon: viceroy,
    iconBg: "#161329",
    date: "Mar 2020 - Dec 2021",
    points: [
      "time off prioritizing for health and safety during the pandemic",
    ],
  },
  {
    title: "Back Server",
    company_name: "Viceroy Snowmass | Aspen, CO",
    icon: viceroy,
    iconBg: "#161329",
    date: "Dec 2019 - Mar 2020",
    points: [
      "Supported main servers in providing seamless dining experiences",
      "Assisted with table setup and maintenance throughout service",
      "Collaborated with kitchen and service staff to ensure efficient operations",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
