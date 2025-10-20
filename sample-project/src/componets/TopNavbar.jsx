import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../features/counter/Counter'


export default function TopNavbar() {

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold text-blue-600">MyApp</div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/add-product" className="text-gray-700 hover:text-blue-600">Add Product</Link>
            </div>
          </div>

          <Counter />

          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">Sign in</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
