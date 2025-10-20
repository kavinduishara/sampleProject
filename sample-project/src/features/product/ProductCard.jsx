import React from 'react'
import { useDispatch } from 'react-redux'
import { incriment } from '../counter/counterSlice'

function ProductCard({name,price}) {
  const dispatch =useDispatch()
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md max-w-xs mx-auto p-4">
        <h1 className="text-lg font-semibold mb-2">{name}</h1>
        <h2 className="text-base text-gray-600 mb-3">{price}</h2>
        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        onClick={()=>dispatch(incriment())}
        >buy</button>
        
    </div>
  )
}

export default ProductCard