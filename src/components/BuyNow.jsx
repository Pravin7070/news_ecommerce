import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../utils/Api';

export default function BuyNow() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product)
    return <p className="text-center text-red-600 text-xl mt-10">Product not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full text-center">

        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-60 object-cover rounded-lg shadow-md mx-auto mb-6"
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>

        <p className="text-2xl text-green-600 font-semibold mb-3">
          ₹{product.price}
        </p>

        <p className="text-gray-600 mb-6">{product.description}</p>

        <h4 className="text-xl font-semibold text-green-700 bg-green-100 py-3 rounded-lg border border-green-300">
          ✔ Order has been placed successfully!
        </h4>

      </div>
    </div>
  );
}