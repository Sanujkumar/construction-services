import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ setIsAuth }) => {     
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleClickLogin = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());  
    
      
    
   
    try {
      const response = await axios.post("https://construction-services-1.onrender.com/login", data );      
        console.log(response.data);      
      setLoading(false);    
           
      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem("jwtToken", token);  
        console.log("jsonwebtoken",token);  
        setIsAuth(true);          
        setSuccess(response.data.message);
        setTimeout(() => {
          navigate("/");  
        }, 3000);
      } else {
        setError(response.data.message);  
      }
    } catch (err) {
      setLoading(false);  
    
      if (err.response) {
        setError(err.response.data.message);  
      } else {
        setError("An unexpected error occurred."); 
      }
    }
        
  };    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <h1 className="text-center text-3xl font-bold mb-5 pt-3 text-blue-500">
        Login Form
      </h1>
      <div className="flex items-center justify-center ">  
        <div className="mx-auto w-full max-w-[550px] bg-blue-400 p-5 rounded-3xl shadow-2xl">
          <form onSubmit={handleClickLogin}>
            <div className="mb-4 pl-2">
              <label
                htmlFor="email"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-4/3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-4 pl-2">
              <label
                htmlFor="password"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Password *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-4/3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <button
              className="bg-blue-300 h-10 w-24 rounded-3xl ml-40 hover:bg-blue-500"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && <p className="text-red-700 mt-4 text-center">{error}</p>}
          {success && <p className="text-green-700 mt-4 text-center">{success}</p>}
        </div>
      </div>
    </div>
  );   
};  

export default LoginForm;
   