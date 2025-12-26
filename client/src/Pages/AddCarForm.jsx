function AddCarForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: "", type: "", price: "", desc: "", img: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert("Car added successfully!");
      setFormData({ name: "", type: "", price: "", desc: "", img: "" });

      if (onSuccess) onSuccess();  
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input name="name" placeholder="Car Name" value={formData.name} onChange={handleChange} />
      <input name="type" placeholder="Car Type" value={formData.type} onChange={handleChange} />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input name="desc" placeholder="Description" value={formData.desc} onChange={handleChange} />
      <input name="img" placeholder="Image URL" value={formData.img} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Car</button>
    </form>
  );
}
export default AddCarForm;