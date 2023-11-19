import React from 'react';
import { Route, Routes } from 'react-router';
import ProductDetails from '@components/products/product-details';
import NotFound from '@components/not-found/NotFound';

const RenderRoutes = () => {
    return (
        <Routes>
            <Route path="products/:id" Component={ProductDetails} />
            <Route path="*" Component={NotFound} />
        </Routes>
    );
};

export default RenderRoutes;
