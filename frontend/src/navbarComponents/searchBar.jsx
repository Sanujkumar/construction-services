
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative h-10 w-72"> 
      <input
        className="rounded-3xl h-full w-full pl-4 pr-10 text-center border focus:outline-none"
        placeholder="Search services"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <IoIosSearch className="h-6 w-6 text-gray-500 hover:text-green-600" />
      </button>
    </div>
  );
};

export default SearchBar;   
  