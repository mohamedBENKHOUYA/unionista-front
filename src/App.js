import React from 'react';
import RenderRoutes from './routes';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import 'App.css';
import MenuDrawer from 'components/menu_drawer/MenuDrawer';
import { useSelector } from 'react-redux';

// import { increment, decrement } from '../redux/slices/counterSlice';
// import { toggleDrawer } from '../redux/slices/headerSlice';

function App() {
    const menuItems = [
        'Early Christmas Deals',
        'Jewelry & Accessories',
        'Clothing & shoes',
        'Home & Living',
        'Wedding & party',
        'toys & entertainment',
        'art & collectibles',
        'craft supplies & tools',
        'etsy registry',
    ];
    const isDrawerShowed = useSelector((state) => state.header.isDrawerShowed);

    return (
        <div className="app_container">
            <Header />
            <RenderRoutes />
            <Footer />

            {isDrawerShowed && <MenuDrawer menuItems={menuItems} />}
        </div>
    );
}

export default App;
