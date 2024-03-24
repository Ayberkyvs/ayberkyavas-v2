import mainLogo from "../assets/mainLogo.png"
import Memoji from "../assets/ayberk_memoji.png";
import Turkcell from "../assets/certificates/turkcell.png";
import Scrimba from "../assets/certificates/scrimba.png";
import Meta from "../assets/certificates/meta.png";

export const data = {
    en: {
        header: {
            mainLogo: mainLogo,
            navbar: [
                {
                    text: "home",
                    link: "/"
                },
                {
                    text: "about",
                    link: "/about"
                }
            ],
            socials: [
                {
                    title: "Github",
                    link: "https://github.com/Ayberkyvs",
                    icon: "Github"
                },
                {
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/ayberksch/",
                    icon: "Linkedin"
                },
                {
                    title: "Instagram",
                    link: "https://www.instagram.com/ayberksch",
                    icon: "Instagram"
                }
            ]
        },
        hero: {
            image: Memoji,
            title: "ayberk yavaş",
            subtitle: "Frontend Developer",
            paragraph: "Resourceful professional with successful track record in developing innovative web designs and features. Possesses solid knowledge of HTML, CSS, SCSS, Tailwind, JavaScript, TypeScript, React, Database with ability to quickly learn new technologies. Demonstrated success in identifying and resolving complex code issues.",
            quota: "I enjoy coding for",
            company: "@myself",
            skills: [
                'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SCSS',
                'TailwindCSS', 'ReactJS', 'SQL', 'Router V6', 'API\'S', "C#"
            ],
        },
        certificates: {
            title: "Certificates",
            items: [
                {
                    badgeType: "retro",
                    badgeText: "Upcoming",
                    image: Meta,
                    title: "Frontend Developer",
                    company: "Meta",
                    paragraph: "I successfully graduating from Advanced React",
                },
                {
                    badgeType: "success",
                    badgeText: "success",
                    image: Scrimba,
                    title: "Advanced React",
                    company: "Scrimba",
                    paragraph: "I successfully graduating from Advanced React",
                },
                {
                    badgeType: "success",
                    badgeText: "success",
                    image: Turkcell,
                    title: "React Development",
                    company: "Turkcell",
                    paragraph: "I am happy to share the four certifications I have just completed.",
                }
            ]
        }
    },
}