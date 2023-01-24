import React from 'react';
import {Link } from 'react-router-dom';


const ProductList = (props) =>{
    
    return(
        <div>
            <h2>All Products:</h2>
            {props.product.map((product, i) =>{
                return(
                    <div key={i}>
                        <Link to={'/product/'+ product._id}> <p> {product.title}</p> </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;
                    