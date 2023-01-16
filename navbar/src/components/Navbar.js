import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext';




const Navbar = (props) =>{
    const {name} = useContext(UserContext)
    return(
        <div className="nav">
            <h1>Hello, <span>{ name  }</span></h1>
        </div>
    )
}

export default Navbar;