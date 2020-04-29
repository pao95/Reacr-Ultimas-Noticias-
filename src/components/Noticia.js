import React from 'react';


const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia
console.log(noticia)
    return (
        
            <div className="card">
                {urlToImage ?
                <img src={urlToImage} className="card-img-top" alt={title}></img>
                
                : null}
                <span className="fuente">{source.name}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-color btn-block">Leer noticia</a>
                </div>
            </div>
        
    );
}

export default Noticia;