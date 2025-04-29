import React from 'react'
import Card from 'react-bootstrap/Card';
import Products from './Products';

const Home = () => {
  return (
    <div className='hero'>


    <Card className=" card bg-dark text-white border-0  ">
      <Card.Img  src="images/background_dressy.jpg" alt="" className='backG' height="700px"  />
      <Card.ImgOverlay className='card-img-overlay d-flex flex-column justify-content-center' > 
        <div className='container'>
            <h5 className='cardTitle display-3 fw-bolder mb-0'>New season Arrivals</h5>
        </div>
        
        <Card.Text className='card-text lead fs-2'> 
          Check out All the Trends
        </Card.Text>

      </Card.ImgOverlay>
    </Card>
  

    
<Products/>

    </div>



    
  )
}

export default Home
