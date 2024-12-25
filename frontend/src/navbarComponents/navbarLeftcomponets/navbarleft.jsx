import Theme from "../theme"
import Sinup from "../sinup";
import Login from "../login";
import User from "../user";   
import Logout from "../logout";
import Notification from "../notification";     

const navbarLeft = () => {
    return (
        <>
          <div>
            <Notification/>    
          </div>
          <div className="">  
            <User/>  
          </div>    
           
        </>  
    );
};

export default navbarLeft;  