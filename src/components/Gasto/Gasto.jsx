import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import {formatearFecha} from '../../helpers'
import IconoEducacion from '../../assets/icon/Estudio.svg' 
import IconoElectronicos from '../../assets/icon/Electronico.svg'
import IconoOtros from '../../assets/icon/Otros.svg'
import IconoRecreacion from '../../assets/icon/Recreacion.svg'
import IconoRestaurante from '../../assets/icon/Restaurante.svg'
import IconoRopa from '../../assets/icon/Ropa.svg'
import IconoSalud from '../../assets/icon/Salud.svg'
import IconoServicios from '../../assets/icon/Servicios.svg'
import IconoSupermercado from '../../assets/icon/Supermercado.svg'
import IconoTransporte from '../../assets/icon/Transporte.svg'
import IconoViaje from '../../assets/icon/Viaje.svg'
import IconoVivienda from '../../assets/icon/Vivienda.svg'

const diccionarioIconos = {
  educacion : IconoEducacion,
  electronicos : IconoElectronicos,
  otros : IconoOtros,
  recreacion : IconoRecreacion, 
  restaurante : IconoRestaurante, 
  ropa : IconoRopa,
  salud : IconoSalud, 
  servicios : IconoServicios,
  supermercado : IconoSupermercado,
  transporte : IconoTransporte,
  viaje : IconoViaje, 
  vivienda : IconoVivienda

}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {

  const {categoria, nombre, cantidad, id, fecha} = gasto;

  const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={ () => setGastoEditar(gasto)}>
            Editar
        </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
   <TrailingActions>
        <SwipeAction 
              onClick={ () => eliminarGasto(id) }
              destructive={true}
              >
            Eliminar
        </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
          <div className='gasto sombra'>
              <div className='contenido-gasto'>
                <img 
                    src={diccionarioIconos[categoria]}
                    alt='Icono Gasto'
                />
                
                  <div className='descripcion-gasto'>
                        <p className='categoria'>{categoria}</p>
                        <p className='nombre-gasto'>{nombre}</p>
                        <p className='fecha-gasto'>
                            Agregado el: {' '}
                            <span>{formatearFecha(fecha)}</span>
                        </p>
                  </div>
              </div>

                  <p className='cantidad-gasto'>${cantidad}</p>

          </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto