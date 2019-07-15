import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch(' https://api.nal.usda.gov/ndb/search/?format=json&q=butter&max=25&offset=0&api_key=s5X3RsKUcx0NHSRUjNpusgTGlQIDC6NwiUK7sBCU')
  }

  render() {
    return (

    );
  }


}

export default Search;
