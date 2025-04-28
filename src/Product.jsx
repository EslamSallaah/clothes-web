import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { AddCart } from './redux'

const Product = () => {
const {id}=useParams();
    const [product,setproduct]=useState([]);
    const [loading,setloading]=useState(false);



const dispatch=useDispatch();
const addproduct=(product)=>{
    dispatch(AddCart(product));
}





useEffect(()=>{
    const getProduct=async()=>{
        setloading(true);
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        setproduct(await response.json());
        setloading(false);
    }
    getProduct();

},[]);

const Loading = ()=>{
    return(
    <>
    
    Loading....
    </>
    )}

const Showproduct=()=>{ 
    return(
        <>
        {/* Product details will be displayed here */}
        <div className='col-md-6'>
            <img src={"images/brand 7.jpg"} alt={product.title} height="400px" width="400px" />
        </div>
        <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50'>{product.category}</h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i></p>
            <h3 className='fw-bold my-4'>$ {product.price}</h3>
            <p className='lead'>{product.description}
            <i className='fa-fa-star'></i>
            </p>
            <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addproduct(product)}>Add to Cart</button>
            <button className='btn btn-outline-dark ms-2 px-3 py-2'>Go to cart</button>
        </div>
        
        </>
    )}
  return (
    <div className='container py-5'>
        <div className='row'>
        {loading ? <loading/> : <showproducts/>}
    
    </div>
    </div>
  )
}

export default Product
