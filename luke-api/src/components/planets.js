import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const Planets = (props) => {
    const userPlanet  = useParams();
    const  userId  = useParams()
    const navigate = useNavigate();
    const [result, setResult]= useState([])

    useEffect(()=>{
        axios.get('https://swapi.dev/api/' + userPlanet.planets + "/" + userId.id)
            .then(response => setResult(response.data))
            .catch(err => console.log(err))
        },[userPlanet.planets, userId.id])

        const homePage = ()=>{
            navigate("/")
        }


    return(
        <div >
        
        {userId.id < 0 
        ?  
        <div className='displayInfo'>
            <img width="400" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6fa2aa1-e520-4ac0-a703-c21639310361/d2xh72t-6ed12839-b0e1-4bcd-8db9-a3baea2515f5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2ZmEyYWExLWU1MjAtNGFjMC1hNzAzLWMyMTYzOTMxMDM2MVwvZDJ4aDcydC02ZWQxMjgzOS1iMGUxLTRiY2QtOGRiOS1hM2JhZWEyNTE1ZjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6kHF16olRUlm767I45x9qiv-E1OneyZ41iGBttO1Y88" alt="obi"/>
            <h2>The dark side is within you</h2>
            <button onClick={homePage} className="p-3 bg-info  rounded" >Choose Light Side</button>
        </div>
        :  
        <div className='displayInfo'>
            <h1>{result.name} </h1>
            <h5>Climate: {result.climate} </h5>
            <h5>Diameter: {result.diameter} </h5>
            <h5>Orbital period: {result.orbital_period} </h5>
            <h5>Terrain: {result.terrain} </h5>

            <button onClick={homePage}>Go Back</button>
        </div>
        }
        </div>
            
    )
}
export default Planets;