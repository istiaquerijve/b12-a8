import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

const Apps = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-20'>Our All Applications</h1>
            <p className='text-center text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-15'>
                    {
                        data.map((app) => <AppCard key={app.id} app={app} ></AppCard>)
                    }
                </div>
            </Suspense>

        </div>
    );
};

export default Apps;