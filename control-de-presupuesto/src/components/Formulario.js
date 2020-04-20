import React, {useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    // Definir State
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error , guardarError] = useState(false);

    // Funciones
    const agregarGasto = (e) => {
        // prevenir envio y poder ejecutar el codigo siguiente
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // constuir el gasto como un objeto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el formulario
        guardarNombre('');
        guardarCantidad(0);

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={ e => guardarNombre(e.target.value) }
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={ e => guardarCantidad( parseInt(e.target.value) ) }
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    );
}

// Documentando con PropTypes
Formulario.propTypes = {
    guardarGasto : PropTypes.func.isRequired,
    guardarCrearGasto : PropTypes.func.isRequired,
}
 
export default Formulario;