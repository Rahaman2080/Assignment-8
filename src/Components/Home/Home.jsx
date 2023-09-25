import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-5xl mx-auto">
            <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;