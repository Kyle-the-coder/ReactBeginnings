import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Content = (props) => {
    const { axResults } = props;
    return (
        <div className='mainC1'>
            <h4 className='px-3 text-white my-0'><strong>Games of Interest:</strong></h4>

            <div className='mainC'>
                {/* Axios Results Logic*/}
                {axResults.length == 0 ?
                    <div className="loader">
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                    </div> : axResults.map((game, i) => {
                        return (
                            <div key={i} >
                                <div className='resultBox m-2' >
                                    <div className='titleM'>
                                        <h6 className='text'><Link className='text-decoration-none text2' to={`/game/${game.id}`}>{game.name}</Link></h6>
                                    </div>
                                    <Carousel className='caro'>
                                        {game.short_screenshots !== null && game.short_screenshots.map((g, i) => {
                                            return (
                                                <Carousel.Item key={i}>

                                                    <img className=' imgBox' src={g.image} alt="" />

                                                </Carousel.Item>
                                            )

                                        })}
                                    </Carousel>

                                    <div className='content'>
                                        <div className='content1'>
                                            <p><strong>Genre: </strong>&nbsp; </p>
                                            {game.genres.map((g, i) => {
                                                return <p className='m-0' key={i}>{g.name}{game.genres[i] !== game.genres[game.genres.length - 1] ? "," : ""} &nbsp; </p>
                                            })}
                                        </div>
                                        {game.metacritic !== null &&
                                            <p className='my-3'><strong>Meta Critic score:</strong>&nbsp;{game.metacritic}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}


export default Content;




