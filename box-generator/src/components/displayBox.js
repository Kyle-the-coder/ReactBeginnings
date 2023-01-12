import React from 'react';


const DisplayBox = (props) => {
    
    return(
        <div>

            <div className='contain p-2'>

                {props.bArr.map((box, i) => 
                <div className='boxy mx-2 my-1 border border-2 border-dark' key={i} style={{backgroundColor: box}}></div>)}

            </div>

        </div>
    )
}

export default DisplayBox;