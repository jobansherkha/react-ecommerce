import React from 'react'
import {Link} from 'react-router-dom'


export const Header = () => {
  return (
   <>
   <header class="bg-gray-900 text-white flex justify-between items-center py-4 px-8">
  <h1 class="text-2xl font-bold">Fake Store</h1>
  <nav class="flex items-center">
    <a href="/" class="mx-4 hover:text-gray-400">Home</a>
    <a href="/productDetail" class="mx-4 hover:text-gray-400">ProductDetail</a>
    <a href="/productComponent" class="mx-4 hover:text-gray-400">Contact</a>
  </nav>
</header>


   </>
  )
}
