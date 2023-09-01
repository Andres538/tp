import React from "react";

const Ventas=(props)=>{
    
    const{key,id,nombre,nombre_p,body}=props;
   
    return(

        <div className="productos">
            <tr>
            <td>{key}</td>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{nombre_p}</td>
            
            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/></tr>
        </div>
    );
    }


export default Ventas;