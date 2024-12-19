import React from 'react';

const ShowCard = ({ service, handleBookingService }) => {
  return (
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
            onClick={() => handleBookingService(service)} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;  
  