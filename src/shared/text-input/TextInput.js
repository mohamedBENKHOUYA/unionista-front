import React, { useState } from 'react';
import './TextInput.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const TextInput = (props) => {
    const {
        children: Icon,
        type = 'text',
        size = 'small',
        labelId,
        placeholder,
        isIconBgActive = true,
        iconGap = 'tiny',
    } = props;
    const [text, setText] = useState('');

    return (
        <div
            className={clsx('ti_container', `icon_gap_${iconGap}`, {
                bg_icon_active: isIconBgActive,
            })}
        >
            <input
                className={size}
                id={labelId}
                type={type}
                value={text}
                placeholder={placeholder}
                onInput={(e) => setText(e.target.value)}
            />
            {Icon && (
                <label htmlFor={labelId} className="ti_input_icon">
                    {Icon}
                </label>
            )}
        </div>
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    labelId: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password']),
    isIconBgActive: PropTypes.bool,
    iconGap: PropTypes.oneOf(['tiny', 'medium', 'large']),
};

export default TextInput;
