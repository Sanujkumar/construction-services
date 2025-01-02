import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../common/laoding"; 
import ShowCard from "../common/showCard";   
  


const Show = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const nevigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {  
        setLoading(true);
        const response = await axios.get("https://construction-services-1.onrender.com/");  
        console.log("data is coming", response.data);
        setServices(response.data);
        setLoading(false);
      } catch (e) {
        console.log("show fetching error", e);
      }
    }

    fetchData();
  }, []);

  const handleBookinService = (service) => {
    nevigate(`/booking/${service._id}`);
  }


  return (
    <>
      {loading ? (     
          <Loading/>       
        
      ) : (
        <div className="w-full min-h-screen bg-slate-300 ">    
        <div className="show-card  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5 pl-16 sm:p-5">  
          {services.map((service) => (
              <ShowCard
                key={service._id}
                service={service}          
                handleBookingService={handleBookinService} 
                />  
              )) }      
        </div> 
        </div>         
        )}
      </>
    );
  };


export default Show;        

  

  