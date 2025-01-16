import { Container, Github, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10">
                <aside>
                    <Container className="h-10 w-10" />
                    <p className="font-bold">
                        HK <span className="text-accent">DEV</span>
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/hector-akpo-08b74128b"><Linkedin /></a>
                        <a href="https://github.com/Hec8"><Github /></a>
                        <a href="https://www.instagram.com/hector_akpo/"><Instagram /></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer