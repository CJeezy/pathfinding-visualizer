import logo from './logo.svg';
import React from 'react';
import './App.css';
import Visualizer from './components/Visualizer'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Visualizer></Visualizer>
    </div>
  );
}

export default App;
