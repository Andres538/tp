var express=require('express');
var router=express.Router();
var productoModel=require('./../models/productoModel');
var cloudinary=require('cloudinary').v2;
var correoModel=require('./../models/correoModel');
var usuariosModel=require('./../models/usuariosModel');
var ventaModel=require('./../models/ventaModel');
var orderModel=require('./../models/orderModel');
var nodemailer=require('nodemailer');

router.post('/Venta',async function(req,res,next){
    var imag="";
    req.body.cantidades=req.body.cantidades-1;
    id_v=Math.floor(100000 + Math.random() * 900000);
    var id_c=1;
    await productoModel.UpdateProducto(req.body,imag,req.body.id_p,);
    await ventaModel.insertVenta(id_v,id_c);
    await orderModel.insertOrden(req.body.id_p,id_v);
    res.json();
});
router.get('/ListaVenta',async function(req,res,next){
   
    var lista=await ventaModel.listaVenta();
    
    res.json(lista);
});
router.post('/delete',async function(req,res,next){
    await productoModel.deleteProducto(req.body.id_p);
    
    res.json();
});
router.post('/Login', async(req,res,next)=>{
 
        var mail=req.body.mail;
        var password= req.body.password;
        
        var data= await usuariosModel.getUserByGmailandPassword(mail,password);
         if(data !=undefined){
            res.status(201).json({
                error:false,
            })
        }else{
            res.status(201).json({
                error:true,
                message:'Se debio de haber equivocado en su contraseña'            
            })
    
}})
router.get('/productos',async function(req,res,next){
    let productos=await productoModel.getProducto();
    productos=productos.map(producto=>{
        if(producto.imagen){
            if(producto.imagen){
                const imagen=cloudinary.url(producto.imagen,{
                    witdh:100,
                    height:100,
                    crop:'fill'
                });
                return{
                    ...producto,
                    imagen
                }
            }else{
                return{
                    ...producto,
                    imagen:''
                }
            }
        }
    })
    res.json(productos);
});
router.post('/productobyid',async function(req,res,next){
    var id=req.body;
    let productos=await productoModel.getProductobyid(id);
    console.log(productos);
    productos=productos.map(producto=>{
        console.log(producto);
        if(producto.imagen){
            if(producto.imagen){
                const imagen=cloudinary.url(producto.imagen,{
                    witdh:1500,
                    height:200,
                    crop:'fill'
                    
                });

                console.log(imagen)
                return{
                    ...producto,
                    imagen
                }
            }else{
                return{
                    ...producto,
                    imagen:''
                }
            }
        }
    });
    res.json(productos);
});
router.get('/ps5',async function(req,res,next){
    let productos=await productoModel.getIdM('2');
    productos=productos.map(producto=>{
        console.log(producto.imagen);
        if(producto.imagen){
            if(producto.imagen){
                const imagen=cloudinary.url(producto.imagen,{
                    witdh:100,
                    height:100,
                    crop:'fill'
                    
                });

                console.log(imagen)
                return{
                    ...producto,
                    imagen
                }
            }else{
                return{
                    ...producto,
                    imagen:''
                }
            }
        }
    })
    res.json(productos);
});

router.get('/destacados',async function(req,res,next){
    let productos=await productoModel.getDestacados();
    productos=productos.map(producto=>{
        console.log(producto.imagen);
        if(producto.imagen){
            if(producto.imagen){
                const imagen=cloudinary.url(producto.imagen,{
                    witdh:100,
                    height:100,
                    crop:'fill'
                    
                });

                console.log(imagen)
                return{
                    ...producto,
                    imagen
                }
            }else{
                return{
                    ...producto,
                    imagen:''
                }
            }
        }
    })
    res.json(productos);
});
router.get('/novedades',async function(req,res,next){
    let productos=await productoModel.getNovedades();
    productos=productos.map(producto=>{
        console.log(producto.imagen);
        if(producto.imagen){
            if(producto.imagen){
                const imagen=cloudinary.url(producto.imagen,{
                    witdh:100,
                    height:100,
                    crop:'fill'
                    
                });

                console.log(imagen)
                return{
                    ...producto,
                    imagen
                }
            }else{
                return{
                    ...producto,
                    imagen:''
                }
            }
        }
    })
    res.json(productos);
});

router.post('/contacto',async (req,res)=>{
    const mail={
        to:'an.ribet98@gmail',
        subject:'Contacto web',
        html:req.body.nombre+' se contacto con nosotros. Su mail es '+req.body.email+'<br>Su consulta es la siguiente: '+req.body.mensaje
    }
    const transport= nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
        
    })
    await transport.sendMail(mail)
    res.status(201).json({
            error:false,
            message:'Mensaje enviado'            
        })
})

router.post('/registro',async (req,res)=>{
    var insert=req.body;
    console.log(req.body);
    if(req.body.nombre_cl!="" && req.body.mail!="" && req.body.contraseña!="" && req.body.telefono!="" && req.body.direccion!="" && req.body.numero_de_tarjeta!=""){
        await usuariosModel.insertUsuario(insert);
        res.status(201).json({
            error:false,
        })
    }else{
        res.status(201).json({
            error:true,
            message:'Todos los campos son requeridos'            
        })

        }
    }
)
router.post('/registrarProducto',async (req,res)=>{
    var img_id='1';
    console.log(req.body);
    if(req.body.nombre_p!="" && req.body.precio!="" && req.body.cantidades!=""){
        await productoModel.insertProducto(req.body,img_id);
        res.status(201).json({
            error:false,
        })
    }else{
        res.status(201).json({
            error:true,
            message:'Todos los campos son requeridos'            
        })

        }
    }
)
router.post('/ModificarProducto',async (req,res,next)=>{  

        if(req.body.id_p!='' && req.body.nombre_p!="" && req.body.precio!="" && req.body.cantidades!=""){

            var img_id="";
            console.log(req.body);
                var id=req.body.id_p;
                await productoModel.UpdateProducto(req.body,img_id,id);
                res.status(201).json({
                    error:false,
                })
        }else{
            res.status(201).json({
                error:true,
                message:'Todos los campos son requeridos'            
            })
        }
    

});
module.exports=router;