import React from 'react';
import { useParams } from 'react-router-dom';

const Color = (props) => {

    const { userWordColor } = useParams();
    const { userBgColor } = useParams()
    
    return(
        <div>
            <h2 style={{color : userWordColor, backgroundColor : userBgColor }}> You chose {userWordColor} words with {userBgColor} background</h2>
        </div>
    )
}

export default Color;