import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Foods from '../Foods/Foods';
import Navbar from '../Navbar/Navbar';

const SearchItem = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        const name = document.getElementById('input').value;
        navigate(`/items/${name}`)
    }
    const items = useLoaderData()
    const meals = items.meals;
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gray-400 bg-opacity-40 mt-7 md:w-1/2 md:py-12 py-5 px-7 mx-auto w-5/6'>
                <input type="text" id='input' className='bg-gray-400 py-1 rounded-r-none md:py-2 px-4 w-3/4 rounded-l-md' />
                <button className='bg-rose-900 py-2 rounded-r-md px-4 text-white font-semibold md:mt-0 mt-2' onClick={handleNavigate}>Search</button>
            </div>
             <h1 className='text-2xl text-rose-900 font-semibold mt-1'>Total search result found: {meals.length}</h1>
             <div className='grid lg:grid-cols-3 sm:grid-cols-2 w-5/6 mt-5 mx-auto p-10 rounded-md gap-7'>
                {
                    meals.map(food => <Foods key={food.idMeal} food={food}></Foods>)
                }
            </div>
        </div>
    );
};

export default SearchItem;