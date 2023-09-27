const Banner = () => {
    return (
        <div className="relative">
              <div className="relative">
                <img className='opacity-40 w-full' src="src/assets/Rectangle 4281.png" alt="" />
                </div>
                <div className='absolute w-full top-10 md:top-20 lg:top-40'>
                <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center">I Grow By Helping People In Need</h2>
                <div  className="flex justify-center items-center mt-6 max-w-4xl mx-auto">
                <input 
                // onChange={handleSearch}
                className="py-1 px-3 rounded-l-md w-60 md:w-80" 
                type="text" 
                name="search" 
                id="search" 
                placeholder="search here"
                autoComplete="off" />
                    <button className="bg-[#FF444A] py-1 px-3 font-bold text-white rounded-r-md">Search</button>
                </div>
                </div>
        </div>
    );
};

export default Banner;