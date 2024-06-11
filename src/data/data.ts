import mainLogo from "../assets/mainLogo.webp"
import Memoji from "../assets/ayberk_memoji.webp";

import AyberkResume from "../assets/resume/ayberk_resume.pdf"

import Turkcell from "../assets/certificates/turkcell.webp";
import Scrimba from "../assets/certificates/scrimba.webp";
import Meta from "../assets/certificates/meta.webp";
import Izmirekonomi from "../assets/certificates/izmirekonomi.webp";
// import IBM from "../assets/certificates/ibm.webp";
import FreeCodeCamp from "../assets/certificates/freeCodeCamp.webp";

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

// References 

import BurakErarslan from "../assets/references/burakerarslan.webp"
import DoganIsleyen from "../assets/references/doganisleyen.webp"
import ErtugrulAksel from "../assets/references/ertugrulaksel.webp"
import MuratAlbuz from "../assets/references/muratalbuz.webp"

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
            subtitle: "Front-End Developer",
            paragraph: "An experienced Front-End Developer with a successful track record in developing innovative web designs and features. Proficient in HTML, CSS, SCSS, Tailwind, JavaScript, TypeScript, React, and databases, with the ability to quickly learn new technologies. Demonstrated success in identifying and resolving complex code issues.",
            resume: AyberkResume,
            quota: "I enjoy coding for",
            company: "@myself",
            skills: [
                'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SCSS',
                'TailwindCSS', 'ReactJS', 'SQL', 'Router V6', 'API\'S', "C#", "Git & Github"
            ],
        },
        featured: {
            title: "PINNED",
            items: [
                {
                    id: 4,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Horizon,
                    title: "Teknofest Rocket Competition",
                    company: "Horizon Rocket",
                    paragraph: "Horizon Rocket is a team established at Izmir University of Economics for the Teknofest rocket competition.",
                    link: "/projects/4",
                    type: "work"
                },
                {
                    id: 6,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Izmirekonomi,
                    title: "Gameathon Admin Panel",
                    company: "Izmir University of Economics",
                    paragraph: "I have independently developed a registration website and an admin panel for the IEU Game Development Event.",
                    link: "/projects/6",
                    type: "work"
                },
                {
                    id: 5,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Parkpin,
                    title: "Parkpin Smart Car Park",
                    company: "Ayberk & Çetin",
                    paragraph: "Parkpin Smart Parking is an application that allows users to view all parking lots on a map, obtain information about the parking lots, reserve a spot, and make online payments.",
                    link: "https://github.com/LoyalEnv0y/ParkPin-V2",
                    type: "work"
                },
            ]
        },
        certificates: {
            title: "Certificates & Education",
            items: [
                // {
                //     badgeType: "retro",
                //     badgeText: "Upcoming",
                //     image: IBM,
                //     title: "Back-End Javascript Developer",
                //     company: "IBM",
                //     paragraph: "The certificate I will receive after completing the full-stack course given by IBM",
                // },
                // {
                //     badgeType: "yellow",
                //     badgeText: "now",
                //     image: Meta,
                //     title: "Front-End Developer Proffesional",
                //     company: "Meta",
                //     paragraph: "A professional certification I'm working on",
                // },
                {
                    id: 9,
                    badgeType: "yellow",
                    badgeText: "now",
                    image: Scrimba,
                    title: "The Front-End Developer",
                    company: "Scrimba",
                    paragraph: "A Frontend Course with extensive content that I am working on",
                    type: "certificate"
                },
                {
                    id: 8,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Meta,
                    title: "Advanced React",
                    company: "Meta",
                    paragraph: "I have completed Meta’s 26-hour Advanced React course.",
                    link: "https://coursera.org/share/d36a00b6c93a6f54ceafcd33a86895ae",
                    type: "certificate"
                },
                {
                    id: 7,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Meta,
                    title: "React Basics",
                    company: "Meta",
                    paragraph: "I have completed Meta’s 26-hour React Basics course.",
                    link: "https://coursera.org/share/0f188e8d2126c36e6eab8f8eaec43e00",
                    type: "certificate"
                },
                {
                    id: 6,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Meta,
                    title: "Version Control",
                    company: "Meta",
                    paragraph: "I have completed Meta’s 13-hour Version Control course. I learned detailed information about Bash, Git, Github.",
                    link: "https://coursera.org/share/5a302cea4079eff8fe242141706256dc",
                    type: "certificate"
                },
                {
                    id: 5,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Meta,
                    title: "Programming with Javascript",
                    company: "Meta",
                    paragraph: "I have completed Meta’s 42-hour JavaScript course. I earned a certificate with a success rate of 97.73%.",
                    link: "https://coursera.org/share/ab82b952a8e859f2f7bf40bf894632c7",
                    type: "certificate"
                },
                {
                    id: 4,
                    badgeType: "green",
                    badgeText: "completed",
                    image: FreeCodeCamp,
                    title: "Responsive Web Design",
                    company: "freeCodeCamp",
                    paragraph: "I have successfully completed 300 hours of HTML and CSS training.",
                    link: "https://www.freecodecamp.org/certification/ayberksch/responsive-web-design",
                    type: "certificate"
                },
                {
                    id: 3,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Scrimba,
                    title: "Advanced React",
                    company: "Scrimba",
                    paragraph: "I successfully graduating from Advanced React",
                    link: "https://scrimba.com/certificate/uvvkNNUx/greact",
                    type: "certificate"
                },
                {
                    id: 2,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Turkcell,
                    title: "React Development",
                    company: "Turkcell",
                    paragraph: "I am happy to share the four certifications I have completed.",
                    link: "https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMzEzNTI2Y2lkNDcxOTZxaWQxNTRlbmQ=",
                    type: "certificate"
                },
                {
                    id: 1,
                    badgeType: "yellow",
                    badgeText: "now",
                    image: Izmirekonomi,
                    title: "Computer Programming",
                    company: "Izmir University of Economics",
                    paragraph: "The certificate I will receive after completing my education at Izmir University of Economics",
                    type: "certificate"
                },
            ]
        },
        works: {
            title: "projects & works",
            items: [
                {
                    id: 8,
                    badgeType: "pink",
                    badgeText: "Update",
                    image: PortfolioWebsiteLogo,
                    title: "Portfolio Website",
                    company: "Ayberk Yavaş",
                    paragraph: "I am developing my portfolio website. (you are currently using)",
                    link: `/projects/1`,
                    type: "work"
                },
                {
                    id: 7,
                    badgeType: "red",
                    badgeText: "PAUSED",
                    image: NotWhatsapp,
                    title: "NotWhatsapp",
                    company: "Ayberk Yavaş",
                    paragraph: "I'm developing NotWhatsapp, like Whatsapp but better UI",
                    type: "work"
                },
                {
                    id: 6,
                    badgeType: "red",
                    badgeText: "PAUSED",
                    image: Password,
                    title: "Password Generator Extension",
                    company: "Ayberk Yavaş",
                    paragraph: "Never use an insecure password again",
                    link: "https://github.com/Ayberkyvs/password-generator-checker-extension",
                    type: "work"
                },
                {
                    id: 5,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Horizon,
                    title: "Teknofest Rocket Competition",
                    company: "Horizon Rocket",
                    paragraph: "Horizon Rocket is a team established at Izmir University of Economics for the Teknofest rocket competition.",
                    link: "/projects/4",
                    type: "work"
                },
                {
                    id: 4,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Parkpin,
                    title: "Parkpin Smart Car Park",
                    company: "Ayberk & Çetin",
                    paragraph: "Parkpin Smart Parking is an application that allows users to view all parking lots on a map, obtain information about the parking lots, reserve a spot, and make online payments.",
                    link: "https://github.com/LoyalEnv0y/ParkPin-V2",
                    type: "work"
                },
                {
                    id: 3,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Izmirekonomi,
                    title: "Gameathon Admin Panel",
                    company: "Izmir University of Economics",
                    paragraph: "I have independently developed a registration website and an admin panel for the IEU Game Development Event.",
                    link: "/projects/6",
                    type: "work"
                },
                {
                    id: 2,
                    badgeType: "green",
                    badgeText: "Completed",
                    image: Digime,
                    title: "Frontend Internship",
                    company: "DigiME 3D",
                    paragraph: "I Have been working on a web application and solidified my JavaScript skills.",
                    link: "https://digime3d.com/",
                    type: "work"
                },
                {
                    id: 1,
                    badgeType: "green",
                    badgeText: "completed",
                    image: Pinyin,
                    title: "Pinyin Marine",
                    company: "Pinyin Marine",
                    paragraph: "The website is my first corporate work for Pinyin Marine' company.",
                    link: "/projects/8",
                    type: "work"
                }
            ]
        },
        references: {
            title: "References",
            items: [
                {
                    image: BurakErarslan,
                    title: "Burak Erarslan",
                    company: "Co-Founder at Pinyin Marine",
                    paragraph: "He has developed himself in web services and has a strong communication skills",
                    socials: [
                        {
                            title: "Burak Erarslan Phone Number",
                            link: "tel:05373442566",
                            icon: "Phone",
                        },
                        {
                            title: "Burak Erarslan Email",
                            link: "mailto:burak.erarslan@pinyin-marine.com",
                            icon: "Mail",
                        },
                        {
                            title: "Burak Erarslan Linkedin",
                            link: "https://www.linkedin.com/in/burak-erarslan/",
                            icon: "Linkedin",
                        },
                    ],
                },
                {
                    image: DoganIsleyen,
                    title: "Doğan İşleyen",
                    company: "GM at Efor Fair",
                    paragraph: "He is a very ambitious and determined person, there is nothing he cannot do in the job he loves",
                    socials: [
                        {
                            title: "Doğan İşleyen Phone Number",
                            link: "tel:+905336874545",
                            icon: "Phone",
                        },
                    ],
                },
                {
                    image: ErtugrulAksel,
                    title: "Ertuğrul Aksel",
                    company: "Founder at Serapore Machines",
                    paragraph: "Thanks to Ayberk’s innovative policies, development-oriented efforts, and time-saving solutions, our company has gained a significant market position since its inception. I extend my gratitude to them",
                    socials: [
                        {
                            title: "Ertuğrul Aksel Phone Number",
                            link: "tel:+905324214816",
                            icon: "Phone",
                        },
                        {
                            title: "Ertuğrul Aksel Email",
                            link: "mailto:ertugrul@serapore.com.tr",
                            icon: "Mail",
                        },
                        {
                            title: "Ertuğrul Aksel Linkedin",
                            link: "https://www.linkedin.com/in/ertugrul-aksel-18445969/",
                            icon: "Linkedin",
                        },
                    ],
                },
                {
                    image: MuratAlbuz,
                    title: "Murat Albuz",
                    company: "Plant Manager at Newarc",
                    paragraph: "Kudos to Ayberk for driving our frontend development with creativity and efficiency. Their solutions have made a real impact!",
                    socials: [
                        {
                            title: "Murat Albuz Phone Number",
                            link: "tel:+905056814460",
                            icon: "Phone",
                        },
                        {
                            title: "Murat Albuz Email",
                            link: "mailto:murat@serapore.com.tr",
                            icon: "Mail",
                        },
                        {
                            title: "Murat Albuz Linkedin",
                            link: "https://www.linkedin.com/in/murat-albuz-20372b57/",
                            icon: "Linkedin",
                        },
                    ],
                },
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