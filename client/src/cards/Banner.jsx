import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Cardpage from './Card';
import './style.css';

import b1 from './images/b1.png';
import b2 from './images/b2.jpeg';
import b3 from './images/ba3.png';
import b4 from './images/b4.jpg';
import b5 from './images/ba4.jpg';

const slides = [
  { image: b1, offer: '20% OFF on Royal Enfield' },
  { image: b2, offer: '30% Discount on Car Rentals' },
  { image: b3, offer: 'Flat 25% OFF on Bullet Bikes' },
  { image: b4, offer: 'Save up to 40% Today' },
  { image: b5, offer: 'Special Offer: 15% OFF' },
];


const Banner = () => {
  return<>
      <div className="carousel-container" style={{marginTop:"90px"}}>
      <Carousel fade interval={3000} pause={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 banner-img" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <div className="overlay-content">
                <h2>{slide.offer}</h2>
                <p>Rent Now & Save Big!</p>
                <button className="btn btn-light fw-bold">Book Now</button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    <Cardpage/>
  </>
};

export default Banner;
