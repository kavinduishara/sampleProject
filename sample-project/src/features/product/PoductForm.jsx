import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { productAdded } from './poductSlice'

function ProductForm() {
    const [product, setproduct] = useState("")
    const [productprice, setproductprice] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md max-w-sm mx-auto p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Add Product</h2>
            <div className="flex flex-col gap-4">
                <input
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Product Name"
                    value={product}
                    onChange={e => setproduct(e.target.value)}
                />
                <input
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Price"
                    value={productprice}
                    onChange={e => setproductprice(e.target.value)}
                    type="number"
                />
                <button
                    className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
                    onClick={() => dispatch(productAdded({ name: product, price: productprice }))
                    }
                >
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default ProductForm