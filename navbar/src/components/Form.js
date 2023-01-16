import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const NameForm = () => {
    const {name, setName} = useContext(UserContext);
    

    const createName = (e) => {
        e.preventDefault();
        console.log(name)
    }
    return(
        

            <div>
                <form onSubmit={createName} className="my-4">
                    <label>Your Name:</label>
                    <input type="text" className='mx-2 border border-3 border-dark rounded' onChange={e => setName(e.target.value)} ></input>
                    <button type='submit' className='button'>Say Hello</button>
                </form>
            </div>
    
    );
}

