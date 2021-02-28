import { Component } from 'react'

class Chronometer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 100
        };

        const interval = setInterval(() => { 
            this.setState({ counter: this.state.counter - 1 })
            if (this.state.counter === 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    render() {
        return <h2>{ this.state.counter }</h2>;
    }
}

export default Chronometer;