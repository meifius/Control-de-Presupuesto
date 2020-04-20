import React, {Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    
    // definir el states
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    // Funciones

    // funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value) ); // Los valores leidos son string, ahora son enteros

        // se deberia tambien guardar en la base de datos??
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        // prevenir el envio por query
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        // Si pasa la validacion
        guardarError(false);
        guardarRestante(cantidad);
        guardarPresupuesto(cantidad);
        actualizarPregunta(false);
        return;
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto"/>: null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />
                
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}

// Documentando con PropTypes
Pregunta.propTypes = {
    guardarPresupuesto : PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired,
}
 
export default Pregunta;