import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';





const Navbar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [navPic, setNavPic] = useState([]);
    const navigate = useNavigate();
    const { onGameResult, onSearchTerm } = props;


    useEffect(()=>{
        axios.get(`https://api.rawg.io/api/games?`)
            .then(res => {
                console.log(res.data.results)
                setNavPic(res.data.results)
            })
            .catch(err => console.log(err))
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()
        fetch(`https://api.rawg.io/api/games?search=${slug}?`)
            .then(resp => resp.json())
            .then(({ results }) => {
                results === undefined ? alert('no games found') : onGameResult(results)
                onSearchTerm(searchTerm)
                navigate('/game')

            })
        setSearchTerm("")
    }

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
        <div>
            {navPic.length !== 0 && 
            <div className="nav" style={{
                    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) -10%, rgba(42, 42, 42,1) 35%), url(${navPic[3].background_image})`
                }} >

                <div className="logo p-3">
                    <h1 className='name'><Link className='text-decoration-none text-white' to="/home">Next Dimension </Link></h1>&nbsp;
                    <div>
                        <img width="70" height="60" className='mx-3 my-0' src="https://cdn-icons-png.flaticon.com/512/838/838483.png"></img>
                        <p className='m-0 mx-1 my-0'> <strong><Link to="/" className='text-decoration-none text-white'>Game Info</Link></strong></p>
                    </div>

                </div>

                <div className="searchBar p-3">
                    <form className='form searchForm' onSubmit={onSubmit}>
                        <input type="text" value={searchTerm} className="form-control mx-1" onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Games...' />
                        <button type="submit" className='rounded bg-dark text-light border border-3'>Submit</button>
                    </form>
                </div>

                <div className='navIcons'>
                    <img width="50" onClick={pcClick} className='icon1 mx-1' src="https://cdn-icons-png.flaticon.com/512/3355/3355013.png"></img>
                    <img width="80" onClick={xboxClick} height="80" className='icon2 mx-1' src="https://cdn-icons-png.flaticon.com/512/588/588257.png"></img>
                    <img width="55" onClick={playstationClick} className='icon3 mx-1' src="https://cdn-icons-png.flaticon.com/512/588/588258.png"></img>
                    <img width="40" onClick={switchClick} className='icon4 mx-1' src="https://cdn-icons-png.flaticon.com/512/871/871377.png"></img>

                </div>
            </div>
            
            }
            
        </div>
    )
}

export default Navbar;







