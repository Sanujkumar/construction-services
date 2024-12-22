
import Searchbar from "../navbarComponents/searchBar";
import Theme from "../navbarComponents/theme";
import Sinup from "../navbarComponents/sinup";
import Login from "../navbarComponents/login";
import User from "../navbarComponents/user";   
import Home from "../navbarComponents/home"; 
import Logout from "../navbarComponents/logout";    
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
          <div className="">  
            <Theme />
          </div>
          <div className="">
            <Sinup/>
          </div>
          <div className="">
            <Login />
          </div>
          <div>
            <Logout/>  
          </div>
          <div className="">  
            <User/>  
          </div>
        </div>
      </div> 
  );
};

export default Navbar;  
