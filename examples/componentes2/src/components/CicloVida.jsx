import { Component } from 'react';

class CicloVida extends Component {

    // Mounting
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
        console.log('[constructor]');
    }

    // Mounting
    // Updating
    static getDerivedStateFromProps(props, state) {
        console.log('[getDerivedStateFromProps]');
        return state;
    }

    // Mounting
    componentDidMount() {
        console.log('[componentDidMount]');
    }

    // Updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]');
        return true;
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[getSnapshotBeforeUpdate]')
        // se lanza antes de que se compare el render con el DOM
        return 34;
    }

    //Updating 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[componentDidUpdate]')
    }

    // Unmounting
    componentWillUnmount() {
        console.log('[componentWillUnmount]');
    }

    handleClick = () => {
        this.setState({ contador: this.state.contador + 1 });
    }

    // Mounting
    // Updating
    render() {
        console.log('[render]');
        return (
            <div>
                <h1>Ciclo de Vida</h1>
                <p>{this.state.contador}</p>
                <button onClick={this.handleClick}>Incrementa</button>
            </div>
        );
    }

}

export default CicloVida;