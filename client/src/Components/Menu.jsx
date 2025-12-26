import { useState, useEffect } from 'react'
import MenuItems from './MenuItems'
import BelowItems from './BelowItems'

function Menu() {
  const [menuData, setMenuData] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => setMenuData(data))
      .catch(err => console.error(err))
  }, [])

  const filteredMenu =
    activeCategory === 'All'
      ? menuData
      : menuData.filter(item => item.type === activeCategory)

  return (
    <>
      <h1
        style={{ fontFamily: "'Dancing Script', cursive" }}
        className="flex justify-center text-5xl"
      >
        Featured Cars
      </h1>

      <ul className="mt-10 flex justify-center gap-12 text-[18px] font-sans">
        {['All', 'Sedan', 'Suv', 'Electric', 'Pickups'].map(type => (
          <li
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`cursor-pointer w-[80px] h-8 pt-1 rounded-2xl flex justify-center items-center transition-all duration-500
              ${activeCategory === type ? 'bg-[#222831] text-blue-50' : 'text-black'}`}
          >
            {type}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-8 justify-center">
        {filteredMenu.map(item => (
          <div key={item._id}>
            <MenuItems
              name={item.name}
              desc={item.desc || item.description}
              price={`₹${item.price || item.pricePerDay}`}
              img={item.img ? item.img.replace('/images/', 'images/') : `images/${item.image}`}
            />
          </div>
        ))}
      </div>

      <div className="pt-10 pb-24 w-full flex justify-center">
        <button className="text-neutral-800 bg-amber-300 rounded-3xl w-[150px] h-12 mb-10">
          View More
        </button>
      </div>
    </>
  )
}

export default Menu
