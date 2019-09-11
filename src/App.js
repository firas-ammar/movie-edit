import React, { Component } from 'react';
import './App.css';
import SearchPage from './search';
import Star from './star';
import Moviecard from './listmovie';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titre:'',
      isLoading: true,
    }
  }


  render() {

    return (
    <div className="App">
       <div className="container">
       <div className="container" style={{display: 'flex', justifyContent: 'center'}} >
     <SearchPage />
     <Star />
     </div>
     <Moviecard />
    </div>
  </div>)
}
}


export default App;
