

const Banner = () => {
    return (
        <div>
            <div className="relative">
            <img className="h-1/2" src="src/assets/Rectangle 4281.png" alt="" />
            <div className="absolute left-1/3 bottom-1/2">
                <h2 className="text-3xl font-bold">I Grow By Helping People In Need</h2>
                <div className="flex justify-center items-center">
                    <input className="py-1 px-3 rounded-l-md" type="search" name="" id="" placeholder="search here" />
                    <button className="bg-[#FF444A] py-1 px-3 font-bold text-white rounded-r-md">Search</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;