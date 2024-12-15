import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";  


const Show = () =>{
    const [services,setServices] = useState([]);  

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await axios.get("http://localhost:3000/");
                console.log("data is coming", response.data);  
                setServices(response.data);
            }catch(e){
                console.log("show fetching error",e);    
            }
        }

        fetchData();
    },[]);  
              

    return (
    <div className="show-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">    
   {services.map((service) => (
    <div className="card " style={{ width: "18rem" }} key={service._id}>
      <img className="card-img-top" src={service.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-name">{service.name}</h5>
        <p className="card-description">{service.description}</p>
        <p><b>Price:</b> {service.price}</p>
        <p><b>Duration:</b> {service.duration}</p>
      </div>  
    </div>
  ))}
</div>   
    );  
};  

export default Show;      