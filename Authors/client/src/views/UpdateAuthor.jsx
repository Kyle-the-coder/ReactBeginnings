import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate} from "react-router-dom";


const Update = (props) => {
    const {id} = useParams();
    const [ authorName, setAuthorName] = useState('');
    const [errors, setErrors] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res=>{
                console.log(res)
                setAuthorName(res.data.authorName)
                
            })
            .catch(err => console.log(err))
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {authorName})
            .then(res=>{
                console.log('Response: ', res)
                navigate('/')
            })
            .catch(err => console.log(err))
        }

    return (
        <div className='text-white'>
            <div className='text-white'>
            <h1>Add an Author</h1>
            <div className='formBox'>
                <form onSubmit={updateAuthor} className='form border border-3 border-info p-3'>
                    <p>
                        <label>Author Name:</label>
                        <input type='text'value={authorName} className='p-2 text-white mx-1' onChange={e=>setAuthorName(e.target.value)}/>
                        {errors && <span className='text-danger'>{errors}</span>}
                    </p>
                    <button type="submit" className='bg-info p-2 border border-light text-white'>Submit</button>
                </form>
            </div>
        </div>
        </div>
    )

}

export default Update;