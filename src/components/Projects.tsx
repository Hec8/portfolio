import Title from "./Title"
import img1 from '../assets/projects/dihas.png';
import img2 from '../assets/projects/chaine.png';
import img3 from '../assets/projects/dash.png';
import img4 from '../assets/projects/nel-tachart.png';
import img5 from '../assets/projects/Image collée.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Dihas website',
        description: 'Il s\'agit du site web de l\'entreprise Dihas spécialisée dans le domaine de la technologie.',
        technologies: ['Laravel', 'Tailwind CSS', 'Next.js'],
        demoLink: 'https://dihas.tech',
        repoLink: 'https://github.com/Hec8/dihas',
        image: img1,
    },
    {
        id: 2,
        title: 'Chaine de Hanche',
        description: 'Il s\'agit d\'un site de présentation d\'une chaine de hanche pour femme. Il a été développé pourun concours.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        demoLink: 'https://jiz-chaine-hanche.vercel.app',
        repoLink: 'https://github.com/Hec8/jiz-chaine-hanche',
        image: img2,
    },
    {
        id: 3,
        title: 'Dashboard du crm PulsAi',
        description: 'Il s\'agit d\'une proposition de dashboard pour un CRM intelligent. Il a été développé dans le cadre d\'un concours.',
        technologies: ['Next.js', 'Tailwind CSS', 'Lucid React'],
        demoLink: 'https://hector-pulsai-crm.vercel.app',
        repoLink: 'https://github.com/Hec8/hector-pulsai-crm',
        image: img3,
    },
    {
        id: 4,
        title: 'Site de l\'artiste Leonel ZADJI',
        description: 'Il s\'agit du site web de l\'artiste peintre Leonel ZADJI. Il a été développé pour présenter ses oeuvres et permettre aux visiteurs de le contacter.',
        technologies: ['React.js', 'Tailwind CSS', 'Daisy.UI'],
        demoLink: 'https://leonel-zadji.vercel.app',
        repoLink: 'https://github.com/Hec8/nel-tachart',
        image: img4,
    },
    {
        id: 5,
        title: 'Blog Truth of news',
        description: 'Il s\'agit du blog d\'un média béninois qui traite de l\'actualité au Bénin et dans le monde.',
        technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
        demoLink: 'https://truthofnews.vercel.app',
        repoLink: 'https://github.com/Hec8/truthofnews',
        image: img5,
    }
];


const Projects = () => {
    return (
        <div className="mt-10">
            <Title title="PROJETS RECENTS" />
            <div className="grid md:grid-cols-3 gap-4" id="Projects">
                {projects.map((project, index) => (
                    <div className={`bg-base-300 p-5 h-fit rounded-lg shadow-lg hover-lift animate-scaleIn delay-${(index + 1) * 200}`}>
                        <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover transition-transform duration-300 hover:scale-105" />
                        <div>
                            <h1 className="my-2 font-bold">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm transition-transform duration-300 hover:scale-110">{tech}</span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3 hover-lift" href={project.demoLink}>Demo <Video className="w-4" /></a>
                            <a className="btn btn-neutral w-1/3 ml-2 hover-lift" href={project.repoLink}>Github <Github className="w-4" /></a>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Projects