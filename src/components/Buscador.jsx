import React, { Component } from 'react'

export default class Buscador extends Component {
    // esto que se conoce como ref nos permitira leer los valores de los
    // input con react
    busquedaRef = React.createRef();

    //funciones

    handleData = (e) => {
        e.preventDefault();
        // siempre que vamos a leer un ref se pone this.busquedaRef.current.value
        const termino = this.busquedaRef.current.value;
        // con el valor tomado del input lo mandamos al componente principal
        this.props.datosBusqueda(termino)
    }
    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input 
                        ref={this.busquedaRef}
                        type="text" 
                        className='form-control form-control-lg mb-1 ' 
                        placeholder='Busca tu imagen Ejemplo: Futbol'
                        />
                    </div>
                    <div className='form-group col-md-4'>
                        <input 
                        type='submit' 
                        className='btn btn-lg btn-danger btn-block' 
                        value='Buscar...'
                        />
                    </div>
                </div>
            </form>
        )
    }
}
