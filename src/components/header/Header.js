import 'components/header/Header.css';
import BoSettingsIcon from 'icons/bo-settings/BoSettingsIcon';
import CartIcon from 'icons/cart/CartIcon';
import NotificationIcon from 'icons/notification/NotificationIcon';
import React from 'react';
import TextInput from 'components/text-input/TextInput';
import InputControl from 'components/input-control/InputControl';
import { toggleDrawer } from 'redux/slices/headerSlice';
import { useDispatch, useSelector } from 'react-redux';
import Hamburger from 'components/Hamburger/Hamburger';
import SearchIcon from 'icons/search-icon/SearchIcon';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isDrawerShowed = useSelector((state) => state.header.isDrawerShowed);
    return (
        <div className="h_container">
            <div className="h_top_part">
                <figure className="h_logo">
                    <img src="/icons/unionista-logo2.png" alt="logo" />
                </figure>
                <ul className="h_nav_bar">
                    <li className="h_icon h_bo_icon">
                        <a
                            href="/admin"
                            style={{ '--nav-icon-title': '"admin"' }}
                        >
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
                        <a
                            href="/cart"
                            style={{ '--nav-icon-title': '"Cart"' }}
                        >
                            <CartIcon />
                        </a>
                    </li>
                </ul>
            </div>
            {/* sub part */}
            <div className="h_sub_part">
                <button
                    onClick={() => {
                        dispatch(toggleDrawer(!isDrawerShowed));
                    }}
                >
                    <Hamburger />
                </button>
                <InputControl classes={['pilled']}>
                    <TextInput
                        placeholder={t('header.search-input-placeholder')}
                    >
                        <SearchIcon />
                    </TextInput>
                </InputControl>
            </div>
        </div>
    );
};

export default Header;
