import {BiDollar} from 'react-icons/bi'
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const CardDetails = () => {
    const [details, setDetails] = useState({})

    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCards = cards?.find(card => card.id == id);
        setDetails(findCards)
    }, [id, cards])

    const handleDonateBtn = () =>{
        Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Your Donation completed',
            footer: '<a href="">You can donate anytime</a>'
          })
    }

    const { img, title, description, price, text_color, card_bg} = details;

    return (
        <div style={{backgroundColor: card_bg}} className='my-10 max-w-2xl mx-auto grid justify-center items-center'>
            <div className='space-y-5 text-justify'>
                <div className='relative'>
                <img className='w-[100vw] bg-opacity-50' src={img} alt="" />
                </div>
                <div className='absolute left-1/4 bottom-6'>
                    <button onClick={handleDonateBtn} style={{backgroundColor: text_color}} className='py-1 px-3 rounded-md text-white font-semibold'><p className='flex justify-center items-center'>Donate: <BiDollar></BiDollar> {price}</p></button>
                </div>
                <p className='font-bold text-xl' style={{color: text_color}}>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;