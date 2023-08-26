var pool=require('./db');
 
async function insertCorreo(obj){
    try{
        var query="INSERT INTO correo set ?";
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={insertCorreo};