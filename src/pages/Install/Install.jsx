import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStorCard } from '../utility/addToDB';
import Card from '../Card/Card';

const Install = () => {
    const [installed, setInstalled] = useState([])
    const data = useLoaderData()
    console.log(data);

    useEffect(() => {
        const storCardData = getStorCard();
       const ConvertStorCardData = storCardData.map(id => parseInt(id))
        const install = data.filter(card => ConvertStorCardData.includes(card.id))
        setInstalled(install);
        
    }, [])
    
    return (
        <div>
            <h1 className='mt-20 mb-20 ml-20 text-3xl font-bold'>Install {installed.length}</h1>
            <div>
                {
                    installed.map(c => <Card key={c.id} singleCard ={c}></Card> )
                }
            </div>
        </div>
    );
};

export default Install;