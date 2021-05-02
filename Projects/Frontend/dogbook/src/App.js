import React, {Component} from 'react'
import Table from './start'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dogbook</h1>
        <br/>
        <h2>Users</h2>
        <Table />
        <a href="create.js"> Create new dog </a> 
      </div>
    )
  }
}

export default App;
