import React from 'react';
import './App.css';
import { Button } from 'reactstrap'
import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App d-flex">

      <NavbarComponent />

      
      <div className='container d-flex 
        flex-sm-row align-items-stretch  
        flex-column
        flex-fill'>
        
        

          <Sidebar className='col-sm-3 bg-warning' />
          <Content className='col-sm-6 flex-fill bg-success' />
          <Footer className='col-sm-3 bg-danger' />
         
      </div>

      {/* <Button outline color='secondary'>Click me!!!</Button> */}
    </div>
  );
}

export default App;
