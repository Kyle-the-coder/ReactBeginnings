import React from 'react';
import { useParams } from 'react-router-dom';
const Hello = () => {
    const {userWord} = useParams();
    return(
        <div>
            <h2>The word is: { userWord }</h2>
        </div>
    )
}

export default Hello; 