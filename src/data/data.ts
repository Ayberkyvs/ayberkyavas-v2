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
                    text: "game?",
                    link: "https://tenzies.ayberkyavas.com/"
                },
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
                    badgeType: "warning",
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
                    badgeType: "warning",
                    badgeText: "now",
                    image: Scrimba,
                    title: "The Frontend Developer",
                    company: "Scrimba",
                    paragraph: "A Frontend Course with extensive content that I am working on",
                },
                {
                    badgeType: "success",
                    badgeText: "completed",
                    image: Scrimba,
                    title: "Advanced React",
                    company: "Scrimba",
                    paragraph: "I successfully graduating from Advanced React",
                    link: "https://scrimba.com/certificate/uvvkNNUx/greact"
                },
                {
                    badgeType: "success",
                    badgeText: "completed",
                    image: Turkcell,
                    title: "React Development",
                    company: "Turkcell",
                    paragraph: "I am happy to share the four certifications I have completed.",
                    link: "https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMzEzNTI2Y2lkNDcxOTZxaWQxNTRlbmQ="
                },
                {
                    badgeType: "warning",
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
                    badgeType: "pink",
                    badgeText: "Update",
                    image: Ayberk,
                    title: "Portfolio Website",
                    company: "Ayberk Yavaş",
                    paragraph: "I am developing my portfolio website. (you are currently using)",
                    link: "https://ayberkyavas.com/"
                },
                {
                    badgeType: "retro",
                    badgeText: "Upcoming",
                    image: NotWhatsapp,
                    title: "NotWhatsapp",
                    company: "Ayberk Yavaş",
                    paragraph: "I'm developing NotWhatsapp, like Whatsapp but better UI",
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
                {
                    badgeType: "warning",
                    badgeText: "Now",
                    image: Horizon,
                    title: "Rocket Competition",
                    company: "Horizon Rocket",
                    paragraph: " I am happy to be a part of the Horizon rocket team as a web developer and interface developer of ground computers",
                    link: "https://horizonrocket.com/"
                },
                {
                    badgeType: "success",
                    badgeText: "Completed",
                    image: Parkpin,
                    title: "Parkpin",
                    company: "Ayberk & Çetin",
                    paragraph: "I developed the frontend, my friend Çetin Tekin developed the backend.",
                    link: "https://github.com/Ayberkyvs/parkpin/tree/main"
                },
                {
                    badgeType: "success",
                    badgeText: "Completed",
                    image: Izmirekonomi,
                    title: "Gameathon",
                    company: "Izmir University of Economics",
                    paragraph: "I not only provided the website and application infrastructure for this event, but also served as the director throughout the event.",
                    link: "https://gameathon.ieu.edu.tr/index.php"
                },
                {
                    badgeType: "success",
                    badgeText: "Completed",
                    image: Digime,
                    title: "Frontend Internship",
                    company: "DigiME 3D",
                    paragraph: "I Have been working on a web application and solidified my JavaScript skills.",
                    link: "https://digime3d.com/"
                },
                {
                    badgeType: "success",
                    badgeText: "completed",
                    image: Pinyin,
                    title: "Pinyin Marine",
                    company: "Pinyin Marine",
                    paragraph: "The website I made for Pinyin Marine company",
                    link: "https://www.pinyin-marine.com/"
                }
            ]
        }
    },
}