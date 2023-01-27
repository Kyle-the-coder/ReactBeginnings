import axios from 'axios';

const Deletebutton = props =>{
    const {authorId, successCallback} = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return(
        <buton onClick={deleteAuthor}>Delete</buton>
    )

}

export default Deletebutton;