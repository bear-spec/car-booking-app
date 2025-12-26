import { useEffect, useState } from "react";
import AddCarForm from "../Components/AddCarForm"; 

function AdminPage() {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cars");
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Car</h2>
        <AddCarForm onSuccess={fetchCars} />  {/* optional: refresh list after adding */}
      </div>

      {/* Existing Cars */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car._id} className="border p-4 rounded shadow">
              <img src={car.img} alt={car.name} className="h-40 w-full object-cover mb-2" />
              <h3 className="text-lg font-bold">{car.name}</h3>
              <p>Type: {car.type}</p>
              <p>Price: ${car.price}</p>
              <p>{car.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

