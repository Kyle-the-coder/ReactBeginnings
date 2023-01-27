import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AuthorForm =  props => {
    const [errors, setErrors] = useState("");
    const [authorName, setAuthorName] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {authorName})
            .then(res=>{
                console.log('Response: ', res)
                navigate('/')
            })
            .catch(err=>{
                console.log( err.response.data.err.errors.authorName.message )
                setErrors( err.response.data.err.errors.authorName.message )
            })
    }

    return(
        <div className='text-white'>
            <h1>Add an Author</h1>
            <div className='formBox'>
                <form onSubmit={onSubmitHandler} className='form border border-3 border-info p-3'>
                    <p>
                        <label>Author Name:</label>
                        <input type='text' className='p-2 text-white mx-1' onChange={e=>setAuthorName(e.target.value)}/>
                        {errors && <span className='text-danger'>{errors}</span>}
                    </p>
                    <input type="submit" className='bg-info p-2 border border-light text-white'/>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm;
