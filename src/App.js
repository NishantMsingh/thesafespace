
import React from 'react'
import "./Main.css"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Threpy from './Component/ThrepySession/Threpy';
import Workshop from './Component/Workshop/Workshop';
import Training from './Component/Training/Training';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import About from './Component/About/About';



const App = () => {
  return (
    <Router>
      
          <Header/>
          <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/Workshop" element={<Workshop/>}/>
            <Route path="/Threpy" element={<Threpy/>}/>
            <Route path="/Training" element={<Training/>}/>
            <Route path="/Threpy/:doctorsid" element={<About />} />
            <Route path="/" element={<Workshop></Workshop>}/>
           </Routes>
           <Footer/>
          
    </Router>
  ) 
}

export default App