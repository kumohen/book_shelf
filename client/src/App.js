import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentWillMount(){
    axios.get('/api/getBook?id=5cb2390b588bb62440fad186')
      .then(response =>{
        console.log(response.data);
      })
  }
  render() {
    return (
      <div className="App">
       React App
      </div>
    );
  }
}

export default App;
