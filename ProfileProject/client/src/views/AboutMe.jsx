import bg1Img from "../assets/background6.webp"
import '../styles/aboutMe.css'

const AboutMe = () => {
    return (
        <section className="aboutMeSection" id="aboutSection" style={{ backgroundImage: `url(${bg1Img})` }}>
            <div className="aboutMeBox">

                <h4 className="mx-2 aboutMeTitle">About Me:</h4>
            <div className="aboutMeContent">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus. Elit ut aliquam purus sit amet luctus venenatis.
                    Faucibus pulvinar elementum integer enim neque volutpat. Quis eleifend quam adipiscing vitae. At quis risus sed vulputate. Orci a scelerisque purus semper eget duis at tellus. Habitant morbi tristique senectus et netus et malesuada fames ac.
                    Tristique senectus et netus et malesuada fames ac turpis egestas. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Massa tempor nec feugiat nisl pretium fusce. Viverra justo nec ultrices dui sapien eget mi proin sed.
                    Adipiscing tristique risus nec feugiat in fermentum posuere urna. Nulla pharetra diam sit amet nisl suscipit. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed risus pretium quam vulputate dignissim suspendisse in est.
                    Vel pretium lectus quam id leo in vitae turpis. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Turpis nunc eget lorem dolor.
                </p>
            </div>
            </div>
            
                <img width="400" className="aboutMeImg" src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80"/>

        </section>
    )
}

export default AboutMe;
