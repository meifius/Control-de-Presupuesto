import React from 'react';
import PropTypes from 'prop-types'

const Error = ({mensaje}) => (
<p className="alert alert-danger error">{mensaje}</p>
)

// Documentando con PropTypes
Error.propTypes = {
    mensaje : PropTypes.string.isRequired,
}
 
export default Error;