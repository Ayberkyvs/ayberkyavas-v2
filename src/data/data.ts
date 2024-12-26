import mainLogo from "../assets/mainLogo.webp";
import Ayberk from "../assets/ayberk_yavas.webp";

import AyberkResume from "../assets/resume/frontend_developer_ayberk_yavas.pdf";

import Scrimba from "../assets/certificates/scrimba.webp";
import Meta from "../assets/certificates/meta.webp";
import Izmirekonomi from "../assets/certificates/izmirekonomi.webp";
// import IBM from "../assets/certificates/ibm.webp";
import FreeCodeCamp from "../assets/certificates/freeCodeCamp.webp";
import MongoDB from "../assets/certificates/mongodb.webp";

import Pinyin from "../assets/works/PinyinMarine/pinyinmarine.webp";
import Digime from "../assets/works/digime.webp";
import Parkpin from "../assets/works/parkpin.webp";
import Horizon from "../assets/works/HorizonRocket/horizon.webp";
// import Password from "../assets/works/password.webp"
// import NotWhatsapp from "../assets/works/notwhatsapp.webp"
import PortfolioWebsiteLogo from "../assets/works/PortfolioWebsite/ayberk.webp";
import Reform from "../assets/works/ReformMarine/reformmarine.webp";
import X from "../assets/works/X/x_logo.png";

import Figma from "../assets/appstack/figma.webp";
import Spotify from "../assets/appstack/spotify.webp";
// import Discord from "../assets/appstack/discord.webp"
// import Brave from '../assets/appstack/brave.webp'
import Element from "../assets/appstack/element.webp";
import Vscode from "../assets/appstack/vscode.webp";
import Edge from "../assets/appstack/edge.webp";
import Copilot from "../assets/appstack/copilot.webp";
import Github from "../assets/appstack/github.webp";
import Pixlre from "../assets/appstack/pixlre.webp";
import Powertoys from "../assets/appstack/powertoys.webp";
// import Steam from "../assets/appstack/steam.webp"
import Epic from "../assets/appstack/epic.webp";

// References

import BurakErarslan from "../assets/references/burakerarslan.webp";
import DoganIsleyen from "../assets/references/doganisleyen.webp";
import ErtugrulAksel from "../assets/references/ertugrulaksel.webp";
import MuratAlbuz from "../assets/references/muratalbuz.webp";

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
          text: "certificates",
          link: "certificates",
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
      ],
    },
    hero: {
      image: Ayberk,
      title: "ayberk yavaş",
      subtitle: "Front-End Developer | MERN Stack | UI/UX Designer",
      paragraph:
        "Creative Front-End Developer with expertise in React and the MERN stack. Experienced in building scalable applications and delivering end-to-end solutions. Skilled in modern JavaScript tools like Tanstack Query, Zustand, and Webpack. Focused on performance optimization, responsive design, and seamless user experiences. Passionate about staying up-to date with industry trends and collaborating with cross functional teams to create high-quality web applications.",
      resume: AyberkResume,
      quota: "I enjoy coding for",
      company: "@myself",
      skills: [
        "REST API's",
        "Router V6",
        "CSS Modules",
        "TypeScript",
        "Figma",
        "Material Design",
        "Usability",
        "Accessibility",
        "JavaScript",
        "UX/UI Process",
        "Build Automation",
        "Git & Github",
        "TailwindCSS",
        "ReactJS",
        "Databases",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Rapid Prototyping",
        "Unit Testing",
        "JWT Auth",
        "MERN Stack",
        "Websocket.io",
      ],
    },
    featured: {
      title: "PINNED",
      items: [
        {
          id: 10,
          badgeType: "green",
          badgeText: "completed",
          image: X,
          title: "Fullstack X Clone",
          company: "Ayberk Yavaş",
          paragraph:
            "I am develop a full-stack working clone of the X. I use MERN stack for this project.",
          link: "https://github.com/Ayberkyvs/fullstack-twitter-clone",
          type: "work",
        },
        {
          id: 8,
          badgeType: "green",
          badgeText: "completed",
          image: MongoDB,
          title: "MongoDB for NodeJS Developers",
          company: "MongoDB University",
          paragraph:
            "I have successfully completed the MongoDB for NodeJS Developers course.",
          type: "certificate",
          link: "https://learn.mongodb.com/c/0uKoBeghRVqj29kFOM_IMw"
        },
        {
          id: 5,
          badgeType: "green",
          badgeText: "completed",
          image: Meta,
          title: "Meta Front-End Professional (10 Certificates)",
          company: "Meta",
          paragraph:
            "Hello! At the end of a 7-month process, I completed a total of 400 hours and received 9 certificates and earned the Meta Certified Front-End Developer Professional Certificate. ",
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/G1Z8VD7P21EA",
          type: "certificate",
        },
      ],
    },
    certificates: {
      title: "Certificates & Education",
      items: [
        {
          id: 9,
          badgeType: "yellow",
          badgeText: "now",
          image: Scrimba,
          title: "The Front-End Developer",
          company: "Scrimba",
          paragraph:
            "A Frontend Course with extensive content that I am working on",
          type: "certificate",
        },
        {
          id: 8,
          badgeType: "green",
          badgeText: "completed",
          image: MongoDB,
          title: "MongoDB for NodeJS Developers",
          company: "MongoDB University",
          paragraph:
            "I have successfully completed the MongoDB for NodeJS Developers course.",
          type: "certificate",
          link: "https://learn.mongodb.com/c/0uKoBeghRVqj29kFOM_IMw"
        },
        {
          id: 7,
          badgeType: "green",
          badgeText: "completed",
          image: FreeCodeCamp,
          title: "Back-End Development and APIs",
          company: "freeCodeCamp",
          paragraph:
            "I have successfully completed 300 hours of Express.js, Node.js, MongoDB training.",
          link: "https://www.freecodecamp.org/certification/ayberksch/back-end-development-and-apis",
          type: "certificate",
        },
        {
          id: 6,
          badgeType: "green",
          badgeText: "completed",
          image: Scrimba,
          title: "Learn TypeScript /w Bob Ziroll",
          company: "Scrimba",
          paragraph: "A TypeScript Course with extensive content",
          link: "https://scrimba.com/certificate-cert24zAwJ77fGQG6kVUkgT9AGiob85Zjtc3fQEci",
          type: "certificate",
        },
        {
          id: 5,
          badgeType: "green",
          badgeText: "completed",
          image: Meta,
          title: "Meta Front-End Professional (10 Certificates)",
          company: "Meta",
          paragraph:
            "Hello! At the end of a 7-month process, I completed a total of 400 hours and received 9 certificates and earned the Meta Certified Front-End Developer Professional Certificate. ",
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/G1Z8VD7P21EA",
          type: "certificate",
        },
        // {
        //     id: 4,
        //     badgeType: "green",
        //     badgeText: "completed",
        //     image: FreeCodeCamp,
        //     title: "Responsive Web Design",
        //     company: "freeCodeCamp",
        //     paragraph: "I have successfully completed 300 hours of HTML and CSS training.",
        //     link: "https://www.freecodecamp.org/certification/ayberksch/responsive-web-design",
        //     type: "certificate"
        // },
        {
          id: 3,
          badgeType: "green",
          badgeText: "completed",
          image: Scrimba,
          title: "React Router",
          company: "Scrimba",
          paragraph: "I successfully completed React Router V6 course.",
          link: "https://scrimba.com/certificate-cert2uNjfK9m1mh8CDLt8DEwZNkjD1fGD9FZmkT",
          type: "certificate",
        },
        {
          id: 2,
          badgeType: "green",
          badgeText: "completed",
          image: Scrimba,
          title: "Advanced React",
          company: "Scrimba",
          paragraph: "I successfully completed Advanced React.",
          link: "https://scrimba.com/certificate-cert24zAwJ77fGQG6kVUkgT9AFeZa2z5tDLViKRBb",
          type: "certificate",
        },
        {
          id: 1,
          badgeType: "green",
          badgeText: "completed",
          image: Izmirekonomi,
          title: "Computer Programming",
          company: "Izmir University of Economics",
          paragraph: "I graduated with a 3.44 / 4 GPA in Computer programming.",
          type: "certificate",
        },
      ],
    },
    works: {
      title: "projects & works",
      items: [
        {
          id: 10,
          badgeType: "green",
          badgeText: "completed",
          image: X,
          title: "Fullstack X Clone",
          company: "Ayberk Yavaş",
          paragraph:
            "I am develop a full-stack working clone of the X. I use MERN stack for this project.",
          link: "https://github.com/Ayberkyvs/fullstack-twitter-clone",
          type: "work",
        },
        {
          id: 9,
          badgeType: "green",
          badgeText: "completed",
          image: Reform,
          title: "Reform Marine Freelance",
          company: "Reform Marine",
          paragraph:
            "Reform Marine offers customized solutions to the maritime industry as a company specialized in electrical systems maintenance and repair.",
          link: "https://www.reformmarine.com/",
          type: "work",
        },
        {
          id: 8,
          badgeType: "green",
          badgeText: "completed",
          image: PortfolioWebsiteLogo,
          title: "Portfolio Website",
          company: "Ayberk Yavaş",
          paragraph: "I developed my personal website with React, TailwindCSS.",
          link: `/projects/1`,
          type: "work",
        },
        // {
        //     id: 7,
        //     badgeType: "red",
        //     badgeText: "PAUSED",
        //     image: NotWhatsapp,
        //     title: "NotWhatsapp",
        //     company: "Ayberk Yavaş",
        //     paragraph: "I'm developing NotWhatsapp, like Whatsapp but better UI",
        //     type: "work"
        // },
        // {
        //     id: 6,
        //     badgeType: "red",
        //     badgeText: "PAUSED",
        //     image: Password,
        //     title: "Password Generator Extension",
        //     company: "Ayberk Yavaş",
        //     paragraph: "Never use an insecure password again",
        //     link: "https://github.com/Ayberkyvs/password-generator-checker-extension",
        //     type: "work"
        // },
        {
          id: 5,
          badgeType: "green",
          badgeText: "completed",
          image: Horizon,
          title: "Teknofest Rocket Competition",
          company: "Horizon Rocket",
          paragraph:
            "Horizon Rocket is a team established at Izmir University of Economics for the Teknofest rocket competition.",
          link: "/projects/4",
          type: "work",
        },
        {
          id: 4,
          badgeType: "green",
          badgeText: "Completed",
          image: Parkpin,
          title: "Parkpin Smart Car Park",
          company: "Ayberk & Çetin",
          paragraph:
            "Parkpin Smart Parking is an application that allows users to view all parking lots on a map, obtain information about the parking lots, reserve a spot, and make online payments.",
          link: "https://github.com/LoyalEnv0y/ParkPin-V2",
          type: "work",
        },
        {
          id: 3,
          badgeType: "green",
          badgeText: "Completed",
          image: Izmirekonomi,
          title: "Gameathon Admin Panel",
          company: "Izmir University of Economics",
          paragraph:
            "I have independently developed a registration website and an admin panel for the IEU Game Development Event.",
          link: "/projects/6",
          type: "work",
        },
        {
          id: 2,
          badgeType: "green",
          badgeText: "Completed",
          image: Digime,
          title: "Frontend Internship",
          company: "DigiME 3D",
          paragraph:
            "I Have been working on a web application and solidified my JavaScript skills.",
          link: "https://digime3d.com/",
          type: "work",
        },
        {
          id: 1,
          badgeType: "green",
          badgeText: "completed",
          image: Pinyin,
          title: "Pinyin Marine Freelance",
          company: "Pinyin Marine",
          paragraph:
            "The website is my first corporate work for Pinyin Marine' company.",
          link: "/projects/8",
          type: "work",
        },
      ],
    },
    references: {
      title: "References",
      items: [
        {
          image: BurakErarslan,
          title: "Burak Erarslan",
          company: "Co-Founder at Reform Marine",
          paragraph:
            "He has developed himself in web services and has a strong communication skills",
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
          paragraph:
            "He is a very ambitious and determined person, there is nothing he cannot do in the job he loves",
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
          paragraph:
            "Thanks to Ayberk’s innovative policies, development-oriented efforts, and time-saving solutions, our company has gained a significant market position since its inception. I extend my gratitude to them",
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
          paragraph:
            "Kudos to Ayberk for driving our frontend development with creativity and efficiency. Their solutions have made a real impact!",
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
      ],
    },
    appstack: [
      {
        badgeType: "red",
        badgeText: "Development",
        image: Vscode,
        title: "VS Code",
        paragraph:
          "VS Code is a preferred editor for development, offering powerful and flexible features.",
      },
      {
        badgeType: "retro",
        badgeText: "AI",
        image: Copilot,
        title: "Github Copilot",
        paragraph:
          "GitHub Copilot is an AI pair programmer that helps you write code faster.",
      },
      {
        badgeType: "yellow",
        badgeText: "Browser",
        image: Edge,
        title: "Microsoft Edge",
        paragraph:
          "Microsoft Edge is a fast and secure browser that offers a range of features and customization options.",
      },
      {
        badgeType: "pink",
        badgeText: "Design",
        image: Figma,
        title: "Figma",
        paragraph:
          "Figma is a design tool of choice for UI design and creating beautiful illustrations.",
      },
      {
        badgeType: "green",
        badgeText: "Entertainment",
        image: Spotify,
        title: "Spotify",
        paragraph:
          "Spotify is renowned for its music discovery and offers a vast library of podcasts.",
      },
      {
        badgeType: "linkblue",
        badgeText: "Communication",
        image: Element,
        title: "Element",
        paragraph:
          "Element is a secure and private messaging app that offers end-to-end encryption.",
      },
      {
        badgeType: "green",
        badgeText: "Entertainment",
        image: Epic,
        title: "Epic Games",
        paragraph: "Epic Games is a digital storefront for games and software.",
      },
      {
        badgeType: "red",
        badgeText: "Development",
        image: Github,
        title: "Github",
        paragraph:
          "GitHub is the leading software development platform for version control and collaboration.",
      },
      {
        badgeType: "pink",
        badgeText: "Design",
        image: Pixlre,
        title: "Pixlr E",
        paragraph:
          "Pixlr e offers intuitive web-based image editing with a suite of powerful tools.",
      },
      {
        badgeType: "retro",
        badgeText: "Tool",
        image: Powertoys,
        title: "Microsoft Powertoys",
        paragraph:
          "Microsoft Powertoys provides a set of utilities for power users to tune and streamline their Windows experience.",
      },
    ],
  },
};
