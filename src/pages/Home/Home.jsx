import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <Banner></Banner>
            <Cards data={data}></Cards>
        </div>
    );
};

export default Home;