import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const OneAuthor = (props) =>{
    const [author, setAuthor] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/'+id)
            .then(res=>{setAuthor(res.data)})
            .catch(err=>console.log(err))
    }, [id])

    return(
        <div>
            <h1 className='text-white'>Here's one author:</h1>
            <h2 className='text-white'>{author.authorName}</h2>
            <Link to="/">Home</Link>
        </div>
    )

}

export default OneAuthor;