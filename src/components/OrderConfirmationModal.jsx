import React from 'react';

export default function OrderConfirmationModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Thank you for your order</h2>
        <p className="mb-2">Order Summary:</p>
        <ul className="mb-4 space-y-2">
          {order.items.map((i) => (
            <li key={i.id} className="flex justify-between">
              <span>
                {i.name} x{i.qty}
              </span>
              <span>${(i.price * i.qty).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ${order.total.toLocaleString()}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
