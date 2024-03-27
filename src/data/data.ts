import mainLogo from "../assets/mainLogo.png"
import Memoji from "../assets/ayberk_memoji.png";
import AyberkResume from "../assets/resume/ayberk_resume.pdf"
import Turkcell from "../assets/certificates/turkcell.png";
import Scrimba from "../assets/certificates/scrimba.png";
import Meta from "../assets/certificates/meta.png";
import Izmirekonomi from "../assets/certificates/izmirekonomi.png";
import IBM from "../assets/certificates/ibm.png";
import Pinyin from "../assets/works/pinyinmarine.png"
import Digime from "../assets/works/digime.png"
import Parkpin from "../assets/works/parkpin.png"
import Horizon from "../assets/works/horizon.png"
import Password from "../assets/works/password.png"
import NotWhatsapp from "../assets/works/notwhatsapp.png"
import Ayberk from "../assets/works/ayberk.png"
import Figma from "../assets/appstack/figma.png"
import Spotify from "../assets/appstack/spotify.png"
import Discord from "../assets/appstack/discord.png"

export const data = {
    en: {
        header: {
            mainLogo: mainLogo,
            navbar: [
                {
                    text: "app stack",
                    link: "appstack",
                },
                {
                    text: "projects",
                    link: "projects",
                },
            ],
            socials: [
                {
                    title: "Buymeacoffee",
                    link: "https://www.buymeacoffee.com/ayberksch",
                    icon: "Buymeacoffee",
                },
                {
                    title: "Github",
                    link: "https://github.com/Ayberkyvs",
                    icon: "Github",
                },
                {
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/ayberksch/",
                    icon: "Linkedin",
                },
                {
                    title: "Instagram",
                    link: "https://www.instagram.com/ayberksch",
                    icon: "Instagram",
                },
            ]
        },
        hero: {
            image: Memoji,
            title: "ayberk yavaş",
            subtitle: "Frontend Developer",
            paragraph: "An experienced frontend developer with a successful track record in developing innovative web designs and features. Proficient in HTML, CSS, SCSS, Tailwind, JavaScript, TypeScript, React, and databases, with the ability to quickly learn new technologies. Demonstrated success in identifying and resolving complex code issues.",
            resume: AyberkResume,
            quota: "I enjoy coding for",
            company: "@myself",
            skills: [
                'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SCSS',
                'TailwindCSS', 'ReactJS', 'SQL', 'Router V6', 'API\'S', "C#"
            ],
        },
        featured: {
            title: "PINNED",
            items: [
                {
                    badgeType: "retro",
                    badgeText: "Upcoming",
                    image: NotWhatsapp,
                    title: "NotWhatsapp",
                    company: "Ayberk Yavaş",
                    paragraph: "I'm developing NotWhatsapp, like Whatsapp but better UI",
                },
                {
                    badgeType: "yellow",
                    badgeText: "Now",
                    image: Horizon,
                    title: "Rocket Competition",
                    company: "Horizon Rocket",
                    paragraph: " I am happy to be a part of the Horizon rocket team as a web developer and interface developer of ground computers",
                    link: "https://horizonrocket.com/"
                },
                {
                    badgeType: "pink",
                    badgeText: "UPDATE",
                    image: Password,
                    title: "Password Generator Extension",
                    company: "Ayberk Yavaş",
                    paragraph: "Never use an insecure password again",
                    link: "https://github.com/Ayberkyvs/password-generator-checker-extension",
                },
            ]
        },
        certificates: {
            title: "Certificates & Education",
            items: [
                {
                    badgeType: "retro",
                    badgeText: "Upcoming",
                    image: IBM,
                    title: "Full-Stack Developer",
                    company: "IBM",
                    paragraph: "The certificate I will receive after completing the full-stack course given by IBM",
                },
                {
                    badgeType: "retro",
                    badgeText: "Upcoming",
                    image: Meta,
                    title: "Frontend Developer",
                    company: "Meta",
                    paragraph: "A professional certification I'm working on",
                },
                {
                    badgeType: "yellow",
                    badgeText: "now",
                    image: Scrimba,
                    title: "The Frontend Developer",
                    company: "Scrimba",
                    paragraph: "A Frontend Course with extensive content that I am working on",
                },
                {
                    badgeType: "green",
                    badgeText: "completed",
                    image: Scrimba,
                    title: "Advanced React",
                    company: "Scrimba",
                    paragraph: "I successfully graduating from Advanced React",
                    link: "https://scrimba.com/certificate/uvvkNNUx/greact"
                },
                {
                    badgeType: "green",
                    badgeText: "completed",
                    image: Turkcell,
                    title: "React Development",
                    company: "Turkcell",
                    paragraph: "I am happy to share the four certifications I have completed.",
                    link: "https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMzEzNTI2Y2lkNDcxOTZxaWQxNTRlbmQ="
                },
                {
                    badgeType: "yellow",
                    badgeText: "now",
                    image: Izmirekonomi,
                    title: "Computer Programming",
                    company: "Izmir University of Economics",
                    paragraph: "The certificate I will receive after completing my education at Izmir University of Economics",
                },
            ]
        },
        works: {
            title: "projects & works",
            items: [
                {
                    id: 1,
                    badgeType: "pink",
                    badgeText: "Update",
                    image: Ayberk,
                    title: "Portfolio Website",
                    company: "Ayberk Yavaş",
                    paragraph: "I am developing my portfolio website. (you are currently using)",
                    link: `projects/1`,
                },
                {
                    id: 2,
                    badgeType: "retro",
                    badgeText: "Upcoming",
                    image: NotWhatsapp,
                    title: "NotWhatsapp",
                    company: "Ayberk Yavaş",
                    paragraph: "I'm developing NotWhatsapp, like Whatsapp but better UI",
                },
                {
                    id: 3,
                    badgeType: "pink",
                    badgeText: "UPDATE",
                    image: Password,
                    title: "Password Generator Extension",
                    company: "Ayberk Yavaş",
                    paragraph: "Never use an insecure password again",
                    link: "https://github.com/Ayberkyvs/password-generator-checker-extension",
                },
                {
                    id: 4,
                    badgeType: "yellow",
                    badgeText: "Now",
                    image: Horizon,
                    title: "Rocket Competition",
                    company: "Horizon Rocket",
                    paragraph: " I am happy to be a part of the Horizon rocket team as a web developer and interface developer of ground computers",
                    link: "https://horizonrocket.com/"
                },
                {
                    id: 5,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Parkpin,
                    title: "Parkpin",
                    company: "Ayberk & Çetin",
                    paragraph: "I developed the frontend, my friend Çetin Tekin developed the backend.",
                    link: "https://github.com/Ayberkyvs/parkpin/tree/main"
                },
                {
                    id: 6,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Izmirekonomi,
                    title: "Gameathon",
                    company: "Izmir University of Economics",
                    paragraph: "I not only provided the website and application infrastructure for this event, but also served as the director throughout the event.",
                    link: "https://gameathon.ieu.edu.tr/index.php"
                },
                {
                    id: 7,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Digime,
                    title: "Frontend Internship",
                    company: "DigiME 3D",
                    paragraph: "I Have been working on a web application and solidified my JavaScript skills.",
                    link: "https://digime3d.com/"
                },
                {
                    id: 8,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Pinyin,
                    title: "Pinyin Marine",
                    company: "Pinyin Marine",
                    paragraph: "The website I made for Pinyin Marine company",
                    link: "https://www.pinyin-marine.com/"
                }
            ]
        },
        appstack: [
            {
                badgeType: "pink",
                badgeText: "Design",
                image: Figma,
                title: "Figma",
                paragraph: "Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations",
            },
            {
                badgeType: "green",
                badgeText: "Entertainment",
                image: Spotify,
                title: "Spotify",
                paragraph: "Spotify offers the best music discovery and recommendation app as well as podcast place.",
            },
            {
                badgeType: "linkblue",
                badgeText: "Communication",
                image: Discord,
                title: "Discord",
                paragraph: "The voice and text chat features are top-notch and the app is easy to use.",
            },
            {
                badgeType: "pink",
                badgeText: "Design",
                image: Figma,
                title: "Figma",
                paragraph: "Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations",
            },
        ]
    },
}