import React from "react";

const Productomodificar=(props)=>{
    const{key,id,nombre,precio,imagen,body,ingreso,categoria,marca,cantidades}=props;
    return(
        <div className="productos">
            <td>
            <h2>{key}</h2>
            <h2>Nombre:{nombre}</h2>
            <h2>Precio:{precio}</h2>
            <h2>Cantidad:{cantidades}</h2>
            <h2>Categoria:{categoria}</h2>
            <h2>Marca:{marca}</h2>
            

           
            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/></td>
        </div>
    );
    }


export default Productomodificar;