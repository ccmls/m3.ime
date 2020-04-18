import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header'
import TopHeader from './components/TopHeader'

function App() {
  return (
    <div className="App">
      <TopHeader></TopHeader>
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Oi, olha o que eu fiz hehe
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
