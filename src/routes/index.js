import { Route, Routes } from 'react-router';
import ProductDetails from '../components/products/product-details';

const RenderRoutes = () => {
    return (
        <Routes>
            <Route path="products/:id" Component={ProductDetails} />
        </Routes>
    );
};


export default RenderRoutes;