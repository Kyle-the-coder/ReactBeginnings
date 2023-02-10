import TypeWriter from "../views/Intro";
import '../styles/nav.css';
import bg1Img from "../assets/background6.webp"
import { useInView } from 'react-intersection-observer';




const NavbarStyle = () => {
    const { ref: typeRef, inView: typeIsVisi } = useInView();
    return (
        <div className="nav" style={{ backgroundImage: `url(${bg1Img})` }}>

            <div className="navLinks" >
                <div className="typeW" ref={typeRef}>
                    {typeIsVisi ? <TypeWriter /> : ""}
                </div>
                <a href="#aboutSection" className="navContent1 text-decoration-none">About Me</a>
                <a href="#projectSect" className="navContent2 text-decoration-none">Projects</a>
                <a href="#contactSection" className="navContent3 text-decoration-none">Contact Me</a>
            </div>


            <div className="bgImg" >
                <img className="shapeImg" src={require('../assets/navPic.png')}></img>
            </div>

        </div>


    )
}

export default NavbarStyle;