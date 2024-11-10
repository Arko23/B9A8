import { useEffect, useState } from "react";
import Card from "./Card";


const Books = () => {

    const [cards,setCards]=useState([]);

    useEffect(()=>{
           fetch('info.json')
           .then(res=>res.json())
           .then(data=>setCards(data));
    },[])

    return (
        <div>
           <h2 className="text-5xl font-bold text-center mt-16"> BOOKS</h2>

           <div className="grid grid-cols-3 gap-4 text-center mt-14 ml-20">
            {
                cards.map(card=> <Card key={card.bookId} card={card}></Card>)
            }
           </div>
        </div>
       
    );
};

export default Books;