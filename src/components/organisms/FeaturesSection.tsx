import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Map, Clock, Award } from 'lucide-react';

const features = [
  {
    name: 'Premium Quality',
    description: 'Every vehicle in our fleet is meticulously maintained to ensure the highest standards of safety and comfort.',
    icon: Award,
  },
  {
    name: 'Anywhere Delivery',
    description: 'We deliver your chosen vehicle directly to your hotel, airport, or any specified location.',
    icon: Map,
  },
  {
    name: '24/7 Support',
    description: 'Our dedicated concierge team is available around the clock to assist you with any requests.',
    icon: Clock,
  },
  {
    name: 'Secure Booking',
    description: 'Your personal information and payments are protected with enterprise-grade security.',
    icon: ShieldCheck,
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <div id="about" className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-zinc-400 uppercase tracking-widest">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              The Standard of Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We don't just rent cars; we provide an unforgettable driving experience tailored to your highest expectations.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 ring-1 ring-white/10">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
