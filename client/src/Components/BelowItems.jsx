import { Link } from 'react-router-dom';
import about from '../assets/about-img.png';

function BelowItems() {

    return (
        <>
            <div style={{ backgroundColor: '#222831' }} className="flex flex-col  h-full sm:flex sm:flex-row sm:h-[788px] lg:h-[788px] justify-evenly ">
                <div className="">
                    <img src={about} alt="Nyxara About Section" className="w-full h-auto max-h-[600px] mt-10 mb-10 object-cover object-center" />
                </div>

                <div className="sm:mt-20 ml-5 flex flex-col justify-center w-[450px]">
                    <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className="pb-8 text-white text-5xl">We Are Nyxara</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus iusto nesciunt. Voluptatem eaque deleniti corporis expedita, corrupti, quas facilis adipisci quos laborum beatae harum alias! Asperiores ipsam voluptates ipsum corporis id sequi, earum consequatur error dolor nobis. Assumenda, in.</p>
                    <div className='pl-3 pt-10 pb-10'>
                        <Link to="/book">  <button className='text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10 '>Book Now</button></Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BelowItems;