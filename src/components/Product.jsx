import React from 'react'
import { products } from '../utils/Api'
import { Link, useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product)
    return <p className="text-center text-red-600 text-xl mt-10">Product not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">

        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          {product.name}
        </h2>

        <p className="text-2xl text-green-600 font-semibold text-center mb-4">
          ₹{product.price}
        </p>

        <p className="text-gray-600 text-lg text-center mb-6">
          {product.description}
        </p>

        <div className="text-center">
          <Link to={`/buynow/${product.id}`}>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Buy Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}