import {Link } from "react-router-dom";  

const Home = () => {
    return (
        <div >
          <Link to="/" className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwoxS0Rs3Rxq7jTYcDZmwJv2eq2dZLEnARg&s"
              style={{ height: "50px", width: "50px", borderRadius: "80%", }}
              alt="construction-logo"
              loading="lazy"

              className="transition-all duration-300 ease-in-out hover:filter hover:gayscale-0 hover:invert hover:brightness-125"
            />
          </Link>
        </div>  
    );
};

export default Home;    