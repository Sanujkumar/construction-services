import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

 

const User = () => {   
    const navigate = useNavigate();   
    
    const usehandleClickUser = () => {
        navigate("/profile");
    }
    return (
        <div className="">
            <button
                onClick={usehandleClickUser}
                className="h-12 w-12 rounded-full bg-blue-300 hover:bg-blue-500 "><FaRegUser className="h-8 w-12" /></button>
        </div>
    );
}

export default User;          