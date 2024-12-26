import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError(null);

  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("https://construction-services-1.onrender.com/sinup", data);
      setLoading(false);   

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage(response.data.message || "Signup successful!");
        setTimeout(() => {
          navigate("/login"); 
        }, 3000);  
      } else {
        throw new Error(response.data.message || "Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || "An error occurred during signup.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <h1 className="text-center text-3xl font-bold mb-5 pt-3 text-blue-500">Signup Form</h1>
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px] bg-blue-400 p-5 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 pl-2">
              <label htmlFor="name" className="mb-1 block text-base font-medium text-[#07074D]">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-4 pl-2">
              <label htmlFor="email" className="mb-1 block text-base font-medium text-[#07074D]">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-4 pl-2">
              <label htmlFor="password" className="mb-1 block text-base font-medium text-[#07074D]">
                Password *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-4 pl-2">
              <label htmlFor="re_enter" className="mb-1 block text-base font-medium text-[#07074D]">
                Re-enter Password *
              </label>
              <input
                type="password"
                name="re_enter"
                id="re_enter"
                placeholder="Re-enter your password"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <button
              className="bg-blue-300 h-10 w-24 rounded-3xl ml-40 hover:bg-blue-500"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          {error && <p className="text-red-700 mt-4 text-center">{error}</p>}
          {successMessage && <p className="text-green-700 mt-4 text-center">{successMessage}</p>}
        </div>  
      </div>
    </div>
  );
};   

export default SignupForm;  
   