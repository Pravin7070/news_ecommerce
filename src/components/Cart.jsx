import React from 'react'

export default function Cart({ cart, setCart }) {

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-600 text-lg">No items in cart.</p>
      )}

      <div className="flex flex-col gap-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-lg text-green-600 font-medium">₹{item.price}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}