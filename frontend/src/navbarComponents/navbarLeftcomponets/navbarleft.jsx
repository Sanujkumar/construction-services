
import User from "../user";   
import Notification from "../notification";     
import OwnProfileCard from "../../components/pages/ownProfileCardForm";

const navbarLeft = () => {
    return (
        <>
          <div>
            <Notification/>    
          </div>
          <div>
            <OwnProfileCard/>
          </div>   
          <div className="">  
            <User/>  
          </div>   
           
        </>  
    );
};

export default navbarLeft;  