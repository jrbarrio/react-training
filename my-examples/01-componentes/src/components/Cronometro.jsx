import { Component } from 'react'

class Cronometro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contador: 10
        };

        const interval = setInterval(() => { 
            this.setState({ contador: this.state.contador - 1 })
            if (this.state.contador === 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    render() {
        return <h2>{ this.state.contador }</h2>;
    }
}

export default Cronometro;