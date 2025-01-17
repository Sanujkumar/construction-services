import Notification from "../navbarComponents/notification";
import User from "../navbarComponents/user";  

const footerComponents = () => {
    return (
        <>
        <div className="flex justify-evenly">
          <div>
            <Notification/>         
          </div>
          <div className="">  
            <User/>  
          </div>   
          </div>      
        </>    
    );
};  

export default footerComponents;  