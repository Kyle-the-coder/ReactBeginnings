import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const OnePet = (props) =>{
    const [pet, setPet] = useState({});
    const {id} = useParams();
    const {removeFromDom} = props
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet/'+id)
            .then(res=> setPet(res.data))
            .catch(err=> console.log(err))
    },[id])

    const deletePet = (petId) => {
        
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res=>{
                removeFromDom(res)
                navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <div className='shadow nav'>
                <h1>Pet Shelter</h1>
                <button onClick={()=>deletePet(pet._id)} className='bg-danger rounded px-2 py-1 text-white'>Adopt {pet.petName}</button>
                <Link to="/">Homepage</Link>
            </div>
            <h2 className='p-3 mx-5'>Details about: {pet.petName}</h2>
            <div className='detailsBox'>
                <p><strong>Pet Type:</strong> {pet.petType}</p>
                <p><strong>Pet Description:</strong> {pet.petDescription}</p>
                {pet.skill1 && <p><strong>Skill 1:</strong> {pet.skill1}</p>}
                {pet.skill2 && <p><strong>Skill 2:</strong> {pet.skill2}</p>}
                {pet.skill3 && <p><strong>Skill 3:</strong> {pet.skill3}</p>}
            </div>
        </div>
    )
}

export default OnePet;