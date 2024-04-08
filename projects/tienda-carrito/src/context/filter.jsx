/* eslint-disable react/prop-types */
import { createContext } from "react";  
import { useState } from "react";


//Creamos el contexto
export const FilterContext = createContext()

//Creamos el provider
export function FilterProvider({children}){
    const [filters,setFilters] = useState({
        category: 'all',
        minPrice: 0,
      })
   return ( 
   <FilterContext.Provider value={{
      filters,
      setFilters
    }}
    >
     {children}
    </FilterContext.Provider>
    )
    }
