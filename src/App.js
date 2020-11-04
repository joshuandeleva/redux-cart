import React from 'react'
import './App.css';
import Header from './Header';
import SubBodySlider from "./SubBodySlider"
import HomeProduct from './HomeProduct';
function App() {
  return (
    <div className="app">
      <Header />
      <SubBodySlider />
      <HomeProduct />
    </div>
  );
}

export default App;
