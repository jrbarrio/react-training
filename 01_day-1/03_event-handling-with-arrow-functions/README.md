# State management in class components

Class components use the 'state' property to define the state that they manage:

```javascript
state = {
    title: 'Card title',
    text: 'Card text'
};
```

The state must be modified using the 'setState' object method, which controls changes and manage the component state:

```javascript
handleClick = (event, mensaje) => {
    console.log(event);
    console.log(this.state.title);
    this.setState({ text: mensaje });
}
```

The previously seen function is defined as an arrow function, which keeps the scope of the 'this' property, so it references the class object in the event handler.

```javascript
// Use arrow functions in class components to keep the scope of 'this'
handleClick = (event) => {
    console.log("Arrow function", this); 
    console.log(event);
    console.log(this.state.title);
    this.setState({ text: 'A different text' });
}

// Does not work with <button onClick={ this.handleClick }>Change text!</button>
// Works with <button onClick={ event => this.handleClick(event) }>Change text!</button>
handleClick(event) {
    console.log("Function definition", this); 
    console.log(event);
    console.log(this.state.title);
    this.setState({ text: 'A different text' });
}

// Does not work with <button onClick={ this.handleClick }>Change text!</button>
// Works with <button onClick={ event => this.handleClick(event) }>Change text!</button>
handleClick = function(event) {
    console.log("Function literal", this); 
    console.log(event);
    console.log(this.state.title);
    this.setState({ text: 'A different text' });
}
```