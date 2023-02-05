import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';


const DisplayOne = (props) => {
    const { id } = useParams();
    const [displayOneInfo, setDisplayOneInfo] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [screenShots, setScreenShots] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [imgStyle, setImgStyle] = useState('imgInflate');
    const [store, setStore] = useState([]);
    const [dlc, setDlc] = useState([]);
    const navigate = useNavigate();
    //Call API on page load
    useEffect(() => {

        //Get Game Details
        axios.get(`https://api.rawg.io/api/games/${id}?`)
            .then(res => {
                setDisplayOneInfo(res.data)
            })
            .catch(err => console.log(err))

        //Get Game Trailers If Any
        axios.get(`https://api.rawg.io/api/games/${id}/movies?`)
            .then(res => {
                setMovieInfo(res.data.results)
            })
            .catch(err => console.log(err))


        //Get Game Screenshots
        axios.get(`https://api.rawg.io/api/games/${id}/screenshots?`)
            .then(res => {
                setScreenShots(res.data.results)
            })
            .catch(err => console.log(err))


        //Get Game Achievements
        axios.get(`https://api.rawg.io/api/games/${id}/achievements?`)
            .then(res => {
                setAchievements(res.data.results)
            })
            .catch(err => console.log(err))


        //Get A List Of Stores For The Game
        axios.get(`https://api.rawg.io/api/games/${id}/stores?`)
            .then(res => {
                setStore(res.data.results)
            })
            .catch(err => console.log(err))

        //Get A List DLC'S For Game
        axios.get(`https://api.rawg.io/api/games/${id}/additions?`)
            .then(res => {
                setDlc(res.data.results)
            })
            .catch(err => console.log(err))


    }, [id])

    //Viewing Screenshots
    const changeImgSize = () => {
        if (imgStyle === "imgInflate") {
            setImgStyle("imgInflate2")
        } else {
            setImgStyle("imgInflate")
        }

    }
    //Line Seperator
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );

    // Formatting API Date
    const formatDate = (date) => {
        if (displayOneInfo.length !== 0) {
            let newDateString = date.split("-")
            const year = newDateString[0]
            const month = newDateString[1]
            const day = newDateString[2]
            return `${month}/${day}/${year}`;
        } else {
            return "loading"
        }
    }
    //Back button
    const goBack = () =>{
        navigate(-1)
    }
    return (
        <div className="displayOneContainer">
            {/* Display loader if false, Display results if true */}
            {displayOneInfo.length === 0 ?
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
                <div className='displayOneBg' style={{
                    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(42, 42, 42,1) 68%), url(${displayOneInfo.background_image})`}}>
                    <div className='displayOneContent'>
                        <div className='displayOneTitle'>
                            <h3>{displayOneInfo.name}</h3>
                        </div>
                        <div className='displayOneInfo'>
                            {displayOneInfo.esrb_rating !== null && <p><strong>ESRB Rating:</strong> {displayOneInfo.esrb_rating.name}</p>}
                            <div className='consoles'>
                                <p className='m-0'><strong>Consoles:</strong> &nbsp;</p>
                                {displayOneInfo.platforms.length !== 0 && displayOneInfo.platforms.map((console, i) => {
                                    return (
                                        <p key={i} className="m-0"> {console.platform.name} {displayOneInfo.platforms[i] !== displayOneInfo.platforms[displayOneInfo.platforms.length - 1] ? "," : ""} &nbsp;</p>
                                    )
                                })}
                            </div>
                            <p className='descText'><strong>Released: </strong> {formatDate(displayOneInfo.released)}</p>
                            <p><strong>Meta-Critic Rating:</strong> &nbsp;{displayOneInfo.metacritic}/100</p>
                            <p><strong>Description: </strong>{displayOneInfo.description_raw}</p>
                        </div>
                    </div>


                    <div className='displayOneImageContent'>
                    <p onClick={goBack} className='text-decoration-none text-white backLink3' to="/game/platforms">Back</p> 
                        {movieInfo.length !== 0 ?
                            <div>
                                <video controls width="100%">
                                    <source src={movieInfo[0].data.max} type="video/mp4" />
                                </video>

                                <div className='displayOneScreenshots'>
                                    {screenShots.map((img, i) => {
                                        return (
                                            <img key={i} className={imgStyle} src={img.image} onClick={changeImgSize} />
                                        )
                                    })}
                                </div>

                                <div className='achievements'>
                                    <h4 className='text-decoration-underline'>List of Achievments:</h4>
                                    {achievements.map((trophy, i) => {
                                        return (
                                            <div key={i}>
                                                <p><strong>Name:</strong> &nbsp; {trophy.name}</p>
                                                <p><strong>Description:</strong>&nbsp; {trophy.description}</p>
                                                <ColoredLine color="rgb(250, 147, 37)" />
                                            </div>
                                        )
                                    })}
                                </div>


                                <ColoredLine color="white" />
                                {dlc.length !== 0 && <div className='dlc'>

                                    <h4 className='text-decoration-underline'>DLC's: </h4>
                                    {dlc.map((d, i) => {
                                        return (
                                            <div key={i}>
                                                <p><strong>Name:</strong>&nbsp; {d.name}</p>
                                                <p><strong>Release Date: </strong>&nbsp;{formatDate(d.released)}</p>
                                                <ColoredLine color="rgb(250, 147, 37)" />
                                            </div>
                                        )
                                    })}
                                </div>}

                                <ColoredLine color="white" />
                                <div className='stores'>
                                    <h4 className='text-decoration-underline'>Places to buy: </h4>
                                    {store.map((buy, i) => {
                                        return (
                                            <div key={i}>
                                                <p><strong>Url: </strong> &nbsp; <Link to={buy.url}>{buy.url}</Link></p>
                                                <ColoredLine color="rgb(250, 147, 37)" />
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            :
                            <div>
                                <div className='displayOneScreenshots'>
                                    {screenShots.map((img, i) => {
                                        return (
                                            <img key={i} className={imgStyle} src={img.image} onClick={changeImgSize} />
                                        )
                                    })}
                                </div>

                                <div className='achievements'>
                                    <h4 className='text-decoration-underline'>List of Achievments:</h4>
                                    {achievements.map((trophy, i) => {
                                        return (
                                            <div key={i}>
                                                <p><strong>Name:</strong> &nbsp; {trophy.name}</p>
                                                <p><strong>Description:</strong>&nbsp; {trophy.description}</p>
                                                <ColoredLine color="rgb(250, 147, 37)" />
                                            </div>
                                        )
                                    })}
                                </div>

                                <ColoredLine color="white" />
                                {dlc.length !== 0 &&
                                    <div className='dlc'>
                                        <h4 className='text-decoration-underline'>DLC's: </h4>
                                        {dlc.map((d, i) => {
                                            return (
                                                <div key={i}>
                                                    <p><strong>Name:</strong>&nbsp; {d.name}</p>
                                                    <p><strong>Release Date: </strong>&nbsp;{formatDate(d.released)}</p>
                                                    <ColoredLine color="rgb(250, 147, 37)" />
                                                </div>
                                            )
                                        })}
                                    </div>}

                                <ColoredLine color="white" />
                                <div className='stores'>
                                    <h4 className='text-decoration-underline'>Places to buy: </h4>
                                    {store.map((buy, i) => {
                                        return (
                                            <div key={i}>
                                                <p><strong>Url: </strong>&nbsp; <Link to={buy.url}>{buy.url}</Link></p>
                                                <ColoredLine color="rgb(250, 147, 37)" />
                                            </div>
                                        )
                                    })}
                                </div>



                            </div>}


                    </div>
                </div>
            }
        </div>
    )
}






export default DisplayOne;



