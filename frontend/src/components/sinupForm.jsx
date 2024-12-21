
const sinupform = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-slate-300">  
        <h1 className="text-center text-3xl font-bold mb-5 pt-3 text-blue-500">Sinup Form</h1>
        <div className="flex items-center justify-center ">
            <div className="mx-auto w-full max-w-[550px] bg-blue-400 p-5">
                <form>
                    <div className="mb-4 pl-2">
                    <label htmlFor="name" className="mb-1 block text-base font-medium text-[#07074D]">
                                Full Name *    
                            </label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" required   
                                className="w-4/3  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-4 pl-2">
                    <label htmlFor="email" className="mb-1 block text-base font-medium text-[#07074D]">
                                Email *    
                            </label>
                            <input type="email" name="email" id="emial" placeholder="Enter your email" required   
                                className="w-4/3  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>  
                    <div className="mb-4 pl-2">
                    <label htmlFor="password" className="mb-1 block text-base font-medium text-[#07074D]">
                                password *    
                            </label>  
                            <input type="password" name="password" id="password" placeholder="Enter your password" required   
                                className="w-4/3  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>  
                    <div className="mb-4 pl-2">
                    <label htmlFor="password" className="mb-1 block text-base font-medium text-[#07074D]">
                                Re-enter*
                            </label>
                            <input type="password" name="re-enter" id="re-enter" placeholder="Enter your password" required   
                                className="w-4/3  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>    
                      
                     <button className="bg-blue-300 h-10 w-24 rounded-3xl ml-40 hover:bg-blue-500" type="submit">Sinup</button>  
            </form>
            </div>
        </div>
        </div>  
    );
};
export default sinupform;  