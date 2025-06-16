// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';

// export default function Navbar() {
//   const { cart } = useContext(CartContext);
//   const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

//   return (
//     <header className="bg-white shadow-md">
//       <nav className="container mx-auto p-4 flex justify-between items-center">
//         <Link to="/" className="font-bold text-xl">
//           Brand
//         </Link>
//         <div className="space-x-4">
//           <Link to="/">Home</Link>
//           <Link to="/category/headphones">Headphones</Link>
//           <Link to="/category/speakers">Speakers</Link>
//           <Link to="/category/earphones">Earphones</Link>
//           <Link to="/cart" className="relative">
//             Cart
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wide lowercase">
              audiophile
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-white hover:text-[#D87D4A] px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="category/headphones"
                className="text-white hover:text-[#D87D4A] px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Headphones
              </Link>
              <Link
                to="category/speakers"
                className="text-white hover:text-[#D87D4A] px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Speakers
              </Link>
              <Link
                to="category/earphones"
                className="text-white hover:text-[#D87D4A] px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Earphones
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/cart"
              className="relative text-white hover:text-[#D87D4A] transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
