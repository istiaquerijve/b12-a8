import React, { Suspense,  } from 'react';
import Card from '../Card/Card';

const Cards = ({data}) => {
    // const [allCard, setAllCard] = useState([]);

    // const bookPromise = fetch("./card.json").then((res) => res.json())
    return (
        <div className='mt-20'>
            <h1 className='text-4xl text-center'>Trending Apps</h1>
            <p className='text-center text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                       data.map((singleCard) => <Card key={singleCard.id} singleCard={singleCard}></Card>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Cards;