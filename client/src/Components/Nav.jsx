import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Slider from './Slider';
function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <div className={` bg-[url('/Head-car.jpg')] bg-cover bg-center w-full transition-all duration-500 ease-in-out ${!isMenuOpen ? "h-[700px]" : "h-[784px]"}  text-blue-50 lg:h-[784px]`}>

                <div className="h-[500px]  rounded-2xl">
                    <nav className=" p-5  justify-between">
                        <div className=" p-3 flex align-middle  justify-between w-full">
                            <a href="./">
                                <h1 className="font-serif font-extrabold text-3xl sm:ml-7  ">Nyxara</h1>
                            </a>

                            <div className=' flex justify-between '>
                                <div className='hidden flex-wrap lg:flex text-lg pl-40 pt-2  gap-11 justify-center w-[600px]'>
                                        <NavLink to="/" className={({ isActive }) => isActive ? "text-amber-400" : ""}>     HOME</NavLink>
                                        <NavLink to="/cars" className={({ isActive }) => isActive ? "text-amber-400" : ""}> CARS </NavLink>
                                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-amber-400" : ""}>ABOUT</NavLink>
                                        <NavLink to="/book" className={({ isActive }) => isActive ? "text-amber-400" : ""}> BOOK NOW</NavLink>
                                </div>
                                <div className='hidden lg:flex w-[400px] gap-3.5  justify-center items-center '>
                                    <FontAwesomeIcon icon={faUser} />
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <Link to="/book">     <button className='hidden text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10 sm:hidden lg:block'>Book Online</button></Link>
                                <button onClick={toggleMenu} className={`text-2xl  transition-transform duration-700 ease-in-out lg:hidden ${isMenuOpen ? "rotate-[360deg]" : "rotate-0"}`}><FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} /></button>

                            </div>
                        </div>

                    </nav>

                    {<div className={`transition-all duration-700 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`} >
                        <div className="flex text-center flex-col gap-5" >
                            <div className="flex text-center flex-col gap-5">
                                <NavLink to="/" className={({ isActive }) => isActive ? "text-amber-400" : ""}>HOME</NavLink>
                                <NavLink to="/cars" className={({ isActive }) => isActive ? "text-amber-400" : ""}>CARS</NavLink>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "text-amber-400" : ""}>ABOUT</NavLink>
                                <NavLink to="/book" className={({ isActive }) => isActive ? "text-amber-400" : ""}>BOOK NOW</NavLink>
                            </div>

                        </div>
                        <div className="text-center flex  gap-6 mt-5 mb-5 justify-center items-center     ">
                            <FontAwesomeIcon icon={faUser} />
                            <FontAwesomeIcon icon={faCartShopping} />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <Link to="/book">    <button className='text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10'>Book Online</button></Link>
                        </div>
                        <Link to="/book">   <button className='hidden text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10 sm:hidden lg:block'>Book Now</button></Link>
                    </div>}
                    <Slider />

                </div>
            </div>
        </header>
    )
}
export default Nav;