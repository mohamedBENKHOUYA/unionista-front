import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { id } = useParams();
    return <h2>products {id}</h2>;
};

export default ProductDetails;
