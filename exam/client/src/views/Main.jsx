import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PetList from '../components/PetList';

const Main = (props) =>{
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <div className='nav shadow'>
                <h1>Pet Shelter</h1>
                <Link to='/pet'>Add a pet to the shelter</Link>
            </div>
            <div className='mainContent shadow-lg mb-5'>
                <h5>These pets are looking for a good home:</h5>
                {loaded && <PetList pets={pets} />}
            </div>
        </div>
    )

}

export default Main;