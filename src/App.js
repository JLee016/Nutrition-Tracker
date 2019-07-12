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
        <ReactSearchBox
        placeholder="Nut"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
        inputBoxFontColor="red"
        inputBoxFontSize="10"
      />
      <header className="App-header">
        
        <p>
          More like Cole is the hacker man!

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
    );
  }
}

export default App;
