
import Searchbar from "../navbarComponents/searchBar";
import Home from "../navbarComponents/home";
import Sidebar from "../navbarComponents/sidebar";
import Notification from "../navbarComponents/notification";
import Theme from "../navbarComponents/theme";
import Sinup from "../navbarComponents/sinup";
import Login from "../navbarComponents/login";
import Logout from "../navbarComponents/logout";
import User from "../navbarComponents/user";





const Navbar = ({setIsAuth,isAuth}) => {
     

  // useEffect(() => {
  //   const token = localStorage.getItem('jwtToken');  
  //   console.log("navToken",token);  
  //   if(token){
  //     setIsAuth(true);    
  //   }
  // },[]);       

  return (
    <div className="flex justify-between w-full bg-blue-400 items-center h-20 px-3">

      <div className="">
        <Home />
      </div>
      <div className="searchbar ">
        <Searchbar />
      </div>

      
        <div className=" lg:hidden">
          <Sidebar setIsAuth={setIsAuth} isAuth={isAuth} />  
        </div>
         
         
      <div className="w-1/2  hidden lg:inline-flex justify-between">
        <div>
          <Theme />
        </div>
        <div>
          <Notification />
        </div>
        {!isAuth ? (  
          <>
        <div>
          <Sinup />
        </div>
        <div>
          <Login />
        </div>
        </>  
        ): (
        <div>
          <Logout setIsAuth={setIsAuth} /> 
        </div>  
        )  }  
        <div>
          <User />
        </div>
      </div>     
    </div>
  );
};

export default Navbar;    
