import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useBookingStore } from '../../store/useBookingStore';
import { submitBooking } from '../../services/api';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { format, differenceInDays } from 'date-fns';

export const BookingModal: React.FC = () => {
  const { selectedCar, isBookingModalOpen, closeBookingModal } = useBookingStore();
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);

  const mutation = useMutation({
    mutationFn: submitBooking,
    onSuccess: () => {
      // Reset form on success
      setPickupDate('');
      setDropoffDate('');
      setPickupLocation('');
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
    },
  });

  useEffect(() => {
    if (pickupDate && dropoffDate && selectedCar) {
      const start = new Date(pickupDate);
      const end = new Date(dropoffDate);
      const diff = differenceInDays(end, start);
      
      if (diff > 0) {
        setDays(diff);
        setTotalPrice(diff * selectedCar.pricePerDay);
      } else {
        setDays(0);
        setTotalPrice(0);
      }
    } else {
      setDays(0);
      setTotalPrice(0);
    }
  }, [pickupDate, dropoffDate, selectedCar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCar || days <= 0) return;

    mutation.mutate({
      carId: selectedCar.id,
      pickupDate,
      dropoffDate,
      pickupLocation,
      customerName,
      customerEmail,
      customerPhone,
      totalPrice,
    });
  };

  return (
    <AnimatePresence>
      {isBookingModalOpen && selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-950/60 p-4 backdrop-blur-sm sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200"
          >
            <div className="flex h-full flex-col md:flex-row">
              {/* Left Side: Car Details */}
              <div className="relative w-full bg-zinc-100 p-8 md:w-2/5">
                <button
                  onClick={closeBookingModal}
                  className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-zinc-500 hover:bg-white hover:text-zinc-900 md:hidden"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="mb-6">
                  <span className="text-sm font-medium text-zinc-500">{selectedCar.brand}</span>
                  <h2 className="font-serif text-3xl font-bold text-zinc-900">{selectedCar.name}</h2>
                </div>
                
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200/50">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between border-b border-zinc-200 pb-4">
                    <span className="text-zinc-500">Rate per day</span>
                    <span className="font-medium text-zinc-900">${selectedCar.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-4">
                    <span className="text-zinc-500">Duration</span>
                    <span className="font-medium text-zinc-900">{days} {days === 1 ? 'day' : 'days'}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-lg font-semibold text-zinc-900">Total</span>
                    <span className="text-2xl font-bold text-zinc-900">${totalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Booking Form */}
              <div className="w-full p-8 md:w-3/5">
                <div className="hidden justify-end md:flex">
                  <button
                    onClick={closeBookingModal}
                    className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {mutation.isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center space-y-4 text-center py-12"
                  >
                    <div className="rounded-full bg-green-100 p-3 text-green-600">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-zinc-900">Booking Confirmed</h3>
                    <p className="text-zinc-500 max-w-sm">
                      Thank you for choosing LuxeDrive. Your reservation for the {selectedCar.name} has been confirmed. We've sent the details to your email.
                    </p>
                    <Button onClick={closeBookingModal} className="mt-8 w-full max-w-xs">
                      Close
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="mb-4 font-serif text-xl font-semibold text-zinc-900">Reservation Details</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-zinc-400" />
                            Pick-up Date
                          </label>
                          <Input
                            type="date"
                            required
                            min={format(new Date(), 'yyyy-MM-dd')}
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-zinc-400" />
                            Drop-off Date
                          </label>
                          <Input
                            type="date"
                            required
                            min={pickupDate || format(new Date(), 'yyyy-MM-dd')}
                            value={dropoffDate}
                            onChange={(e) => setDropoffDate(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-2 space-y-1.5">
                          <label className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-zinc-400" />
                            Pick-up Location
                          </label>
                          <Input
                            type="text"
                            placeholder="Airport, Hotel, or specific address"
                            required
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      <h3 className="mb-4 font-serif text-xl font-semibold text-zinc-900">Personal Information</h3>
                      <div className="space-y-4">
                        <Input
                          label="Full Name"
                          type="text"
                          placeholder="John Doe"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Input
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                          />
                          <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            required
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={days <= 0 || mutation.isPending}
                        isLoading={mutation.isPending}
                      >
                        {mutation.isPending ? 'Processing...' : `Confirm Booking • $${totalPrice}`}
                      </Button>
                      {days <= 0 && pickupDate && dropoffDate && (
                        <p className="mt-2 text-center text-sm text-red-500">
                          Drop-off date must be after pick-up date.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
