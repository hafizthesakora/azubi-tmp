// src/components/CartItem.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Import all images
const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

function resolveImage(path) {
  if (typeof path !== 'string') return null;
  const normalized = path.replace('./assets', '../assets');
  return images[normalized];
}

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useContext(CartContext);
  const imageSrc = resolveImage(item.image);

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      {imageSrc ? (
        <img src={imageSrc} alt={item.name} className="w-20 rounded" />
      ) : (
        <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
          No Image
        </div>
      )}
      <div className="flex-grow">
        <h4>{item.name}</h4>
        <p>${item.price.toLocaleString()}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQty(item.id, item.qty - 1)}
          disabled={item.qty <= 1}
        >
          -
        </button>
        <span>{item.qty}</span>
        <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
      </div>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}
