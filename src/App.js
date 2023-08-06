
import React from 'react'
import "./Main.css"
import CallEmail from './Component/CallEmail/CallEmail';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Threpy from './Component/ThrepySession/Threpy';
import Workshop from './Component/Workshop/Workshop';
import Training from './Component/Training/Training';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import MouseFollower from './MouseFollower';


const App = () => {
  return (
    <Router>
          <MouseFollower />
          <CallEmail/>
          <Header/>

          <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/Workshop" element={<Workshop/>}/>
            <Route path="/Threpy" element={<Threpy/>}/>
            <Route path="/Training" element={<Training/>}/>
            <Route path="*" element={<h1>Hiii</h1>}/>
          
            </Routes>
         
          <Footer/>
          
    </Router>
  ) 
}

export default App