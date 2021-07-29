import React from 'react'

export default function Paginacion(props) {
    return (
        <div className='py-3'>
            <button onClick={props.paginaAnterior} type='button' className='btn btn-info btn-mr-1'>Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type='button' className=' btn btn-info '>Siguiente &rarr;</button>
        </div>
    )
}