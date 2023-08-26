var pool=require('./db');

async function insertVenta(obj){
    try{
        var query="INSERT INTO venta set ?";
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={insertVenta};