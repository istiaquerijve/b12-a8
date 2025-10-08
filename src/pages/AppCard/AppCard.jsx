import React from 'react';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import { Link } from 'react-router';

const AppCard = ({app}) => {
    console.log(app);
     const {companyName, image, downloads, ratingAvg, title, id} = app;
    
    return (
        <Link to={`/appDetail/${id}`}>
            <div>
             <div>
                        <div className="card bg-base-100 w-72 shadow-2xl mt-5">
              <figure className="px-10 pt-10">
                <div className='max-w-60'>
                    <img
                  src={image}
                  alt={title}
                  className="rounded-xl max-w-60" />
                </div>
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
        </div>
        </Link>
    );
};

export default AppCard;