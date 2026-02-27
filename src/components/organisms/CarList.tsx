import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCars } from '../../services/api';
import { CarCard } from '../molecules/CarCard';
import { useBookingStore } from '../../store/useBookingStore';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const CarList: React.FC = () => {
  const { data: cars, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });

  const openBookingModal = useBookingStore((state) => state.openBookingModal);

  if (isLoading) {
    return (
      <div className="py-24 sm:py-32 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[400px] animate-pulse rounded-2xl bg-zinc-200/50" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center text-red-500 bg-zinc-50">
        Failed to load cars. Please try again later.
      </div>
    );
  }

  return (
    <div id="fleet" className="bg-zinc-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-200/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Premium Selection</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl font-serif">
              Our Exclusive Fleet
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Select from our exclusive range of luxury vehicles, meticulously maintained for your comfort and safety.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {cars?.map((car) => (
            <motion.div key={car.id} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <CarCard car={car} onBook={openBookingModal} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
