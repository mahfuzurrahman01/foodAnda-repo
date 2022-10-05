import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon,UserCircleIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className=' bg-rose-900 md:py-5 pb-6 border-b-2 border-transparent'>
            <div onClick={() => setOpen(!open)} className='h-7 w-7 text-white md:hidden'>
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
            {/* <span>{open ? 'open' : 'close'}</span> */}
            <ul className= {`flex justify-center items-center font-semibold font-serif text-white gap-10 absolute md:static bg-rose-900 w-full duration-500 ease-in ${open ? 'left-0' : 'left-[-800px]' }`}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/items'>Items</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
            <div className='absolute right-2 top-2'>
                <button className='bg-white text-black font-semibold py-1 md:py-2 px-2 rounded-md flex justify-center items-center'><UserCircleIcon className='text-rose-900 h-7 w-7 md:block hidden'></UserCircleIcon><Link to='/login'>Log In</Link></button>
            </div>
        </div>
    );
};

export default Navbar;