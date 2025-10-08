import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"

const CardDetail = () => {
    const {id} = useParams();
    const cardId = parseInt(id)
    const data = useLoaderData();
    const singleData = data?.find(card => card.id === cardId);
    console.log(singleData);
    const {image, description, downloads, companyName, size, title, reviews, ratingAvg} = singleData

    return (
        <div className='mt-20 p-36 '>
           <div className='flex'>
            <div className='w-60 h-60'>
                 <img src={image} alt={title} />
           </div>
            <div className='ml-40'>
                <div>
                    <h1 className='font-bold text-4xl'>{companyName}</h1>

                 </div>
           <div className='mt-10 flex'>
            <div className=''>
                <img className='' src={download} alt="" />
                <div className=''>
                    <p className='text-2xl font-bold'>Downloads</p>
                    <h1 className='text-2xl font-bold'>{downloads}</h1>
                </div>
           </div>
            <div className='ml-30'>
                <img src={rating} alt="" />
                <p className='text-2xl font-bold'>ratingAvg</p>
                <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
            </div>
            <div className='ml-30'>
                <img src={review} alt="" />
                <p className='text-2xl font-bold'>reviews</p>
                <h1 className='text-2xl font-bold'>{reviews}</h1>
            </div>
           </div>
            </div>
           </div>
                <button className='bg-green-500 text-white text-2xl w-70 h-16 rounded-2xl'>Install Now ({size}) </button>
            
            <div className='mt-16'>
                <h1 className='font-bold text-2xl'>description</h1>
                <p className='mt-5 text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default CardDetail;