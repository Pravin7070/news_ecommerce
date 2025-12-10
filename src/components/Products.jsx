import React from 'react'
import { products } from '../utils/Api'
import { Link } from 'react-router-dom'

export default function Products({ setCart, cart }) {

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {products.map(p => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-60 h-60 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
            <p className="text-lg font-bold text-green-600 mt-1">₹{p.price}</p>
            <p className="text-gray-600 text-center mt-2">{p.description}</p>

            <div className="mt-4 flex gap-3">
              <Link
                to={`/product/${p.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View
              </Link>

              <button
                onClick={() => addToCart(p)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}