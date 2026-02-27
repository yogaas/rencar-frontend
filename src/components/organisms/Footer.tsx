import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                LuxeDrive
              </span>
            </Link>
            <p className="text-sm leading-6">
              Experience the ultimate driving pleasure with our premium selection of luxury vehicles.
              Your journey begins here.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-zinc-400">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-400">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-400">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Corporate Rentals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Long-term Lease
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Chauffeur Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Airport Transfer
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Claim
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 hover:text-white">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-400">
            &copy; {new Date().getFullYear()} LuxeDrive, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
