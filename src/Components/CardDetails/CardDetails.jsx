import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Detail from './Detail';

const CardDetails = () => {
    const [details, setDetails] = useState({})

    const { id } = useParams();
    const cards = useLoaderData();
    useEffect(() => {
        const findCards = cards?.find(card => card.id == id);
        setDetails(findCards)
    }, [id, cards])

    return (
        <div>
           <Detail detail={details}></Detail>
        </div>
    );
};

export default CardDetails;