import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Car, Info, Phone, LogIn, UserPlus } from 'lucide-react';
import { Button } from '../atoms/Button';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white transition-transform group-hover:scale-105">
              <Car className="h-6 w-6" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
              LuxeDrive
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link to="/" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <Home className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            <span>Home</span>
          </Link>
          <a href="#fleet" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <Car className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            <span>Our Fleet</span>
          </a>
          <a href="#promos" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>Promos</span>
          </a>
          <a href="#about" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <Info className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            <span>About</span>
          </a>
          <a href="#contact" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <Phone className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            <span>Contact</span>
          </a>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="ghost" className="gap-2">
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
          <Button variant="primary" className="gap-2 rounded-full px-6">
            <UserPlus className="h-4 w-4" />
            Register
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-zinc-200 bg-white"
        >
          <div className="space-y-1 px-4 pb-6 pt-4">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50"
            >
              <Home className="h-5 w-5 text-zinc-400" />
              Home
            </Link>
            <a
              href="#fleet"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <Car className="h-5 w-5 text-zinc-400" />
              Our Fleet
            </a>
            <a
              href="#promos"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Promos & Events
            </a>
            <a
              href="#about"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <Info className="h-5 w-5 text-zinc-400" />
              About
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              <Phone className="h-5 w-5 text-zinc-400" />
              Contact
            </a>
          </div>
          <div className="border-t border-zinc-100 pb-6 pt-6">
            <div className="flex flex-col px-5 gap-3">
              <Button variant="outline" className="w-full justify-center gap-2 h-12 rounded-xl">
                <LogIn className="h-5 w-5" />
                Sign In
              </Button>
              <Button variant="primary" className="w-full justify-center gap-2 h-12 rounded-xl">
                <UserPlus className="h-5 w-5" />
                Register
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
