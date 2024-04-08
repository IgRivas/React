/* eslint-disable react/prop-types */
import '../Filters.css';
import { useState } from 'react';
import { useFilters } from '../hooks/useFilters';

export function Filters(){
    const {setFilters} = useFilters()

    const [minPrice, setMinPrice] = useState(0) 


    //los valores de los filtros se guardan en el estado de la app
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters( prevState =>({
            //... es un spread operator que copia el objeto prevState, funciona como Object.assign
            ... prevState,
            minPrice : event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters( prevState =>({
            ... prevState,
            category : event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range"
                        id="price"
                        min='0'
                        max='1000'
                        onChange={handleChangeMinPrice} />
                        <span>${minPrice}   </span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="home-decoration">Deco</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}