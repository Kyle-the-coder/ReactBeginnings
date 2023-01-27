import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link} from "react-router-dom";

const Update = () =>{
    const {id} = useParams();
    const [petName, setPetName] = useState('')
    const [petType, setPetType] = useState('')
    const [petDescription, setPetDescription] = useState('')
    const[skill1, setSkill1] = useState('')
    const[skill2, setSkill2] = useState('')
    const[skill3, setSkill3] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res=>{
                setPetName(res.data.petName)
                setPetType(res.data.petType)
                setPetDescription(res.data.petDescription)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
                console.log(res)
            })
            .catch(err=>console.log(err))
    },[id])
    
    const updatePet = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            petName, petType, petDescription, skill1, skill2, skill3})
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.err.errors)
            })
        }
        console.log(skill1)
        return(
            <div>
                <div className='nav shadow'>
                <h1>Pet Shelter</h1>
                <Link to="/">Homepage</Link>
            </div>

            <div className='formBox shadow-lg'>
                <form onSubmit={updatePet}>
                    <div className='title'><h3>Edit pet</h3></div>

                    {/* Pet Name */}
                    <div className='p-2 box'>
                        <label className='mx-2'>Pet Name:</label>
                        <input value={petName} type="text" onChange={e=>setPetName(e.target.value)}/>
                    </div>

                    {/* Pet Type */}
                    <div className='p-2 box'>
                        <label className='mx-2'>Pet Type:</label>
                        <input value={petType} type="text" onChange={e=>setPetType(e.target.value)}/>
                    </div>

                    {/* Pet Description */}
                    <div className='p-2 box'>
                        <label className='mx-2'>Pet Description:</label>
                        <textarea value={petDescription} type="text" onChange={e=>setPetDescription(e.target.value)}/>
                    </div>

                    {/* Skill 1 */}
                    <div className='p-2'>
                        <label className='mx-2'>Skill 1:</label>
                        <input value={skill1} type="text" onChange={e=>setSkill1(e.target.value)}/>
                    </div>

                    {/* Skill 2 */}
                    <div className='p-2'>
                        <label className='mx-2'>Skill 2:</label>
                        <input value={skill2} type="text" onChange={e=>setSkill2(e.target.value)}/>
                    </div>

                    {/* Skill 3 */}
                    <div className='p-2'>
                        <label className='mx-2'>Skill 3:</label>
                        <input value={skill3} type="text" onChange={e=>setSkill3(e.target.value)}/>
                    </div>

                    <div className='buttonBox'>
                    <button type="submit" className='p-2 rounded bg-dark text-info'>Submit</button>
                    </div>
                </form>
            </div>
            </div>
        )



}


export default Update;