import React from 'react';
import PropTypes from 'prop-types';
import 'shared/checkbox-input/CheckboxInput.css';
import clsx from 'clsx';

const CheckboxInput = (props) => {
    const {
        onToggle,
        radius,
        variant = 'primary',
        checked,
        labelId,
        size = 'medium',
    } = props;
    return (
        <label
            className={clsx('cbi_container', radius, variant, size, {
                checked: checked,
            })}
        >
            <input
                className="visually-hidden"
                tabIndex="0"
                id={labelId}
                type="checkbox"
                checked={checked}
                onChange={(e) => onToggle(e.target.checked)}
            />
        </label>
    );
};

CheckboxInput.propTypes = {
    onToggle: PropTypes.func.isRequired,
    radius: PropTypes.oneOf(['rounded', 'rounded_1', 'rounded_2']),
    variant: PropTypes.oneOf(['primary', 'secondary']),
    checked: PropTypes.bool,
    labelId: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default CheckboxInput;
