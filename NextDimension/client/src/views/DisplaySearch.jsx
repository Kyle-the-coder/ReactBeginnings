import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const { prevResults, searchTerm } = props

    return (

        // Displaying the string from the search
        <div className='mainC1'>
            {searchTerm.length !== 0 &&
                <div className='infoBox'>

                    <h4 className='text-white px-3'>You searched for "{searchTerm}" </h4>
                    <Link className='text-decoration-none text-white backLink' to="/home">Back to home</Link>
                </div>

            }
            <div className='mainC'>

                {/* Search Results */}
                {prevResults.length == 0 ?
                    <div className="loader">
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                    </div> : prevResults.map((game, i) => {
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
                                    {/* Displaying the Content from the search */}
                                    <div className='content'>
                                        <div className='content1'>
                                            <p className='m-0'><strong>Genre: </strong>&nbsp; </p>
                                            {game.genres.map((g, i) => {
                                                return <p className="m-0" key={i}>{g.name}{game.genres[i] !== game.genres[game.genres.length - 1] ? "," : ""} &nbsp; </p>
                                            })}
                                        </div>
                                        {game.metacritic !== null &&
                                            <p className=' my-3'><strong>Meta Critic score:</strong>&nbsp;{game.metacritic}</p>
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



export default Main;




