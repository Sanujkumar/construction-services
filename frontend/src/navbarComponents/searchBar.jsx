import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  function showSpecificCard(event) {
    event.preventDefault();   
    if (searchQuery) {
      navigate(`/services/search?name=${searchQuery}`);    
    }
  }
  

  return (
    <form onSubmit={showSpecificCard}>   
      <div className="relative h-12 w-60 sm:w-72 ">      
        <input
          type="text"
          value={searchQuery}  
          onChange={(e) => setSearchQuery(e.target.value)}    
          className="rounded-3xl h-full w-full pl-4 pr-10 text-center border focus:outline-none"
          placeholder="Search services"
        />
        <button
          type="submit"  
          className="absolute right-2 top-1/2 transform -translate-y-1/2 "
        >
          <IoIosSearch className="h-8 w-10 text-gray-500 hover:text-black " />    
        </button>  
      </div>
    </form>
  );
};

export default SearchBar;  
  