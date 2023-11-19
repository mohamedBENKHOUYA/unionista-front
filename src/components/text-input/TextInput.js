import React, { useState } from 'react';
import './TextInput.css';
import PropTypes from 'prop-types';

const TextInput = () => {
    const [text, setText] = useState('');

    return (
        <input
            className="ti_container"
            type="text"
            value={text}
            onInput={(e) => setText(e.target.value)}
        />
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
};

export default TextInput;
