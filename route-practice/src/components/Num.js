import React from 'react';
import { useParams } from 'react-router-dom';

const Num = () =>{
    const { userNum } = useParams();

    return(
        <div>
            <h3>The Number is: { userNum }</h3>
        </div>
    )
}

export default Num;