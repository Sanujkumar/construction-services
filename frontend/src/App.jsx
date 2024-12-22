import React from 'react';
import Show from './components/show';
import Navbar from './common/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './components/bookinForm';  
import Footer from './common/footer';  
import ShowSpecificCard from './components/showSpecificCard';
import SinupForm from './components/sinupForm'; 
import LoginForm from "./components/loginForm" ;
import NavbarLeftComponents from "../src/navbarComponents/navbarLeftcomponets/navbarleft"
  
  
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
          <Route path='/sinup' element={<SinupForm/>}/>  
          <Route path='/login' element={<LoginForm/>}/>  
        </Routes>
        </div>  
        <div className="sticky bottom-0 w-full hidden sm:block">          
          <Footer/>  
        </div>
        <div className='flex-inline sm:hidden flex justify-between'>  
          <NavbarLeftComponents/>    
        </div>
      </div>
    </Router>     
  )   
}

export default App;    
