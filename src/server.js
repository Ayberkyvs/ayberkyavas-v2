import { createServer, Model, Response } from "miragejs"
import PortfolioWebsiteBanner from "./assets/works/PortfolioWebsite/banner.webp"
import PinyinMarineBanner from "./assets/works/PinyinMarine/banner.webp"
import HorizonRocketBanner from "./assets/works/HorizonRocket/banner.webp"

createServer({
    models: {
        projects: Model,
    },

    seeds(server) {
        server.create("project", {
            id: 1,
            title: "Portfolio Website",
            paragraph: "I am developing my portfolio website. (you are currently using)",
            image: PortfolioWebsiteBanner,
            content: [
                {
                    title: "What is a Portfolio Website?",
                    paragraph: "A portfolio website is a digital platform that showcases the professional endeavors, projects, and career progression of an individual or a company. It serves as a dynamic repository reflecting one’s skills, achievements, and experiences in their field of expertise. I have decided to create my portfolio website to present the projects I have worked on and to chart my development journey. I continually update the site with every new piece of knowledge I acquire in the realm of web development, ensuring it remains a current and comprehensive reflection of my professional capabilities. Visitors to the site can gain insights into both my personal and project-related endeavors.",
                }, 
                {
                    title: "Technologies I Utilize",
                    paragraph: "My portfolio website is built using a diverse array of services, technologies, and applications. The core structure is crafted with HTML, styled with CSS, and enhanced with TailwindCSS for responsive design. The user interface is dynamically rendered with JavaScript and TypeScript, powered by the robust React framework. For backend simulation, MirageJS is employed, allowing for a seamless demonstration of my web development skills. The design process is supported by Figma, which aids in creating a visually cohesive and user-friendly experience. Lastly, the website is hosted with the assistance of GoDaddy and Hostinger, ensuring reliable access and performance.",
                },
            ],
            links: [
                {
                    icon: "link",
                    title: "Portfolyo",
                    link: "https://www.ayberkyavas.com"
                },
                {
                    icon: "github", 
                    title: "Github",
                    link: "https://github.com/Ayberkyvs/ayberkyavas-v2"
                },
            ]
        });    
        server.create("project", {
            id: 4,
            title: "Horizon Rocket",
            paragraph: "Horizon Rocket is a team established at Izmir University of Economics for the Teknofest rocket competition.",
            image: HorizonRocketBanner,
            content: [
                {
                    title: "My role",
                    paragraph: "Horizon Rocket is comprised of a dedicated team of 15 members. Within this team, I hold two pivotal roles. My responsibilities include programming and managing the team’s website, as well as designing and developing the interfaces for the ground flight control computers. A key aspect of my duties is to visualize and present the data received from the rocket to users in an accessible and informative manner.",
                }, 
                {
                    title: "Technologies I Utilize",
                    paragraph: "On our website, I employ fundamental Frontend technologies along with advanced tools such as React, TypeScript, Three.js, and Spline to create an engaging user experience. For the ground computers, I utilize the .NET Framework to ensure robust and reliable performance.",
                },
                {
                    title: "Learn More",
                    paragraph: "You can get detailed information from the links below.",
                },
            ],
            links: [
                {
                    icon: "link",
                    title: "Website",
                    link: "https://www.horizonrocket.com"
                },
                {
                    icon: "github", 
                    title: "Github",
                    link: "https://github.com/Ayberkyvs/horizon-rocket-website"
                },
                {
                    icon: "linkedin", 
                    title: "Linkedin",
                    link: "https://www.linkedin.com/company/horizonroket/"
                },
                {
                    icon: "email", 
                    title: "Email",
                    link: "mailto:contact@horizonrocket.com"
                },
            ]
        });        
        server.create("project", {
            id: 8,
            title: "Pinyin Marine",
            paragraph: "The website is my first corporate work for Pinyin Marine' company.",
            image: PinyinMarineBanner,
            content: [
                {
                    title: "What is a Pinyin Marine Website?",
                    paragraph: "Pinyin Marine is a corporate company that started to provide full capacity service in 2022. We are committed to meeting customer needs and expectations by providing maritime services, solutions and support.",
                }, 
                {
                    title: "Technologies I Utilize",
                    paragraph: "Upon securing the project for Pinyin Marine’s website, I was in the nascent stages of my JavaScript journey. The technologies I employed in the development of this site included HTML, CSS, SASS, and JavaScript. My objective was to forge a website that conveyed simplicity and professionalism, reflecting the corporate ethos of Pinyin Marine.",
                },
                {
                    title: "Note",
                    paragraph: "This version maintains a professional tone and is suitable for a corporate environment. If you need further refinement or additional content, feel free to let me know!"
                },
            ],
            links: [
                {
                    icon: "link",
                    title: "Portfolyo",
                    link: "https://www.pinyin-marine.com/"
                },
                {
                    icon: "github", 
                    title: "Github",
                    link: "https://github.com/Ayberkyvs/marinewebsite"
                },
            ]
        });
    },

    routes() {
        this.namespace = "api"
        this.get("/projects", (schema, request) => {
            return schema.projects.all();
        });
        this.get("/projects/:id", (schema, request) => {
            let id = request.params.id;
            let project = schema.projects.find(id);
        
            if (!project) {
              return new Response(404, {}, { errors: ['Proje bulunamadı.'] });
            }
        
            return project;
          });
    }
})