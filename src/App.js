import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import React, { Component } from 'react';

class App extends Component{
  
  render(){

    return (
        <div>
            <Main />
        </div>
    );
  }
}

export default App;
