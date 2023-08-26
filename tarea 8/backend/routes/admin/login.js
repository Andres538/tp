var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('admin/login',{layout:'admin/layout',})
});

module.exports=router;

var usuariosModel= require('./../../models/usuariosModel');

router.post('/', async(req,res,next)=>{
    try{
        var mail=req.body.usuario;
        var password= req.body.password;
        
        var data= await usuariosModel.getUserByGmailandPassword(mail,password);
         if(data !=undefined){
            req.session.id_usuario=data.id_cl;
            req.session.nombre=data.nombre_cl;
            res.redirect('/admin/novedades');
         }else{
            console.log(data); 
            res.render('admin/login',{ 
                layout:'admin/layout',
                error:true,
            });
         }
    }catch(error){
        console.log(error);
    }
})
router.get('/logout',function(req,res,next){
    req.session.destroy();
    res.render('admin/login',{layout:'admin/layout'});
});