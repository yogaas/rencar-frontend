import { Car } from '../types';

const mockCars: Car[] = [
  {
    id: '1',
    name: 'S-Class 2024',
    brand: 'Mercedes-Benz',
    type: 'Luxury',
    pricePerDay: 450,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop',
    seats: 4,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    year: 2024,
    horsepower: 429,
    topSpeed: 250,
  },
  {
    id: '2',
    name: '911 Carrera',
    brand: 'Porsche',
    type: 'Sports',
    pricePerDay: 600,
    image: 'https://images.unsplash.com/photo-1503376713356-20f6266b233e?q=80&w=2070&auto=format&fit=crop',
    seats: 2,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    year: 2023,
    horsepower: 379,
    topSpeed: 293,
  },
  {
    id: '3',
    name: 'Range Rover Vogue',
    brand: 'Land Rover',
    type: 'SUV',
    pricePerDay: 350,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    year: 2024,
    horsepower: 346,
    topSpeed: 234,
  },
  {
    id: '4',
    name: 'Model S Plaid',
    brand: 'Tesla',
    type: 'Sedan',
    pricePerDay: 250,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Electric',
    year: 2023,
    horsepower: 1020,
    topSpeed: 322,
  },
  {
    id: '5',
    name: 'M4 Competition',
    brand: 'BMW',
    type: 'Sports',
    pricePerDay: 400,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
    seats: 4,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    year: 2024,
    horsepower: 503,
    topSpeed: 290,
  },
  {
    id: '6',
    name: 'G-Class G63',
    brand: 'Mercedes-Benz',
    type: 'SUV',
    pricePerDay: 550,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2069&auto=format&fit=crop',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    year: 2023,
    horsepower: 577,
    topSpeed: 220,
  },
  {
    id: '7',
    name: 'Taycan Turbo S',
    brand: 'Porsche',
    type: 'Sedan',
    pricePerDay: 480,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070&auto=format&fit=crop',
    seats: 4,
    transmission: 'Automatic',
    fuelType: 'Electric',
    year: 2024,
    horsepower: 750,
    topSpeed: 260,
  },
  {
    id: '8',
    name: 'Urus',
    brand: 'Lamborghini',
    type: 'SUV',
    pricePerDay: 850,
    image: 'https://images.unsplash.com/photo-1663431263243-ef4aa4ea7afc?q=80&w=2070&auto=format&fit=crop',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    year: 2023,
    horsepower: 641,
    topSpeed: 305,
  }
];

export const fetchCars = async (): Promise<Car[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCars);
    }, 800);
  });
};

export const submitBooking = async (bookingData: any): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Booking confirmed successfully!' });
    }, 1500);
  });
};
