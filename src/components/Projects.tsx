import Title from "./Title"
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/entreprise.webp';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de projets',
        description: 'Une application web qui permet de gérer des projets, des tâches et de les attribuer à des contributeurs',
        technologies: ['Laravel', 'Bootstrap'],
        demoLink: '#',
        repoLink: 'https://github.com/Hec8/tp_laravel',
        image: img1,
    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'Il s\'agit de ce magnifique portfolio qui est un résumé de ma vie profesionnelle',
        technologies: ['React js', 'TypeScript', 'Tailwind CSS'],
        demoLink: 'https://hector-akpo.vercel.app',
        repoLink: 'https://github.com/Hec8/portfolio',
        image: img2,
    },
    {
        id: 3,
        title: 'Gestionnaire d\'entreprise',
        description: 'Il s\'agit d\'une application web qui permet de gérer une entreprise (Gérer les employés, leur attribuer des tâches, etc...)',
        technologies: ['PHP', 'Xampp', 'Bootstrap'],
        demoLink: '#',
        repoLink: 'https://github.com/Hec8/Management-web-application-with-PHP',
        image: img3,
    },
];


const Projects = () => {
    return (
        <div className="mt-10">
            <Title title="PROJETS" />
            <div className="grid md:grid-cols-3 gap-4" id="Projects">
                {projects.map((project) => (
                    <div className="bg-base-300 p-5 h-fit rounded-lg shadow-lg">
                        <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover" />
                        <div>
                            <h1 className="my-2 font-bold">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">{tech}</span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>Demo <Video className="w-4" /></a>
                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>Github <Github className="w-4" /></a>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Projects