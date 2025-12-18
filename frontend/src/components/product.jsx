import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API } from "../utils/api"

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => {
        if (cancelled) return
        const p = data.find(item => item._id === id)
        setProduct(p || null)
      })
      .catch(() => {
        if (!cancelled) setError('Failed to load product')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [id])

  if (loading) return (
    <div className="text-center mt-20 text-xl text-gray-600">Loading...</div>
  )

  if (error) return (
    <div className="text-center mt-20 text-xl text-red-600">{error}</div>
  )

  if (!product) return (
    <div className="text-center mt-20 text-xl text-gray-600">Product not found</div>
  )

  const p = product

  return (
    <div className="flex justify-center px-6 py-12">

      {/* PRODUCT CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Product Details
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={p.image}
            alt={p.name}
            className="w-80 h-80 object-cover rounded-xl hover:scale-105 transition"
          />
        </div>

        {/* INFO */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {p.name}
        </h3>

        <p className="text-sky-600 text-lg font-bold mb-3">
          ₹ {p.price}
        </p>

        <p className="text-gray-600 mb-6">
          {p.description}
        </p>

        {/* BUY NOW */}
        <Link to={`/buynow/${p._id}`}>
          <button className="w-full py-3 bg-sky-500 text-white rounded-lg text-lg font-semibold hover:bg-sky-600 transition">
            Buy Now
          </button>
        </Link>

      </div>
    </div>
  )
}
