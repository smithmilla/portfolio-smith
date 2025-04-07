import HtmlIcon from "../icons/htmlIcon"
import CssIcon from "../icons/cssIcon"
import JsIcon from "../icons/jsIcon"
import LinkIcon from "../icons/linkIcon"
import GithubIcon from "../icons/githubIcon"

const projectsData = [
    {
        projectKey: 1,
        projectTitle: "Numero Secreto",
        projectDescription: "App Minijuego en la que el usuario debe adivinar un número secreto previamente generado de forma aleatoria por el sistema. La app proporciona pistas indicando si el número ingresado es mayor o menor que el número secreto, hasta que finalmente logra adivinarlo.",
        projectImage: "/projects/app-secret-number.webp",
        projectTechnologies: [
            {
                technologiesKey: 1,
                technologiesName: "HTML",
                technologiesColorClass: "bg-html-light",
                technologiesIcon: HtmlIcon
            },
            {
                technologiesKey: 2,
                technologiesName: "CSS",
                technologiesColorClass: "bg-css-light",
                technologiesIcon: CssIcon
            },
            {
                technologiesKey: 3,
                technologiesName: "JavaScript",
                technologiesColorClass: "bg-js-light",
                technologiesIcon: JsIcon
            }
        ],
        projectDetails: [
            {
                detailKey: 1,
                detailName: "Code",
                detailLink: "https://github.com/smithmilla/juego-nro-secreto",
                detailIcon: GithubIcon
            },
            {
                detailKey: 2,
                detailName: "Preview",
                detailLink: "https://smithmilla.github.io/juego-nro-secreto/",
                detailIcon: LinkIcon
            }
        ]
    },
    {
        projectKey: 1,
        projectTitle: "Amigo Secreto",
        projectDescription: "Este programa te ayuda a hacer el sorteo de forma rápida, divertida y anónima. Ideal para amigos, familia o compañeros de trabajo que quieran sorprenderse con regalos y disfrutar juntos de una linda tradición.",
        projectImage: "/projects/app-secret-friend.webp",
        projectTechnologies: [
            {
                technologiesKey: 1,
                technologiesName: "HTML",
                technologiesColorClass: "bg-html-light",
                technologiesIcon: HtmlIcon
            },
            {
                technologiesKey: 2,
                technologiesName: "CSS",
                technologiesColorClass: "bg-css-light",
                technologiesIcon: CssIcon
            },
            {
                technologiesKey: 3,
                technologiesName: "JavaScript",
                technologiesColorClass: "bg-js-light",
                technologiesIcon: JsIcon
            }
        ],
        projectDetails: [
            {
                detailKey: 1,
                detailName: "Code",
                detailLink: "https://github.com/smithmilla/juego-nro-secreto",
                detailIcon: GithubIcon
            },
            {
                detailKey: 2,
                detailName: "Preview",
                detailLink: "https://smithmilla.github.io/juego-nro-secreto/",
                detailIcon: LinkIcon
            }
        ]
    }
];

export default projectsData;