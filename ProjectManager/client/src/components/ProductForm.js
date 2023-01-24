import React, {useState} from 'react';
import axios from 'axios';

export default props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/create/product', {
            title,
            price,
            description
        })
            .then(res=>console.log("res: " + res))
            .catch(err=> console.log("err: " + err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" onChange={e => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label>
                <textarea onChange={e=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}