var express=require('express');
var router=express.Router();
var marcaModel= require('./../../models/marcaModel');

router.get('/',async function(req,res,next){
    var data= await marcaModel.getMarcas();
    res.render('admin/marca/marca',
    {
        layout:'admin/layout',
        data
    });
});
router.get('/agregar',(req,res,next)=>{res.render('admin/marca/agregar',{layout:'admin/layout'});});
router.post('/agregar',async (req,res,next)=>{
    try{
        if(req.body.nombre_m!=""){
            await marcaModel.insertMarca(req.body);
            res.redirect('/admin/marca')
        }else{
            res.render('admin/marca/agregar',{
                layout:'admin/layout',
                error:true, message:'llenar el campo'
            })
        }
    }catch(error){
        console.log(error)
        res.render('admin/marca/agregar',{layout:'admin/layout',error:true,message:'No se cargo la marca'})
    }
});
router.get('/eliminar/:id',async (req,res,next)=>{
          var id=req.params.id;  
    await marcaModel.deleteMarca(id);
            res.redirect('/admin/marca')
      
});
router.get('/modificar/:id',async (req,res,next)=>{  
    var marca=await marcaModel.getMarcabyid(req.params.id);
      res.render('admin/marca/modificar',{
        layout:'admin/layout',
        marca
      });

});
router.post('/modificar',async (req,res,next)=>{
    try{    
            let id=req.body.id_m;
            let nombre_m=req.body.nombre_m;                                  
            await marcaModel.UpdateMarca(nombre_m,id);
            res.redirect('/admin/marca')
        
    }catch(error){
        console.log(error)
        res.render('admin/marca/modificar',{layout:'admin/layout',error:true,message:'No se cargo el cambio'})
    }
});
module.exports=router;