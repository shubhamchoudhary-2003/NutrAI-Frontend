import React from 'react';
import Link from 'next/link';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">
              NutrlAI Searcher
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#" className="px-3 py-2 text-sm font-medium hover:text-gray-300">
                HOME
              </Link>
              <Link href="#" className="px-3 py-2 text-sm font-medium hover:text-gray-300">
                ABOUT
              </Link>
              <Link href="#" className="px-3 py-2 text-sm font-medium hover:text-gray-300">
                PROJECTS
              </Link>
              <Link href="#" className="px-3 py-2 text-sm font-medium hover:text-gray-300">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
