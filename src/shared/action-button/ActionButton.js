import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ActionButton.css';
import clsx from 'clsx';

const ActionButton = (props) => {
    const {
        onClick,
        radius,
        variant,
        boxShadow = false,
        to = '/',
        children,
        fit = 'min',
        animationOnHover = false,
    } = props;
    console.log('children:', children);
    return onClick ? (
        <button
            onClick={onClick}
            className={clsx('ab_container', radius, variant, fit, {
                'box-shadow': boxShadow,
                animated: animationOnHover,
            })}
        >
            {children}
        </button>
    ) : (
        <Link
            to={to}
            className={clsx('ab_container', radius, variant, fit, {
                'box-shadow': boxShadow,
                animated: animationOnHover,
            })}
        >
            {children}
        </Link>
    );
};

ActionButton.propTypes = {
    onClick: PropTypes.func,
    radius: PropTypes.oneOf(['rounded', 'pilled']),
    boxShadow: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string,
    ]).isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    fit: PropTypes.oneOf(['min', 'max']),
    animationOnHover: PropTypes.bool,
};

export default ActionButton;
