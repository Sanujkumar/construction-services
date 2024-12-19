import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../common/laoding";  
import ShowCard from "../common/showCard";    

const ShowSpecificCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("name");   

  useEffect(() => {
    const fetchData = async () => {
      if (query) {  
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/services/search?name=${query}`);
          setServices(response.data);   
          setLoading(false);
        } catch (error) {
          console.error("Error fetching services:", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [query]);  

  const handleBookingService = (service) => {
    navigate(`/booking/${service._id}`);
  };

  return (
    <>
      {loading ? (
        <Loading />  
      ) : (
        <div className="show-card  bg-slate-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
        {services.length > 0 ? (
            services.map((service) => (
              <ShowCard
                key={service._id}
                service={service}          // Passing service data
                handleBookingService={handleBookingService} // Passing the booking handler
              />  
            ))  
          ) : (
            <p>No services found.</p>
          )}  
      </div>        
      )}
    </>
  );
};

export default ShowSpecificCard;  