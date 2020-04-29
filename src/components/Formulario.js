import React from 'react';
import useSelect from '../hooks/useSelect';
const Formulario = ({guardarCategoria}) => {



    const OPCIONES =[
        {value:"general", label:"General"},
        {value:"business", label:"Negocios"},
        {value:"entertainment", label:"Entretenimiento"},
        {value:"health", label:"Salud"},
        {value:"science", label:"Ciencia"},
        {value:"sports", label:"Deportes"},
        {value:"technology", label:"Tecnologia"},
    ]

    const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

const buscarNoticias = e => {
    e.preventDefault();
    
    guardarCategoria(categoria)
}

    return (

        <form onSubmit={buscarNoticias}>
            <h2>Selecciona una categoria</h2>
            <SelectNoticias></SelectNoticias>
            <button type="submit" className="btn btn-color btn-block">Buscar</button>
        </form>
    );
}

export default Formulario;