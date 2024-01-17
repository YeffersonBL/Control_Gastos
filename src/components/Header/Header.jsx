import React from 'react'
import NuevoPresupuesto from '../NuevoPresupuesto/NuevoPresupuesto'
import ControlPresupuesto from '../../pages/Presupuesto/ControlPresupuesto' 

const Header = ({
     gastos,
     setGastos,
     presupuesto,
     setPresupuesto,
     isValidPresupuesto,
     setIsValidPresupuesto
    }) => {
  return (
    <header>
        <h1>¡Bienvenido a Money Minder Management!</h1>
        
        {isValidPresupuesto ? (
            <ControlPresupuesto
              gastos={gastos}
              setGastos={setGastos}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
        ) : (
            <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />   
        )
        }
    </header>
  )
}

export default Header