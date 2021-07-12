import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value, onKeyPress }) => (
    <div className="inputWrapper-008">
        <i className="fas fa-search-008" />
        <input
            className="input-008"
            placeholder="Click to search"
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
        />
    </div>
);

Input.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

Input.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: ''
}

export default Input;