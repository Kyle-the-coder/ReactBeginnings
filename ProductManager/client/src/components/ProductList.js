import React from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';


const ProductList = (props) =>{
    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return(
        <div>
            <h2>All Products:</h2>
            {props.product.map((product, i) =>{
                return(
                    <div key={i}>
                        <Link to={'/product/'+ product._id}> <p> {product.title}</p> </Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}> Delete </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;
                    