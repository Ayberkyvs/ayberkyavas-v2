import mainLogo from "../assets/mainLogo.webp"
import Memoji from "../assets/ayberk_memoji.webp";

import AyberkResume from "../assets/resume/ayberk_resume.pdf"

import Turkcell from "../assets/certificates/turkcell.webp";
import Scrimba from "../assets/certificates/scrimba.webp";
import Meta from "../assets/certificates/meta.webp";
import Izmirekonomi from "../assets/certificates/izmirekonomi.webp";
import IBM from "../assets/certificates/ibm.webp";

import Pinyin from "../assets/works/PinyinMarine/pinyinmarine.webp"
import Digime from "../assets/works/digime.webp"
import Parkpin from "../assets/works/parkpin.webp"
import Horizon from "../assets/works/HorizonRocket/horizon.webp"
import Password from "../assets/works/password.webp"
import NotWhatsapp from "../assets/works/notwhatsapp.webp"
import PortfolioWebsiteLogo from "../assets/works/PortfolioWebsite/ayberk.webp"

import Figma from "../assets/appstack/figma.webp"
import Spotify from "../assets/appstack/spotify.webp"
import Discord from "../assets/appstack/discord.webp"
import Vscode from "../assets/appstack/vscode.webp"
import Brave from "../assets/appstack/brave.webp"
import Copilot from "../assets/appstack/copilot.webp"
import Github from "../assets/appstack/github.webp"
import Pixlre from "../assets/appstack/pixlre.webp"
import Powertoys from "../assets/appstack/powertoys.webp"
import Steam from "../assets/appstack/steam.webp"

export const data = {
    en: {
        header: {
            mainLogo: mainLogo,
            navbar: [
                {
                    text: "stack",
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
                    id: 4,
                    badgeType: "yellow",
                    badgeText: "Now",
                    image: Horizon,
                    title: "Rocket Competition",
                    company: "Horizon Rocket",
                    paragraph: "Horizon Rocket is a team established at Izmir University of Economics for the Teknofest rocket competition.",
                    link: "/projects/4"
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
                    image: PortfolioWebsiteLogo,
                    title: "Portfolio Website",
                    company: "Ayberk Yavaş",
                    paragraph: "I am developing my portfolio website. (you are currently using)",
                    link: `/projects/1`,
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
                    paragraph: "Horizon Rocket is a team established at Izmir University of Economics for the Teknofest rocket competition.",
                    link: "/projects/4"
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
                    paragraph: "The website is my first corporate work for Pinyin Marine' company.",
                    link: "/projects/8"
                }
            ]
        },
        appstack: [
            {
                badgeType: "red",
                badgeText: "Development",
                image: Vscode,
                title: "VS Code",
                paragraph: "VS Code is a preferred editor for development, offering powerful and flexible features."
            },
            {
                badgeType: "retro",
                badgeText: "AI",
                image: Copilot,
                title: "Microsoft Copilot",
                paragraph: "Microsoft Copilot is your AI-powered coding assistant, enhancing coding efficiency."
            },
            {
                badgeType: "yellow",
                badgeText: "Browser",
                image: Brave,
                title: "Brave",
                paragraph: "Brave is an open source web browser software built on Chromium."
            },
            {
                badgeType: "pink",
                badgeText: "Design",
                image: Figma,
                title: "Figma",
                paragraph: "Figma is a design tool of choice for UI design and creating beautiful illustrations."
            },
            {
                badgeType: "green",
                badgeText: "Entertainment",
                image: Spotify,
                title: "Spotify",
                paragraph: "Spotify is renowned for its music discovery and offers a vast library of podcasts."
            },
            {
                badgeType: "linkblue",
                badgeText: "Communication",
                image: Discord,
                title: "Discord",
                paragraph: "The voice and text chat features are top-notch and the app is easy to use.",
            },
            {
                badgeType: "green",
                badgeText: "Entertainment",
                image: Steam,
                title: "Steam",
                paragraph: "Steam is the ultimate gaming platform with a vast library and social networking features."
            },
            {
                badgeType: "red",
                badgeText: "Development",
                image: Github,
                title: "Github",
                paragraph: "GitHub is the leading software development platform for version control and collaboration."
            },
            {
                badgeType: "pink",
                badgeText: "Design",
                image: Pixlre,
                title: "Pixlr E",
                paragraph: "Pixlr e offers intuitive web-based image editing with a suite of powerful tools."
            },
            {
                badgeType: "retro",
                badgeText: "Tool",
                image: Powertoys,
                title: "Microsoft Powertoys",
                paragraph: "Microsoft Powertoys provides a set of utilities for power users to tune and streamline their Windows experience."
            }
        ]
    },
}