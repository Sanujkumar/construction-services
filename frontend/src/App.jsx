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
import Logout from './navbarComponents/logout';
  
  
function App() {


  return (
    
    <Router
    future={{
      v7_startTransition: true, 
      v7_relativeSplatPath: true, 
    }}  
    >
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
          <Route path='/logout' element={<Logout/>}   /> 
        </Routes>
        </div>  
        <div className="sticky bottom-0 w-full hidden md:block">          
          <Footer/>  
        </div>
        <div className='flex-inline lg:hidden flex justify-between sticky bottom-0 bg-blue-400 p-2'>  
          <NavbarLeftComponents/>      
        </div>
      </div>
    </Router>     
  )   
}

export default App;    
