import React, { useState } from  'react';

const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [boxArr] = useState([]);
    
        const createBox = (e) => {
            e.preventDefault();
            props.onNewBox( boxColor, boxArr.push(boxColor) )
            console.log(boxArr)

            

            
        } 
            return (
                <div className='p-3'>

                    <form onSubmit={createBox}>
                        <label>Enter Color: </label>
                        <input type="text" onChange={ (e) => setBoxColor(e.target.value)} />
                        <input type="submit" value="Create Box"/>
                    </form>
                </div>

        )
}

export default BoxForm;