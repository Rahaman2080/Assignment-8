import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="grid justify-center items-center max-w-5xl mx-auto mt-28 text-center">
            <p className="font-bold text-4xl text-red-600">Page not found</p>
            <Link to={"/"}>
                <button className="mt-3 bg-gray-400 text-white font-bold py-1 px-3 text-center rounded-md">Go back</button>
            </Link>
        </div>
    );
};

export default Error;