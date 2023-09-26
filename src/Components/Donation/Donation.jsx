import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donated, setDonated] = useState([]);
    const [notFound, setNotFound] = useState(false);
    // const [isShow, setIsShow] = useState(false);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('donation'));
        if (donations) {
            setDonated(donations);
        } else {
            setNotFound('No Data found');
        }
    }, [])


    return (
        <div>
            {notFound ? <p className=" h-[80vg] flex justify-center items-center text-xl font-bold">{notFound}</p>
                :
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {
                        donated.slice(0, dataLength).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                    }
                </div>}
            <div className="flex justify-center items-center mb-4">
                <div className={donated.length >= 4 ? "" : "hidden"}>
                    <div className={dataLength === donated.length ? "hidden" : ""} >
                        <button onClick={() => setDataLength(donated.length)} className=" bg-blue-600 py-1 px-3 text-center text-white font-semibold rounded-md">See all</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;