import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Navigation';
import Vcard from './component/Vcard';
import AppBar from './component/SearchAppBar';
import Navigation from "./component/Navigation";
import Content from "./component/Content";
import Contact from './component/Contact';
import HeroImage from "./component/HeroImage";

function App() {
  return (
    <div className="App">
        <HeroImage />
        <Header name={"Sound sampler"} />
        <Navigation />
        <Content />
        <Contact />

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*<br />*/}

    </div>
  );
}

export default App;
