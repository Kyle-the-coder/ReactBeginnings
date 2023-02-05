import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';




const Platforms = () => {
    const navigate = useNavigate();

    const pcClick = () =>{
        navigate("/game/platforms/pc")
    }

    const xboxClick = () =>{
        navigate("/game/platforms/xbox")
    }

    const playstationClick = () =>{
        navigate("/game/platforms/playstation")
    }

    const switchClick = () =>{
        navigate("/game/platforms/switch")
    }
    return (
        <div className="platformIconLinks">
            <h3 className='text-white'>Choose your destiny:</h3>
            <img width="100" onClick={pcClick} className='icon1 mx-1' src="https://cdn-icons-png.flaticon.com/512/3355/3355013.png"></img>
            <img width="200" onClick={xboxClick} height="180" className='icon2 mx-1' src="https://cdn-icons-png.flaticon.com/512/588/588257.png"></img>
            <img width="100" onClick={playstationClick} className='icon3 mx-1' src="https://cdn-icons-png.flaticon.com/512/588/588258.png"></img>
            <img width="80" onClick={switchClick} className='icon4 mx-1 my-5' src="https://cdn-icons-png.flaticon.com/512/871/871377.png"></img>
        </div>
    )
}

export default Platforms;