import React, { /*Fragment,*/ Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';

class App extends Component {
  render() {
    // const name = "Val Pal";

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
