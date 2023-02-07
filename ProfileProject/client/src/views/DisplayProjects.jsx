import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const DisplayProjects = () => {
    return (

        <section className="projectSection">
            <div className="projectSpacing">
                <h1>Projects:</h1>
                <div className='projectSquares'>
                    <div className="projectContent">
                        <h4><strong>Next Dimension Game Info</strong></h4>
                        <Carousel slide={false}>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/216848613-d3160788-2609-4a1d-8bbc-f25d7762698f.mov"></video>
                            </CarouselItem>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/216849019-63315280-3c81-4dec-93f1-64311231dd54.mov"></video>
                            </CarouselItem>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/216849310-e4eb2915-7e70-4219-b935-233411111b67.mov"></video>
                            </CarouselItem>
                        </Carousel>
                        <p>Front-end written in React, JavaScript, CSS</p>
                        <Link to="https://github.com/Kyle-the-coder/NextDimensionGameInfo">GitHub Link</Link>


                    </div>

                    <div className="projectContent">
                        <h4><strong>Tourney Journey</strong></h4>
                        <Carousel slide={false}>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/212785222-30b43382-860b-46d4-b3ae-5a3dc9a2b3cb.mp4"></video>
                            </CarouselItem>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/212785562-e632c4f6-a1a6-41d6-996a-8318bdaa3c3e.mov"></video>
                            </CarouselItem>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/212786213-81945b3b-1031-48f3-aa4e-1699428ee590.mp4"></video>
                            </CarouselItem>
                        </Carousel>
                        <p>Full Stack written in Java with SpringBoot and the dataBase is MySql</p>
                        <Link to="https://github.com/Kyle-the-coder/TourneyJourney">GitHub Link</Link>


                    </div>

                    <div className="projectContent">
                        <h4><strong>Battle Events Inc.</strong></h4>
                        <Carousel slide={false}>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/210454002-b236875d-a756-4c69-8ad0-c248c4d6c64e.mov"></video>
                            </CarouselItem>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/210454513-abbb5f6e-00fd-4a9f-8958-408db4df8293.mov"></video>
                            </CarouselItem>
                            <CarouselItem>
                                <video loop muted autoPlay controls='' className="projectVideo" src="https://user-images.githubusercontent.com/111798115/210454742-dd97d1d5-f264-415d-b3d7-85d662659eb8.mov"></video>
                            </CarouselItem>
                        </Carousel>
                        <p>Full Stack written in Python with Flask and the dataBase is MySql</p>
                        <Link to="https://github.com/Kyle-the-coder/BattleEventInc">GitHub Link</Link>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default DisplayProjects;