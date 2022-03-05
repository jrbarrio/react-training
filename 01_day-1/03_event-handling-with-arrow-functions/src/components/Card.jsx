import { Component } from 'react';

class Card extends Component {

    state = {
        title: 'Card title',
        text: 'Card text'
    };

//     constructor (props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//     }

//     Use arrow functions in class components to keep the scope of 'this'. Constructor is not needed.
    handleClick = (event) => {
        console.log("Arrow function", this);
        console.log(event);
        console.log(this.state.title);
        this.setState({ text: 'A different text' });
    }

//     Uncomment constructor to work with <button onClick={ this.handleClick }>Change text!</button>
//     Also works with <button onClick={ event => this.handleClick(event) }>Change text!</button>
//     handleClick(event) {
//         console.log("Function definition", this);
//         console.log(event);
//         console.log(this.state.title);
//         this.setState({ text: 'A different text' });
//     }
    
//     Uncomment constructor to work with <button onClick={ this.handleClick }>Change text!</button>
//     Also works with <button onClick={ event => this.handleClick(event) }>Change text!</button>
//     handleClick = function(event) {
//         console.log("Function literal", this);
//         console.log(event);
//         console.log(this.state.title);
//         this.setState({ text: 'A different text' });
//     }
    
    render() {
        return (<div className='card'>
            <h2>{ this.state.title }</h2>
            <p>{ this.state.text }</p>
            <button onClick={ this.handleClick }>Change text!</button>
        </div>);
    }
}

export default Card;