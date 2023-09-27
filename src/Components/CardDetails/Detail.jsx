import Swal from 'sweetalert2';
import {BiDollar} from 'react-icons/bi';
import PropTypes from 'prop-types';

const Detail = ({detail}) => {
    const {id, img, title, description, price, text_color} = detail || {};

    const AddToDonation = () =>{
        const addedDonation =[];

        const donations = JSON.parse(localStorage.getItem('donation'))
        if(!donations){
            addedDonation.push(detail);
            localStorage.setItem('donation', JSON.stringify(addedDonation));
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'Your Donation completed',
              })
        } else{
            const isExists = donations.find((donate)=> donate.id == id);
            if(!isExists){
                addedDonation.push(...donations, detail);
                localStorage.setItem('donation', JSON.stringify(addedDonation));
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: 'Your Donation completed',
                  })
            } else{
                Swal.fire({
                    icon: 'error',
                    title: 'already exist',
                    text: 'You have already donated',
                  })
            }
        }
       
    }

    return (
        <div className='my-10 max-w-2xl mx-5 lg:mx-auto grid justify-center items-center'>
        <div className='space-y-5 text-justify'>
            <div className='relative'>
            <img className='w-[100vw] bg-opacity-50' src={img} alt="" />
            <div className='absolute w-full py-5 md:py-8 bottom-0 bg-slate-900 bg-opacity-50'>
                <button onClick={AddToDonation} style={{backgroundColor: text_color}} className='py-1 px-3 rounded-md text-white ml-5 font-semibold'><p className='flex justify-center items-center'>Donate: <BiDollar></BiDollar> {price}</p></button>
            </div>
            </div>
            <p className='font-bold text-xl' style={{color: text_color}}>{title}</p>
            <p>{description}</p>
        </div>
    </div>
    );
};

Detail.propTypes = {
    detail: PropTypes.object
}
export default Detail;