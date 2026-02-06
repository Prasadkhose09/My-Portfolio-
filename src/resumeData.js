import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const resumeData = {
    name: "Prasad Khose",
    title: "Software Developer",
    summary: "Detail-oriented IT engineering student and software developer with hands-on experience in Java and Spring Boot development. Strong foundation in backend systems, REST APIs, databases, and problem-solving, with proven academic and project experience. Actively preparing for industry roles with a focus on scalable, clean, and efficient software solutions.",
    heroDescription: "Software Developer specializing in Java, Spring Boot, and modern web technologies. Building scalable backend systems and responsive frontends.",
    contact: {
        location: "Pune, India - 33",
        email: "prasadkhose512@gmail.com",
        phone: "9356544698",
        resumeUrl: "https://drive.google.com/file/d/1TC7rMCXHGzMQMCt2u3vvfd2hBh7rKDdf/view?usp=sharing",
        social: [
            { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/prasad-khose/" },
            { name: "GitHub", icon: Github, url: "https://github.com/Prasad-Khose" },
            { name: "Email", icon: Mail, url: "mailto:prasadkhose512@gmail.com" },
        ]
    },
    skills: {
        technicalSkills: [
            "Java", "Spring Boot", "Spring MVC", "Microservices", "Core Java",
            "REST APIs", "C++ Programming", "React.js", "MySQL",
            "DBMS", "Hibernate (ORM)", "Spring Data JPA", "Authentications"
        ],
        softSkills: ["Time Management", "Presentation", "Problem Solving", "Team work"]
    },
    projects: [
        {
            title: "Banking Management System",
            tech: ["Java", "Spring Boot", "MySQL", "Hibernate"],
            description: "Developed a secure banking backend using Java, Spring Boot, and MySQL. Built RESTful APIs for customer accounts, transactions, and balance management. Implemented ORM (Hibernate) with Spring Data JPA for efficient database operations."
        },
        {
            title: "India 2047",
            tech: ["Spring Boot", "React.js", "MySQL", "JPA"],
            description: "Built and enhanced Spring Boot REST APIs and a React.js frontend for citizen management, violation handling, and real-time civic score updates. Implemented an extended rule-based civic score calculation system. Designed and optimized data models while resolving frontend-backend integration issues."
        },
        {
            title: "Sign Bridge",
            tech: ["Spring Boot", "Computer Vision", "Machine Learning", "React", "Python"],
            description: "Developing a sign language translation system using computer vision and machine learning to convert hand gestures into text, with a React-based interface and backend API integration."
        }
    ],
    experience: [
        {
            role: "Celebal Technologies Internship",
            duration: "June 2025 – Aug 2026", // Note: Future date in resume? Keeping as is to match resume.
            highlights: [
                "Improved UI/UX design of legacy applications for better responsiveness and user engagement.",
                "Collaborated with the development team to integrate modern front-end practices.",
                "Contributed to refactoring and styling components to align with current web standards."
            ]
        },
        {
            role: "CodeReach Software and Edu.",
            duration: "Dec 2024 – March 2025",
            highlights: [
                "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
                "Identified bugs, debugged code, and implemented effective solutions to resolve technical issues."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Engineering in Information Technology",
            institution: "Nutan Maharashtra Institute of Engineering and Technology, Pune",
            year: "2022 - 2026",
            score: "CGPA: 8.62"
        }
    ],
    certifications: [
        "Java Programming",
        "C/ C++ Programming",
        "TCS-ion Carrier Edge - Young Professionals Soft skills"
    ]
};
