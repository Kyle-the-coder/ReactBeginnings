import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import {Link} from 'react-router-dom';


const Main = (props) =>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true)
            })
            .catch(err=>console.log(err))
    }, [])

    return(
        <div className='text-white'>
            <h1>Favorite Authors</h1>
            <Link to="/author"><p>Add an Author</p></Link>
            <p>We have quotes by</p>
            {loaded && <AuthorList authors={authors} />}
        </div>
    )
}

export default Main;


