import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'


const AuthorList = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id, index) => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then((res) => {
                console.log(res)
                setAuthors(authors.filter((author, i) =>{
                    return i !== index ? author : null;
                }));
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className='authorTable'>
            <table className='table table-hover table-striped table-bordered table-dark'>
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {authors.map((author, i) => {
                            return (
                            <tr key={i} className='text-center'>
                                <th><Link className='text-decoration-none bg-dark text-info' to={'/author/'+ author._id}>{author.authorName}</Link></th>
                                <th className='action'>
                                    <Link to={'/author/' + author._id + '/edit/'} className='bg-info text-dark button'>Edit</Link>
                                    <button onClick={()=>handleDelete(author._id, i)} className='bg-danger text-white button'>Delete</button>
                                </th>
                            </tr>)})}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;