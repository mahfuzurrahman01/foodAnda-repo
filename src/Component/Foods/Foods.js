import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
    // console.log(food)
    return (
        <div className='bg-slate-300 bg-opacity-50 p-5 rounded-md h-[560px] flex flex-col justify-around'>
            <img src={food.strMealThumb} alt="food" className='rounded-md' />
            <div className='bg-yellow-900 bg-opacity-40 text-white mt-4'>
                <p className='font-bold text-2xl text-gray-800'>Item: {food.strMeal}</p>
                <p className='text-gray-800'>Category: {food.strCategory}</p>
                <p>Instruction: {food.strInstructions.slice(0, 100)}</p>
            </div>
            <button className='bg-rose-800 py-1 px-3 rounded-md text-white font-semibold hover:bg-rose-900'><Link to='/login'>Order Now</Link></button>
        </div>
    );
};

export default Foods;