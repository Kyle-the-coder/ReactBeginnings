import "../styles/skillsList.css"
import jsLogo from "../assets/js.png"
import cssLogo from "../assets/css-3.png"
import reactLogo from "../assets/physics.png"
import mongoLogo from "../assets/leaf.png"
import { InView } from "react-intersection-observer";
const SkillsList = (props) => {
    return (
        <div className="skillsSection" id="skillzSection">
            <InView onChange={props.changeView}>
                {({ ref }) => (

                    <div ref={ref}>
                        <h2 className="text-white skillsTitle mx-2="><span className="textContent">Skill</span>s:</h2>
                    </div>
                )}
            </InView>
            <div className="skillsContent">

                <div className="skill1">
                    <div className="skill1box">
                        <img className="skillsLogo" src={jsLogo} />
                        <p className="my-0">JavaScript</p>
                    </div>
                </div>

                <div className="skill2">
                    <div className="skill2box">
                        <img src={cssLogo} />
                        <p className="my-0">CSS</p>
                    </div>
                </div>

                <div className="skill3">
                    <div className="skill3box">
                        <img src={reactLogo} />
                        <p>React</p>
                    </div>
                </div>

                <div className="skill4">
                    <div className="skill4box">
                        <img className="skillsLogo" src={mongoLogo} />
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsList;