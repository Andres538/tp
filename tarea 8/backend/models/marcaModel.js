var pool=require('./db');

async function getMarcas(){
    try{
        var query="select * from marca order by id_m"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getMarcabyid(id){
    try{
        var query="select * from marca where id_m=?"
        var rows= await pool.query(query,[id]);
        return rows[0];
    }catch(error){
        throw error;
    }
}
async function deleteMarca(id){
    try{
        var query="delete from marca where id_m=?";
        var rows=await pool.query(query,[id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
} 
async function insertMarca(obj){
    try{
        var query="INSERT INTO marca set ?";
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function UpdateMarca(obj,id){
    try{
        var query="update marca set  nombre_m='"+obj+"' where id_m="+id;
        var rows=await pool.query(query);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={getMarcas,getMarcabyid,insertMarca,UpdateMarca,deleteMarca}