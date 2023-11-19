import React from 'react';
import propTypes from 'prop-types';
import './InputControl.css';
import clsx from 'clsx';

const InputControl = (props) => {
    const { classes, children } = props;

    return <div className={clsx('ic_container', ...classes)}>{children}</div>;
};

InputControl.propTypes = {
    children: propTypes.oneOfType([propTypes.object, propTypes.array]),
    classes: propTypes.arrayOf(propTypes.string),
};

export default InputControl;
