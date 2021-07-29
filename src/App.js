import React, { Component } from 'react'
import Buscador from './components/Buscador.jsx';
import List from './components/List.jsx';
class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }
  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }
  paginaAnterior = ()=>{
    // leer el stado de la pagina actal
    let pagina = this.state.pagina;
    //si la pagina es uno ya no ir hacia atras
    if (pagina === 1) return null;
    //resta 1 a la pagina actual
    pagina--
    //agregar cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  paginaSiguiente = ()=>{
    // leer el stado de la pagina actal
    let pagina = this.state.pagina;
    //sumar 1 a la pagina actual
    pagina++
    //agregar cambio al state
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=22693939-2131becb474940741ae50fab0&q=${termino}&per_page=30&page=${pagina}`;
    fetch(url)
    .then(response => response.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))

  }

  datosBusqueda= (termino) =>{
    this.setState({
      termino: termino,
      pagina: 1
    }, ()=> {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className=' app container'>
        <div className='jumbotron'>
          <p className='lead text-center'>Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row text-aligne-center">
        <List 
        imagenes={this.state.imagenes}
        paginaAnterior={this.paginaAnterior}
        paginaSiguiente={this.paginaSiguiente}
        />
        </div>
      </div>
    )
  }
}


export default App;
