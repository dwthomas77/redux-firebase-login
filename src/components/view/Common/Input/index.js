import React, { PropTypes } from 'react';

const propTypes = {
    error: PropTypes.bool,
    label: PropTypes.string,
    msg: PropTypes.string,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
};

const defaultProps = {
    error: false,
    label: '',
    msg: '',
    onBlur: null,
    onChange: null,
    type: 'text',
    value: '',
};

const Input = props => {
    const {
        error,
        label,
        msg,
        ...rest
    } = props;
    
    const fieldClass = error ? '--error' : '';
    
    return (
        <fieldset className={fieldClass}>
            <label>{label}</label>
            <input {...rest} />
            <div>{msg}</div>
        </fieldset>
    );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;