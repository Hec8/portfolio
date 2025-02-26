import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgLARA from "../assets/techno/laravel.svg";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";

// import google from "../assets/companies/google.png";
// import meta from "../assets/companies/meta.webp";
// import amazon from "../assets/companies/amazon.png";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Laravel", image: imgLARA },
    { id: 6, name: "Node.js", image: imgNODE },
    { id: 7, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 8, name: "TypeScript", image: imgTYPE },
];


// const experiences = [
//     {
//         id: 1,
//         role: "Software Engineer",
//         company: "Google",
//         period: "Sep 2022 - Présent",
//         description: [
//             "Développement de nouvelles fonctionnalités pour Google Maps.",
//             "Optimisation des performances de l'application.",
//         ],
//         image: google,
//     },
//     {
//         id: 2,
//         role: "Fullstack Developer",
//         company: "Meta",
//         period: "Jan 2021 - Août 2022",
//         description: [
//             "Création d'une plateforme interne de collaboration pour les équipes.",
//             "Mise en place d'une architecture scalable et optimisée.",
//         ],
//         image: meta,
//     },
//     {
//         id: 3,
//         role: "Frontend Developer",
//         company: "Amazon",
//         period: "Mai 2019 - Déc 2020",
//         description: [
//             "Développement d'une interface utilisateur pour Amazon Web Services.",
//             "Implémentation des tests unitaires et E2E.",
//         ],
//         image: amazon,
//     },
// ];

const Experiences = () => {
    return (
        <div>
            <Title title="EXPERIENCES" />
            <div>
                <div className="flex flex-wrap gap-4 justify-center items-center mt-4 md:mt-0" id="Experiences">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt="" className="object-cover rounded-full h-full w-full" />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))

                    }
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Experiences