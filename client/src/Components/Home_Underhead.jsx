import React, { useState, useEffect } from 'react';
import { faUser, faCartShopping, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Home_Underhead() {
    return (
        <>
        <div className=' mt-20 mb-20 ml-5 mr-5 flex justify-around flex-row flex-wrap'>
            <div style={{ backgroundColor: '#222831' }} className=' max-xl:mb-10 text-blue-50 flex   rounded-[4px]  w-[510px] h-[200px]'>
                <div className="bg-[url('/underhead-car1.jpg')] bg-cover bg-center flex mt-5 ml-4  bg-amber-500 w-[165px] h-[165px] rounded-full"></div>
                <div className='flex flex-col p-5'>
                    <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className='p-3 text-2xl'>Premium Offers</h1>
                    <p style={{ fontFamily: "'Dancing Script', cursive" }} className='p-3 text-4xl'>15% Off</p>
                    <div className=''>
                     <Link to="/book">   <button className='text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10'>Book Now <FontAwesomeIcon icon={faCartShopping} />
                        </button></Link>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222831' }} className='flex text-blue-50  rounded-[4px]  w-[510px] h-[200px]'>
                <div className="bg-[url('/underhead-car2.jpg')] bg-cover bg-center flex mt-5 ml-4 bg-amber-500 w-[165px] h-[165px] rounded-full"></div>
                <div className='flex flex-col p-5'>
                    <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className='p-3 text-2xl'>Exclusive Car Deals</h1>
                    <p style={{ fontFamily: "'Dancing Script', cursive" }} className='p-3 text-4xl'>20% Off</p>
                    <div className=''>
                     <Link to="/book">   <button className='text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10'>Book Now <FontAwesomeIcon icon={faCartShopping} />
                        </button></Link> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home_Underhead;