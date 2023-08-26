var express=require('express');
var router=express.Router();
var productoModel= require('./../../models/productoModel');
var marcaModel= require('./../../models/marcaModel');
var categoriaModel= require('./../../models/categoriaModel');
var util=require('util');
const cloudinary=require('cloudinary').v2;

const uploader=util.promisify(cloudinary.uploader.upload);
router.get('/',async function(req,res,next){
    var productos= await productoModel.getProducto();
    
    productos=productos.map(producto=>{
        if(producto.imagen){
            const imagen=cloudinary.image(producto.imagen,{
                witdh:100,
                height:100,
                crop:'fill'
            });
            return{
                producto,
                imagen
            }
        }else{
            return{
                producto,
                imagen:''
            }
        }
    });
    console.log(productos);
    res.render('admin/producto/producto',
    {
        layout:'admin/layout',
        productos
    });
});
router.get ('/agregar',async(req,res,next)=>{
    var marca= await marcaModel.getMarcas();
    var categoria=await categoriaModel.getCategoria();
    res.render('admin/producto/agregar',{layout:'admin/layout',marca,categoria});});
router.post('/agregar',async (req,res,next)=>{
    try{
        var img_id='';
        console.log(req.files);
        if(req.files && Object.keys(req.files).length>0){
            imagen=req.files.imagen;
            img_id=(await uploader(imagen.tempFilePath)).public_id;
        }
        if(req.body.nombre_p!="" && req.body.precio!="" && req.body.cantidades!=""){
            await productoModel.insertProducto(req.body,img_id);
            res.redirect('/admin/producto') 
        }else{
            var marca= await marcaModel.getMarcas();
    var categoria=await categoriaModel.getCategoria();
   
            res.render('admin/producto/agregar',{
                layout:'admin/layout',marca,categoria,
                error:true, message:'llenar los campos'
            })
            
        }
    }catch(error){
        console.log(error)
        res.render('admin/productos/agregar',{layout:'admin/layout',error:true,message:'No se cargo el producto'})
    }
});
router.get('/eliminar/:id',async (req,res,next)=>{
          var id=req.params.id;  
    await productoModel.deleteProducto(id);
            res.redirect('/admin/producto')
      
});
router.get('/modificar/:id',async (req,res,next)=>{  
    var producto=await productoModel.getProductobyid(req.params.id);
    var marca= await marcaModel.getMarcas();
    var categoria=await categoriaModel.getCategoria();
      res.render('admin/producto/modificar',{
        layout:'admin/layout',
        producto,
        marca,
        categoria
      });

});
router.post('/modificar',async (req,res,next)=>{
    try{    
        var img_id='';
        console.log(req.files);
        if(req.files && Object.keys(req.files).length>0){
            imagen=req.files.imagen;
            img_id=(await uploader(imagen.tempFilePath)).public_id;
        }
        console.log(req.body);
            var id=req.body.id_p;
            await productoModel.UpdateProducto(req.body,img_id,id);
            res.redirect('/admin/producto') 
    }catch(error){
        console.log(error)
        var marca= await marcaModel.getMarcas();
        var categoria=await categoriaModel.getCategoria();
        res.render('admin/producto/modificar',{layout:'admin/layout',
        marca,
        categoria,
        error:true,
        message:'No se cargo el cambio'})
    }
});
module.exports=router;