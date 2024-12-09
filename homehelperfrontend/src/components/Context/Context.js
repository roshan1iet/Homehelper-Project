// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Context.css'; // Import the CSS file for styling
//import download from 'assets/download.jpg'

// Import images


const Context = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const services = [
    {
      title: "Standard Cleaning",
      description: "A thorough cleaning of your home, including dusting, vacuuming, and mopping.",
      image: <img src='../assets/download.jpg'></img>
    },
    {
      title: "Deep Cleaning",
      description: "A comprehensive cleaning service that covers every nook and cranny.",
      image:  <img src='../assets/download.jpg'></img>,
    },
    {
      title: "Move-In/Move-Out Cleaning",
      description: "Specialized cleaning for homes during moving in or out.",
      image:<img src='../assets/download.jpg'></img>,
    },
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="carousel-item">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Context;