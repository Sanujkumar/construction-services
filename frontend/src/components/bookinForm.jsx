import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/laoding";  

const BookingForm = () => {
    const { serviceId } = useParams();
    const [service, setServices] = useState({}); 
    const [loading,setLoading] = useState(false);            

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for service ID: ${serviceId}`);  
                setLoading(true);
                // const response = await axios.get(`https://construction-services-1.onrender.com/booking/${serviceId}`);
                const response = await axios.get(`http://localhost:5000/booking/${serviceId}`);  
                console.log(response.data);  
                setServices(response.data);  
                setLoading(false);   
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, [serviceId]);

     

    return (
        <>
        {loading ? (   
          <Loading/>    
        
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-slate-300">  
            <h1 className="text-center text-3xl font-bold mb-3 pt-6 text-blue-500">Booking Form for {service.name}</h1>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-blue-400 p-5">
                    <form  action={`https://construction-services-1.onrender.com/bookingData/${serviceId}`} method="POST">                  
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name *    
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name" required   
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number*
                            </label>  
                            <input type="number" name="phone" id="phone" placeholder="Enter your phone number" required      
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D] " required>   
                                Email Address*
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Date*
                                    </label>
                                    <input type="date" name="bookingDate" id="bookingdate" required  
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>  
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Time*
                                    </label>
                                    <input type="time" name="bookingTime" id="bookingtime" required
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5 pt-3">
                            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                Address Details*  
                            </label>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="area" id="area" placeholder="Enter area" required
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="city" id="city" placeholder="Enter city" required
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="state" id="state" placeholder="Enter state" required
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="pincode" id="pincode" placeholder="Post Code" required  
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-blue-300 hover:bg-blue-500 py-3 px-8 text-center text-base font-semibold text-black outline-none">
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
      ) }  
        </>    
    );
};

export default BookingForm;  
       