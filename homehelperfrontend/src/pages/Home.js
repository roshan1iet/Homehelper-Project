import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routing
import logo from '../assets/logo.jpg'; 
import serviceImage from '../assets/serviceImage.jpg';
import './Home.css'; // Make sure this file contains your styles

const Home = () => {
    return (
        <div>
            <div>
                <br />
                <img src={logo} alt="Home Helper Logo" style={{ width: '150px' }} />
                <h2>Welcome to Home Helper</h2>
                <br />
                {/* Use Link for internal navigation */}
                <Link to="/join-worker">
                    <button className="btn">Join as Worker</button>
                </Link>
                <Link to="/register-user">
                    <button className="btn">Register as User</button>
                </Link>
                <Link to="/login-worker">
                    <button className="btn">Login as Worker</button>
                </Link>
                <Link to="/login-user">
                    <button className="btn">Login as User</button>
                </Link>
            </div>

            <h2 style={{ textAlign: 'center' }}>Our Services</h2>
            <div className="services">
                <div className="service-card">
                    <img src={serviceImage} alt="Cleaning Service" />
                    <h3>Cleaning</h3>
                    <p>Professional cleaning services for your home or office, ensuring a spotless environment.</p>
                </div>
                <div className="service-card">
                    <img src={serviceImage} alt="Cooking Service" style={{ width: '300px' }} />
                    <h3>Cooking</h3>
                    <p>Delicious home-cooked meals prepared by experienced chefs tailored to your dietary needs.</p>
                </div>
                <div className="service-card">
                    <img src={serviceImage} alt="Gardening Service" />
                    <h3>Gardening</h3>
                    <p>Expert gardening services to maintain and beautify your outdoor spaces.</p>
                </div>
                <div className="service-card">
                    <img src={serviceImage} alt="Babysitting Service" />
                    <h3>Babysitting</h3>
                    <p>Reliable babysitting services with trained caregivers to ensure your child's safety and happiness.</p>
                </div>
                <div className="service-card">
                    <img src={serviceImage} alt="Patient Care" />
                    <h3>Patient Care</h3>
                    <p>Compassionate patient care services for the elderly or those in need of assistance at home.</p>
                </div>
                <div className="service-card">
                    <img src={serviceImage} alt="Pet Care" />
                    <h3>Pet Care</h3>
                    <p>Professional pet care services including walking, grooming, and sitting for your furry friends.</p>
                </div>
            </div>

            <div className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-card">
                    <p>"Home Helper has transformed my home! The cleaning service is top-notch and very reliable." - Sarah J.</p>
                </div>
                <div className="testimonial-card">
                    <p>"The babysitting service was a lifesaver for our family. Our kids loved their sitter!" - Mark T.</p>
                </div>
                <div className="testimonial-card">
                    <p>"I can't recommend the gardening service enough! My yard has never looked better." - Emily R.</p>
                </div>
                <div className="testimonial-card">
                    <p>"The patient care team was incredibly compassionate and attentive to my mother's needs." - John D.</p>
                </div>
                <div className="testimonial-card">
                    <p>"The cooking service has made my life so much easier. Delicious meals every day!" - Lisa M.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
