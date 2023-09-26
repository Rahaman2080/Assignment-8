import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('/card.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])

    return (
        <div className="my-12 mx-auto grid justify-center items-center">
            <h1 className="text-2xl font-semibold text-center">Total Cards: {cards.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;