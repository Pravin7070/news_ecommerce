import { Link, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import BuyNow from './components/BuyNow'
import Login from './components/Login'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-yellow-600">
            MERN Ecommerce Project
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Cart ({cart.length})
          </Link>
          {localStorage.getItem("user") ? (
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </header>

      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/buynow/:id"
            element={
              <ProtectedRoute>
                <BuyNow />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white text-center py-3 mt-6">
        <p>&#169; 2025 MERN Ecommerce Project</p>
      </footer>
    </div>
  )
}

export default App