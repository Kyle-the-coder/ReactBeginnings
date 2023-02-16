import gthb from "../assets/github.png"
import insta from "../assets/instagram.png"
import linkdIn from "../assets/linkedin.png"
import "../styles/contactMe.css"
import {Link} from "react-router-dom";
import EmailModal from "../components/EmailModal"

const ContactMe = () =>{
    return(
        <section className="contactMeSection"  id="contactSection">
        <div className="contactTitle">

            <h3 className="cm">Contact Me:</h3>
        </div>
        <div className="contactContent">
            
            <Link to="https://github.com/Kyle-the-coder"><img className="contactMeIcons" src={gthb}/></Link>
            <Link to="https://www.linkedin.com/in/kyle-the-coder/"><img className="contactMeIcons" src={linkdIn}/></Link>
            <Link to="https://www.instagram.com/yurok.dance/"><img  className="contactMeIcons" src={insta}/></Link>
            <EmailModal/>
        </div>
        </section>
    )
}

export default ContactMe;