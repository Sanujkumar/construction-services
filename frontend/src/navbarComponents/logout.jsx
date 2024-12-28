import { useNavigate } from "react-router-dom";


const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
   
    const handleLogout = () => {  
        localStorage.removeItem("jwtToken");
        console.log("print Token",localStorage.getItem('jwtToken')); 
        console.log("Token removed");
        setIsAuth(false);             
        navigate('/');   
        alert("user logout ")
    };

    return (
        <div>
            <button
                onClick={handleLogout}
                className="h-12 w-20 rounded-3xl bg-blue-300 hover:bg-blue-500"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;  
    