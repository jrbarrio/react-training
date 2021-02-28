import { Component } from 'react';

class Goodbye extends Component {
    render() {
        return <h3>Goodbye component: {this.props.name}</h3>;
    }
}

export default Goodbye;