var pool=require('./db');

async function insertOrden(obj,id_v){
    try{
        var query="INSERT INTO orden set id_producto=?,id_venta=?";
        var rows=await pool.query(query,[obj,id_v]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={insertOrden};