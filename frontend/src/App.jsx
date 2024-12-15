import React from 'react';   
import Show from './components/show';  
import Navbar from './common/navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';        
    
function App() {


  return (
    <Router>
    <div>
      <div className="sticky top-0">    
      <Navbar/>  
      </div>
      <Routes>
       <Route path='/' element = {<Show/> }/>    
      </Routes>
    </div>  
    </Router>
  )  
}

export default App;  
