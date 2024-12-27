import { useNavigate } from "react-router-dom";




const Signup = () => {
    const navigate = useNavigate();
    const handleSinupClick = ()=>{
        navigate('/signup');    
    }

    return(
        <div className="">    
            <button onClick={handleSinupClick} className="h-12 w-20 rounded-3xl bg-blue-300 hover:bg-blue-500">sinup</button>  
        </div>  
    );
}  

export default Signup;          