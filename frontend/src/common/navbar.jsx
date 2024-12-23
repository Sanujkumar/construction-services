
import Searchbar from "../navbarComponents/searchBar";
import Theme from "../navbarComponents/theme";
import Sinup from "../navbarComponents/sinup";
import Login from "../navbarComponents/login";
import User from "../navbarComponents/user";   
import Home from "../navbarComponents/home"; 
import Logout from "../navbarComponents/logout";
import Notification from "../navbarComponents/notification"; 
import LeftComponents from "../navbarComponents/navbarLeftcomponets/navbarleft"    
import { IoToggleOutline } from "react-icons/io5";  




  
const Navbar = () => {  
  return (  
      <div className="flex w-full justify-between bg-blue-400 items-center h-20 px-3">
        
        <div className="">      
          <Home/>    
        </div> 
        <div className="searchbar ">  
          <Searchbar />
        </div>
        
        <div className="sm:hidden"><button><IoToggleOutline className="w-12 h-12"/></button></div>
        <div className="flex justify-around w-1/3  hidden sm:inline-flex">        
         <LeftComponents/>    
        </div>
      </div> 
  );
};

export default Navbar;  
