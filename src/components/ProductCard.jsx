import React from 'react';
import { Link } from 'react-router-dom';

// const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', {
//   eager: true,
//   import: 'default',
// });

// function resolveImage(path) {
//   if (!path) return null;
//   const normalized = path.replace('./assets', '../assets');
//   return images[normalized];
// }

export default function ProductCard({ product }) {
  if (!product) return null;

  // const imageSrc = resolveImage(product.image?.desktop);

  return (
    <div className="bg-white rounded-lg overflow-hidden group">
      <div className="aspect-square overflow-hidden bg-[#F1F1F1]">
        {product.image ? (
          <img
            src={product.image.desktop}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F1F1F1] text-[#CFCFCF]">
            <div className="w-full h-64 bg-[#F1F1F1]"></div>
          </div>
        )}
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider text-black">
          {product.name}
        </h3>
        <p className="text-lg font-bold mb-8 text-black opacity-50">
          $ {product.price?.toLocaleString()}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] font-bold py-4 px-8 uppercase tracking-[1px] transition-colors duration-200"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
