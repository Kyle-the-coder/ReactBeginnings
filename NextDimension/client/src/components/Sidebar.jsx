import {Link} from 'react-router-dom';

const Sidebar = (props) => {
    const {axResults} = props

    return (
        <div>

            <div className="sidebar">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        {axResults.length !== 0 && 
                        <div className="flip-card-front" style={{backgroundImage : `url(${axResults[2].background_image})`}}>
                            <p className="title bg-dark text-white rounded mx-1">Top Games</p>
                            <p className="bg-dark text-white rounded mx-5 my-1">Here</p>
                        </div>}
                        
                        <div className="flip-card-back">
                            <p>Best of the Year</p>
                            <p>Popular 2022</p>
                            <p>All Time Top</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card1">
                    <div className="flip-card-inner1">
                        {axResults.length !== 0 && 
                        <div className="flip-card-front1 p-1" style={{backgroundImage : `url(${axResults[4].background_image})`}}>
                            <p className="title1 bg-dark text-white rounded mx-3">Browse</p>
                            <p className="bg-dark text-white rounded mx-4 my-1">Options</p>
                        </div>}
                        
                        <div className="flip-card-back1">
                            <p><Link to="/game/platforms" className='text-decoration-none text-dark'>Platforms</Link></p>
                            <p>Stores</p>
                            <p>Collections</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card2">
                    <div className="flip-card-inner2">
                        {axResults.length !== 0 && 
                        <div className="flip-card-front2" style={{backgroundImage : `url(${axResults[8].background_image})`}}>
                            <p className="title2 bg-dark text-white rounded mx-2 ">Platforms</p>
                            <p className="bg-dark text-white rounded mx-5 my-1">Here</p>
                        </div>}
                        
                        <div className="flip-card-back2">
                            <p>Playstation</p>
                            <p>Xbox</p>
                            <p>PC</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )


}

export default Sidebar;