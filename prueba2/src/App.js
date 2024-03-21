import logo from './logo.svg';
import './App.css';
import Contador from "./components/contador";
import Login from "./components/login"
import ThemeContext from './components/tema';
import Header from './components/header'
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState ("dark")
  const cambiarValor = () => {
    color == "dark"? setColor("light"): setColor("dark")
}
  return (
    <ThemeContext.Provider value={color}>
      <Header/>
      <button onClick={cambiarValor}>Cambiar color</button>
    </ThemeContext.Provider>
  );
}

export default App;
