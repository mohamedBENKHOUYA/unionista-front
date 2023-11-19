import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'icons/close-icon/CloseIcon';
import './MenuDrawer.css';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from 'redux/slices/headerSlice';

const MenuDrawer = (props) => {
    const dispatch = useDispatch();
    const { menuItems } = props;
    return (
        <div
            className="md_container"
            onClick={() => dispatch(toggleDrawer(false))}
        >
            <button className="md_content" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2>browse categories</h2>
                    <CloseIcon />
                </div>
                <ul>
                    {menuItems.map((menuItem) => {
                        return <li key={menuItem}>{menuItem}</li>;
                    })}
                </ul>
            </button>
        </div>
    );
};

MenuDrawer.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default MenuDrawer;
