import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../PropertyDetail.css';

const PropertyDetails = () => {
    const { id: propertyId } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/properties/${propertyId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch property details');
                }
                const data = await response.json();
                setProperty(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (propertyId) {
            fetchPropertyDetails();
        }
    }, [propertyId]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!property) return <div className="no-data">No property found</div>;

    return (
        <div className="property-details">
            <h1>{property.title}</h1>
            <p className="address">{property.address}</p>
            <p className="price">${property.price}</p>
            <div className="description">{property.description}</div>
            <div className="features">
                <span>Bedrooms: {property.bedrooms}</span>
                <span>Bathrooms: {property.bathrooms}</span>
                <span>Area: {property.area} sq ft</span>
            </div>
        </div>
    );
};

export default PropertyDetails;