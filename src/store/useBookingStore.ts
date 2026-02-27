import { create } from 'zustand';
import { Car } from '../types';

interface BookingState {
  selectedCar: Car | null;
  isBookingModalOpen: boolean;
  setSelectedCar: (car: Car | null) => void;
  openBookingModal: (car: Car) => void;
  closeBookingModal: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedCar: null,
  isBookingModalOpen: false,
  setSelectedCar: (car) => set({ selectedCar: car }),
  openBookingModal: (car) => set({ selectedCar: car, isBookingModalOpen: true }),
  closeBookingModal: () => set({ selectedCar: null, isBookingModalOpen: false }),
}));
