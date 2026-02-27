import React from 'react';
import { motion } from 'motion/react';
import { Tag, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../atoms/Button';

const promos = [
  {
    id: 1,
    title: 'Weekend Getaway',
    description: 'Get 20% off on all SUV rentals this weekend. Perfect for family trips.',
    code: 'WEEKEND20',
    validUntil: 'Valid until Sunday',
    icon: Calendar,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    title: 'First Time User',
    description: 'New to LuxeDrive? Enjoy a flat $50 discount on your first booking.',
    code: 'WELCOME50',
    validUntil: 'Valid for 30 days',
    icon: Sparkles,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 3,
    title: 'Long Term Lease',
    description: 'Rent for 7+ days and get 1 day absolutely free on any luxury sedan.',
    code: 'FREE1DAY',
    validUntil: 'Limited time offer',
    icon: Tag,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export const PromoSection: React.FC = () => {
  return (
    <div id="promos" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl font-serif">
              Exclusive Offers & Events
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Take advantage of our current promotions and make your next journey even more memorable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col justify-between rounded-3xl bg-zinc-50 p-8 ring-1 ring-zinc-200 transition-shadow hover:shadow-lg"
            >
              <div>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${promo.color} mb-6`}>
                  <promo.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{promo.title}</h3>
                <p className="text-zinc-600 mb-6">{promo.description}</p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-zinc-200/60">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-zinc-500">{promo.validUntil}</span>
                  <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-900 ring-1 ring-inset ring-zinc-200">
                    {promo.code}
                  </span>
                </div>
                <Button variant="outline" className="w-full justify-between group">
                  Claim Offer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
