import { createServer, Model, Response } from "miragejs"
import PortfolioWebsiteBanner from "./assets/works/PortfolioWebsite/banner.webp"
import PinyinMarineBanner from "./assets/works/PinyinMarine/banner.webp"
import HorizonRocketBanner from "./assets/works/HorizonRocket/banner.webp"
import GameathonBanner from "./assets/works/Gameathon/banner.webp"

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
            title: "Teknofest Rocket Competition: Horizon Rocket",
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
            id: 6,
            title: "Gameathon Admin Panel",
            paragraph: "I have independently developed a registration website and an admin panel for the IEU Game Development Event.",
            image: GameathonBanner,
            content: [
                {
                    title: "What is Gameathon",
                    paragraph: "Gameathon is an intense event that challenges participants to use their creativity and technical skills to develop new and fun games within just one day. This marathon typically starts early in the morning, and participants work through the night to create a playable game prototype by the end of the designated time. Gameathon combines education and entertainment, offering participants the opportunity to enhance their collaboration, problem-solving, and creative thinking skills. During the event, teams or individuals showcase their talents in areas such as game design, programming, graphic design, and sound design. Gameathon also provides a chance for participants to explore new technologies, meet new people, and connect with potential employers or investors. These types of events require participants to produce creative solutions within a limited timeframe and are often conducted at a fast pace. At the end of a Gameathon, there is usually an evaluation by a jury, and the best games are awarded. However, the primary goal of a Gameathon is for participants to have fun and learn.",
                }, 
                {
                    title: "My Role",
                    paragraph: "My role in the Gameathon event was to develop a registration website. I implemented specific algorithms to ensure that all applications met the event’s criteria. Once the applications were received, I directed the data to the admin panel I created, enabling its management through the panel. Additionally, the admin panel featured functionalities for conducting draws and sharing announcements. While my responsibilities in the web domain were comprehensive, I also contributed to the event by serving as a director, managing stage and sound operations throughout"},
                {
                    title: "Technologies I Utilize",
                    paragraph: "For the development of the website, I utilized technologies such as HTML, CSS, JavaScript, PHP, and MySQL. In my role as a director, I employed tools like OBS and Photoshop, along with specific devices to manage the production aspects.",
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
                    link: "https://gameathon.ieu.edu.tr/index.php"
                },
                {
                    icon: "link",
                    title: "Izmir Universty of Economics News",
                    link: "https://vs.ieu.edu.tr/tr/news/type/read/id/8273"
                },
                {
                    icon: "github", 
                    title: "Github",
                    link: "https://github.com/Ayberkyvs/gameathon"
                },
                {
                    icon: "linkedin", 
                    title: "Linkedin",
                    link: "https://www.linkedin.com/posts/ayberksch_gameathon-oyungeliagntirme-innovation-activity-7145095232555069440-qF0f?utm_source=share&utm_medium=member_desktop"
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