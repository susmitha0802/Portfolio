import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import { TbBrandGraphql } from "react-icons/tb";
import { SiHasura } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import Drowsiness from '../images/Drowsiness.png'
import CIBO from '../images/CIBO.png'
import TicTacToe from '../images/TicTacToe.png'
import ContactBook from '../images/ContactBook.png'

export const bio = {
    "roles": ["SUSMITHA PAPANI", "A DEVELOPER", "A PROGRAMMER"],
    "about": "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
}

export const skills = [
    {
        title: "Frontend",
        list: [
            {
                "name": "React Js",
                "icon": <RiReactjsLine color="#61DAFB" />
            },
            {
                "name": "HTML",
                "icon": <FaHtml5 color="#E44D26" />
            },
            {
                "name": "CSS",
                "icon": <FaCss3 color="#1572B6" />
            },
            {
                "name": "JavaScript",
                "icon": <IoLogoJavascript color="#F7DF1E" />
            },
            {
                "name": "Bootstrap",
                "icon": <FaBootstrap color="#7952B3" />
            }
        ]
    },
    {
        title: "Backend",
        list: [
            {
                "name": "Golang",
                "icon": <TbBrandGolang color="#00ADD8" />
            },
            {
                "name": "Graph Ql",
                "icon": <TbBrandGraphql color="#663399" />
            },
            {
                "name": "Hasura",
                "icon": <SiHasura color="#0084FF" />
            },
            {
                "name": "MySQL",
                "icon": <TbBrandMysql color="#4479A1" />
            },
            {
                "name": "Postgresql",
                "icon": <BiLogoPostgresql color="#336791" />
            },
            {
                "name": "Firebase",
                "icon": <BiLogoFirebase color="#FFCA28" />
            },
        ],
    },
    {
        title: "Programming Languages",
        list: [
            {
                "name": "Java",
                "icon": <FaJava color="#007396" />
            },
            {
                "name": "Python",
                "icon": <FaPython color="#3776AB" />
            }
        ],
    },
    {
        title: "Others",
        list: [
            {
                "name": "Git",
                "icon": <FaGitAlt color="#F05032" />
            },
            {
                "name": "GitHub",
                "icon": <FaGithub color="black" />
            },
            {
                "name": "VS Code",
                "icon": <TbBrandVscode color="#007ACC" />
            },
        ],
    },
]
export const education = [
    {
        "degree": "BE Computer Science and Engineering",
        "school": "University College of Engineering, Osmania University",
        "grade": "CGPA: 9.1",
        "date": "2019 - 2023",
    },
    {
        "degree": "Intermediate (MPC)",
        "school": "Narayana Junior College, Hyderabad, Telangana",
        "grade": "Percentage: 98.1",
        "date": "2017 - 2019"
    },
    {
        "degree": "SSC",
        "school": "Narayana Concept School, Hyderabad, Telangana",
        "grade": "CGPA: 10",
        "date": "2016 - 2017"
    }
]

export const projects = [
    {
        "title": "Drowsiness Detection",
        "img": Drowsiness,
        "description": "A deep learning-based system which can detect and prevent driver drowsiness by monitoring the facial expressions in real-time and alerts the driver when drowsiness is detected.",
        "skills": [
            {
                "name": "Python"
            },
            {
                "name": "OpenCV"
            },
            {
                "name": "LSTM"
            },
            {
                "name": "Inception V3"
            }
        ],
        "github": "https://github.com/susmitha0802/Driver-Drowsiness-Detection-using-Deep-Learning",
    },
    {
        "title": "CIBO",
        "img": CIBO,
        "description": "A static and responsive website designed to select a restaurant from different locations and explore its menu.",
        "skills": [
            {
                "name": "HTML"
            },
            {
                "name": "CSS"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "Bootstrap"
            }
        ],
        "github": "https://github.com/susmitha0802/CIBO",
        "demo": "https://susmitha0802.github.io/CIBO/"
    },
    {
        "title": "Tic-Tac-Toe Game",
        "img": TicTacToe,
        "description": "Tic-Tac-Toe Game allows two players to play against each other on a 3x3 grid. The players take turns marking their symbol (X or O) on an empty cell, and the first player to get three of their symbols in a horizontal, vertical, or diagonal line wins the game.",
        "skills": [
            {
                "name": "Java"
            }
        ],
        "github": "https://github.com/susmitha0802/TicTacToe",
    },
    {
        "title": "Contact Book",
        "img": ContactBook,
        "description": "An application that allows to manage contacts by providing options to add a new contact, delete a particular contact, reset the name and phone number fields and exit from the contact book.",
        "skills": [
            {
                "name": "Python"
            }
        ],
        "github": "https://github.com/susmitha0802/ContactBook",
    }
]
export const experience = [
    {
        "name": "Beautiful Code",
        "role": "Full Stack Developer",
        "date": "Aug 2023 - Present",
        "icon": "https://www.beautifulcode.co/assets/logo-9bfde9e3d927e22049e07f53c02aecf80072413feb5e6af98684f9d554bf3b85.svg"
    }
]
export const socialMedia = [
    {
        "network": "linkedin",
        "href": "https://www.linkedin.com/in/susmitha-papani-054781232/"
    },
    {
        "network": "github",
        "href": "https://github.com/susmitha0802"
    },
    {
        "network": "email",
        "href": "mailto:susmithapapani@gmail.com"
    }
]
