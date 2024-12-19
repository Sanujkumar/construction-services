import React from 'react';
import Show from './components/show';
import Navbar from './common/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './components/bookinForm';  
import Footer from './common/footer';  
import ShowSpecificCard from './components/showSpecificCard';
  
  
function App() {


  return (
    
    <Router>
      <div>
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="">      
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path="/services/search" element={<ShowSpecificCard />} />  
          <Route path='/booking/:serviceId' element={<Booking />} />    
        </Routes>
        </div>  
        <div className="sticky bottom-0 w-full">          
          <Footer/>  
        </div>
      </div>
    </Router>     
  )   
}

export default App;    
