import { useContext } from 'react'
import { FilterContext } from '../context/filter'

export  function useFilters () {
    const {filters, setFilters} = useContext(FilterContext)
    //filterProducts es una función que recibe un array de productos y devuelve un array de productos filtrados
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    return { filters, filterProducts, setFilters }
  }