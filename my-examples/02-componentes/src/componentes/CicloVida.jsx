import { Component } from 'react';

class CicloVida extends Component {

    // Se ejecuta antes de montar el componente (antes del render)
    // Mounting
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        console.log('[constructor]');
    }

    // Se lanza justo antes de ejecutar el render (en el ciclo de montaje y en el de actualizacion)
    // Se ejecuta cada vez que se modifica cualquier cosa
    // Mounting
    static getDerivedStateFromProps(props, state) {
        // No tiene acceso a this, ya que es un metodo static
        console.log('[getDerivedStateFromProps]');
        return state;
    }

    // Se lanza justo despues de que el componente haya sido montado (se haya lanzado el render)
    // Solo se ejecuta una vez en la creacion del componente
    // Si aqui modificas el estado, vuelve a renderizar el estado
    // Mounting
    componentDidMount() {
        console.log('[componentDidMount]');
    }


    // Sirve para mejorar el rendimiento de los componentes, permite bloquear el renderizado de un componente
    // Updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]');
        return false; // El componente no se volveria a renderizar
    }

    // Se lanza justo antes de que se compare el render que hacemos con el DOM (reconciliacion)
    // el valor retornado lo devolveria el siguiente metodo del ciclo de vida (componentdidUpdate)
    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[getSnapshotBeforeUpdate]');
        return 34;
    }

    // Se ejecuta justo despues del render
    // Cuidado con los bucles infinitos!! Es conveniente introducir comprobaciones para evitarlos
    // Updating
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[componentDidUpdate]');
    }

    // Sirve para limpiar componentes que han desaparecido de la jerarquia de componentes
    // Unmounting
    componentWillUnmount() {
        console.log('[componentWillUnmount]');
    }

    // eslint-disable-next-line no-undef
    myHandleClick = (event) => {
        event.preventDefault();
        this.setState({ contador: this.state.contador + 1 });
    }

    // Obligatorio a la hora de definir clases
    // Genera el HTML que se va a renderizar
    // No se suele usar para realizar actualizaciones del estado ni para interactuar con el navegador (DOM)
    // Mounting
    render() {
        console.log('[render]');
        return (<div>
            <h1>Ciclo de Vida</h1>
            <p>{ this.state.contador }</p>
            <button onClick={ this.myHandleClick }>Incrementa</button>
        </div>);
    }
}

export default CicloVida;
