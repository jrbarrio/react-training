import { Component } from 'react';

class LifeCycle extends Component {

    // Executed before mounting a component (before rendering)
    // Mounting
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        console.log('[constructor]');
    }

    // Executed before rendering, initually and after every modification 
    // Mounting
    // Updating
    static getDerivedStateFromProps(props, state) {
        // No access to this, as it is a static method
        console.log('[getDerivedStateFromProps]');
        return state;
    }

    // Executed after the component has been mounted (after rendering)
    // Executed only once, after component creation
    // If the state is modified, the component is re-rendered
    // Mounting
    componentDidMount() {
        console.log('[componentDidMount]');
    }

    // Can improve component performance, it can block the rendering of a component
    // Updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]');
        return false; // The component wouldn't be re-rendered
    }

    // Executed before comparing rendering and DOM (reconciliation)
    // Returned value would be passed to the next method in the lifecycle (componentdidUpdate)
    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[getSnapshotBeforeUpdate]');
        return 34;
    }

    // Executed before rendering
    // Beware infinite loops! Use checks to avoid them.
    // Updating
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[componentDidUpdate]');
    }

    // Can clean removed components
    // Unmounting
    componentWillUnmount() {
        console.log('[componentWillUnmount]');
    }

    myHandleClick = (event) => {
        event.preventDefault();
        this.setState({ contador: this.state.contador + 1 });
    }

    // Must always be defined
    // Generates HTML to be rendered
    // Should not used to update state or interacting qith the DOM
    // Mounting
    render() {
        console.log('[render]');
        return (<div>
            <h1>Lifecycle</h1>
            <p>{ this.state.contador }</p>
            <button onClick={ this.myHandleClick }>Increment</button>
        </div>);
    }
}

export default LifeCycle;
