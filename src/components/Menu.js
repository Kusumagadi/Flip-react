import React from'react';

import percentage from '../images/percentage.jpg'
import mobiles from '../images/mobiles.jpg'
import electronics from '../images/electronics.jpg'
import tv from '../images/tv.jpg'
import fashion from '../images/fashion.jpg'
import beauty from '../images/beauty.jpg'
import hk from '../images/hk.jpg'
import furniture from '../images/furniture.jpg'
import flights from '../images/flights.jpg'
import grocery from '../images/grocery.jpg'
function Menu(){
    return(
        <>
        <div className='row mt-2 com sample'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={percentage}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mobiles}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={electronics}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={tv}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fashion}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={beauty}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={hk}/>  
            <p>Home & Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={furniture}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={flights}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={grocery}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;
