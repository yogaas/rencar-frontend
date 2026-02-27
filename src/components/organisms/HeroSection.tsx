import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../atoms/Button';
import { ArrowRight, Star, Shield, Clock, Car } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-zinc-950 pt-20 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Car"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-300 ring-1 ring-inset ring-zinc-500/20 backdrop-blur-sm mb-8">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>#1 Premium Car Rental Service</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl font-serif leading-tight">
                Experience the <br/> Art of <span className="text-zinc-400 italic">Driving</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300 max-w-xl">
                Discover our curated collection of luxury vehicles. Whether for business or pleasure, 
                elevate your journey with uncompromising comfort and style.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-200 rounded-full px-8 gap-2">
                  Explore Fleet
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a href="#about" className="text-sm font-semibold leading-6 text-white hover:text-zinc-300 transition-colors flex items-center gap-2 group">
                  Learn more 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-zinc-800/40 to-zinc-800/0 blur-2xl" />
            <div className="relative rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Fully Insured</h3>
                  <p className="text-sm text-zinc-400">Comprehensive coverage for peace of mind.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">24/7 Support</h3>
                  <p className="text-sm text-zinc-400">Round-the-clock roadside assistance.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-white">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Premium Fleet</h3>
                  <p className="text-sm text-zinc-400">Latest models from top luxury brands.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-white">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Door Delivery</h3>
                  <p className="text-sm text-zinc-400">We deliver the car right to your doorstep.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
