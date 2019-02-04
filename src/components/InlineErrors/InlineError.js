import React from 'react';
import PropTypes from 'prop-types';

import './InlineError.css';

const InlineError = ({ text }) => <div style={{ color: '#ae5856' }}>{text}</div>;

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineError;
