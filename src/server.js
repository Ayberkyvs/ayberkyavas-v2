import { createServer, Model, Response } from "miragejs"
import Izmirekonomi from "./assets/certificates/izmirekonomi.png";
import Pinyin from "./assets/works/pinyinmarine.png"
import Digime from "./assets/works/digime.png"
import Parkpin from "./assets/works/parkpin.png"
import Horizon from "./assets/works/horizon.png"
import Password from "./assets/works/password.png"
import NotWhatsapp from "./assets/works/notwhatsapp.png"
import Ayberk from "./assets/works/ayberk.png"

createServer({
    models: {
        projects: Model,
    },

    seeds(server) {
        server.create("project", {
            id: 1,
            title: "Portfolio Website",
            paragraph: "I am developing my portfolio website. (you are currently using)",
            image: Ayberk,
            content: [
                {
                    title: "Portfolio Websitesi Nedir?",
                    paragraph: "Portfolyo Websitesini yaptığım projeleri, işleri ve gelişimimi göstermek için yapma kararı aldım. Web geliştirme alanında öğrendiğim her yeni bilgiyi portfolyo sitemde kullanıyorum. Bu yüzden sürekli güncelliyorum. Bu sitede benim ve projelerim hakkında bilgi alabilirsiniz.",
                }, 
                {
                    title: "Kullandığım Teknolojiler",
                    paragraph: "Portfolyo websitemde html, css, tailwindcss, shadcnui, javascript, typescript, react, miragejs, figma, godaddy, hostinger gibi hizmet, teknoloji ve uygulamalarını kullanmaktayım.",
                },
            ],
            links: [
                {
                    icon: "link",
                    title: "Portfolyo",
                    link: "www.ayberkyavas.com"
                },
                {
                    icon: "github", 
                    title: "Github",
                    link: "https://github.com/Ayberkyvs/ayberkyavas-v2"
                },
                {
                    icon: "linkedin", 
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/ayberksch/"
                }
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
              // ID'ye sahip proje bulunamadıysa, 404 hata mesajı gönder
              return new Response(404, {}, { errors: ['Proje bulunamadı.'] });
            }
        
            return project;
          });
    }
})