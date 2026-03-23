import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Real Estate</h1>
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
                        <img src="placeholder.jpg" alt="Property" />
                        <h3>Property 1</h3>
                        <p>$500,000</p>
                    </div>
                    <div className="property-card">
                        <img src="placeholder.jpg" alt="Property" />
                        <h3>Property 2</h3>
                        <p>$750,000</p>
                    </div>
                </div>
            </section>
        </div>
    );
}