import React, { Component } from 'react';

import './App.css';
import ReactSearchBox from 'react-search-box';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://api.nal.usda.gov/ndb/search/?format=json&api_key=s5X3RsKUcx0NHSRUjNpusgTGlQIDC6NwiUK7sBCU').then(results => {
      return results.json();
    }).then(data => {
      let stuff = data.results.map((other) => {
        return {

        }
      })
      this.setState({items: stuff});
      console.log(this.state.items);
    })
  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="App">

      <form>
        <div className="col" id="stats-SearchBar">
          <input className="form-control" Value={this.state.Search} onChange={this.changeHandler} name='Search' label="Search"/>
        </div>
      </form>

    </div>
    );
  }
}

export default App;
