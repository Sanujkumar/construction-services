import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login');  
    }
    return(
        <div className="">
            <button 
            onClick={handleClickLogin}
            className="h-12 w-20 rounded-3xl  bg-blue-300 hover:bg-blue-500 ">login</button>  
        </div>  
    );
}

export default Login;      