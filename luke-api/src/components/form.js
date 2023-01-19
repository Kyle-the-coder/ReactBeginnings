import React, { useState } from 'react';
import '../App.css';
import { useNavigate} from 'react-router-dom';



const LukeForm = () => {
    const [category, setCategory] = useState("people");
    const [searchId, setSearchId] = useState("");
    const navigate = useNavigate();

    //Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(category==="people"){
            navigate("/peeps/" + category + "/" + searchId)
        } else if(category==="planets"){
            navigate("/orbs/" + category + "/" + searchId)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="p-3 form lukeForm">
                <label className='title'>Search for:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-3 border-dark form-control ">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                <label className='titleId'>Id number: </label>
                <input type="number" onChange={(e) => setSearchId(e.target.value)} className="form-control border border-3 border-dark "/>

                <button type="submit" className='my-2 p-2 bg-dark text-white rounded'>Search</button>
            </form>
        </div>
    )
}
export default LukeForm;



            
