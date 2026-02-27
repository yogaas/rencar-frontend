import React from 'react';
import { Car } from '../../types';
import { Button } from '../atoms/Button';
import { Users, Fuel, Settings, ArrowRight, CheckCircle2, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

interface CarCardProps {
  car: Car;
  onBook: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onBook }) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-lg hover:ring-zinc-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-900 backdrop-blur-md shadow-sm">
          {car.type}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-zinc-900/80 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
          Available
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="mb-1 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">{car.brand} • {car.year}</div>
            <h3 className="text-lg font-bold text-zinc-900 font-serif leading-tight">{car.name}</h3>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-zinc-900">${car.pricePerDay}</span>
            <span className="text-[10px] font-medium text-zinc-500 block uppercase">/ day</span>
          </div>
        </div>
        
        <div className="mb-4 grid grid-cols-2 gap-2 text-zinc-600">
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50 p-2 text-[11px] transition-colors group-hover:bg-zinc-100">
            <Users className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-medium">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50 p-2 text-[11px] transition-colors group-hover:bg-zinc-100">
            <Settings className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-medium">{car.transmission === 'Automatic' ? 'Auto' : 'Manual'}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50 p-2 text-[11px] transition-colors group-hover:bg-zinc-100">
            <Gauge className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-medium">{car.horsepower} HP</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-zinc-50 p-2 text-[11px] transition-colors group-hover:bg-zinc-100">
            <Fuel className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-medium">{car.fuelType}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-2">
          <Button onClick={() => onBook(car)} variant="primary" className="w-full rounded-xl h-10 text-sm gap-2 group/btn">
            Book Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
