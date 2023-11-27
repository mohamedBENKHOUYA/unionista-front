import React from 'react';
import PropTypes from 'prop-types';
import './InputControl.css';
import clsx from 'clsx';

const InputControl = (props) => {
    const {
        radius,
        error,
        borderVariant,
        insetShadow = false,
        children,
    } = props;

    return (
        <div
            className={clsx('ic_container', radius, borderVariant, {
                error: error,
                inset_shadow: insetShadow,
            })}
        >
            {children}
        </div>
    );
};

InputControl.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    radius: PropTypes.oneOf(['rounded', 'rounded_1', 'rounded_2', 'pilled']),
    error: PropTypes.bool,
    borderVariant: PropTypes.oneOf(['border_light', 'border_dark']),
    insetShadow: PropTypes.bool,
};

export default InputControl;
