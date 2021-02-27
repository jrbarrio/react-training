import { useState } from 'react';

function Formulario() {

    const [productoState, setProductoState] = useState({
        nombre: '',
        categoria: 'carniceria'
    });

    function handleChange(event, field) {
        setProductoState({
            ...productoState,
            [field]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.tareaCreada(productoState);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label htmlFor="inputProducto">Producto</label>
                    <input 
                        type="text" 
                        name="producto" 
                        className="form-control" 
                        id="inputProducto" 
                        value={ productoState.nombre } 
                        onChange={ (event) => handleChange(event, 'nombre') }></input>
                </div>
                <div className="form-group">
                    <label htmlFor="selectCategoria">Categoria</label>
                    <select 
                        name="categoria" 
                        className="form-control" 
                        id="selectCategoria" 
                        value={ productoState.categoria }
                        onChange={ (event) => handleChange(event, 'categoria') }>
                        <option value="pescaderia">Pescaderia</option>
                        <option value="carniceria">Carniceria</option>
                        <option value="panaderia">Panaderia</option>
                        <option value="hogar">Hogar</option>
                    </select>
                </div>
                <input type="submit" value="Enviar" className="btn btn-block btn-info"></input>
            </form>
        </div>
    );
}

export default Formulario;