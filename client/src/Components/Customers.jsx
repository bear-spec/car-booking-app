import { useState, useEffect } from "react";
import person1 from "../assets/person-1.jpg";
import person2 from "../assets/person-2.jpg";
import person3 from "../assets/person-3.jpg";

function Customers() {
    
const customers = [
  {
    name: "Mike Hamael",
    feedback: "The buying experience was smooth and transparent. The staff explained every detail clearly and helped me choose the perfect car. I felt confident throughout the process, and the follow-up support was excellent.",
    details: "Sedan Owner",
    image: person1,
  },
  {
    name: "Sara Willson",
    feedback: "Excellent service and quick delivery. The test drive helped me make a confident decision, and the process was hassle-free. The team was friendly, professional, and always ready to answer my questions.",
    details: "SUV Buyer",
    image: person2,
  },
  {
    name: "John Deo",
    feedback: "Great quality vehicles and professional support. After-sales service has been reliable and prompt whenever needed. I highly recommend them to anyone looking for a smooth car buying experience.",
    details: "Electric Car Owner",
    image: person3,
  },
];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const customer = [...customers, customers[0]];
    const [isLg, setIsLg] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === customers.length) {
            const timeout = setTimeout(() => {
                setTransition(false);
                setCurrentIndex(0)
            }, 700);

            setTimeout(() => {
                setTransition(true);
            }, 750)
        }
    }, [currentIndex]);

    useEffect(() => {
        const checkScreen = () => {
            setIsLg(window.innerWidth >= 1024);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);


    function slideLeft() {
        if (currentIndex === 0) {
            setTransition(false);
            setCurrentIndex(customers.length);

            setTimeout(() => {
                setTransition(true);
                setCurrentIndex(customers.length - 1);
            }, 20);
        } else {
            setTransition(true);
            setCurrentIndex((prev) => prev - 1);
        }
    }

    function slideRight() {
        setTransition(true);
        setCurrentIndex((prev) => prev + 1);
    }

    return (
        <>
            <div className=" ">
                <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className="text-4xl flex justify-center mt-10">What Says Our Customers</h1>

                <div className="items-center  mb-10 flex flex-col   pt-[50px]   lg:flex-row overflow-hidden">
                    <div className={`flex ${transition && "transition-transform duration-700 ease-in-out"}`}
                        style={{
                            transform: `translateX(-${currentIndex * (isLg ? 50 : 100)}%)`
                        }}
                    >
                        {customer.map((customer, index) =>
                            <div key={index} className="flex-shrink-0 min-w-full lg:min-w-[50%]  flex flex-col  mb-[40px] items-center">
                                <div style={{ backgroundColor: '#222831' }} className="p-[22px] rounded-[5px] pt-[10px] w-full max-w-[470px] h-[181px] bg-gray-800  flex flex-col">
                                    <p className="text-white">{customer.feedback}</p>
                                    <h2 className="pt-5 text-2xl text-white">{customer.name}</h2>
                                    <p className="text-white">{customer.details}</p>
                                </div>
                                <div className="flex justify-start w-full max-w-[470px]">
                                    <div
                                        style={{ backgroundImage: `url(${customer.image})` }}
                                        className="bg-cover bg-center border-[5px] border-amber-400 mt-[30px] rounded-full w-[115px] h-[115px]"
                                    ></div>

                                </div>
                            </div>)}


                    </div>
                </div>
                <div className="flex gap-5 justify-center mb-10">
                    <div onClick={slideLeft} className="bg-amber-400 mt-5 rounded-full w-[50px] h-[50px] hover:cursor-pointer ">
                        <p className="relative top-3 left-3 text-white">〈</p>
                    </div>
                    <div onClick={slideRight} className="bg-amber-400 mt-5 rounded-full w-[50px] h-[50px] hover:cursor-pointer ">
                        <p className=" relative top-3 left-6 text-white">〉</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Customers;