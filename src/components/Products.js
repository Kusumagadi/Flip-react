import React from "react";
import google from    '../images/google.jpg.png'
import realme from    '../images/realme.jpg.png'
import samsung from    '../images/samsung.jpg.png'
import motrolla from   '../images/motrolla.jpg.png'
import XG from    '../images/XG.jpg.png'
import FG from    '../images/FG.jpg'
import motrola from    '../images/motrola.jpg'
function Cards(){
    return(
        <>
        <div className="row mt-4">
              <div className="col-md-10 ">
                   <div className="row">
                     <h2>Best Mobile</h2>
                   </div>
                   <div className="row mt-4">
                        <div className="col-md-2">
                           <img src={google}/>
                            <p className="mt-3" >Google Pixel 7a<br></br><b>incl of offers</b></p>
                           
                        </div>
                        <div className="col-md-2">
                        <img src={realme}/>
                        <p className="mt-3" >Realme 11 Pro 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={samsung}/>
                        <p className="mt-3" >Samsung S22 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={motrolla}/>
                        <p className="mt-3" >Motrola edge 40<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={XG}/>
                        <p className="mt-3" >Realme 11X 5g<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={FG}/>
                        <p className="mt-3" >Samsung F34 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={motrola}/>
                        <p className="mt-3" >Motrola G54<br></br><b>incl of offers</b></p>
                        </div>
                   </div>
              </div>
        </div>
        </>
       
        );
    }
   
    
    export default Cards;
