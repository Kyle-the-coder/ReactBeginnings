import TypeWriter from "./Typewriter";
import '../styles/nav.css';
import { useInView } from 'react-intersection-observer';




const NavbarStyle = () => {
    return (
        <div className="nav">


            <div className="typeW">
                <h6 className="mx-2">K.<span className="textContent2">T</span>.C.</h6>
            </div>
            <div className="navLinks">
                <a href="#lpSection" className="navContent0 text-decoration-none">Home</a>
                <a href="#aboutSection" className="navContent1 text-decoration-none">About Me</a>
                <a href="#skillzSection" className="navContent1 text-decoration-none">Skills</a>
                <a href="#projectSect" className="navContent2 text-decoration-none">Projects</a>
                <a href="#contactSection" className="navContent3 text-decoration-none">Contact Me</a>
            </div>

        </div>


    )
}

export default NavbarStyle;