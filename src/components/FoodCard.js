





import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ( {meal} ) => {

    // console.log(meal)

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription,} = meal;
    return (
        <div className=' bg-slate-100 rounded-md m-3 h-96 border-2'>
            <img className=' w-full h-60 m-auto' src={strCategoryThumb} alt="" />
            <h4>Catagory {strCategory} </h4>
            {/* <p> Recipe {strCategoryDescription}</p> */}

            <Link to={`cardrecipe/${idCategory}`}> Recipe </Link>
        </div>
    );
};

export default FoodCard;