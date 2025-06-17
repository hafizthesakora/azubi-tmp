import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

// // Dynamically import all assets
// const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', {
//   eager: true,
//   import: 'default',
// });

// function resolveImage(path) {
//   if (typeof path !== 'string') return null;
//   const normalized = path.replace('./assets', '../assets');
//   return images[normalized];
// }

export default function Cart() {
  const { cart, updateQty, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  const productsTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 50;
  const vat = Math.round(productsTotal * 0.2);
  const total = productsTotal + shipping + vat;

  if (!cart.length)
    return (
      <div className="min-h-screen bg-[#FAFAFA] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black mb-8">
              Your cart is empty
            </h1>
            <Link
              to="/"
              className="inline-block bg-[#D87D4A] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Go Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-black text-sm mb-8 transition-colors duration-200"
        >
          Go Back
        </button>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-black uppercase tracking-wide">
              Cart ({cart.length})
            </h1>
            <button
              onClick={() => cart.forEach((item) => removeItem(item.id))}
              className="text-black/50 hover:text-black text-sm underline transition-colors duration-200"
            >
              Remove all
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-6 mb-8">
            {cart.map((item) => {
              // const imageSrc = resolveImage(item.image);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#F1F1F1] rounded-lg flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image.desktop}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-sm uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-black/50 text-sm font-bold">
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-[#F1F1F1]">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                        className="px-3 py-2 text-black/50 hover:text-[#D87D4A] font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-bold text-sm text-black min-w-[2rem] text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-3 py-2 text-black/50 hover:text-[#D87D4A] font-bold text-sm transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-black/50 hover:text-red-500 text-sm underline transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="bg-[#F1F1F1] p-6 rounded-lg">
            <h2 className="font-bold text-lg text-black uppercase tracking-wide mb-4">
              Summary
            </h2>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-black/50 uppercase tracking-wide">
                  Total
                </span>
                <span className="font-bold text-black">
                  $ {productsTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-black/50 uppercase tracking-wide">
                  Shipping
                </span>
                <span className="font-bold text-black">$ {shipping}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-black/50 uppercase tracking-wide">
                  VAT (Included)
                </span>
                <span className="font-bold text-black">$ {vat}</span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-bold text-black mb-6 pt-4 border-t border-gray-200">
              <span className="uppercase tracking-wide">Grand Total</span>
              <span className="text-[#D87D4A]">$ {total.toLocaleString()}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-[#D87D4A] text-white py-4 font-bold text-sm uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
