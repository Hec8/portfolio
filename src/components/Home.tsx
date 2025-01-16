import { Mail } from "lucide-react"
import img from "../assets/img.jpg"

const Home = () => {

    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br />
                    je suis <span className="text-accent">Hkdev</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack <br />
                    avec 2 ans d'expérience utilisant React Js et Laravel.  <br />
                    Contactez-moi si vous avez besoin de mes services ou pour des projets
                </p>
                <a href="mailto:akpohector4@gmail.com" className="btn btn-accent md:w-fit"><Mail />Contactez-moi</a>
            </div>

            <div className="md:ml-60 ">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>
        </div>
    )

}

export default Home