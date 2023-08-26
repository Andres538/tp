import React from "react";

const ProductoItems=(props)=>{
    const{key,nombre,precio,imagen,body}=props;
    return(
        <div className="productos">
            <h1>{key}</h1>
            <h2>{nombre}</h2>
            <h2>{precio}</h2>
            <h2>{ingreso}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/>
        </div>
    );
    }


export default ProductoItems;