import React from 'react'
import { Routes, Route } from "react-router-dom"
import Product from "./features/product/Product"
import ProductForm from "./features/product/PoductForm"
import PostsList from "./features/posts/PostsList"
import TopNavbar from "./componets/TopNavbar"

function Home() {
  return (
    <main className="p-4">
      <Product />
      {/* <PostsList /> */}
    </main>
  )
}

function App() {
  return (
    <>
      <TopNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="*" element={<Home />} />
      </Routes>

      
    </>
  )
}

export default App
