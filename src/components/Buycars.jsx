import React, { useState, useEffect } from 'react';

const Buycars = () => {
  const [cars, setCars] = useState([]);
  const [featuredCars, setFeaturedCars] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: '',
    brand: '',
    model: '',
    year: '',
    mileage: '',
  });

  useEffect(() => {
    // Fetching all cars
    fetchCars();
    // Fetching featured cars
    fetchFeaturedCars();
  }, []);

  const fetchCars = async () => {
    // Mock API call
    const allCars = [
      { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, price: 15000, mileage: 12000 },
      { id: 2, brand: 'Honda', model: 'Civic', year: 2019, price: 18000, mileage: 15000 },
      { id: 3, brand: 'Ford', model: 'Mustang', year: 2021, price: 30000, mileage: 5000 },
    ];
    setCars(allCars);
  };

  const fetchFeaturedCars = async () => {
    // Mock API call for featured cars
    const featured = [
      { id: 4, brand: 'BMW', model: 'X5', year: 2021, price: 60000, mileage: 3000 },
      { id: 5, brand: 'Mercedes', model: 'C-Class', year: 2022, price: 50000, mileage: 1000 },
    ];
    setFeaturedCars(featured);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCars = cars.filter((car) => {
    const { priceRange, brand, model, year, mileage } = filters;
    return (
      (priceRange ? car.price <= priceRange : true) &&
      (brand ? car.brand.toLowerCase().includes(brand.toLowerCase()) : true) &&
      (model ? car.model.toLowerCase().includes(model.toLowerCase()) : true) &&
      (year ? car.year.toString() === year : true) &&
      (mileage ? car.mileage <= mileage : true)
    );
  });

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar and Filters */}
      <div className="bg-white shadow-md p-4 rounded-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Search Cars</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
            placeholder="Brand"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            name="model"
            value={filters.model}
            onChange={handleFilterChange}
            placeholder="Model"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="number"
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
            placeholder="Year"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="number"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            placeholder="Max Price"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="number"
            name="mileage"
            value={filters.mileage}
            onChange={handleFilterChange}
            placeholder="Max Mileage"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white shadow-md p-4 rounded-md">
              <h3 className="text-xl font-semibold">{car.brand} {car.model}</h3>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-600">Price: ${car.price}</p>
              <p className="text-gray-600">Mileage: {car.mileage} miles</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filtered Cars Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Available Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white shadow-md p-4 rounded-md">
              <h3 className="text-xl font-semibold">{car.brand} {car.model}</h3>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-600">Price: ${car.price}</p>
              <p className="text-gray-600">Mileage: {car.mileage} miles</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buycars;
