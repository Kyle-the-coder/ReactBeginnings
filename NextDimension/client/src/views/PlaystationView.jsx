import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


//Playstation does the same as xbox, see XboxView.jsx for comments

const PlaystationResults = () => {
    const [totalRes, setTotalRes] = useState([])

    useEffect(() => {
        let call1 = [];
        let call2 = [];
        let call3 = [];
        axios.get('https://api.rawg.io/api/games?parent_platforms=2&dates=2015-01-01,2023-01-01&page_size=50&page=1&')
            .then(res => {
                call1 = res.data.results

                axios.get('https://api.rawg.io/api/games?parent_platforms=2&dates=2015-01-01,2023-01-01&page_size=50&page=2&')
                    .then(res => {
                        call2 = res.data.results

                        axios.get('https://api.rawg.io/api/games?parent_platforms=2&dates=2015-01-01,2023-01-01&page_size=50&page=3&')
                            .then(res => {
                                call3 = res.data.results
                                let all = [...call1, ...call2, ...call3]
                                sortedArr(all)
                                setTotalRes(all)


                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))




    }, [])

    const sortedArr = (arr) => {
        let sorted = arr.sort((a, b) => (b.metacritic - a.metacritic))
        return sorted
    }




    return (
        <div className='mainC1'>
            <div className="infoBox">
                <h4 className='px-3 text-white my-0'><strong>Top results for "Playstation"</strong></h4>
                <Link className='text-decoration-none text-white backLink2' to="/game/platforms">Back to platforms</Link>
            </div>

            <div className='mainC'>
                {totalRes.length == 0 ?
                    <div className="loader">
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                    </div> : totalRes.map((game, i) => {
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
                                                return <p key={i}>{g.name} {game.genres[i] !== game.genres[game.genres.length - 1] ? "," : ""} &nbsp; </p>
                                            })}
                                        </div>
                                        <p><strong>Meta Critic score:</strong>&nbsp;{game.metacritic}</p>

                                    </div>

                                </div>

                            </div>
                        )
                    })}


            </div>
        </div>
    )
}

export default PlaystationResults;