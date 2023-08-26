var pool=require('./db');

async function getCategoria(){
    try{
        var query="select * from categoria order by id_c"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getCategoriabyid(id){
    try{
        var query="select * from categoria where id_c=?"
        var rows= await pool.query(query,[id]);
        return rows[0];
    }catch(error){
        throw error;
    }
}
async function deleteCategoria(id){
    try{
        var query="delete from categoria where id_c=?";
        var rows=await pool.query(query,[id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
} 
async function insertCategoria(obj){
    try{
        var query="INSERT INTO Categoria set ?";
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function UpdateCategoria(obj,id){
    try{
        var query="update categoria set  nombre_c='"+obj+"' where id_c="+id;
        var rows=await pool.query(query);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={getCategoria,getCategoriabyid,insertCategoria,UpdateCategoria,deleteCategoria}