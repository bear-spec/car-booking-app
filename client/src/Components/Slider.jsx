import Button from './Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Slider() {



    const slideData = [
        {
            title: "Luxury Redefined",
            description: "Comfort, safety, and style in every detail."
        },
        {
            title: "Drive the Future",
            description: "Advanced design and smart performance for modern roads."
        },
        {
            title: "Pure Performance",
            description: "Precision engineering built for power and control."
        },




    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [transition, setTransition] = useState(false);
    const slides = [...slideData, slideData[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true);
            setCurrentSlide((prevSlide) => (prevSlide + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentSlide === slideData.length) {
            const timeout = setTimeout(() => {
                setTransition(false);
                setCurrentSlide(0)
            }, 700);

            setTimeout(() => {
                setTransition(true);
            }, 750)
        }
    }, [currentSlide]);

    return (
        <>
            <div className="overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <div className={`flex ${transition && "transition-transform duration-700 ease-in-out"} `} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                    {slides.map((slide, index) =>
                        <div key={index} className="ml-4 mt-[100px] flex flex-shrink-0 flex-col min-w-full sm:px-10 sm:mt-[150px]">
                            <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className=" pb-5 text-6xl">{slide.title}</h1>
                            <p className="font-sans max-w-[500px] text-[17px]  pb-5">{slide.description}</p>
                            <div className='pl-1'>
                                <div className='pl-3'>
                                    <Link to="/book">
                                        <button className='text-black bg-amber-400 rounded-3xl  border-none  w-40 h-10'>Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default Slider;