import { useEffect, useState } from 'react';
import axios from '../instances/axiosSw';
import DetallePersona from './DetallePersona';

export default function ListaPersonas() {

    const [personajes, setPersonajes] = useState(null);
    const [urlSeleccionada, setUrlSeleccionada] = useState(null);
    const [cont, setCont] = useState(0);

    useEffect(() => {
        axios.get('/people/?format=json')
            .then(response => {
                return response.data.results.slice(0, 6);
            }).then(personajes => {
                setPersonajes(personajes);
            });
    }, []);

    let listaPersonajes = <h3>No hay personajes</h3>;
    if (personajes && personajes.length > 0) {
        listaPersonajes = personajes.map(personaje => {
            return (
                <div
                    className="personaje"
                    onClick={() => setUrlSeleccionada(personaje.url)}
                    key={personaje.name}
                >
                    <h3>{personaje.name}</h3>
                    <p>Nace: {personaje.birth_year}</p>
                    <p>Películas: {personaje.films.length}</p>
                </div>
            );
        });
    }

    return (
        <div>
            <h2>Lista de Personajes</h2>
            <div className="personajes">
                {listaPersonajes}
            </div>
            {urlSeleccionada &&
                <DetallePersona url={urlSeleccionada} />
            }
            <button onClick={() => setCont(cont + 1)}>{cont}</button>
        </div>
    );

}