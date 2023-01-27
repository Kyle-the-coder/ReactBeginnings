import {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';


const PetForm = props => {
    const [errors, setErrors] = useState('')
    const [petName, setPetName] = useState('')
    const [petType, setPetType] = useState('')
    const [petDescription, setPetDescription] = useState('')
    const[skill1, setSkill1] = useState('')
    const[skill2, setSkill2] = useState('')
    const[skill3, setSkill3] = useState('')
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            petName, petType, petDescription, skill1, skill2, skill3})
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.err.errors)
                setErrors(err.response.data.err.errors)
            })
    }

    return(
        <div>
            <div className='nav'>
                <h1>Add a pet</h1>
                <Link to="/">Homepage</Link>
            </div>

            <div className='formBox'>
                <form onSubmit={onSubmitHandler}>
                    <div><h3>Know a pet needing a home?</h3></div>

                    {/* Pet Name */}
                    <div className='p-2 box'>
                        <label className='mx-2'>Pet Name:</label>
                        <input type="text" onChange={e=>setPetName(e.target.value)}/>
                        {errors && <span className='text-danger'>{errors.petName.message}</span>}
                    </div>

                    {/* Pet Type */}
                    <div className='p-2 box'>
                        <label className='mx-2'>Pet Type:</label>
                        <input type="text" onChange={e=>setPetType(e.target.value)}/>
                        {errors && <span className='text-danger'>{errors.petType.message}</span>}  
                    </div>

                    {/* Pet Description */}
                    <div className='p-2 box'>
                        <label className='mx-2'>Pet Description:</label>
                        <textarea type="text" onChange={e=>setPetDescription(e.target.value)}/>
                        {errors && <span className='text-danger'>{errors.petDescription.message}</span>}
                    </div>

                    {/* Skill 1 */}
                    <div className='p-2'>
                        <label className='mx-2'>Skill 1:</label>
                        <input type="text" onChange={e=>setSkill1(e.target.value)}/>
                    </div>

                    {/* Skill 2 */}
                    <div className='p-2'>
                        <label className='mx-2'>Skill 2:</label>
                        <input type="text" onChange={e=>setSkill2(e.target.value)}/>
                    </div>

                    {/* Skill 3 */}
                    <div className='p-2'>
                        <label className='mx-2'>Skill 3:</label>
                        <input type="text" onChange={e=>setSkill3(e.target.value)}/>
                    </div>

                    <div className='buttonBox'>
                    <button type="submit" className='p-2 rounded bg-dark text-info'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )


}

export default PetForm;

