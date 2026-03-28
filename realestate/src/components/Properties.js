import React from 'react';
import './Property.css';

const Property = ({ property }) => {
    if (!property) {
        return <div>No property data available</div>;
    }

    return (
        <div className="property-card">
            <img src={property.image} alt={property.name} className="property-image" />
            <div className="property-details">
                <h2>{property.name}</h2>
                <p className="address">{property.address}</p>
                <p className="price">${property.price.toLocaleString()}</p>
                <p className="bedrooms">Bedrooms: {property.bedrooms}</p>
                <p className="bathrooms">Bathrooms: {property.bathrooms}</p>
                <p className="description">{property.description}</p>
            </div>
        </div>
    );
};

export default Property;