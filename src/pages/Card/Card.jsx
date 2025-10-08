import React from 'react';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"

const Card = ({singleCard}) => {
    console.log(singleCard);
    const {companyName, image, downloads, ratingAvg, title} = singleCard
    
    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-2xl mt-5">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt={title}
      className="rounded-xl max-w-60" />
  </figure>
  <h1 className='text-2xl text-center'>{companyName}</h1>
  <div className="card-body ">
    
    <div className='flex justify-between'> 
        <div className='flex'>
            <img className='w-5 h-5' src={download} alt="" />
            <p className=''>{downloads}</p>
       </div>
       <div className='flex'>
             <img className='w-5 h-5' src={rating} alt="" />
            <p className=''>{ratingAvg}</p>
        </div>
    </div>
      
    
  </div>
  </div>
        </div>
    );
};

export default Card;