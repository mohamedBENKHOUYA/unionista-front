import DropListArrowIcon from 'icons/drop-list-arrow/DropListArrowIcon';
import React from 'react';
import propTypes from 'prop-types';
import 'components/modal-content/menu-drawer-content/MenuDrawerContent.css';

const MenuDrawerContent = (props) => {
    const { menuItems } = props;
    return (
        <ul className="mdc_container">
            {menuItems.map((menuItem) => {
                return (
                    <li key={menuItem}>
                        <p>{menuItem}</p>
                        <DropListArrowIcon />
                    </li>
                );
            })}
        </ul>
    );
};

MenuDrawerContent.propTypes = {
    menuItems: propTypes.arrayOf(propTypes.string),
};

export default MenuDrawerContent;
