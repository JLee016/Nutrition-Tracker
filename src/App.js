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
      <div className="App-Background">
        <div className="row">
          <div className="col">
            Whats the nuts?
          </div>
        </div>
        <div className="row App-Search">
          <ReactSearchBox 
             placeholder="Tacos"
              value="Doe"
              data={this.data}
              callback={record => console.log(record)}
              inputBoxFontColor="black"
              inputBoxFontSize="10"
  />
          </div>  

      
      
    </div>
    );
  }
}

export default App;
