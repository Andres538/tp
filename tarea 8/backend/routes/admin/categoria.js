var express=require('express');
var router=express.Router();
var categoriaModel= require('./../../models/categoriaModel');

router.get('/',async function(req,res,next){
    var data= await categoriaModel.getCategoria();
    res.render('admin/categoria/categoria',
    {
        layout:'admin/layout',
        data
    });
});
router.get('/agregar',(req,res,next)=>{res.render('admin/categoria/agregar',{layout:'admin/layout'});});
router.post('/agregar',async (req,res,next)=>{
    try{
        if(req.body.nombre_c!=""){
            await categoriaModel.insertCategoria(req.body);
            res.redirect('/admin/categoria')
        }else{
            res.render('admin/categoria/agregar',{
                layout:'admin/layout',
                error:true, message:'llenar el campo'
            })
        }
    }catch(error){
        console.log(error)
        res.render('admin/categoria/agregar',{layout:'admin/layout',error:true,message:'No se cargo la categoria'})
    }
});
router.get('/eliminar/:id',async (req,res,next)=>{
          var id=req.params.id;  
    await categoriaModel.deleteCategoria(id);
            res.redirect('/admin/categoria')
      
});
router.get('/modificar/:id',async (req,res,next)=>{  
    var categoria=await categoriaModel.getCategoriabyid(req.params.id);
      res.render('admin/categoria/modificar',{
        layout:'admin/layout',
        categoria
      });

});
router.post('/modificar',async (req,res,next)=>{
    try{    
            let id=req.body.id_c;
            let nombre_c=req.body.nombre_c;                                  
            await categoriaModel.UpdateCategoria(nombre_c,id);
            res.redirect('/admin/categoria')
        
    }catch(error){
        console.log(error)
        res.render('admin/categoria/modificar',{layout:'admin/layout',error:true,message:'No se cargo el cambio'})
    }
});
module.exports=router;