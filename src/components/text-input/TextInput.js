import React, { useState } from 'react';
import './TextInput.css';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    const { children: Icon, placeholder } = props;
    const [text, setText] = useState('');

    return (
        <div className="ti_container">
            <input
                type="text"
                value={text}
                placeholder={placeholder}
                onInput={(e) => setText(e.target.value)}
            />
            <div className="ti_input_icon">{Icon}</div>
        </div>
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default TextInput;
