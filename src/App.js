// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Conatiner/Header/Header.jsx';
import AboutUs from './Conatiner/AboutUs/Aboutus.jsx';
import SpecialMenu from './Conatiner/SpecialMenu/SpecialMenu.jsx';
// import logo from './logo.jpg'

function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <AboutUs/>
   <SpecialMenu/>
   </>
  );
}

export default App;
