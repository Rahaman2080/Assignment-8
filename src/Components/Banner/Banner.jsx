import '../../App.css';

const Banner = () => {
    return (
        <div>
            <div className="banner">
            <div className="py-32 ">
                <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center">I Grow By Helping People In Need</h2>
                <div className="flex justify-center items-center mt-6 max-w-4xl mx-auto">
                    <input className="py-1 px-3 rounded-l-md" type="search" name="" id="" placeholder="search here" />
                    <button className="bg-[#FF444A] py-1 px-3 font-bold text-white rounded-r-md">Search</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;