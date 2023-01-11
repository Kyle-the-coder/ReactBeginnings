import React from 'react';

const NewPerson = props => {
    
        return(
            <div>
                <h1>
                {props.lastName}, {props.firstName}
                </h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                <button >It's {props.firstName} Birthday! Age+1</button>
            </div>
        )
    
}

export default NewPerson;
