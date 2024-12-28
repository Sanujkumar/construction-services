import Theme from "../navbarComponents/theme";
import Sinup from "../navbarComponents/sinup";
import Login from "../navbarComponents/login";
import Logout from "../navbarComponents/logout";        


const sidebarComponents = ({setIsAuth,isAuth,open}) => {
    return (         
        
        <div className={` ${open ? " p-2 "  :"flex justify-around" }`}>  
        <div className={`${open? "pb-3 pl-3" : null}`}>  
          <Theme />
        </div>  
        {!isAuth ? (  
          <>
        <div className={`${open? "pb-3" : null}`}>
          <Sinup />
        </div>
        <div className={`${open? "pb-3" : null}`}>
          <Login />
        </div>
        </>  
        ): (
        <div className={`${open? "pb-3" : null}`}>  
          <Logout setIsAuth={setIsAuth} />   
        </div>  
        )  }  
        </div>  
      
    );
};

export default sidebarComponents;     