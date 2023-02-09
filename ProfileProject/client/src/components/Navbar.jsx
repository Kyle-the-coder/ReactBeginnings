import TypeWriter from "../views/Intro";
import '../styles/nav.css';
import bg1Img from "../assets/background6.webp"



const NavbarStyle = () => {
    return (
        <div className="nav" style={{ backgroundImage: `url(${bg1Img})` }}>
            <div className="bgImg" >
                <img width="400" className="shapeImg" src={require('../assets/background4.png')}></img>
            </div>
            <div className="navLinks" >
                <div className="typeW">

                    <TypeWriter />

                </div>
                <p className="navContent1">About Me</p>
                <p className="navContent2">Projects</p>
                <p className="navContent3">Contact Me</p>
            </div>
        </div>


    )
}

export default NavbarStyle;