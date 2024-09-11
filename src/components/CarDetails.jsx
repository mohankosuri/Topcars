import React from 'react';
import { useParams } from 'react-router-dom';  

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

const CarDetails = () => {
  const { id } = useParams(); // Get car ID from URL
  const car = cars.find((car) => car.id === parseInt(id)); // Find the car by ID

  if (!car) {
    return <h2>Car not found!</h2>;
  }

  return (
    <div className='p-[50px]'>
    <div className="p-[100px]">
      <h1 className="text-3xl font-bold mb-10">{car.name}</h1>
      <img src={car.image} alt={car.name} className="w-full h-[400px] object-cover rounded-lg" />
      <p className="mt-4"><strong>Location:</strong> {car.location}</p>
      <p className="mt-2"><strong>Seats:</strong> {car.seats}</p>
      <p className="mt-2"><strong>Fuel:</strong> {car.fuel}</p>
      <p className="mt-2"><strong>Transmission:</strong> {car.transmission}</p>
      <p className="mt-2"><strong>Price:</strong> {car.price}</p>
    </div>
    </div>
  );
};

export default CarDetails;
