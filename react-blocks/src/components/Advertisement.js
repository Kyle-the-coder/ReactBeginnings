import React, {Component} from 'react';

class Advertisement extends Component{
    render(){
        return(
            

                <div className='purpleB'>{this.props.children}</div>
        
        )
    }
}

export default Advertisement;