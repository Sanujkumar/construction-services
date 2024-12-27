import React from 'react';
import Show from './components/show';
import Navbar from './common/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './components/bookinForm';  
import Footer from './common/footer';  
import ShowSpecificCard from './components/showSpecificCard';
import SignupForm from './components/sinupForm'; 
import LoginForm from "./components/loginForm" ;
import NavbarLeftComponents from "../src/navbarComponents/navbarLeftcomponets/navbarleft"
import { useState } from 'react';
  
    
function App() {
  const [isAuth, setIsAuth] = useState(false);  

  return (
    
    <Router
    future={{
      v7_startTransition: true, 
      v7_relativeSplatPath: true,   
    }}  
    >
      <div>
        <div className="sticky top-0">
          <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/> 
        </div>  
        <div className="">        
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path="/services/search" element={<ShowSpecificCard />} />  
          <Route path='/booking/:serviceId' element={<Booking />} />  
          <Route path='/signup' element={<SignupForm/>}/>    
          <Route path='/login' element={<LoginForm setIsAuth={setIsAuth}/>}/>       
        </Routes>
        </div>  
        <div className="sticky bottom-0 w-full hidden lg:block">          
          <Footer/>  
        </div>
        <div className='flex-inline lg:hidden flex justify-between sticky bottom-0 bg-slate-400 p-2'>  
          <NavbarLeftComponents/>      
        </div>
      </div>  
    </Router>       
  )   
}

export default App;    
