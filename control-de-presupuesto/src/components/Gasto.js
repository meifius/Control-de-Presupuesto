import React from 'react';
import PropTypes from 'prop-types'

const Gasto = ({gasto}) => (
    <li>
        <p>
            {gasto.nombre}
            <span className="gasto"> $ {gasto.cantidad}</span>
        </p>
    </li>
)

// Documentando con PropTypes
Gasto.propTypes = {
    gasto : PropTypes.object.isRequired,
}
 
export default Gasto;