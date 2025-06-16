import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data.json';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { name } = useParams();
  const items = products.filter((p) => p.category === name);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 capitalize">{name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
