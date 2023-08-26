var pool=require('./db');

async function getUserByGmailandPassword(mail,password){
    try{
        var query="select * from cliente where mail=? and contraseña=?"
        var rows= await pool.query(query, [mail,password]);
        return rows[0];
    }catch(error){
        throw error;
    }
}

async function getUsers(){
    try{
        var query="select * from cliente order by id_cl"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getUserbyid(id){
    try{
        var query="select * from cliente where id_cl=?"
        var rows= await pool.query(query,[id]);
        return rows[0];
    }catch(error){
        throw error;
    }
}
async function deleteUsuario(id){
    try{
        var query="delete from cliente where id_cl=?";
        var rows=await pool.query(query,[id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
} 
async function insertUsuario(obj){
    try{
        var query="INSERT INTO cliente set ?";
        var rows=await pool.query(query,[obj]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function UpdateUsuario(obj,id){
    try{
        var query="update cliente set ? where id_cl=?";
        var rows=await pool.query(query,[obj,id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={getUsers,getUserbyid,getUserByGmailandPassword,insertUsuario,UpdateUsuario,deleteUsuario}