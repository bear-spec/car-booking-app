import { useState } from "react";
import { Link } from "react-router-dom";
import suv3 from "../assets/suv-3.png";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        carType: "",
        date: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Booking submitted!");
    };

    return (
        <div className="mt-[80px] mb-[80px] flex flex-col justify-evenly gap-10 pt-[80px] sm:flex-row">
            <form
                onSubmit={handleSubmit}
                className="ml-20 h-[550px] flex flex-col gap-[25px]"
            >
                <h1
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                    className="text-4xl font-medium flex items-start"
                >
                    Reserve Your Dream Ride
                </h1>

                <input
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-[5px] border border-b-gray-500 h-[50px] w-[550px] rounded-[5px]"
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-[5px] border border-b-gray-600 h-[50px] w-[550px] rounded-[5px]"
                    required
                />

                <input
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-[5px] border border-b-gray-600 h-[50px] w-[550px] rounded-[5px]"
                    required
                />

                <select
                    name="carType"
                    value={formData.carType}
                    onChange={handleChange}
                    className="p-[5px] border border-b-gray-600 h-[50px] w-[550px] rounded-[5px]"
                    required
                >
                    <option value="">Select Car Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Electric">Electric</option>
                    <option value="Pickup">Pickup Trucks</option>
                </select>

                <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="p-[5px] border border-b-gray-600 h-[50px] w-[550px] rounded-[5px]"
                    required
                />

                <button
                    type="submit"
                    className="text-black bg-amber-400 rounded-3xl w-40 h-10"
                >
                    Book Now
                </button>
            </form>

            <div
                className="hidden sm:flex w-full h-[355px] mt-[60px] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${suv3})` }}
            ></div>
        </div>
    );
}

export default Form;
