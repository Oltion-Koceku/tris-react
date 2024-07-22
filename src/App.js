import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const mainRef = useRef();

  const triggerReset = () =>{
    if (mainRef.current) {
      mainRef.current.reset()
    }
  }
  return (
    <div className="App d-flex flex-column justify-content-between h-100">
      <Header onButtonClick={triggerReset} />
      <Main ref={mainRef} />

    </div>
  );
}

export default App;
