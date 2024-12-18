import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../common/laoding";  


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
        <div className="show-card bg-slate-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10">
          {services.map((service) => (
            <div
              className="card shadow-xl bg-blue-50 rounded-3xl overflow-hidden"
              style={{ width: "20rem" }}
              key={service._id}
            >
              <img
                className="card-img-top object-cover w-full h-48"
                src={service.image}
                alt="Card"
              />
              <div className="card-body flex justify-between p-2 object-cover h-48 w-full">
                <div>
                  <h5 className="card-name">
                    <b>{service.name}</b>
                  </h5>
                  <p className="card-description">{service.description}</p>
                  <p>
                    <b>Price:</b> {service.price}
                  </p>
                  <p>
                    <b>Duration:</b> {service.duration}
                  </p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleBookinService(service)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};


export default Show;        