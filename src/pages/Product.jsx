import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data.json';
import { CartContext } from '../context/CartContext';

// Dynamically import all assets
const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

function resolveImage(path) {
  if (!path) return null;
  const normalized = path.replace('./assets', '../assets');
  return images[normalized];
}

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const imageSrc = resolveImage(product.image?.desktop);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-contain p-8"
              />
            ) : (
              <div className="w-full h-96 lg:h-[500px] bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Image not found</p>
                </div>
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* New Product Badge */}
            {product.new && (
              <p className="text-orange-400 text-sm font-medium tracking-[0.5em] uppercase">
                New Product
              </p>
            )}

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              {product.description}
            </p>

            {/* Price */}
            <p className="text-2xl font-bold text-gray-900 tracking-wider">
              ${product.price?.toLocaleString()}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-3 hover:text-orange-400 transition-colors duration-200 font-bold text-gray-600"
                >
                  -
                </button>
                <span className="px-6 py-3 font-bold text-gray-900 bg-gray-100 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-3 hover:text-orange-400 transition-colors duration-200 font-bold text-gray-600"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-orange-400 text-black px-8 py-3 font-bold text-sm tracking-wider uppercase hover:bg-orange-300 transition-colors duration-200 flex-grow lg:flex-grow-0"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
