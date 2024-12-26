import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { useEffect } from "react";
import { useState } from "react";
import Theme from "./theme";
import Sinup from "./sinup";
import Login from "./login";
import Logout from "./logout";

const Sidebar = ({setIsAuth,isAuth}) => {  
    const [open, setOpen] = useState(false);
      

    // const token = localStorage.getItem('jwtToken');  
    // useEffect(() => {
    //     console.log("loginToken", token);  
    //     if (token != null) {
    //         setIsAuth(false);        
    //     }  
    // },[]);                              
                 
    
    const toggleSidebar = () => {
        setOpen(!open);  
    };

    return (
        <div className=" p-6">

            <div className="fixed top-4 right-1 z-50">
                <button onClick={toggleSidebar}>{open ? <TbLayoutSidebarRightExpand className="w-12 h-12" /> :
                    <TbLayoutSidebarLeftExpand className="w-12 h-12" />}
                </button>
            </div>

            <div
                className={`fixed top-0 right-0 h-full bg-blue-200 z-40 transition-transform duration-300 ease-in-out transform w-40 sm:60 ${open ? "-translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="m-3">
                    <div className="pb-4 pl-3">
                        <Theme />
                    </div>
                    {!isAuth ? (               
                        <>
                            <div className="pb-4">   
                                <Sinup />
                            </div>
                            <div className="pb-4">
                                <Login />
                            </div>
                        </>
                    ) : (
                        <div>
                            <Logout setIsAuth={setIsAuth}/>  
                        </div>  
                    )}  
                </div>
            </div>
        </div>
    );
};   
    
export default Sidebar;
