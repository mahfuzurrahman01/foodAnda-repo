import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Foods from '../Foods/Foods';

const Items = () => {
    const items = useLoaderData();
    const foods = items.meals;

    const [value, setValue] = useState('fish')
    // function getTheValue() {
    //     // const name = document.getElementById('input').value;
    //     setValue(name);
    // }
    // if (value === undefined) {
    //     setValue('fish')
    // }
    // console.log(value)
    // useEffect(()=>{
    //     const names = document.getElementById('input').value;
    //     if(!names){
    //         setValue('beef')
    //     }
    //     setValue(names);
    // },[])
    const navigate = useNavigate()
    const handleNavigate = () =>{
        const name = document.getElementById('input').value;
        navigate(`/items/${name}`)
    }
    
    return (
        <div>
            <div className='bg-gray-400 bg-opacity-40 mt-7 md:w-1/2 md:py-12 py-5 px-7 mx-auto w-5/6'>
                <input type="text" id='input' className='bg-gray-400 py-1 rounded-r-none md:py-2 px-4 w-3/4 rounded-l-md' />
                <button className='bg-rose-900 py-2 rounded-r-md px-4 text-white font-semibold md:mt-0 mt-2' onClick={handleNavigate}>Search</button>
            </div>
            <div className='w-full md:grid lg:grid lg:grid-cols-3 sm:grid-cols-2 md:w-5/6 mt-5 mx-auto p-10 rounded-md gap-7'>
                {
                    foods.map(food => <Foods key={food.idMeal} food={food}></Foods>)
                }
            </div>
        </div>
    );
};

export default Items;