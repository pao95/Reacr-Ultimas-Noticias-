import React from 'react';
import Noticia from './Noticia';
const ListadoNoticias = ({ noticias }) => {

    return (
        <div className="card-columns">

           {noticias.map(noticia =>(
               <Noticia
               key={noticia.url} noticia={noticia}
               ></Noticia>
           ))}
        </div>
    );
}

export default ListadoNoticias;