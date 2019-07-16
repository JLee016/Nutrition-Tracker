import React, { Component } from 'react';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://api.nal.usda.gov/ndb/search/?format=json&api_key=s5X3RsKUcx0NHSRUjNpusgTGlQIDC6NwiUK7sBCU')
      .then(results => results.json())
      .then(data => this.setState({items: data}));
      console.log(this.state.items);
  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  render() {
    return (

      <div className="App-Background">
        <div className="row">
          <div className="col">
            Whats the nuts?
          </div>
        </div>
        <div className="row App-Search">
          <form>
            <div className="col" id="stats-SearchBar">
              <input className="form-control" value={this.state.Search} onChange={this.changeHandler} name='Search' label="Search"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
