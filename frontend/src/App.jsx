import React from 'react';
import Show from './components/show';
import Navbar from './common/navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Booking from './components/bookinForm';  
import Footer from './common/footer';  
import ShowSpecificCard from './components/showSpecificCard';
import SignupForm from './components/sinupForm'; 
import LoginForm from "./components/loginForm" ;   
import FooterComponents from './common/footerComponets';   
import { useState } from 'react';
import Profile from './components/pages/profile';
  
    
function App() {
  const [isAuth, setIsAuth] = useState(false);  

  return (
    
    <BrowserRouter>
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
          <Route path='/profile' element={<Profile/>}  />        
        </Routes>
        </div>  
        <div className="sticky bottom-0 w-full hidden lg:block">          
          <Footer/>  
        </div>
        <div className='sticky bottom-0 bg-slate-400 p-2 block lg:hidden'>  
          <FooterComponents/>        
        </div>      
      </div>  
      </BrowserRouter>
              
  )   
}

export default App;    
