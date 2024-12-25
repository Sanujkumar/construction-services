import { IoToggleOutline } from "react-icons/io5";  
import { useState } from "react";
import NavbarLeft from "./navbarLeftcomponets/navbarleft";    
import Theme from "./theme";
import Sinup from "./sinup";
import Login from "./login";
import Logout from "./logout";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open); 
    };

    return (
        <div className="relative">  
            
            <div className=" fixed top-4 right-4 z-50">  
                <button onClick={toggleSidebar}>
                    <IoToggleOutline className="w-12 h-12" />
                </button>
            </div>  
            
            <div
                className={`fixed top-0 right-0 h-full bg-blue-200 z-40 transition-transform duration-300 ease-in-out transform w-40 sm:60 ${
                    open ? "-translate-x-0" : "translate-x-full"  
                }`} 
            >
                <div className="m-3">
                    <div className="pb-4">
                        <Theme/>
                    </div>
                    <div className="pb-4">
                        <Sinup/>
                    </div>
                    <div className="pb-4">
                        <Login/> 
                    </div>
                    <div className="pb-4">
                        <Logout/> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
  