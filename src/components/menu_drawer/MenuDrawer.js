import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'icons/close-icon/CloseIcon';
import './MenuDrawer.css';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from 'redux/slices/headerSlice';
import DropListArrowIcon from 'icons/drop-list-arrow/DropListArrowIcon';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const MenuDrawer = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { menuItems } = props;
    const [isDrawerQuitting, setIsDrawerQuitting] = useState(false);

    const onCloseDrawer = (duration) => {
        setIsDrawerQuitting(true);
        setTimeout(() => {
            dispatch(toggleDrawer(false));
        }, duration);
    };

    return (
        <div className="md_container" onClick={() => onCloseDrawer(300)}>
            {/*placeholder to close menuDrawer quickly*/}
            <input id="md_close_checkbox" type="checkbox" />
            <button
                className={clsx('md_content', {
                    md_quitting: isDrawerQuitting,
                })}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="md_title_container">
                    <span>{/*placeholder*/}</span>
                    <h2>{t('drawer.title')}</h2>
                    <label
                        htmlFor="md_close_checkbox"
                        className={clsx('md_close_icon')}
                    >
                        <CloseIcon />
                    </label>
                </div>
                <ul>
                    {menuItems.map((menuItem) => {
                        return (
                            <li key={menuItem}>
                                <p>{menuItem}</p>
                                <DropListArrowIcon />
                            </li>
                        );
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
