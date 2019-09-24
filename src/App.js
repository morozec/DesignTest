import React from 'react';
import './App.css';
import {Button} from 'reactstrap'
import NavbarComponent from './NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Button outline color='secondary'>Click me!!!</Button>
    </div>
  );
}

export default App;
