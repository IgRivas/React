/* eslint-disable no-undef */
import './App.css'
import { useState } from 'react'  
import {products as initialProducts} from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'

function App() {

  // Producst es un array de objetos que contiene los productos y useState es un hook que inicializa el estado de la app
  const [products] = useState(initialProducts)
  //filters y filterProducts son funciones que se importan del hook useFilters
  const {filters,filterProducts} = useFilters()
  //filteredProducts es un array de objetos que contiene los productos filtrados
 const filteredProducs = filterProducts(products) 
  return (
    <>
    <p>{filters.category}

    </p>
    <p>
    {filters.minPrice}

    </p>
    <Header />
    {/* se envía el array de productos filtrados al componente Products*/}
    <Products products={filteredProducs} />
  


    </>
  )
}

export default App
