import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Component } from 'react';

class App extends Component {

  state = {
    productList: []
  };

  onTaskCreated = (newProduct) => {    
    this.setState({
      productList: [...this.state.productList, newProduct]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Form taskCreated={this.onTaskCreated} />
            </div>
            <div className="col-12 col-md-8">
              <List products={this.state.productList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;