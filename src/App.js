import React from 'react';
import './App.css';
import {Button} from 'reactstrap'
import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Sidebar />
      <Content />
      <Footer />
      {/* <Button outline color='secondary'>Click me!!!</Button> */}
    </div>
  );
}

export default App;
