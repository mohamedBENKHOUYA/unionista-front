import 'components/header/Header.css';
import BoSettingsIcon from 'icons/bo-settings/BoSettingsIcon';
import CartIcon from 'icons/cart/CartIcon';
import NotificationIcon from 'icons/notification/NotificationIcon';
import React from 'react';

const Header = () => {
    return (
        <div className="h_container">
            <figure className="h_logo">
                <img src="/icons/unionista-logo2.png" alt="logo" />
            </figure>
            <ul className="h_nav_bar">
                <li className="h_icon h_bo_icon">
                    <a href="/admin" style={{ '--nav-icon-title': '"admin"' }}>
                        <BoSettingsIcon />
                    </a>
                </li>
                <li className="h_icon h_notif">
                    <a
                        href="/notifications"
                        style={{ '--nav-icon-title': '"notifications"' }}
                    >
                        <NotificationIcon />
                    </a>
                </li>
                <li className="h_icon h_cart_icon">
                    <a href="/cart" style={{ '--nav-icon-title': '"Cart"' }}>
                        <CartIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
