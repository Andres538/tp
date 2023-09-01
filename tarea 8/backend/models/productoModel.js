var pool=require('./db');

async function getProducto(){
    try{
        var query="SELECT id_p,nombre_p,precio,nombre_c,nombre_m,cantidades,imagen,ingreso FROM producto,categoria,marca WHERE id_categoria=id_c AND id_marca=id_m order by id_p"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

async function getIdM(id){
    try{
        var query="SELECT * FROM producto where id_marca=?"
        var rows= await pool.query(query,[id]);
        return rows;
    }catch(error){
        throw error;
    }
}
async function getNovedades(){
    try{
        var query="SELECT * FROM `producto`WHERE id_stock=1 ORDER by id_p DESC LIMIT 4;"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}
async function getDestacados(){
    try{
        var query="SELECT `id_p`,COUNT(*)AS ventas,`nombre_p`,`precio`,`imagen` FROM producto,orden WHERE producto.id_p=orden.id_producto GROUP by orden.id_producto ORDER BY ventas DESC LIMIT 4;"
        var rows= await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}
async function getProductobyid(id){
    try{
        var query="SELECT id_p,nombre_p,precio,nombre_c,nombre_m,cantidades,imagen,ingreso,id_stock,stock.nombre_s FROM producto,categoria,marca,stock WHERE id_categoria=id_c AND id_s=id_stock AND id_marca=id_m AND ?";
        var rows= await pool.query(query,[id]);
        return rows;
    }catch(error){
        throw error;
    }
}
async function deleteProducto(id){
    try{
        var query="delete from producto where id_p=?";
        var rows=await pool.query(query,[id]);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
} 
async function insertProducto(obj,img){
    try{
        var query="INSERT INTO producto set id_stock=1,ingreso=now(),nombre_p='"+obj.nombre_p+"',precio="+obj.precio+",id_marca="+obj.id_marca+",id_categoria="+obj.id_categoria+",cantidades="+obj.cantidades+",imagen='"+img+"'";
        var rows=await pool.query(query);
        return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function UpdateProducto(obj,img,id){
    try{
        if(obj.cantidades!=0){
            if(img!=""){
                var query="update producto set id_stock=1,?,imagen='"+img+"' where id_p=?";
                var rows=await pool.query(query,[obj,id]);
                return rows
            }else{
                var query="update producto set id_stock=1,? where id_p=?";
                var rows=await pool.query(query,[obj,id]);
                return rows
            }
        }else{
            if(img!=""){
                var query="update producto set id_stock=2,?,imagen='"+img+"' where id_p=?";
                var rows=await pool.query(query,[obj,id]);
                return rows
            }else{
                var query="update producto set id_stock=2,? where id_p=?";
                var rows=await pool.query(query,[obj,id]);
                return rows
            }
        }
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function Venta(obj,id){
    try{
        if(obj.cantidades!=0){
                var query="UPDATE producto SET cantidades=?-1 WHERE id_p=?";
                var rows=await pool.query(query,[obj,id]);
                return rows
        }else{
                var query="update producto set id_stock=2,cantidades=?-1 where id_p=?";
                var rows=await pool.query(query,[obj,id]);
                return rows
            
        }
    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports={getProducto,getNovedades,getProductobyid,insertProducto,UpdateProducto,deleteProducto,getIdM,getDestacados}