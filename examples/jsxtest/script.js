const persona = {
    nombre: 'Mario',
    apellidos: 'Girón',
    imagen: 'http://'
}

const atributos = {
    id: 'imgMain',
    src: 'https://i.pravatar.cc/300',
    className: 'imagen'
}

function mostrarPersona() {
    return `${persona.nombre} ${persona.apellidos}`;
}

function saludo(pPersona) {
    // if (pPersona) {
    //     return <h1>{mostrarPersona()}</h1>;
    // } else {
    //     return <h1>No existe la persona</h1>;
    // }
    return (pPersona) ? <h1 className="">{mostrarPersona()}</h1> : <h1>No existe la persona</h1>;
}

const element = (
    <div>
        {saludo(persona)}
        <p style={{ color: 'green', backgroundColor: 'red' }}> Párrafo</p>
        {/* Comentario */}
        <img {...atributos} />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));


// const persona = {
//     nombre: 'Mario',
//     apellidos: 'Girón',
//     imagen: 'http://'
// }

// const persona2 = { ...persona, apellidos: 'Gómez' };
// const persona3 = Object.assign(persona, {});

// const nombre = persona.nombre;
// const apellidos = persona.apellidos;

// const { nombre, apellidos } = persona;