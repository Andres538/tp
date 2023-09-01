var pool=require('./db');

async function insertVenta(id_v,obj){
    try{
        var query="INSERT INTO venta set id_v=?,id_cliente=?";
        var rows=await pool.query(query,[id_v,obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function listaVenta(){
    try{
        var query="SELECT id_v,cliente.nombre_cl,producto.nombre_p FROM venta,cliente,orden,producto WHERE venta.id_v=orden.id_venta and orden.id_producto=producto.id_p and venta.id_cliente=cliente.id_cl";
        var rows=await pool.query(query);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={insertVenta,listaVenta};