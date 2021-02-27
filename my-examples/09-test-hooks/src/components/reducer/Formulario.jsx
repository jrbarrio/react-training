import { useReducer } from 'react';

const initialState = {
    nombre: '',
    email: '',
    telefono: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_nombre':
            return {
                ...state,
                nombre: action.value
            }
        case 'change_email':
            return {
                ...state,
                email: action.value
            }
        case 'change_telefono':
            return {
                ...state,
                telefono: action.value
            }
        default:
            throw new Error('Mal')
    }
}

export default function Formulario() {

    const [ data, dispatch ] = useReducer(reducer, initialState);

    return (
        <form>
            <p>Nombre: { data.nombre }</p>
            <p>Telefono: { data.telefono }</p>
            <p>Email: { data.email }</p>
            <input
                type="text"
                nombre="nombre"
                onChange={ event => dispatch({ type: 'change_nombre', value: event.target.value})}
            />
            <input
                type="text"
                nombre="email"
                onChange={ event => dispatch({ type: 'change_email', value: event.target.value})}
            />
            <input
                type="text"
                nombre="telefono"
                onChange={ event => dispatch({ type: 'change_telefono', value: event.target.value})}
            />
            <input type="submit" value="Enviar"></input>
        </form>
    );
}