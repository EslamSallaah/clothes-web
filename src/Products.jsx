import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/card'
import { Button } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
const Products = () => {
const [data,setdata]=useState([]);
const [filter,setfilter]=useState(data);
const [loading,setloading]=useState(false);
let componentMounted=true;
useEffect(()=>{
    const getProducts=async()=>{
        setloading(true);
    const response=await fetch("https://fakestoreapi.com/products");
    if(componentMounted){
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
    }
return()=>{
    componentMounted=false;
}

}
    getProducts();
} , []);

const Loading = ()=>{
    return(
    <>

<div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
    
    <div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
    
    <div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
    <div className='col-md-3'>
        <Skeleton height={350}/>
        </div>
</>);

};


const filterproducts=(cat)=>{
    const updatedlist=data.filter((x)=>x.category===cat);
    setfilter(updatedlist);
}
const ShowProducts=()=>{
return(
    <>
<div className='buttons d-flex justify-content-center mb-5 pb-5'> 
<button className='btn btn-outline-dark ' onClick={()=>
    setfilter(data)}> All</button>
<button className='btn btn-outline-dark me-2' onClick={() => 
    filterproducts("woman clothing")}> Woman clothes</button>
<button className='btn btn-outline-dark me-2' onClick={() => 
    filterproducts("bags")}> Bags</button>

</div>

{filter.map((product)=>{


<div className='col-md-3 mb-4'>
<Card className='card h-100 text-center p-4'>
      <Card.Img variant="top" src="images/brand 1.jpg" alt='raniaa' />
      <Card.Body>
        <Card.Title>rania suit</Card.Title>
        <Card.Text>
          price: 650 Egp
        </Card.Text>
        <Button variant="primary">more details</Button>
      </Card.Body>
    </Card>




</div>




})}
    
    </>
);

};



    return (
    <div>
<div className='Container my-5 py-5'>
    <div className='row mb-5'>
<div className='col-12'>
    <h1 className='display-6 fw-bolder text-center'>
    
        Latest Products
    </h1>
    <hr/>
</div>

    </div>
    <div className='row justify-content-center'>
        {loading ? <Loading/> : <ShowProducts/>}

    </div>
</div>

    </div>
  )
}

export default Products
