import { useNavigate } from "react-router-dom";

const handleLogout = () => {
    const nevigate = useNavigate();  
    nevigate("/logout");  
}

const Logout = () =>{
    return (
        <div className="">    
            <button 
            onClick={handleLogout}  
            className="h-12 w-20 rounded-3xl bg-blue-300 hover:bg-blue-500">Logout</button>  
        </div>  
    );
};

export default Logout;    