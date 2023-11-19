import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ActionButton.css';

const ActionButton = function (props) {
    const {
        onClick,
        radius = 'rounded',
        boxShadow = false,
        isLink = false,
        to = '/',
        children,
    } = props;
    console.log('children:', children);
    return isLink ? (
        <Link
            to={to}
            className={`ab_container ${radius} ${boxShadow && 'box-shadow'}`}
        >
            {children}
        </Link>
    ) : (
        <button
            onClick={onClick}
            className={`ab_container ${radius} ${boxShadow && 'box-shadow'}`}
        >
            {children}
        </button>
    );
};

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    radius: PropTypes.oneOf(['rounded', 'pilled']),
    boxShadow: PropTypes.bool,
    isLink: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ActionButton;
