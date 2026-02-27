export interface Car {
  id: string;
  name: string;
  brand: string;
  type: 'Sedan' | 'SUV' | 'Sports' | 'Luxury';
  pricePerDay: number;
  image: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  year: number;
  horsepower: number;
  topSpeed: number;
}

export interface BookingDetails {
  carId: string;
  pickupDate: string; // ISO string
  dropoffDate: string; // ISO string
  pickupLocation: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalPrice: number;
}
