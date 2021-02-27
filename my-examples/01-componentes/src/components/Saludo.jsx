function Saludo(props) {
    return <div>
        <h3>Componente Saludo: { props.nombre }</h3>
        <p>{ props.children }</p>
    </div>;
}

export default Saludo;