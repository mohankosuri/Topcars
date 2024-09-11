import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for routing

const Rentedcars = () => {
  const { id } = useParams(); // Get car ID from the route
  const [car, setCar] = useState(null);
  const [inquiryMessage, setInquiryMessage] = useState('');

  useEffect(() => {
    // Fetch car details based on ID (replace this with an actual API call)
    fetchCarDetails(id);
  }, [id]);

  const fetchCarDetails = async (carId) => {
    // Mock car data for the example (replace with API call)
    const carData = {
      id: carId,
      brand: 'BMW',
      model: 'X5',
      year: 2021,
      price: 60000,
      mileage: 3000,
      description: 'A luxurious SUV with high performance and premium features.',
      images: ['https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png', 'https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fwww.hondacarindia.com%2Fweb-data%2Fmodels%2FcarModelImage%2Felevate%2Fhonda-new-elevateV2_new.png&w=3840&q=75'],
      seller: {
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
      },
    };
    setCar(carData);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Logic to send inquiry message (you can implement API call here)
    alert(`Inquiry sent: ${inquiryMessage}`);
    setInquiryMessage(''); // Clear the message input
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Car Details Section */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <h1 className="text-3xl font-bold mb-4">{car.brand} {car.model} ({car.year})</h1>
        
        {/* Car Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {car.images.map((image, index) => (
            <img key={index} src={image} alt={`${car.brand} ${car.model}`} className="w-full h-64 object-cover rounded-md" />
          ))}
        </div>

        {/* Car Information */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Price: ${car.price}</p>
          <p className="text-lg font-semibold">Mileage: {car.mileage} miles</p>
          <p className="mt-4">{car.description}</p>
        </div>

        {/* Seller Contact Information */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-2">Seller Information</h2>
          <p className="text-md"><strong>Name:</strong> {car.seller.name}</p>
          <p className="text-md"><strong>Phone:</strong> {car.seller.phone}</p>
          <p className="text-md"><strong>Email:</strong> {car.seller.email}</p>
        </div>

        {/* Inquiry Form */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Contact Seller</h2>
          <form onSubmit={handleInquirySubmit}>
            <textarea
              value={inquiryMessage}
              onChange={(e) => setInquiryMessage(e.target.value)}
              placeholder="Enter your message..."
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rentedcars;
