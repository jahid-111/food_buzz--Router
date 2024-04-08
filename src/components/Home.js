

import React from 'react';
// import { useLoaderData } from "react-router-dom"

import { useLoaderData } from "react-router-dom";
import FoodCard from './FoodCard';
const Home = () => {
    const meals =  useLoaderData().categories;

    // console.log(getData)
    return (
        <div>
            <h3 className=' text-2xl font-semibold  underline'>Total Food {meals.length}</h3>
            <div className=' sm:grid grid-cols-3 justify-center items-center '>
                {
                   meals.map(meal => <FoodCard
                        key={meal.idCategory}
                        meal={ meal }
                   ></FoodCard>)
                }
            </div>

        </div>

    );
};

export default Home;