import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios'
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=841a31b20ccb4911add2da7cb4a89fec`
      const respuesta = await axios.get(url);

      guardarNoticias(respuesta.data.articles)
     
    }

    consultarApi()
  }, [categoria])


  return (

    <Fragment>
      <Header titulo="Buscador de Noticias"></Header>
      <div className="container">
        <Formulario guardarCategoria={guardarCategoria}>

        </Formulario>
        <ListadoNoticias noticias={noticias}></ListadoNoticias>
      </div>
    </Fragment>


  );
}

export default App;
