import bg1Img from "../assets/background6.webp"
import '../styles/aboutMe.css'

const AboutMe = () => {
    return (
        <section className="aboutMeSection" id="aboutSection" style={{ backgroundImage: `url(${bg1Img})` }}>
            <div className="aboutMeBox">

                <h4 className="mx-2 aboutMeTitle">About Me:</h4>
                <div className="aboutMeContent">
                    <p>
                        Kyle has spent the last 10 years as a professional dancer and dance teacher. He has built many communities and spread his love of dance all throughout the Bay Area. Now Kyle has begun a new journey as a Full Stack Software Developer. 
                        He can build websites in three different languages: Java, Javascript, and Python.
                        He has worked with many frameworks such as React, Flask, SpringBoot and utilized these to build some helpful projects for the dance community. 
                        He is now looking to build websites for small companies, charities, and anybody who may want a website. 
                        He can bring any form or style to the site to make any company have a professional looking and functioning website. 
                        He likes to bring out the personality and mission of the company to the forefront to attract the target consumer. 
                        He also has an art background dabbling in custom clothing and selling art. 
                        With the combination of his entertainment experience, artistic expression, tech savvy, and your vision for your ideal website! He can bring you a website that you can be proud of and cherish forever!
                    </p>
                </div>
            </div>


            <img className="aboutMeImg" src={require("../assets/dance2.jpeg")} />

        </section>
    )
}

export default AboutMe;
