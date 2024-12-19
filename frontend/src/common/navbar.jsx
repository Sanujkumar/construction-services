
import Searchbar from "../navbarComponents/searchBar";
import Theme from "../navbarComponents/theme";
import Sinup from "../navbarComponents/sinup";
import Login from "../navbarComponents/login";
import User from "../navbarComponents/user";   
import Home from "../navbarComponents/home";   
import { useState } from "react";

// const [open,setOpen] = useState(false);  

  
const Navbar = () => {  
  return (  
      <div className="flex w-full justify-between bg-blue-400 items-center h-20 px-3">
        
        <div className="home">    
          <Home/>    
        </div> 
        <div className="searchbar ">
          <Searchbar />
        </div>
   
        <div className="flex justify-around w-1/3">      
          <div className="">  
            <Theme />
          </div>
          <div className="">
            <Sinup/>
          </div>
          <div className="">
            <Login />
          </div>
          <div className="">  
            <User/>  
          </div>
        </div>
      </div> 
  );
};

export default Navbar;  
