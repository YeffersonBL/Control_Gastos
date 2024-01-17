import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label> Filtrar Gastos</label>
                    <select
                        value={filtro}
                        onChange={ e => setFiltro(e.target.value)}
                    >
                        <option value=''>-- Categorias Gastos --</option>
                        <option value='educacion'>Educacion</option>
                        <option value='electronicos'>Electrónicos</option>
                        <option value='otros'>Otros</option>
                        <option value='recreacion'>Recreación</option>
                        <option value='restaurante'>Restaurante</option>
                        <option value='ropa'>Ropa</option>
                        <option value='salud'>Salud</option>
                        <option value='servicios'>Servicios</option>
                        <option value='supermercado'>Suermercado</option>
                        <option value='transporte'>Transporte</option>
                        <option value='viaje'>Viaje</option>
                        <option value='vivienda'>Vivienda</option>
                    </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros