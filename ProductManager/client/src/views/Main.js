import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data)

            })
            .catch(err=>console.log(err))
    },[product])

    return(
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={product}/>}
        </div>
    )
}

export default Main;