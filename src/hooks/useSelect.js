import React, { useState } from 'react';

const useSelect = (selectInicial, opciones) => {



    const [state, actualizarState] = useState(selectInicial)

    const SelectNoticias = () => (

        <select className="form-control form-control-sm"
        value={state}
      onChange={e=> actualizarState(e.target.value)}>

            {opciones.map(opcion =>(

            <option  key={opcion.value} value={opcion.value}> {opcion.label}</option>

            ))}
        </select>

    )

    return [state, SelectNoticias];
}

export default useSelect;