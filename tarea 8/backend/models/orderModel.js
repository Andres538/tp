var pool=require('./db');

async function insertOrden(obj){
    try{
        var query="INSERT INTO orden set ?";
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={insertOrden};