import React, { Component } from 'react';
import Table from './components/Table';
import ModalWindow from './components/ModalWindow';

class App extends Component {
  state = {
    data: [],
  }


  async componentDidMount() {
    const response = await fetch('/fish/get')
    const data = await response.json()
    console.log(data)
    this.setState({
      data
    })
  }

  render() {
    return (
      <div className="container">
        <Table data={this.state.data} />
        <ModalWindow />
      </div>
    );
  }
}

export default App;
