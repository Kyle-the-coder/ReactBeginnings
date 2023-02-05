import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';




const XboxResults = () => {
    const [totalRes, setTotalRes] = useState([])


    useEffect(() => {
        let call1 = [];
        let call2 = [];
        let call3 = [];

        //1st axios call
        axios.get('https://api.rawg.io/api/games?parent_platforms=3&dates=2015-01-01,2023-01-01&page_size=50&page=1&')
            .then(res => {
                // Set call1 variable to results
                call1 = res.data.results

                //2nd axios call
                axios.get('https://api.rawg.io/api/games?parent_platforms=3&dates=2015-01-01,2023-01-01&page_size=50&page=2&')
                    .then(res => {
                        // Set call2 variable to results
                        call2 = res.data.results

                        //3rd axios call
                        axios.get('https://api.rawg.io/api/games?parent_platforms=3&dates=2015-01-01,2023-01-01&page_size=50&page=3&')
                            .then(res => {

                                //Set call3 to results, use spread to create new array
                                call3 = res.data.results
                                let all = [...call1, ...call2, ...call3]

                                //Call sort function to sort array
                                sortedArr(all)

                                //Set totalRes to the sorted array results
                                setTotalRes(all)
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, []);
    //Sorted array function(might be unecessary)
    const sortedArr = (arr) => {
        let sorted = arr.sort((a, b) => (b.metacritic - a.metacritic))
        return sorted
    }

    return (
        //Top results for xbox
        <div className='mainC1'>
            <div className="infoBox">
                <h4 className='px-3 text-white my-0'><strong>Top results for "Xbox"</strong></h4>
                <Link className='text-decoration-none text-white backLink2' to="/game/platforms">Back to platforms</Link>
            </div>
            {/* Display Loader if false, display results if true */}
            <div className='mainC'>
                {totalRes.length == 0
                    ?
                    <div className="loader">
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                    </div>
                    :
                    totalRes.map((game, i) => {
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
                                            {game.genres.length >= 1 && game.genres.map((g, i) => {
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

export default XboxResults;





















