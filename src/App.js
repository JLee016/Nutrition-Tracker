import React, { Component } from 'react';

import './App.css';
import ReactSearchBox from 'react-search-box';

class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

    data = [
      {
        key: 'john',
        value: 'John Doe',
      },
      {
        key: 'jane',
        value: 'Jane Doe',
      },
      {
        key: 'mary',
        value: 'Mary Phillips',
      },
      {
        key: 'robert',
        value: 'Robert',
      },
      {
        key: 'karius',
        value: 'Karius',
      },
    ]

  render() {
    return (
      <div className="App">
        
      <header className="App-Title">
      <h1>Whats the Nuts?</h1>
      </header>
      <header className="App-Search">
      
      <ReactSearchBox 
         placeholder="Tacos"
          value="Doe"
          data={this.data}
         callback={record => console.log(record)}
          inputBoxFontColor="black"
          inputBoxFontSize="10"
        />
      </header>
      
    </div>
    );
  }
}

export default App;
