import { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    telephone: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_name':
            return {
                ...state,
                name: action.value
            }
        case 'change_email':
            return {
                ...state,
                email: action.value
            }
        case 'change_telephone':
            return {
                ...state,
                telephone: action.value
            }
        default:
            throw new Error('An error has just happened')
    }
}

export default function Form() {

    const [ data, dispatch ] = useReducer(reducer, initialState);

    return (
        <form>
            <p>Name: { data.name }</p>
            <p>Telephone: { data.telephone }</p>
            <p>Email: { data.email }</p>
            <input
                type="text"
                nombre="name"
                onChange={ event => dispatch({ type: 'change_name', value: event.target.value})}
            />
            <input
                type="text"
                nombre="email"
                onChange={ event => dispatch({ type: 'change_email', value: event.target.value})}
            />
            <input
                type="text"
                nombre="telephone"
                onChange={ event => dispatch({ type: 'change_telephone', value: event.target.value})}
            />
            <input type="submit" value="Send"></input>
        </form>
    );
}