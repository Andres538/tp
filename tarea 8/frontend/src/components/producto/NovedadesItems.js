import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

const NovedadesItems=(props)=>{
    const{key,id,nombre,precio,imagen,body}=props;
    return(
        <td>
        <div className="productos">
            <h1>{key}</h1>
            <h2><Link to={'/Producto/'+id}>{nombre}</Link></h2>
            <img src={imagen}/>
            <h2>{precio}</h2>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>
        </div></td>
    );
    }


export default NovedadesItems;