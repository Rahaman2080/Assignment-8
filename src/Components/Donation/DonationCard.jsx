import { Link } from "react-router-dom";
import { BiDollar } from 'react-icons/bi';
import PropTypes from 'prop-types';

const DonationCard = ({ donate }) => {
    const { id, img, category, price, title, card_bg, category_bg, text_color } = donate;


    return (
        <div style={{backgroundColor: card_bg}} className="relative flex w-11/12 max-w-[48rem] flex-row rounded-lg shadow-md m-4">
            <div  className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img src={img} alt="image" className="h-full w-full object-cover"/>
            </div>
            <div className="p-6">
                <h6 style={{backgroundColor: category_bg, color: text_color}} className="inline mb-4 px-3 py-1 rounded-sm text-base font-semibold leading-relaxed tracking-normal antialiased">{category}</h6>
                <h4 style={{color: text_color}} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h4>
                <p style={{color: text_color}} className='flex justify-left items-center'><BiDollar></BiDollar> {price}</p>
                <Link to={`/cards/${id}`}>
                    <button style={{ backgroundColor: text_color }} className=" mt-3 py-1 px-3 rounded-md text-white " >View details</button>
                </Link>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donate: PropTypes.object
}
export default DonationCard