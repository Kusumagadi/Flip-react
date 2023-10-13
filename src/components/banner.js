import React from'react';
import banner from '../images/banner.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import banner5 from '../images/banner5.jpg'
function Section3() {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide section3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner4} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner5} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
        
    )
}
export default Section3;