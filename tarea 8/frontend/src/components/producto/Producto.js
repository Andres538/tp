import React from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from 'axios';
import { useState } from "react";
const Producto=(props)=>{
    
    const{key,id,nombre,precio,imagen,body,ingreso,categoria,marca,cantidades}=props;
    return(

        <div className="productos">
            <tr>
            <td>{key}</td>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{ingreso}</td>
            <td>{categoria}</td>
            <td>{marca}</td>
            <td>{cantidades}</td>
            
            <td><img src={imagen}></img></td>
            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/></tr>
        </div>
    );
    }


export default Producto;