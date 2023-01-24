import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";


const OneProduct = (props) =>{
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res=>setProduct(res.data))
            .catch(err=>console.log("nope", err))
    },[id])

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/"> <h3>back</h3></Link>    
        </div>
    )
}

export default OneProduct;