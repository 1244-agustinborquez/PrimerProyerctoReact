import React, { Component, Fragment } from 'react'
import Image from './Image.jsx';
import Paginacion from './Paginacion.jsx';

export default class List extends Component {
    showPictures = () =>{
        const imagenes = this.props.imagenes
        if (imagenes.length === 0) return null;
        console.log(imagenes);

        return(
            <Fragment>
                <div className='col-12 p-5 row'>
                    {imagenes.map(imagen => (
                        <Image 
                        key={imagen.id}
                        imagen={imagen}
                        />
                    ))}
                </div>
                <Paginacion
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}
                />
            </Fragment>
        )
    }
    render() {
        return (
            <Fragment>
                {this.showPictures()}
            </Fragment>
        )
    }
}
