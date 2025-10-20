import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function Product() {
    const products = useSelector(state => state.products.products)
    return (
        <div className="flex flex-wrap gap-6 justify-start p-4">
            {products && products.map((product, idx) => (
                <div key={idx} className="flex-[0_0_auto]">
                    <ProductCard name={product.name} price={product.price ?? "N/A"} />
                </div>
            ))}
        </div>
    )
}

export default Product