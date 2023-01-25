import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";


const OneProduct = (props) =>{
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const {removeFromDom} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res=>setProduct(res.data))
            .catch(err=>console.log("nope", err))
    },[id])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
            navigate('/')
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/"> <h3>back</h3></Link>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link> <br/>  
            <button onClick={(e)=>{deleteProduct(product._id)}}> Delete </button>
        </div>
    )
}

export default OneProduct;