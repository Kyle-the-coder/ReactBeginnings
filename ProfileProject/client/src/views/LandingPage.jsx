import "../styles/landingPage.css";
import TypeWriter from "../components/Typewriter";
import profPhoto from "../assets/background.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    //Line Seperator
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                margin: 0
            }}
        />
    );

    return (
        <div className="landingPageContainer" id="lpSection">


            <div className="leftContent">
                <div className="landingPageText">
                    <div>

                        <TypeWriter />
                        <ColoredLine color="white" />
                    </div>
                    <h5 className="lpTitleContainer"><span className="textContent lpTitleContainer">Full</span> Stack <br /><span className="textContent2 lpTitleContainer"> Freelance</span> Developer</h5>
                    <h6 className="lpQuote">"I love creating <span className="textContent2">shapes</span> in <span className="textContent">motion</span>"</h6>
                    <div className="lpIconsContainer">
                        <p className="m-0">Quick Contact:</p>
                        <Link to="https://www.linkedin.com/in/kyle-the-coder/"><img className="lpIcons mx-1"  src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" /></Link>
                        <Link to="https://github.com/Kyle-the-coder"><img className="lpIcons mx-1"  src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" /></Link>
                    </div>
                </div>
            </div>




            <div className="rightContent">

                <div className="funFactsTitle">
                    <h6>Fun <span className="textContent">Facts:</span> </h6>
                </div>

                <div className="colorLineContainer">
                    <ColoredLine color="white" className='colorLine'/>
                </div>
                
                <div className="funFactsContent">

                    <p className="my-1">-My real name is Kyle Mitchell</p>
                    <p className="my-1">-I was a professional dancer for 10 years</p>
                    <p className="my-1">-I did custom clothing and shoes</p>
                    <p className="my-1">-I now build websites and have a passion for learning!</p>

                </div>
            </div>


        </div>
    )
}

export default LandingPage;