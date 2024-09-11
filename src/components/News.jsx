import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const cars = [
  {
    id: 1,
    name: 'Porsche Cayenne 2020',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg',
    rating: '4.8',
    reviews: '2,436',
    location: 'Hoan Kiem district, Ha Noi city',
    seats: '4 seats',
    fuel: 'Gas',
    transmission: 'Auto',
    price: '$400 /day',
  },
  {
    id: 2,
    name: 'Maserati Levante 2021',
    image: 'https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Creta-180120241405.jpg&w=872&h=578&q=75&c=1',
    rating: '4.8',
    reviews: '2,436',
    location: 'Hoan Kiem district, Ha Noi city',
    seats: '4 seats',
    fuel: 'Gas',
    transmission: 'Auto',
    price: '$500 /day',
  },
  {
    id: 3,
    name: 'Bentley Flying Spur 2019',
    image: 'https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6',
    rating: '4.8',
    reviews: '2,436',
    location: 'Hoan Kiem district, Ha Noi city',
    seats: '4 seats',
    fuel: 'Gas',
    transmission: 'Auto',
    price: '$700 /day',
  },
];

const News = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">ALL SERVICES</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">RENT CAR</h2>
        <a href="#" className="text-gray-600 flex items-center">
          See all <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">{car.name}</h3>
            <div className="flex items-center mt-2">
              <i className="fas fa-star text-yellow-500"></i>
              <span className="ml-2 text-gray-600">{car.rating} ({car.reviews} Reviews)</span>
            </div>
            <div className="flex items-center mt-2">
              <i className="fas fa-map-marker-alt text-gray-600"></i>
              <span className="ml-2 text-gray-600">{car.location}</span>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center">
                <i className="fas fa-users text-gray-600"></i>
                <span className="ml-2 text-gray-600">{car.seats}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-gas-pump text-gray-600"></i>
                <span className="ml-2 text-gray-600">{car.fuel}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-cogs text-gray-600"></i>
                <span className="ml-2 text-gray-600">{car.transmission}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">{car.price}</span>
              {/* Link to car detail page */}
              <Link to={`/car/${car.id}`}>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">See more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
