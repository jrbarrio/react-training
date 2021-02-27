import { useEffect, useState } from 'react';
import axios from '../instances/axiosSW';
import DetallePersona from './DetallePersona';

export default function ListaPersonas() {

    const [ personajes, setPersonajes ] = useState(null);
    const [ urlSeleccionada, setUrlSeleccionada] = useState(null);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        axios.get('/people/?format=json')
            .then(response => {
                return response.data.results.slice(0, 4);
            })
            .then(personajes => setPersonajes(personajes));
    }, []);
    // Con array vacio, se ejecuta solo en el primer render, porque en los render posteriores no tiene nada con que compararse

    let listaPersonajes = <h3>No hay personajes</h3>;
    if (personajes && personajes.length > 0) {
        listaPersonajes = personajes.map(personaje => {
            return (
                <div 
                    className="personaje" 
                    onClick={ () => setUrlSeleccionada(personaje.url) }
                    key={ personaje.name }>
                    <h3>{ personaje.name }</h3>
                    <p>Nace: { personaje.birth_year}</p>
                    <p>Peliculas: { personaje.films.length }</p>
                </div>
            );
        });
    }

    return (
        <div>
            <h2>Lista de personajes</h2>
            <div className="personajes">
                { listaPersonajes }
            </div>
            { 
                urlSeleccionada && <DetallePersona url={ urlSeleccionada }></DetallePersona> 
            }
            <button onClick={() => setCount(count + 1)}>{ count }</button>
        </div>
    );

}