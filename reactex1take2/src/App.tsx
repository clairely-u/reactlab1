import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Vote from './components/Vote';
import Ad from './components/Ad';

function App() {
  return (
    <div className="App">
      <Header
      user = "Bongus"/>
      <div className="AppBody">
        <div className = "AdExContainers">
        <Ad 
      flavor = "Vanilla"
      fontSize={20}
      darkTheme = {true}/>
      <Ad 
      flavor = "Chocolate"
      fontSize={20}
      darkTheme = {false}/>
      <Ad 
      flavor = "Strawberry"
      fontSize={20}
      darkTheme = {true}/>
        </div>
      <AdDesigner />
      <Vote />
      </div>
    </div>
  );
}

export default App;
