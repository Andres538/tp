import React from "react";

const Ps5item=(props)=>{
    const{key,nombre,precio,imagen,body}=props;
    return(
            
        <div className="productos">
            <h1>{key}</h1>
            <h2>{nombre}</h2>
            
            <img src={imagen}/>
            <h2>{precio}</h2>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>
        </div>
    );
    }


export default Ps5item;