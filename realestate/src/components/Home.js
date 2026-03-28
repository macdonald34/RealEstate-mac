import React from 'react';
import './Home.css';
import realEstateImg from '../assets/images/REAL ESTATE.jpg';
import LivingRoomImg from '../assets/images/LivingRoom.jpg';

export default function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Mac_Moves Estate</h1>
                <p>Find your perfect property</p>
            </header>
            
            <section className="search-section">
                <input 
                    type="text" 
                    placeholder="Search properties..." 
                    className="search-input"
                />
                <button className="search-btn">Search</button>
            </section>
            
            <section className="featured-properties">
                <h2>Featured Properties</h2>
                <div className="properties-grid">
                    <div className="property-card">
                        <img src={realEstateImg} alt="Property" />
                        <h3>Mac Villa</h3>
                        <p className="price">$500,000</p>
                        <p className="description">A beautiful villa with modern amenities and spacious rooms.</p>
                        <div className="details">
                            <span>3 Bedrooms</span>
                            <span>2 Bathrooms</span>
                            <span>2,500 sq ft</span>
                        </div>
                        <div className="amenities">
                            <h4>Amenities:</h4>
                            <ul>
                                <li>Swimming Pool</li>
                                <li>Garden</li>
                                <li>Parking</li>
                            </ul>
                        </div>
                        <div className="internal-features">
                            <h4>Internal Features:</h4>
                            <ul>
                                <li>Air Conditioning</li>
                                <li>Modern Kitchen</li>
                                <li>Hardwood Floors</li>
                            </ul>
                        </div>
                    </div>
                    <div className="property-card">
                        <img src={LivingRoomImg} alt="Property" />
                        <h3>Muhavi Apartment</h3>
                        <p className="price">$750,000</p>
                        <p className="description">Luxurious apartment in the heart of the city with stunning views.</p>
                        <div className="details">
                            <span>2 Bedrooms</span>
                            <span>2 Bathrooms</span>
                            <span>1,800 sq ft</span>
                        </div>
                        <div className="amenities">
                            <h4>Amenities:</h4>
                            <ul>
                                <li>Gym</li>
                                <li>Security</li>
                                <li>Elevator</li>
                            </ul>
                        </div>
                        <div className="internal-features">
                            <h4>Internal Features:</h4>
                            <ul>
                                <li>Balcony</li>
                                <li>Walk-in Closet</li>
                                <li>Updated Appliances</li>
                            </ul>
                        </div>
                    </div>
                    <div className="property-card">
                        <img src={realEstateImg} alt="Property" />
                        <h3>Mac Villa</h3>
                        <p className="price">$500,000</p>
                        <p className="description">A beautiful villa with modern amenities and spacious rooms.</p>
                        <div className="details">
                            <span>3 Bedrooms</span>
                            <span>2 Bathrooms</span>
                            <span>2,500 sq ft</span>
                        </div>
                        <div className="amenities">
                            <h4>Amenities:</h4>
                            <ul>
                                <li>Swimming Pool</li>
                                <li>Garden</li>
                                <li>Parking</li>
                            </ul>
                        </div>
                        <div className="internal-features">
                            <h4>Internal Features:</h4>
                            <ul>
                                <li>Air Conditioning</li>
                                <li>Modern Kitchen</li>
                                <li>Hardwood Floors</li>
                            </ul>
                        </div>
                    </div>
                    <div className="property-card">
                        <img src={LivingRoomImg} alt="Property" />
                        <h3>Muhavi Apartment</h3>
                        <p className="price">$750,000</p>
                        <p className="description">Luxurious apartment in the heart of the city with stunning views.</p>
                        <div className="details">
                            <span>2 Bedrooms</span>
                            <span>2 Bathrooms</span>
                            <span>1,800 sq ft</span>
                        </div>
                        <div className="amenities">
                            <h4>Amenities:</h4>
                            <ul>
                                <li>Gym</li>
                                <li>Security</li>
                                <li>Elevator</li>
                            </ul>
                        </div>
                        <div className="internal-features">
                            <h4>Internal Features:</h4>
                            <ul>
                                <li>Balcony</li>
                                <li>Walk-in Closet</li>
                                <li>Updated Appliances</li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    );
}